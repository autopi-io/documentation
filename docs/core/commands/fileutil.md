---
id: core-commands-fileutil
title: Fileutil
---

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
