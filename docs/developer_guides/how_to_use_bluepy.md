---
id: how-to-use-bluepy-with-autopi-edge-devices
title: Enabling Bluetooth - Using bluepy with AutoPi Edge Devices
---

# BluePy BLE Guide for [AutoPi](https://www.autopi.io) Edge Devices

## Introduction
[AutoPi](https://www.autopi.io) Core relies on BluePy and Bluez packages built into the Linux core on the device. 

## Prerequisites
- AutoPi [TMU CM4](https://www.autopi.io/hardware/autopi-tmu-cm4) or AutoPi [CAN-FD Pro](https://www.autopi.io/hardware/autopi-canfd-pro) device

## Installation and Setup

1. Enable bluetooth from Advanced settings:
![Enable bluetoth](/img/guides/bluetooth_enable.jpg)

## Using the Built-in Bluetooth Extention

It is possible to use the [bluetooth.scan](/core/commands/core-commands-bluetooth/#bluetoothscan) command to remote scanning for bluetooth device using the built in [Cloud](https://www.autopi.io/software-platform/cloud-management) terminal.

## Custom Software for Basic bluepy Usage
A great example of using the [AutoPi](https://www.autopi.io) edge devices full functionality, is teh usage of [creating custom services](/cloud/device_management/services/create-custom-services/). Using this extendabilty of the devices you utilize the full functionality of the bluepy library on the device.   

### Scanning for Devices - Custom Code Example

```python
from bluepy.btle import Scanner, DefaultDelegate

class ScanDelegate(DefaultDelegate):
    def __init__(self):
        DefaultDelegate.__init__(self)

    def handleDiscovery(self, dev, isNewDev, isNewData):
        if isNewDev:
            print(f"Discovered device {dev.addr}")
        elif isNewData:
            print(f"Received new data from {dev.addr}")

# Initialize scanner object
scanner = Scanner().withDelegate(ScanDelegate())

# Scan for devices (timeout in seconds)
devices = scanner.scan(10.0)

# Print discovered devices
for dev in devices:
    print(f"Device {dev.addr} ({dev.addrType}), RSSI={dev.rssi} dB")
    for (adtype, desc, value) in dev.getScanData():
        print(f"  {desc}: {value}")
```

### Connecting to a Device - Custom Code Example

```python
from bluepy.btle import Peripheral, UUID
import time

try:
    # Connect to device
    device = Peripheral("XX:XX:XX:XX:XX:XX")  # Replace with your device's address
    
    # Get all services
    services = device.getServices()
    
    for service in services:
        print(f"Service UUID: {service.uuid}")
        
        # Get characteristics for this service
        characteristics = service.getCharacteristics()
        
        for char in characteristics:
            print(f"  Characteristic UUID: {char.uuid}")
            # Check if readable
            if char.supportsRead():
                print(f"    Value: {char.read()}")
                
except Exception as e:
    print(f"Error: {str(e)}")
finally:
    device.disconnect()
```

### Reading and Writing Characteristics - Custom Code Example

```python
from bluepy.btle import Peripheral, UUID

class BLEDevice:
    def __init__(self, address):
        self.address = address
        self.device = None
    
    def connect(self):
        self.device = Peripheral(self.address)
        
    def read_characteristic(self, service_uuid, char_uuid):
        service = self.device.getServiceByUUID(UUID(service_uuid))
        char = service.getCharacteristics(UUID(char_uuid))[0]
        return char.read()
        
    def write_characteristic(self, service_uuid, char_uuid, data):
        service = self.device.getServiceByUUID(UUID(service_uuid))
        char = service.getCharacteristics(UUID(char_uuid))[0]
        char.write(data)
        
    def disconnect(self):
        if self.device:
            self.device.disconnect()

# Example usage
if __name__ == "__main__":
    device = BLEDevice("XX:XX:XX:XX:XX:XX")
    try:
        device.connect()
        # Example UUIDs - replace with your device's UUIDs
        service_uuid = "1800"
        char_uuid = "2a00"
        
        # Read value
        value = device.read_characteristic(service_uuid, char_uuid)
        print(f"Read value: {value}")
        
        # Write value
        device.write_characteristic(service_uuid, char_uuid, bytes([0x01]))
    finally:
        device.disconnect()
```

### Handling Notifications - Custom Code Example

```python
from bluepy.btle import DefaultDelegate, Peripheral
import time

class NotifyDelegate(DefaultDelegate):
    def __init__(self):
        DefaultDelegate.__init__(self)

    def handleNotification(self, cHandle, data):
        print(f"Notification from handle {cHandle}: {data}")

class BLENotifyDevice:
    def __init__(self, address):
        self.device = Peripheral(address)
        self.device.setDelegate(NotifyDelegate())
    
    def enable_notifications(self, service_uuid, char_uuid):
        service = self.device.getServiceByUUID(UUID(service_uuid))
        char = service.getCharacteristics(UUID(char_uuid))[0]
        
        # Enable notifications by writing to the CCCD
        notify_handle = char.getHandle() + 1
        self.device.writeCharacteristic(notify_handle, b"\x01\x00")
    
    def wait_for_notifications(self, timeout=1.0):
        self.device.waitForNotifications(timeout)
    
    def disconnect(self):
        self.device.disconnect()

# Example usage
if __name__ == "__main__":
    device = BLENotifyDevice("XX:XX:XX:XX:XX:XX")
    try:
        # Enable notifications for a characteristic
        device.enable_notifications("service_uuid", "char_uuid")
        
        # Wait for notifications
        while True:
            if device.wait_for_notifications(1.0):
                continue
            print("Waiting...")
    finally:
        device.disconnect()
```

### Error Handling - Custom Code Example

```python
from bluepy.btle import Peripheral, BTLEDisconnectError, BTLEGattError

class BLEDeviceManager:
    def __init__(self, address):
        self.address = address
        self.device = None
        self.max_retries = 3
        
    def connect_with_retry(self):
        for attempt in range(self.max_retries):
            try:
                self.device = Peripheral(self.address)
                print("Connected successfully")
                return True
            except BTLEDisconnectError:
                print(f"Connection failed, attempt {attempt + 1} of {self.max_retries}")
                time.sleep(1)
        return False
    
    def safe_read_characteristic(self, service_uuid, char_uuid):
        try:
            service = self.device.getServiceByUUID(UUID(service_uuid))
            char = service.getCharacteristics(UUID(char_uuid))[0]
            return char.read()
        except BTLEGattError as e:
            print(f"GATT error: {str(e)}")
        except BTLEDisconnectError:
            print("Device disconnected")
            self.connect_with_retry()
        return None
```

## Complete Application - Custom Code Example

```python
from bluepy.btle import Scanner, Peripheral, DefaultDelegate, BTLEDisconnectError
import time
import logging

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

class BLEDeviceManager:
    def __init__(self, target_name):
        self.target_name = target_name
        self.device = None
        self.target_address = None
        
    def scan_for_device(self, timeout=10):
        scanner = Scanner()
        devices = scanner.scan(timeout)
        
        for dev in devices:
            for (adtype, desc, value) in dev.getScanData():
                if desc == "Complete Local Name" and value == self.target_name:
                    self.target_address = dev.addr
                    logger.info(f"Found device: {self.target_address}")
                    return True
        return False
    
    def connect(self):
        if not self.target_address:
            raise ValueError("No device address available")
            
        try:
            self.device = Peripheral(self.target_address)
            logger.info("Connected successfully")
            return True
        except BTLEDisconnectError as e:
            logger.error(f"Connection failed: {str(e)}")
            return False
            
    def discover_services(self):
        services = self.device.getServices()
        for service in services:
            logger.info(f"Service: {service.uuid}")
            chars = service.getCharacteristics()
            for char in chars:
                logger.info(f"  Characteristic: {char.uuid}")
                
    def disconnect(self):
        if self.device:
            self.device.disconnect()
            logger.info("Disconnected")

if __name__ == "__main__":
    manager = BLEDeviceManager("MyDevice")  # Replace with your device name
    
    try:
        if manager.scan_for_device():
            if manager.connect():
                manager.discover_services()
                # Add your device-specific operations here
                time.sleep(5)  # Keep connection alive for 5 seconds
    finally:
        manager.disconnect()
```

This example provides a complete application structure that you can adapt for your specific needs.

## Further Resources

1. **BluePy Documentation**
   - [GitHub Repository](https://github.com/IanHarvey/bluepy)
   - [Wiki](https://github.com/IanHarvey/bluepy/wiki)


