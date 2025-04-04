---
id: how_to_connect_to_tailscale
title: How to connect to Tailscale on your Autopi device
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import SideBySide from '@site/src/components/SideBySide';
import CardGrid from "/components/CardGrid" ;

Tailscale makes creating software-defined networks easy: securely connecting users, services, and devices. Your [AutoPi CAN-FD Pro](https://shop.autopi.io/products/autopi-can-fd-pro) has already [Tailscale](https://tailscale.com/) installed, however it is not active just yet. You have full control over this! If you want to connect to Tailscale on your device follow this guide.

You can also use this video for [**Tailscale quickstart video guide**](https://youtu.be/sPdvyR7bLqI).

### Enable Tailscale on your device
Steps to enable Tailscale on your device: 
* Navigate to Devices section on [Autopi cloud](https://my.autopi.io/).
* Click the device you want to enable Tailscale on.
* Go to advanced settings -> Tailscale. 
* Fill out the Auth key and enable Tailscale.

![Tailscale add-on](/img/getting_started/getting_started/tailscale_addon.png)

### 1. Create a tailnet
Go to [tailscale.com](https://tailscale.com/) and select Get Started. Alternatively, you can download and install the Tailscale client on your device, then sign up.

### 2. Open tailscale on your computer

There are few ways on how to open tailscale on your computer: 
* On Windows/macOS/Linux: Open the Tailscale app from the system tray or menu bar.
* On Android/iOS: Open the Tailscale app from your app drawer.
* On CLI (Linux/macOS/Windows Command Prompt/PowerShell): Open a terminal and type:
` tailscale up ` 

### 3. Log in to [Tailscale](https://login.tailscale.com/start) on your computer 

* If you're not already logged in, the app will prompt you to authenticate.
* Click "Log in", and a browser window will open.
* Choose your authentication method (Google, Microsoft, GitHub, or custom SSO).
* After logging in, allow the request to connect your device to the network.

### 4. Generate auth key for your device
* Use this link to generate auth key: [Generate auth key](https://login.tailscale.com/admin/settings/keys)
* Run up command with auth key: 
` cmd.run 'tailscale up --authkey=tskey-KEYKEY-KEYKEYKEYKEY'` 

:::note
Make sure you use the key that was generated in the first point of this section and replace it accordingly in the command with your auth key.
:::


### 5. Confirm connection 

* Once logged in, your device should appear in the [Tailscale admin panel](https://login.tailscale.com/admin/machines)
* In the Tailscale app, you should see "Connected" with an assigned Tailscale IP (e.g., 100.x.x.x).
* If using CLI, check your connection with: 
` tailscale status ` 

### 6. Test your connection 

* Check your [Tailscale admin panel](https://login.tailscale.com/admin/machines) - to make sure you are able to see both your device and your computer in this list. This gives you an indication that you have everything set up correctly.
* After finishing the whole process, you can SSH from your computer to a device - this gives you the full access to Tailscale. 


### 7. Optional: Enable exit node (if needed)

If you want to route all traffic through another device on your Tailscale network:
* Open the Tailscale app.
* Click "Use Exit Node" and select a device.
* On CLI, use:
`  tailscale up --exit-node=100.x.x.x ` 


### 8. Disconnect when needed
To disconnect from Tailscale:
* In the Tailscale app, click "Disconnect".
* In CLI, run:
` tailscale down `

<br>
</br>
That's it! Your [AutoPi CAN-FD Pro](https://shop.autopi.io/products/autopi-can-fd-pro) is now connected to [Tailscale](https://tailscale.com/). Enjoy secure and remote access to your [AutoPi CAN-FD Pro](https://shop.autopi.io/products/autopi-can-fd-pro).


## Let's keep in touch!
Thank you for choosing AutoPi. We're excited to see what you will achieve with your AutoPi device! 
<CardGrid home>
[![](/img/shared/favicon.ico) **Contact our sales team** You can build on top of AutoPi .](https://www.autopi.io/contact/)

[![](/img/shared/support_icon.png) **Get help from our support team** Let us know about your technical questions.](https://www.autopi.io/support/)

</CardGrid>