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
