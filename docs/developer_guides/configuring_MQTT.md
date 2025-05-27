---
id: configuring-mqtt
title: Configuring MQTT
supportedDevices: ['cm4']
---
import CardGrid from "/components/CardGrid" ;
import DeviceSupportBanner from '@site/src/components/DeviceSupportBanner';

<DeviceSupportBanner supported={frontMatter.supportedDevices} />
---

## Contents
This guide covers configuring a basic MQTT broker on your Linux server, as well as configuring an [AutoPi](https://www.autopi.io) device to use MQTT as a data returner. 

## Setting up Your Endpoint Broker
This step covers installing and configuring a broker on your server instance. This guide uses a 3-rd party hosted Virtual Machine running Debian 11.

Install the broker:
    
    $ sudo apt install mosquitto mosquitto-clients

Set up the broker to allow non-protected connections. When releasing to production, make sure to change these settings, as running an open MQTT broker is a major security risk.
    
    $ sudo sh -c "echo 'allow_anonymous true\nlistener 1883 0.0.0.0' > /etc/mosquitto/conf.d/mosquitto.conf"

Restart to load new configuration
    
    $ sudo systemctl restart mosquitto.service

Test the configuration locally. Subscribe to the local broker and check if you can see the messages.

In terminal 1:

    $ mosquitto_sub -h localhost -t test/my_topic/#

In terminal 2:

    $ mosquitto_pub -h localhost -t test/my_topic -m "Test data from a local source"

Expected result:

![publish_subsribe_server_test_expected_result](/img/getting_started/developer_guides/configuring_MQTT/pub_sub_server_test.png)

## Device Setup

Generally, there are 2 ways in which you might be setting up your device. Either in direct-connect mode, or in broker-bridge mode. Direct-connect mode is what you might imagine a basic client-server setup, where a client sends/publishes data to a server. Broker-bridge mode is a bit more complicated, since it includes another MQTT broker running on the device, connected to your server through a bridge.

While direct-connect mode is easier to set up, it's worth noting that in case the device loses internet connectivity, the data generated during that time will be lost. This is not the case with the broker-bridge mode, which will buffer the data, until the connectivity is restored.


### Direct-Connect Mode
![direct_connect_diagram](/img/getting_started/developer_guides/configuring_MQTT/direct-connect_diagram.png)

On the [AutoPi](https://www.autopi.io) [Cloud](https://www.autopi.io/software-platform/cloud-management) portal (my.autopi.io for private customers, <company_name>.autopi.io</company_name> for business customers) go to Device > Advanced Settings > MQTT. Modify the following settings:

- Returner > Enabled: True
- Returner > host: <host></host>
- Returner > port: <port></port>

Now set up an MQTT returner on a data point you know you're getting data from (voltage readings or GPS for example). See below on how to do this. After you've done this, you should be seeing data on your MQTT broker. 

### Broker-Bridge Mode
![broker_bridge_diagram](/img/getting_started/developer_guides/configuring_MQTT/broker-bridge_diagram.png)
On the [AutoPi](https://www.autopi.io) [Cloud](https://www.autopi.io/software-platform/cloud-management) portal (my.autopi.io for private customers, <company_name>.autopi.io</company_name> for business customers) go to Device > Advanced Settings > MQTT. 
Note that the settings under Broker > ... **effect only the broker, and not the client**, so if you are trying to set up direct-connect mode, 
these are not the settings you are looking for. Modify the following settings:

- Broker > Install: Mosquitto v1.x  (Or newer if available)
- Broker > Custom > Configuration:
    - connection <connection_name></connection_name>
    - address <host></host>:<port></port>
    - topic # out 1 "" <topic_name></topic_name>/
    - bridge_attempt_unsubscribe false
    - keepalive_interval 15
    - notifications false
    - restart_timeout 10
    - cleansession false
    - max_queued_messages 10000
    - autosave_interval 300
    - queue_qos0_messages true
    - try_private false
    - bridge_protocol_version mqttv311
    - max_inflight_messages 10
- Returner > Enabled: True

:::note
Some of these settings are not a necessity, but these are the settings we've seen provide best reliability and performance. The meaning of these settings can be found on the [Eclipse Mosquitto website](https://mosquitto.org/man/mosquitto-conf-5.html). The settings you add in Broker > Custom > Configuration go directly into a Mosquitto configuration file: /etc/mosquitto/conf.d/custom.conf.
:::

**Example**:
![publish_from_cloud](/img/getting_started/developer_guides/configuring_MQTT/mqtt_settings_example.png)

Save and sync. Once synced, test if the connection has been made correctly. Run the following command in the [Cloud](https://www.autopi.io/software-platform/cloud-management) terminal:

    $ cmd.run 'mosquitto_pub -h localhost -t test/my_topic -m "my test data"' 


![publish_from_cloud](/img/getting_started/developer_guides/configuring_MQTT/pub_from_cloud.png)

If the data can be seen in the shell where you've subscribed to the topic, then the bridge has been configured correctly.

:::note
If the command is not found, it can be installed from apt (it is not used outside of this test).

    $ cmd.run "apt install -y mosquitto-clients"

![installinging_through_apt](/img/getting_started/developer_guides/configuring_MQTT/installing_mosq_clients.png)
:::

## Adding MQTT As a Returner to Data Sources

This section covers adding the MQTT returner to the 3 main data sources: loggers, services and jobs. Which data points can be retrieved from each source can be seen in the following table.

| **Data point**         | **Source** |**MQTT Topic**      |
|------------------------|------------|--------------------|
| PID data               | Loggers    |obd/`<LOGGER_NAME>`  |
| CAN data               | Service    |obd/`<LOGGER_NAME>`  |
| GPS location           | Service    |track/pos           |
| Accelerometer readings | Service    |acc/xyz             |
| Voltage                | Service    |spm/bat             |
| Events                 | Service    |reactor             |
| Device Temperature     | Job        |rpi/temp            |

### Loggers

Go to Device > Loggers

For each logger of Type "OBD-II PID" add the MQTT returner by selecting the logger, clicking Advanced, and selecting MQTT in the Returner dropdown. Then click save.

![setup_pid_mqtt_returner](/img/getting_started/developer_guides/configuring_MQTT/pid_mqtt_setup.png)

### Services
A service can serve as a data source in 2 ways: through workers and through reactors. Most commonly you will want to retrieve [CAN](https://www.autopi.io/hardware/autopi-canfd-pro) data. 
For this, go to Device > Services and add the MQTT returner to the obd_manager's can_logger worker, as shown below:

![can_mqtt_setup_step_1](/img/getting_started/developer_guides/configuring_MQTT/can_mqtt_setup_1.png)

![can_mqtt_setup_step_2](/img/getting_started/developer_guides/configuring_MQTT/can_mqtt_setup_2.png)

![can_mqtt_setup_step_3](/img/getting_started/developer_guides/configuring_MQTT/can_mqtt_setup_3.png)

![can_mqtt_setup_step_4](/img/getting_started/developer_guides/configuring_MQTT/can_mqtt_setup_4.png)

The other Service sourced data points and their locations can be found in the following table. The steps described for [CAN](https://www.autopi.io/hardware/autopi-canfd-pro) data can be repeated for each of these.

| **Data point**         | **Source**                               |
|------------------------|------------------------------------------|
| CAN data               | obd_manager > workers > can_logger       |
| GPS location           | gnss_manager > workers > poll_logger     |
| Accelerometer readings | acc_manager > workers > xyz_logger       |
| Voltage                | spm_manager > workers > _battery_checker |
| Events                 | event_reactor > reactors > cache_events  |

### Jobs
Go to Device > Jobs and set returner to each job as MQTT. As of time of writing, it is only possible to to have a 
single returner per job, so it's not possible to send the data to both MQTT and the [AutoPi](https://www.autopi.io) [Cloud](https://www.autopi.io/software-platform/cloud-management).

![rpi_temp_job_with_mqtt_returner](/img/getting_started/developer_guides/configuring_MQTT/rpi_temp_job_with_mqtt_returner.png)

## Final Result

If everything is working correctly, you should be receiving data on your broker now:

![final_expected_result](/img/getting_started/developer_guides/configuring_MQTT/final_result.png)

