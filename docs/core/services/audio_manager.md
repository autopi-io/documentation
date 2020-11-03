---
id: core-services-audio
title: Audio Manager
---

## Handlers
### `play`

Plays a specific audio file.

**ARGUMENTS**

  - **`audio_file`** (str): Local path of audio file to play.

**OPTIONAL ARGUMENTS**

  - **`force`** (bool): Default is `False`.
  - **`loops`** (int): Default is `0`.
  - **`volume`** (int):


----
### `queue`

Queues an audio file.

**ARGUMENTS**

  - **`audio_file`** (str): Local path of audio file to play.


----
### `speak`

Speak given text.

:::note
Unfortunately 'espeak' command is not always reliable - sometimes it fails for uncertain reasons.
:::

**ARGUMENTS**

  - **`text`** (str): Text to speak out.


----
### `stop`

Stops playback of the current audio.


----
### `volume`

Set volumen of the playback.

**OPTIONAL ARGUMENTS**

  - **`value`** (int):
