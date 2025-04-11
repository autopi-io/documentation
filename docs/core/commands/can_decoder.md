---
id: core-commands-can-decoder
title: Can Decoder
---

## `can_decoder.decode_handler`

Handler for decoding files containing raw CAN data.

**ARGUMENTS**

  - **`decoder_name`** (str): The callname of the decoder.

**OPTIONAL ARGUMENTS**

  - **`input_directory`** (str): The path from which input files are read.
  - **`output_format`** (str): The path where output files are written to.
  - **`decoder`** (str): The decoder type to be used. Currently supported types are `STANDARD` and `ASAMMDF`.
