---
id: redirect-logged-data-to-a-file-or-anywhere
title: Redirect Logged Data to a File (Or Anywhere)
---

In this guide we redirect accelerometer data to a file on disk, but the functionality is general
and the procedure can also be used for OBD data, GPS data and others.

1. Start by creating a custom code module of type *Returner*. Go to **Advanced** > **Custom Code**:

  ![Create custom returner](/img/guides/redirect_logged_data_to_a_file_or_anywhere/create_custom_returner.png) 

  This default returner implementation will append results to a file on disk located at
  `/tmp/returner_data.txt`. But in reality it possible to integrate with any storage system here.

2. For the accelerometer service named **acc_manager** register the created custom returner as a
hook so it can be used in worker workflows. Go to **Advanced** > **Services** > **acc_manager** >
**Hooks** > **Create**:

  ![Register custom returner hook](/img/guides/redirect_logged_data_to_a_file_or_anywhere/register_custom_returner_hook.png) 

3. Next we have to use the registered hook by editing the workflow for the **xyz_logger** worker.
  Go to **Advanced** > **Services** > **acc_manager** > **Workers** > **xyz_logger**. Here we have to
  change the returner from *cloud* to *my_returner*:

  ![Use custom returner in workflow](/img/guides/redirect_logged_data_to_a_file_or_anywhere/use_custom_returner_in_workflow.png) 

When above changes have been successfully synchronised to the device, it will start logging
accelerometer data to the specified file.

When logged onto the device using SSH, it is possible to monitor the data in realtime with the
command:

`tail -f /tmp/returner_data.txt`

## Discussion
If you'd like to discuss this topic with us or other fellow community members, you can do so on
our community page dedicated for this guide:
[Redirect logged data and store it in a file (or anywhere)](https://community.autopi.io/t/custom-code-redirect-logged-data-and-store-it-in-a-file-or-anywhere/1521).