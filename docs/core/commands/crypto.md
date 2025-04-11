---
id: core-commands-crypto
title: Crypto
---

## `crypto.generate_key`

Generates a new key in the Secure Element

**ARGUMENTS**

  - **`keyid`** (str/int): key`s id


----
## `crypto.help`

Shows this help information.


----
## `crypto.manage`

Runtime management of the underlying service instance.


**SUPPORTED COMMANDS**

  - `hook list|call <name> [argument]... [<key>=<value>]...`
  - `worker list|show|start|pause|resume|kill <name>`
  - `reactor list|show <name>`
  - `run <key>=<value>...`


**EXAMPLES**

  - `reactor.manage hook list`
  - `reactor.manage worker list *`
  - `reactor.manage worker show *`
  - `reactor.manage worker start *`
  - `reactor.manage worker pause *`
  - `reactor.manage worker resume *`
  - `reactor.manage worker kill *`
  - `reactor.manage reactor list`
  - `reactor.manage reactor show *`


----
## `crypto.query`

Queries a given SPM command.

**ARGUMENTS**

  - **`cmd`** (str): The SPM command to query.


----
## `crypto.sign_string`

Signs a given string using the Secure Element

**ARGUMENTS**

  - **`data`** (str): String to be signed
  - **`keyid`** (str/int): key`s id 
