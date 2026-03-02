---
title: User Guide
description: Learn the main Matroska Batch Flow workflow, from adding files to processing your batch.
order: 2
---

## Overview

Matroska Batch Flow is designed to make batch editing of Matroska files easy and efficient. The main workflow comes down to four simple steps:

1. **Add files**: Select the `.mkv` files you want to process
2. **Review**: Check for any validation issues or inconsistencies across your batch
3. **Configure**: Set container and track properties across the batch
4. **Process**: Apply changes to all files at once

## Adding Files

You can add files to a batch in two ways:

- **Drag-and-drop**: Drag `.mkv` files or folders directly into the Input Page
- **Browse**: Use the file picker to select individual files

When files are added, Matroska Batch Flow scans them to extract metadata such as track counts, languages, codec information, and flags.

## Review

Validation runs automatically whenever files are added or removed. Before continuing, check for any issues or inconsistencies flagged across your batch.

:::tip
The strictness of validation is configurable. See [Batch Validation](/docs/settings#batch-validation) for more information.
:::

## Configuring Properties

Navigate to the configuration pages (General, Video, Audio, Subtitle) to set properties across all files in the batch.

### Container Properties

The General page lets you configure container-level properties:

| Property                  | Description                                                                                  |
| ------------------------- | -------------------------------------------------------------------------------------------- |
| **Title**                 | The title metadata stored in the Matroska container                                          |
| **Track statistics tags** | Add or delete track statistics tags. When adding, track statistics are recalculated per file |

### Track Properties

The Video, Audio, and Subtitles pages let you configure properties per track:

| Property         | Description                                          |
| ---------------- | ---------------------------------------------------- |
| **Track name**   | A descriptive label for the track                    |
| **Language**     | The language of the track (e.g., English, Japanese)  |
| **Default flag** | Marks a track as the default for its type            |
| **Forced flag**  | Marks a track as forced (e.g., for forced subtitles) |

### Track Availability Indicators

Not all files may have the same number of tracks. Each track in the selection dropdown shows a colored dot indicating its availability across your batch:

| Color      | Meaning                                 |
| ---------- | --------------------------------------- |
| **Green**  | The track is available in every file    |
| **Orange** | The track is only present in some files |

Hovering over a dot shows a tooltip with the exact count (e.g., "Track 1 is available in 4 of 6 files").

:::tip
You can enable the **Track Availability Display** setting to show a detailed file count (e.g., `6/6`) next to the colored dot. See [Settings](/docs/settings) for details.
:::

## Processing

When ready, press **Process Files** to apply your changes to all files in the batch.

After processing, the Results page shows a summary with counts for total files, succeeded, warnings, and failed.

## Next Steps

Learn about all available settings in the [Settings Guide](/docs/settings), or check the [FAQ](/docs/faq) for common questions.
