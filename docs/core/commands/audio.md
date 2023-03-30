---
id: core-commands-audio
title: Audio
---

## `audio.aplay`

Play a given audio file using the `aplay` command.

**ARGUMENTS**

    - **`audio_file`** (str): Local path of the audio file to play.

**OPTIONAL ARGUMENTS**

  - **`duration`** (int): Interrupt playback after amount of seconds.


----
## `audio.espeak`

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
## `audio.help`

Shows this help information.


----
## `audio.manage`

Runtime management of the underlying service instance.


**SUPPORTED COMMANDS**

  - `hook list|call <name> [argument]... [<key>=<value>]...`
  - `worker list|show|start|pause|resume|kill <name>`
  - `reactor list|show <name>`
  - `run <key>=<value>...`


**EXAMPLES**

  - `audio.manage hook list`
  - `audio.manage hook call query_handler play`
  - `audio.manage worker list *`
  - `audio.manage worker show *`
  - `audio.manage worker start *`
  - `audio.manage worker pause *`
  - `audio.manage worker resume *`
  - `audio.manage worker kill *`
  - `audio.manage reactor list`
  - `audio.manage reactor show *`
  - `audio.manage run handler="play" args="[\"sound.wav\"]"`


----
## `audio.play`

Plays a specific audio file.

**ARGUMENTS**

  - **`audio_file`** (str): Local path of the audio file to play.

**OPTIONAL ARGUMENTS**

  - **`force`** (bool): Force even though another playback is in progress? Default is `False`.
  - **`loops`** (int): How many repetitions of playback? Default is `0`.
  - **`volume`** (int): Set volumen of the playback.


----
## `audio.queue`

Queues an audio file.

**ARGUMENTS**

  - **`audio_file`** (str): Local path of the audio file to play.


----
## `audio.speak`

Alias for `audio.espeak`.


----
## `audio.stop`

Stops playback of the current audio.


----
## `audio.volume`

Set volumen of the playback.

**OPTIONAL ARGUMENTS**

  - **`value`** (int): The volume to set.
