---
id: core-cmd-audio
title: Audio
---

## `audio.help`

Shows this help information.


----
## `audio.play`

Plays a specific audio file.

**ARGUMENTS**

  - **`audio_file`** (str): Local path of audio file to play.

**OPTIONAL ARGUMENTS**

  - **`force`** (bool): Default is `False`.
  - **`loops`** (int): Default is `0`.
  - **`volume`** (int):


----
## `audio.queue`

Queues an audio file.

**ARGUMENTS**

  - **`audio_file`** (str): Local path of audio file to play.


----
## `audio.speak`

Speak given text.

**ARGUMENTS**

  - **`text`** (str): Text to speak out.


----
## `audio.stop`

Stops playback of the current audio.


----
## `audio.volume`

Set volumen of the playback.

**OPTIONAL ARGUMENTS**

  - **`value`** (int):
