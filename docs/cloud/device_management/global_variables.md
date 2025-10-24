---
id: global-variables
title: Global Variables
supportedDevices: ['mini','cm4','pro']
---
import CardGrid from "/components/CardGrid";
import DeviceSupportBanner from '@site/src/components/DeviceSupportBanner';

<DeviceSupportBanner supported={frontMatter.supportedDevices} />
---

The Global Variables feature allows Account Administrators to define custom values that can be reused across templates. This makes it easy to apply consistent configurations (e.g. stream IDs, API keys, etc.) without having to manually update templates for each device.

:::note
This section is only available for users with **Account Administrator** permissions. You can read more at this guide about the different permissions on AutoPi Cloud: [Accounts permissions](https://docs.autopi.io/cloud/accounts/). 
:::
---

## What are Global Variables?  
Global Variables are reusable key-value pairs that can be inserted into templates. They function as **keyword replacements**, allowing you to dynamically apply values when templates are used. You can also read more about Templates functionality in this guide: [Templates](https://docs.autopi.io/cloud/device_management/templates/). 

For example:  
- An `API_KEY` for an external service, can be stored as a global variable and automatically applied across devices.  
- Unique stream keys or IDs can be set once and reused in multiple templates.  

This saves time, reduces errors, and ensures consistency.  

![Global Variables Table](/img/cloud/device_management/global_variables.png)

---

## How to Create Global Variables  

1. Navigate to the **Global Variables** section.  
2. Click the **Create** button.  
3. Enter the following details:  
   - **Key**: The variable name (e.g., `API_KEY`).  
   - **Value**: The variable’s value (e.g., `example`).  
4. Save the variable.  

Your new global variable will now appear in the table.  

![Create Global Variable](/img/cloud/device_management/create_global_variable.png)

---

## How to Use Global Variables  

### Example of Global Variable
At the moment, our AutoPi Cloud have a couple of default environment variables that exists by default. One of the examples is Unit IDs of AutoPi devices. Where `AUTOPI_UNIT_ID` holds the device unit id (format: `00000000-0000-0000-0000-000000000000`). 


* When applying templates, global variables can be used as **placeholders** that are replaced with the defined values. 
* When applying templates, custom settings will substitute the found environment keys with the value provided in the global variables, in this format: 
 ```python 
    $AUTOPI_UNIT_ID
  ```
* The environment variables will be synced to the device and are available to any custom service. This allows templates and other services to remain generic, while device-specific or account-specific values are dynamically filled in.  

### Device Overrides  

In some cases, a global variable can be **overridden per device**. This means that while the variable has a global default value, you can assign a different value to specific devices when needed.  

For example:  
- Global API key = `Office123`  
- Device override for Device A = `Home456`  

This ensures flexibility when some devices require unique values.  


### Best Practices  

- Use descriptive keys (e.g., `API_KEY`, `WIFI_PASSWORD`, `DEVICE_NAME`).  
- Avoid duplicating keys with different values to prevent confusion.  
- Regularly review and clean up unused variables.  
