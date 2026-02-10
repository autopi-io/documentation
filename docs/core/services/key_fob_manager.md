---
id: core-services-key-fob-manager
title: Key Fob Manager
---

## Handlers
### `action`

Performs a key fob button action.

**ARGUMENTS**

  - **`*name`** (str): Name(s) of the action(s) to perform.


----
### `power`

Powers on/off key fob.

**OPTIONAL ARGUMENTS**

  - **`value`** (bool): Power on or off.


----
### `toggle_action`

Toggle an action. The action that`s being toggled needs to be defined with an `opposite` field
containing the name of the opposite action. The function will toggle the two actions each
time it is called with either name.

Parameters:

- default (bool) - What should the default state of these actions be set to. (default False)
