---
id: create-can-signal-loggers
title: Create CAN Signal Loggers (Coming Soon)
---

# Create CAN Signal Loggers

CAN signals play a crucial role in vehicle communication, differing from PIDs in their use and structure. While PIDs (Parameter IDs) are standardized codes used across different vehicles for obtaining specific data points (like engine RPM, temperature), CAN (Controller Area Network) signals are more direct, low-level messages that devices within the vehicle use to communicate with each other. Understanding these differences is key to effectively logging and analyzing vehicle data.

**Step 1: Start with a CAN Signal**

Before you can log anything, you need a CAN signal to monitor. CAN signals are not standardized like PIDs, meaning they can vary significantly between different vehicle makes and models. To create a CAN signal, you must first identify the signal's properties, including its ID, format, and the data it carries.

Identification and Documentation: Use vehicle documentation or tools to identify the CAN signal. This may involve using a DBC file or capturing and analyzing traffic on the CAN network to find the signals relevant to your needs.

Creation: Once identified, you can create a representation of this signal in [link to CAN Signals](https://docs.autopi.io/guides/obd-ii/obd-ii-intro/#can-messages-and-can-signals)


**Step 2: Navigate to Your Device's Logger Section**

With your CAN signal defined, the next step involves setting up the environment to log this signal.
- Access: Log into your device's management interface and navigate to the 'Loggers' section.
![Screenshot from 2024-04-23 15-21-57](https://github.com/autopi-io/documentation/assets/71709943/4ec08a06-7bc9-427a-8f2e-b76c2dbb2103)

  
- New Logger: Look for an option to create a new logger.
![Screenshot from 2024-04-23 15-25-19](https://github.com/autopi-io/documentation/assets/71709943/aff983ae-664e-44fb-8346-40f3fcfbd0b8)


**Step 3: Configure the Logger**

The creation of a logger involves specifying which signals to log and other parameters:

- Signal Selection: In the modal window that appears upon choosing to create a new logger, select the CAN signal you created earlier from the dropdown menu.

- Bus Selection: Specify the CAN bus on which your signal is present. Vehicles often have multiple CAN buses for different systems (e.g., powertrain, chassis). Ensure you select the correct one for your signal.

- Name Override: You can specify a different name for your logger here, otherwise its name remains the same as the Signals.
![Screenshot from 2024-04-23 15-24-24](https://github.com/autopi-io/documentation/assets/71709943/94f0f152-9f02-4b4e-a379-e9f9aa972fb7)


**Step 4: Create the Logger**

Finally, you're ready to create the logger:

Finalize: Review your selections to ensure everything is correct, then click the "Create" button to finalize the creation of your CAN signal logger.

Confirmation: You should receive a confirmation that your logger has been created successfully. Congratulations, you've set up a CAN signal logger!

Congratulations! You have now created a CAN signal logger.

This process allows you to monitor and record data from specific CAN signals on your vehicle, providing valuable insights into its operation. Unlike working with PIDs, which often require working through a vehicle's OBD-II interface and are limited to predefined parameters, logging CAN signals gives you access to a broader range of data directly from the vehicle's internal networks. This approach can unveil more detailed information and support advanced diagnostics and customization projects.
