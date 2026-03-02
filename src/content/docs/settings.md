---
title: Settings
description: Explanation of all Matroska Batch Flow settings, including mkvpropedit path, validation, theme, and more.
order: 3
---

## Accessing Settings

Open the Settings page by clicking the gear icon in the top-right corner of the application. Changes are saved automatically and persist between sessions.

- [Mkvpropedit](#mkvpropedit) - Configure the mkvpropedit executable path
- [Batch Validation](#batch-validation) - Control validation strictness for your batches
- [User Interface](#user-interface) - Theme and display preferences
- [Logging](#logging) - Log viewer and verbosity settings
- [About](#about) - Version, license, and attribution info

---

## Mkvpropedit

### Executable Selection

Choose between using the bundled `mkvpropedit` executable or specifying a custom path to your own installation.

| Option       | Description                                                                                                                 |
| ------------ | --------------------------------------------------------------------------------------------------------------------------- |
| **Included** | Uses the `mkvpropedit` executable that is bundled with the application release. This is the default and recommended option. |
| **Custom**   | Lets you specify the path to your own `mkvpropedit` executable.                                                             |

When **Custom** is selected, an additional section appears where you can see the currently configured path and use the **Browse...** button to locate the executable on your system.

:::note
On non-Windows platforms (experimental Skia target), custom path mode is always enabled since the bundled executable is Windows-only.
:::

---

## Batch Validation

Controls how strictly files are validated before processing. Validation checks run automatically when files are added or removed, and when validation-related settings are changed.

### Strictness Mode

| Mode        | Behavior                                                                                                        |
| ----------- | --------------------------------------------------------------------------------------------------------------- |
| **Strict**  | All files must have matching track counts and consistent properties. Mismatches block processing. _(default)_   |
| **Lenient** | Files with different track counts are allowed. Differences are reported as non-blocking informational messages. |
| **Custom**  | Configure the severity for each validation check independently.                                                 |

### Strict Mode Details

The Strict preset applies the following validation severity levels:

| Check                                         | Severity |
| --------------------------------------------- | -------- |
| Track count parity                            | Error    |
| Audio / Video / Subtitle language consistency | Error    |
| Audio default flag                            | Warning  |
| Audio forced flag                             | Warning  |
| Video default flag                            | Warning  |
| Subtitle forced flag                          | Warning  |

### Lenient Mode Details

The Lenient preset lowers all checks to informational level:

| Check                                         | Severity |
| --------------------------------------------- | -------- |
| Track count parity                            | Info     |
| Audio / Video / Subtitle language consistency | Info     |
| Audio / Video default flag                    | Info     |
| Audio / Subtitle forced flag                  | Info     |

### Custom Mode Details

In Custom mode, a validation grid appears where you can independently control the severity for each check, per track type.

#### Severity Levels

| Severity    | Description                                               |
| ----------- | --------------------------------------------------------- |
| **Off**     | Validation check is disabled entirely                     |
| **Info**    | Shows an informational message; does not block processing |
| **Warning** | Shows a warning; does not block processing                |
| **Error**   | Blocks processing until resolved                          |

#### Track Count Parity

A global check that applies across all track types. When enabled, it validates that all files in the batch have the same number of audio, video, and subtitle tracks.

#### Per-Track-Type Checks

The following checks can be configured separately for audio, video, and subtitle tracks:

| Check                        | Audio | Video | Subtitle |
| ---------------------------- | ----- | ----- | -------- |
| **Language consistency**     | Yes   | Yes   | Yes      |
| **Default flag consistency** | Yes   | Yes   | —        |
| **Forced flag consistency**  | Yes   | —     | Yes      |

- **Language consistency** - Validates that language tags match across files for each track position
- **Default flag consistency** - Validates that the default track flag is consistent across files
- **Forced flag consistency** - Validates that the forced track flag is consistent across files

---

## User Interface

### Theme

Choose the application's visual appearance:

| Theme      | Description                                                             |
| ---------- | ----------------------------------------------------------------------- |
| **Light**  | Light background with dark text                                         |
| **Dark**   | Dark background with light text                                         |
| **System** | Automatically matches your operating system's theme setting _(default)_ |

### Track Availability Display

Show detailed file count (e.g., "X/Y files") together with colored indicators in track selection dropdowns. This helps you see at a glance how many files in the batch have a particular track property value.

- **Enabled** _(default)_: Colored dot indicators are shown together with "X/Y files" text
- **Disabled**: Only colored dot indicators are shown

---

## Logging

### Show Log Viewer

Display a log viewer tab in the navigation menu to monitor application logs in real-time.

- **Enabled**: A "Logs" tab appears in the navigation sidebar
- **Disabled** _(default)_: The log viewer tab is hidden

### Log Level

Controls the verbosity of the application's logging output:

| Level           | Description                                                            |
| --------------- | ---------------------------------------------------------------------- |
| **Verbose**     | Most detailed; logs everything including low-level internal operations |
| **Debug**       | Detailed diagnostic information useful for troubleshooting             |
| **Information** | Standard operational messages _(default)_                              |
| **Warning**     | Only potentially harmful situations and errors                         |
| **Error**       | Only error events                                                      |
| **Fatal**       | Only the most critical failures that cause the application to stop     |

:::tip
Set the log level to **Debug** or **Verbose** when troubleshooting an issue before reporting a bug. This provides the most useful diagnostic information.
:::

:::note
The log level can be overridden in the application's `appsettings.json` configuration file. When `LoggingOptions.MinimumLevel` is set there, the UI log level selector is disabled and the configured level is used instead.
:::

---

## About

The About section shows version information, licensing, third-party dependencies, and useful links related to the project.
