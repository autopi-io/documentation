---
id: setting-up-docker
title: Setting Up Docker on Your Device
supportedDevices: ['cm4','pro','pro_case']
---
import CardGrid from "/components/CardGrid" ;
import DeviceSupportBanner from '@site/src/components/DeviceSupportBanner';

<DeviceSupportBanner supported={frontMatter.supportedDevices} />
---

## Overview

This guide explains how to set up Docker on your AutoPi device and deploy containers through the AutoPi Cloud. It also covers registries, projects, releases, optional features, runtime configuration, and troubleshooting.

AutoPi devices support running Docker containers directly on the unit. This enables you to deploy applications such as:
* AI/ML services  
* Custom scripts or backend services  
* Data processing pipelines  
* Communication bridges or MQTT processors  

The deployment flow works like this:

1. Build and store your container in a **Docker registry**.
2. Group your container builds in an AutoPi **project**.
3. Create a **release** that defines how the container should run.
4. Deploy the release to your AutoPi **device**.

---
## Understanding Registries, Projects, and Releases

:::note
The CRUD endpoints all return “201 Created” or “200 OK” when an entity is created or modified, and the body of the response will contain the created or modified entity. The DELETE method will return “204 No content” on success.
:::

### Docker Registries
A registry should be created to allow the device to authenticate against a custom docker registry. The model contains the url and credentials for the custom docker registry. When added, devices will automatically log in to the registry if not already logged in, on startup, and thereby be ready to pull images.

#### Create Docker Registries
1. Using AutoPi Cloud 
* When creating a registry in the **AutoPi Cloud**, you can configure:
  * Authentication (if needed)
  * Registry type
  * Additional metadata
  * Optional features supported by the image

  ![Create Docker Registry](/img/guides/docker/create_registry.png)

2. Using **API endpoint**
* You can also create a registry by using this API endpoint: [Docker_registries_create](https://api.autopi.io/?_gl=1*yvyxyh*_ga*MTY3MDAyMDE4Mi4xNzQ5MTEwNDIx*_ga_DB2BZPKYN9*czE3NjQwODMwNDgkbzIzMSRnMSR0MTc2NDA4MzA0OSRqNTkkbDAkaDA.#/docker/docker_registries_create)

  ```
  POST /docker/registries/
  ```

:::note
If the image should be pulled through a custom registry, the registry needs to be referenced when creating the container.
:::


---

###  Projects
A **project** groups all releases of your application, think of it as your application's home inside AutoPi. The project endpoint is a wrapper for releases, so to create any releases you must first create a project.

A project can contain:
- Development releases  
- Production releases  
- Multiple container versions  

#### Create Projects
1. Using AutoPi Cloud
* When creating a project in the **AutoPi Cloud**, you can configure:
  * Name
  * Description
  * Registry
  * Selection of Devices 

  ![Create Docker Project](/img/guides/docker/create_project.png)

  :::note
  When including your AutoPi devices, make sure you have the Docker enabled in the advanced settings.
  :::

2. Using **API endpoint** 
* You can also create a project by using our API endpoint: [Project_create](https://api.autopi.io/?_gl=1*1225mqr*_ga*MTY3MDAyMDE4Mi4xNzQ5MTEwNDIx*_ga_DB2BZPKYN9*czE3NjQwODMwNDgkbzIzMSRnMSR0MTc2NDA4MzA0OSRqNTkkbDAkaDA.#/docker/docker_projects_create)

  ```
  POST /docker/projects/
  ```

---

### Releases
A release represents a specific version of your container deployment. The release endpoint is used to create new releases, and contains a list of containers each with metadata and runtime properties for that specific container.

A release defines:
- The image name and tag  
- Startup parameters  
- Networking mode  
- Restart behavior  
- Environment variables  

Every time you push a new Docker image, you can create a new release pointing to that version.

#### Create Releases

1. Using AutoPi Cloud
* When creating a release in the **AutoPi Cloud**, you can configure:
  * Version
  * Device selection
  * Containers - Name, Tag, Image, Registry, Startup parameters, Purge data

![Create Docker Release](/img/guides/docker/docker_create_new_release.png)

2. Using **API endpoint** 
* You can also create a registry by using our API endpoint: [Release_create](https://api.autopi.io/?_gl=1*vll328*_ga*MTY3MDAyMDE4Mi4xNzQ5MTEwNDIx*_ga_DB2BZPKYN9*czE3NjQwODMwNDgkbzIzMSRnMSR0MTc2NDA4MzA0OSRqNTkkbDAkaDA.#/docker/docker_projects_releases_create)

  ```
  POST /docker/projects/{project_pk}/releases/
  ```

### Applying release 
After a release is created, each device associated to the release will receive the release information, and the release will be applied the next time the device is about to go to sleep, as the device in that situation is considered to be idle. Logging in to registries, removing images, pulling new images, starting containers etc.

The release can also **be triggered** by executing the following command via the execute endpoint on the devices you want to deploy to.
```
state.sls docker.release
```

---

### Optional Features (Advanced)

Some Docker images include additional features for performance or hardware acceleration, such as:

- GPU acceleration  
- CPU instruction optimizations  
- Debug builds  
- Extra Python packages  

You can configure these when setting up the registry or release, depending on the image.

Reference example: [Tensorflow example](https://hub.docker.com/r/tensorflow/tensorflow#optional-features)

---

### Container Runtime Configuration

AutoPi allows customizing the container at runtime, including:

- Environment variables
- Network mode (`host`, `bridge`, etc.)
- Restart policy
- Privileges
- Volumes

For example configurations, see: [Tensorflow example](https://hub.docker.com/r/tensorflow/tensorflow#running-containers)

---

## Deploying a Docker Container to Your AutoPi Device

:::note
Before you start implementing a Docker container on your AutoPi device, make sure the following requirements are completed:

1. **Docker add-on is enabled**  
   Docker support is an optional add-on that needs to be enabled for your Customer's account. 
   Contact our sales team at **sales@autopi.io** to enable this functionality on your account.

2. **Docker is enabled in advanced settings**  
   In the AutoPi Cloud, navigate to: Advanced Settings → Docker. Ensure that **Docker is enabled** for the device you want to use.
:::

### 1. Build and Push Your Docker Image

```
docker build -t my-registry/my-image:latest 
docker login my-registry
docker push my-registry/my-image:latest
```

### 2. Create a Release in AutoPi Cloud

Steps to create a new release: 
* Navigate to **Docker** page and create or select an already existing Project; this will navigate you to a new page called Releases. 

![Releases Page](/img/guides/docker/releases_page.png)

* In order to add a new release, click on "Create" button. 
* Choose  the version and select devices. 
* Enter container settings:
  * Image name + tag
  * Include the image 
  * Optionally fill out the rest of the parameters. 
* Press "Save". 


### 3. Deploy to Devices

Select which devices the release should be deployed to.
AutoPi will:
* Pull the image
* Start the container
* Auto-restart it based on your policy


#### Example Release Payload
This is an example release payload:
```python
    {
      "version": "1.0.0",
      "devices": [
        "device_id"
      ],
      "containers": [
        {
          "name": "hello_word",
          "image": "hello-world",
          "tag": "latest",
          "required_tags": [],
          "startup_parameters": {
            "privileged": false,
            "environment": [],
            "network_mode": "host",
            "restart_policy": "always"
          },
          "purge_data": false,
          "fully_qualified_name": "test-arm_hello-1.0.7"
        }
      ],
      "remove_containers": [
        "hello_world"
      ]
    }

```

**Special Fields**
| **Name** | **Required** | **Description** |
|:-----:|--------|--------|
|remove_containers	| No	| Explicitly names the containers which should be handled as ‘initial containers’. On release it will attempt to stop each container, run deployment, and if successful the containers will be removed, or on failure, they will be restarted. |
|version_hash	|Readonly	|Alternative autogenerated field (readonly) only used for referencing a release by a generated version.|
|successful_deployments |	Readonly	|Will include only devices which has successfully deployed the release.|


---
## Troubleshooting

### Container fails to start
1. Check container logs in Device → Logs. 
2. Ensure the image and tag exist in your registry. 
3. Verify networking mode does not conflict with other services. 

### Image Cannot Be Pulled
1. Ensure the device can access the registry. 
2. Confirm the image is public or authentication is configured.
3. Check for typos in image/tag names. 

### Container Keeps Restarting
1. Review application logs inside the container. 
2. Confirm environment variables are set correctly.
3. Temporarily set `restart_policy` to `on-failure` when debugging.

### Permission Issues
1. Only use privileged: true if absolutely required.
2. Verify required volume mount paths.
3. Some applications may need root permissions—verify documentation.

### Networking Problems
1. Use `network_mode`: `host` if interacting with: CAN, GPS or other hardware interfaces.
2. Ensure no port conflicts with existing services.

---

**You are all set!**

With Docker support on the AutoPi device, you can deploy powerful and flexible applications at the edge. Using registries, projects, and releases ensures a clean and maintainable deployment workflow.