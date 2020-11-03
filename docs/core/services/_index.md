---
id: core-services
title: "Using Core Services"
---

A variety of services are running on the device, each having its own specific area of responsibility. Most services are built around the same structure and using the same concepts which are described below.

:::note
Services can be setup and configured from the AutoPi Cloud. When logged in go to: _Advanced_ -> _Services_
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
| __`handler`__ | Produces a result typically by interacting with an external device or system. | [See](/services/obd_manager/#handlers) |
| _`converter`_ | Converts the result returned from the handler into a more usable format. | [See](/services/obd_manager/#converters) |
| _`trigger`_ | Decides whether to trigger an event based on the result. | [See](/services/obd_manager/#triggers) |
| _`filter`_ | Filters out result if insignificant. | [See](/services/obd_manager/#filters) |
| _`enricher`_ | Enriches result with additional information. Could for example be calculations. | [See](/services/acc_manager/#enrichers) |
| _`returner`_ | Returns the final result to an external system or service. | [See](/returners/) |



## Reactors

_Coming soon..._

## Hooks

_Coming soon..._
