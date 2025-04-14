---
id: local-api
title: Local API
---

## Overview
The local configuration tool available through `local.autopi.io` (when connected to the device hotspot), is using a local webserver on the device to manage the configuration.

### Running commands through the local API on the device
```
POST localhost:9000/dongle/<uuid:unit_id>/execute/
```

The body should be the same as the above remote command endpoint.

The unit_id can be retrieved one of the following ways 

A.	Calling the root route
```
GET localhost:9000
```

B.	Reading it from the file 
```
/etc/salt/minion_id
```

The reason that you need the unit_id is because we need to make sure that the request is actually meant for that specific device when using the endpoint from another connected device, like when using the local configuration tool.