---
id: core-returners-jsonl
title: Jsonl
---

## `jsonl.returner`

Return a result to JSONL file.


**EXAMPLE** salt `*` test.ping --return jsonl --return_kwargs `{"dir": "/opt/", "filename": "test.jsonl"}`


----
## `jsonl.returner_data`

Return any arbitrary data structure to a JSONL file.


----
## `jsonl.returner_job`

Return a Salt job result to a JSONL file.
