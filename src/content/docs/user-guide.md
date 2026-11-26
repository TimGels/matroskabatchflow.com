---
title: User Guide
description: Learn the Matroska Batch Flow workflow, from adding files to reviewing and managing batch results.
order: 2
---

## Overview

The main workflow has five steps:

1. **Add files**: Select the `.mkv` files you want to process
2. **Review**: Check for any validation issues or inconsistencies across your batch
3. **Configure**: Set container and track properties across the batch
4. **Apply Changes**: Write the configured edits to the batch
5. **Review results**: See what happened to each file

## Adding Files

You can add files to a batch in two ways:

- **Drag-and-drop**: Drag `.mkv` files or folders directly into the Input Page
- **Browse**: Use the file picker to select individual files

When files are added, Matroska Batch Flow scans them to extract metadata such as track counts, languages, codec information, and flags.

## Review

Validation runs automatically whenever files are added or removed.

:::tip
The strictness of validation is configurable. See [Batch Validation](/docs/settings#batch-validation) for more information.
:::

Open **Validation** next to **Input** to review the whole batch. **Blocking** checks prevent you from applying edits. **Advisory** checks are for you to inspect and don't block edits. On **Input**, the bar above the file list summarizes the checks, and a link such as **View all 4 checks** opens the same page. When checks block the batch, a warning banner below the navigation explains the blocker and offers an action such as **Review 2 blocking checks** to open Validation. The banner is hidden while you're on Validation or a batch operation is running.

### Compare the files behind a check

Choose a check in the sidebar, or use **Check to review** in a narrow window. For example, **Subtitle language tags → Track 2** might show Portuguese in six files, English in one, and **Track not present** in three. Expand **English** to see which file has that tag. Neither tag is necessarily wrong.

- **Not specified** means the track exists but has no language tag. **Track not present** means the file has no track at that position.
- To review one file, select the number in its **Batch checks** column on **Input**. The number is how many checks involve that file. On **Validation**, you'll see the file's scanned value above the batch comparison. Clear the file filter to see all checks again. You can do so by clicking the filename.
- **Open track settings** opens the **batch** editor with that track selected. When you return to **Validation**, the same check is still selected.
- On a blocking check, **Validation settings** opens [Batch Validation](/docs/settings#batch-validation), where you choose which differences block edits.

If **Unsupported files** appears, select it to see the reason for each file. These files are excluded from track comparisons and block edits in every [validation mode](/docs/settings#batch-validation). The remove button on that check, such as **Remove 2 unsupported files from batch**, takes them out of the batch. This does not delete them from disk.

## Configuring Properties

Navigate to the configuration pages (General, Video, Audio, Subtitle) to set properties across all files in the batch.

### Container Properties

The General page lets you configure container-level properties:

| Property                  | Description                                                                                  |
| ------------------------- | -------------------------------------------------------------------------------------------- |
| **Title**                 | The title metadata stored in the Matroska container                                          |
| **Track statistics tags** | Add or delete track statistics tags. When adding, track statistics are recalculated per file |

### Track Properties

The Video, Audio, and Subtitle pages let you configure properties per track:

| Property         | Description                                          |
| ---------------- | ---------------------------------------------------- |
| **Track name**   | A descriptive label for the track                    |
| **Language**     | The language of the track (e.g., English, Japanese)  |
| **Default flag** | Marks a track as the default for its type            |
| **Forced flag**  | Marks a track as forced (e.g., for forced subtitles) |

Use the reset button beside a track property to return it to its auto-detected value from the batch. If no scanned track at that position has a title, resetting the track name clears it.

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

## Apply Changes

Select **Show Arguments** if you want to preview the `mkvpropedit` commands, then **Apply Changes** to write the configured edits in place. These buttons are available once you have files and at least one edit, provided no checks block the batch and no batch operation is running.

While the batch is being processed, a progress window covers the app. It shows the file being processed, how many files are done, and the overall progress. For changes that read the whole file, such as adding track statistics tags, it also shows the progress of the current file as a percentage. On Windows, the progress is also shown on the app's taskbar button.

The rest of the app can't be used until processing has finished, so settings can't change halfway through a batch.

### Cancelling

Press **Cancel** to stop the batch:

- The file that is being processed is always finished first, so a file is never left half-written. When track statistics are added to a large file this can take a while; the progress window keeps showing its progress.
- Files that haven't been started are left unchanged.

## Review results

After processing, dismiss the summary dialog and open **Results**. The banner shows the batch outcome, when the run started, and how long it took. Use the filter above **Files** to narrow the list by outcome, or expand a file to see its location, any errors or warnings, and a diagnostic preview of the `mkvpropedit` command, when available.

- **Files** counts every file in the batch.
- **Updated** counts files updated successfully.
- **Warnings** counts updated files where `mkvpropedit` reported something to review. These files are also counted under **Updated**.
- **Failed** counts files that could not be updated because of an error.
- **No applicable changes** means none of your edits applied to this file, usually because it lacks the configured track. Existing values aren't compared.
- **Not processed** means you canceled the batch before the file was edited.
- **Interrupted** means the batch stopped unexpectedly before the file finished. If editing had started, the file may have changed.

### Manage saved results

Results are saved on your device, so you can review past batches after restarting the app. Open **Saved batch result** and select a run by its date and outcome.

- To remove one result, select the trash icon next to it and confirm **Remove from history**.
- To clear all listed results, select **Clear result history…**, check the count, and confirm **Remove all**.

Removing results doesn't change your media files or undo any edits. To choose how many batch results the app keeps, see [Saved results](/docs/settings#saved-results).

## Next Steps

Learn about all available settings in the [Settings Guide](/docs/settings), or check the [FAQ](/docs/faq) for common questions.
