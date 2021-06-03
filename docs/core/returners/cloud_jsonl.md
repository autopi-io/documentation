---
id: core-returners-cloud-jsonl
title: Cloud Jsonl
---

## `cloud_jsonl.close_writers`

Ensure all open writers are closed.


----
## `cloud_jsonl.is_expired`

Check if this returner has expired.


----
## `cloud_jsonl.returner`

Return a result to cloud jsonl file.


----
## `cloud_jsonl.returner_data`

Return any arbitrary data structure to cloud jsonl file.


----
## `cloud_jsonl.returner_event`

Return an event to cloud jsonl file.


----
## `cloud_jsonl.returner_job`

Return a Salt job result to cloud jsonl file.


----
## `cloud_jsonl.set_expiration`

Set or clear expiration for this returner.
Delay of zero means instant expiration.
Negative delay will clear any already set expiration.
