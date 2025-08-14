---
id: core-services-intro
title: Introduction
---
import CardGrid from "/components/CardGrid";

A variety of services are running on the device, each having its own specific area of responsibility. Most services are built around the same structure and using the same concepts which are described below.

:::note
Services can be setup and configured from the [AutoPi](https://www.autopi.io) [Cloud](https://www.autopi.io/software-platform/cloud-management). When logged in go to: _Device_ > _Services_
:::

## Settings

At startup, a service is initialized with the given settings. They vary between different services but usually contains connection strings, timeout threshold etc.

## Workers

Within a service multiple worker threads can run. Each worker is setup to process one or more workflows sequentially for a limited period of time or indefinitely.

Available options for a worker instance:

| Field | Type | Description | Default Value |
| ------ | ------ | ------ | ------ |
| `name` | Text | System name to identify the given worker. | - |
| `delay` | Decimal | Initial delay in seconds before starting the worker. No delay if left empty. | - |
| `interval` | Decimal | Pause in seconds between each run. Enter `0` if no pause. | `1` |
| `loop` | Integer | How many runs should the worker do? Enter `-1` if infinite. | `-1` |
| `suppress_exceptions` | Boolean | Suppress errors/exceptions so that they do not kill the worker thread? | `True` |
| `kill_upon_success` | Boolean | Kill the worker thread after the first successful run? Successful means that no errors/exceptions occurred. | `False` |
| `transactional` | Boolean | Ensure that consecutive workflows are processed in an uninterrupted sequence and not potentially mixed with others from other workers? | `False` |

### Workflows

A worker can process one or more workflows in a sequence. A worflow consists of a number of steps. The primary step of a workflow is called __`handler`__ and is always required. Then more steps may occur both before and/or after, and are not normally required. At present, there are two built-in workflows. Below is an overview of the steps in the first workflow called `simple`:

| __`handler`__ | → | _`trigger`_ | → | _`filter`_ | → | _`returner`_ |
| ------ | ------ | ------ | ------ | ------ | ------ | ------ |

And secondly the `extended` workflow:

| _`validator`_ | → | __`handler`__ | → | _`converter`_ | → | _`trigger`_ | → | _`filter`_ | → | _`enricher`_ | → | _`returner`_ |
| ------ | ------ | ------ | ------ | ------ | ------ | ------ | ------ | ------ | ------ | ------ | ------ | ------ |

Each step in a workflow has a defined area of responsibility:

| Step | Description | Example |
| ------ | ------ | ------ |
| _`validator`_ | Validates the request and decide whether or not to proceed to the handler. | - |
| __`handler`__ | Produces a result typically by interacting with an external device or system. | [See](/core/services/obd_manager.md#handlers) |
| _`converter`_ | Converts the result returned from the handler into a more usable format. | [See](/core/services/obd_manager.md#converters) |
| _`trigger`_ | Decides whether to trigger an event based on the result. | [See](/core/services/obd_manager.md#triggers) |
| _`filter`_ | Filters out result if insignificant. | [See](/core/services/obd_manager.md#filters) |
| _`enricher`_ | Enriches result with additional information. Could for example be calculations. | [See](/core/services/acc_manager.md#enrichers) |
| _`returner`_ | Returns the final result to an external system or service. | [See](/core/returners/index.md) |



## Reactors
Reactors in AutoPi are components that listen for specific events and execute predefined actions in response (how device handle the different events). They are integral to automating behaviors based on real-time data from the device.

### Managing Reactors
Reactors can be managed using the `reactor.manage` command, which provides runtime control over the reactor service.

#### Supported Commands:

```python
reactor.manage reactor list
reactor.manage reactor show <name>
```

**Example Usage:**
```python
reactor.manage reactor list
reactor.manage reactor show enable_obd_on_motion_shaking
```

* These commands allow you to list all available reactors and view detailed information about a specific reactor.

### Example: Automatic OBD Logger Pausing
An illustrative use case involves the automatic pausing of the OBD logger based on vehicle motion:
1. Enable Motion Events: Ensure that motion events are enabled in the device settings.
2. Configure Reactors: Navigate to Services > event_reactor > Reactors in the AutoPi Cloud interface.
3. Enable Specific Reactors: Activate the following reactors:
    * `enable_obd_on_motion_shaking`
    * `disable_obd_on_motion_steady_or_trip_end`
        * These reactors respond to motion events, enabling or disabling the OBD logger accordingly.


## Hooks
Hooks are custom functions that can be integrated into the AutoPi workflow to process data at various stages. They provide flexibility in handling data by allowing custom processing logic to be executed.
Hooks are the core of how your AutoPi.io device works and we only recommend that you change these if you are sure of what you are doing.

### Creating Custom Hooks
Steps to create a custom hook:
* Create a Custom Module: navigate to Device > Custom Code in the AutoPi Cloud interface and create a new module of type Execution.
* Define the Hook Function.
* Register the Hook by going to the relevant service's Hooks section (e.g., Services > obd_manager > Hooks) and register the new hook.
4. Integrate into workflow: edit the desired worker's workflow to include the custom hook in the appropriate step (e.g., as a filter or returner).


### Hook Behavior
* Hooks receive the output from the previous step in the workflow and return a modified result.
* If a hook returns a falsy value (e.g., None, False), the workflow is halted at that point.
* Hooks are ideal for data validation, transformation, or conditional processing within the workflow.

