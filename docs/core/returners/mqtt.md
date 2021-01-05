---
id: core-returner-mqtt
title: Mqtt
---

## `mqtt.returner`

Return a result to MQTT.


**EXAMPLE** salt `*` test.ping --return mqtt --return_kwargs `{"host": "127.0.0.1", "port": 1883}`


----
## `mqtt.returner_data`

Return any arbitrary data structure to MQTT.


----
## `mqtt.returner_job`

Return a Salt job result to MQTT.
