---
id: core-services-audio-manager
title: Audio Manager
---

## Handlers
### `aplay`

Play a given audio file using the `aplay` command.

**ARGUMENTS**

    - **`audio_file`** (str): Local path of the audio file to play.

**OPTIONAL ARGUMENTS**

  - **`duration`** (int): Interrupt playback after amount of seconds.


----
### `espeak`

Speak a given text using the `espeak` command.

:::note
Unfortunately 'espeak' command is not always reliable - sometimes it fails for uncertain reasons.
:::

**ARGUMENTS**

  - **`text`** (str): Text to speak out.

**OPTIONAL ARGUMENTS**

  - **`volume`** (int): Set volumen of the playback. Default value is `100`.
  - **`language`** (str): The language to speak in. Default value is `en-gb`.
  - **`pitch`** (int): The pitch of the voice. Default value is `50`.
  - **`speed`** (int): Rate of speech. Default value is `175`.
  - **`word_gap`** (int): Time gap between words spoken. Default value is `10`.
  - **`timeout`** (int): Timeout in seconds of the command to finish. Default value is `10`.


----
### `play`

Plays a specific audio file.

**ARGUMENTS**

  - **`audio_file`** (str): Local path of the audio file to play.

**OPTIONAL ARGUMENTS**

  - **`force`** (bool): Force even though another playback is in progress? Default is `False`.
  - **`loops`** (int): How many repetitions of playback? Default is `0`.
  - **`volume`** (int): Set volumen of the playback.


----
### `queue`

Queues an audio file.

**ARGUMENTS**

  - **`audio_file`** (str): Local path of the audio file to play.


----
### `stop`

Stops playback of the current audio.


----
### `volume`

Set volumen of the playback.

**OPTIONAL ARGUMENTS**

  - **`value`** (int): The volume to set.
