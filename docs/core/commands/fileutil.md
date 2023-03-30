---
id: core-commands-fileutil
title: Fileutil
---

## `fileutil.grep`

Match lines in a text file.

**ARGUMENTS**

  - **`pattern`** (str): Regex pattern to match.
  - **`file`** (str): File to search in.

**OPTIONAL ARGUMENTS**

  - **`tail_lines`** (int): How many of the last matched lines should be included? Set to `0` to include all lines. Default is `10`.


----
## `fileutil.line_count`

Returns count of new line characters in a file.


----
## `fileutil.load_yaml`

Load a file as YAML or return default.


----
## `fileutil.remove_all`

Similar to `file.remove` but with many at once.


----
## `fileutil.upload`

Uploads a file (by default gzipped) to a service.

**ARGUMENTS**

  - **`path`** (str): Path to the file.

**OPTIONAL ARGUMENTS**

  - **`gzip`** (bool): Gzip it? Default is `True`.
  - **`service`** (str): The service to be used (Possible: `dropbox`). Default is None.
  - **`token`** (str): The token to use when uploading (Required when using `dropbox` service)
