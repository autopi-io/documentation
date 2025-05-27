---
id: accessing-files-via-sftp-on-autopi
title: Accessing files via SFTP/SCP on AutoPi
supportedDevices: ['pro']
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import SideBySide from '@site/src/components/SideBySide';
import CardGrid from "/components/CardGrid" ;
import DeviceSupportBanner from '@site/src/components/DeviceSupportBanner';

<DeviceSupportBanner supported={frontMatter.supportedDevices} />
---

## Option 1: Accessing files via SFTP

### Prerequisites 
1. **Username**: `pi`.  
2. **Password**: The password for the `pi` user (Available in advanced settings panel).  
3. **Network Connection**: Ensure the AutoPi and your computer are on the same network (via one of the methods below).  
4. **Software**:  
   - *GUI Tool*: [Cyberduck](https://cyberduck.io/)(free).  
   - *CLI Option*: Use `scp` or `sftp` commands in Terminal (macOS/Linux) or PowerShell/WinSCP (Windows).  

---

### Step 1: Determine the Device’s IP Address  
Choose your connection method:  
  * **1. Local WiFi Hotspot**  
    - Ensure the device is connected to the hotspot.  
    - The IP is often static (e.g., `192.168.1.1` or `10.0.0.1`).  

  * **2. WiFi Client Network**  
    - Connect the device and your computer to the same WiFi network.  
    - Find the device’s IP:  
      - Check your router’s DHCP client list (e.g., `192.168.0.100`).  
      - On the AutoPi, run `hostname -I` in the terminal.  

  * **3. Ethernet (Direct Connection)**  
    - Connect the AutoPi to your computer via Ethernet.  
    - The IP may be assigned via DHCP (check router) or use a static IP like `169.254.x.x`.  

  * **4. Tailscale (VPN)**  
    - Ensure Tailscale is installed and activated on both the AutoPi and your computer. You can read more at this guide: [How to connect to Tailscale on your AutoPi device](https://docs.autopi.io/getting_started/autopi_canfd_pro/how_to_connect_to_tailscale/)
    - On the AutoPi, run `tailscale ip` to get its Tailscale IP (e.g., `100.x.x.x`).  


### Step 2: Connect Using Cyberduck
1. Open Cyberduck and click **Open Connection**.  
2. Configure settings:  
   - **Protocol**: SFTP (SSH File Transfer Protocol).  
   - **Server**: Enter the IP address (from Step 1).  
   - **Username**: `pi`.  
   - **Password**: Enter the `pi` user’s password.  
   - **Port**: `22` (default for SSH/SCP).  
   - *(Optional)*: Save the password in your keychain.  

   [Cyberduck Documentation](https://docs.cyberduck.io/protocols/sftp/)  

3. Click **Connect**.  


### Step 3: Access Files 
- After connecting, navigate to:  
  ```plaintext
  /opt/autopi/can0/   # For CAN0 bus data  
  /opt/autopi/can1/   # For CAN1 bus data  
  ```  
- **Upload/Download**: Drag and drop files between Cyberduck and your computer.  

---

## Option 2: Connect via Command Line (SCP)

Use `scp` to transfer files directly.  

#### **Download a File**  
```bash  
scp pi@[IP_ADDRESS]:/opt/autopi/can0/filename.txt /local/destination  
# Example:  
scp pi@192.168.0.100:/opt/autopi/can0/log.csv ~/Downloads  
```  

#### **Upload a File**  
```bash  
scp /local/file.txt pi@[IP_ADDRESS]:/opt/autopi/can1/  
```  

---

## Troubleshooting  

- **Connection Failed?**  
  - Verify the AutoPi and your computer are on the same network.  
  - Ensure SSH is enabled on the AutoPi: `sudo systemctl enable ssh`, or look in Advanced settings.  
  - Check firewall/antivirus settings (allow port 22).  
- **Tailscale Issues?**  
  - Confirm both devices are logged into the same Tailscale account.  
  - Restart Tailscale: `sudo systemctl restart tailscaled`.  

---
:::note
**Security**: For Tailscale, no need to open port 22 on your router—traffic is encrypted through the VPN.  
**Default Paths**: Double-check `/opt/autopi/can0` or `/can1` for your specific files. 
:::
