---
id: create-custom-workers
title: Create Custom Workers
supportedDevices: ['cm4','pro','pro_case']
---
import CardGrid from "/components/CardGrid";
import DeviceSupportBanner from '@site/src/components/DeviceSupportBanner';

<DeviceSupportBanner supported={frontMatter.supportedDevices} />
---

This guide covers how to create workers for any available service — whether it is a default service such as the OBD manager, or a custom one you have built yourself. It begins with an overview of what workers are and how they function, then walks through a practical example: creating a worker that continuously fetches OBD data and saves it to a file.

![Service list](/img/cloud/device_management/services/create_custom_workers/service_list.png) 

## Workers

A worker is a process executed by a manager according to a defined [workflow](/core/services/index.md). Each workflow consists of a series of ordered steps that produce a desired output.

![Worker list](/img/cloud/device_management/services/create_custom_workers/worker_list.png) 

### Creating a Worker

Start by selecting the appropriate manager for your use case. For example, use `obd_manager` to read OBD data, or `ec2x_manager` to execute AT commands not implemented by default.

For this guide, a worker will be created inside the `obd_manager`. Navigate to **Device** > **Services** and select the `obd_manager` entry. From the manager's home page, click **+ Create** to open the worker creation window:

![Create empty worker](/img/cloud/device_management/services/create_custom_workers/create_worker_empty.png) 

The creation window contains the following fields:

1. **Name** — A descriptive name for the worker, used for identification purposes.

2. **Delay** — The number of seconds to wait before the worker begins its first execution loop.

3. **Interval** — The time (in seconds) between each execution loop.

4. **Loop** — The number of times the worker will execute within a single power cycle of the [AutoPi](https://www.autopi.io) device:
    - *Less than 0*: The worker loops indefinitely.
    - *0 or more*: The worker executes the specified number of times and then stops. Total executions equal the loop count plus one.

5. **Order** — Determines the execution order relative to other workers in the same service. Workers with a lower order value execute first.

6. **Transactional** — When enabled and a workflow fails, all subsequent workflows on the same worker are skipped. When disabled, remaining workflows continue to execute regardless of prior failures.

### Workflows

Each workflow is represented as a row in the table and consists of the following columns:

1. **Handler** — The first step in the workflow. Communicates directly with the device hardware and produces the initial output.

2. **args** — Positional arguments passed to the handler.

3. **kwargs** — Keyword arguments passed to the handler.

4. **Converter** — Transforms the handler output into a more usable form.

5. **Trigger** — Executes logic based on the handler result, such as [playing a beep sound](/cloud/device_management/a-guide-to-triggers/).

6. **Filter** — Determines whether the data is significant enough to continue processing. If a [falsy](https://stackoverflow.com/questions/39983695/what-is-truthy-and-falsy-how-is-it-different-from-true-and-false) value is returned (e.g. `False`, `None`, or an empty string), execution stops.

7. **Enricher** — Augments the data by adding computed or supplementary values.

8. **Returner** — Delivers the result to a destination, such as [saving it to a file](/cloud/device_management/services/create-custom-returners/) or forwarding it to a cloud platform. The built-in [Cloud](https://www.autopi.io/software-platform/cloud-management) returner, for example, sends data to [my.autopi.io](https://my.autopi.io/).

All of the above — except **args** and **kwargs** — are referred to as *hooks* and are covered in the next section.

Available handlers vary by service. For a full reference, see [the services page](/core/services/index.md). For this guide, the [query](/core/services/core-services-obd-manager/#query) handler will be used to continuously query OBD data.

Arguments (`args`) and keyword arguments (`kwargs`) are specified in JSON format — note that JSON requires double quotes rather than single quotes. To read the fuel level, specify the following `args`:

```json
[ "FUEL_LEVEL" ]
```

The `kwargs` are optional but provide additional control over execution:

```json
{
    "mode": 1,
    "force": true
}
```

With the handler configured, the remaining workflow steps are optional and depend on your use case. To persist the data, add a returner — see the [Create Custom Returners](/cloud/device_management/services/create-custom-returners/) guide for details. The completed worker configuration looks like this:

![Create worker completed](/img/cloud/device_management/services/create_custom_workers/create_worker_completed.png)

Click **Save** and allow the device to sync the changes. After a service restart, the device will begin executing the new worker.

### Hooks

Custom hooks can be created by adding a new custom code module under **Device** > **Custom Code** with an execution type. Each hook must then be registered to the relevant service via the **Hooks** tab.

All hooks must follow this function signature:

```python
def some_function_name(result):
    # work with result and return some manipulated value
    return value
```

The function receives a result and returns a value. If a falsy value is returned at any point in the workflow, execution of subsequent steps will stop. **The exception to this rule is triggers** — they always execute, even if an earlier step fails or raises an exception. This ensures that time-sensitive logic in triggers is never skipped.

### Troubleshooting

#### The service does not start, or no logs are appearing
1. Verify that the service is enabled in the [Cloud](https://www.autopi.io/software-platform/cloud-management) and that it is listed in the engines file at `/etc/salt/minion.d/engines.conf`.
2. Confirm that the associated custom module contains valid Python code.
3. Enable debug logging on the device via the advanced settings, restart the Salt minion, and review the logs for errors.

To filter logs for a specific service, run the following command on the device:

```python
sudo tail -f /var/log/salt/minion | grep service_name
```

## Conclusion

Workers are a powerful mechanism for interacting with the hardware components of an [AutoPi](https://www.autopi.io) device or your vehicle. They can run continuously or for a fixed number of iterations, and their workflows can be composed to achieve complex outcomes without writing custom code. Make use of them whenever you need reliable, repeatable communication with device hardware.

