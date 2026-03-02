---
title: FAQ
description: Frequently asked questions and troubleshooting tips for Matroska Batch Flow.
order: 4
---

## General

### What is Matroska Batch Flow?

Matroska Batch Flow is a free, open-source tool for batch processing Matroska (`.mkv`) files. It lets you modify container properties such as track names, languages, and flags across multiple files at once.

### Does it remux my files?

**No.** Matroska Batch Flow uses `mkvpropedit` to edit container metadata in place, without remuxing the file. Most property changes are applied almost instantly. Some operations, like adding track statistics tags, take longer because the file contents need to be read during processing.

### Which file formats are supported?

Only Matroska (`.mkv`) files are supported. Matroska Batch Flow uses `mkvpropedit` from MKVToolNix, which is specifically designed for the Matroska container format.

### Is it available on macOS or Linux?

**macOS**: Unlikely. The MKVToolNix maintainer has [indicated](https://help.mkvtoolnix.download/t/apple-silicon-retirement-of-rosetta-2/1371/21) that native ARM binaries will not be provided. Once Apple discontinues x86 emulation (Rosetta), `mkvpropedit` will no longer be available as a signed macOS binary. This makes macOS support impractical for Matroska Batch Flow.

**Linux**: An experimental desktop target using the Skia renderer from Uno Platform can be built from source, but it is not production-ready. Expect bugs and missing functionality. Issues related to desktop targets are not prioritized.

---

## Installation & Setup

### Where do I download it?

From the [GitHub Releases](https://github.com/TimGels/Matroska-Batch-Flow/releases) page. See the [Getting Started](/docs/getting-started) guide for full instructions.

### "mkvpropedit not found" error

This means Matroska Batch Flow can't locate the `mkvpropedit` executable. Solutions:

1. **Install MKVToolNix** from [mkvtoolnix.download](https://mkvtoolnix.download/)
2. **Add it to PATH**: After installing, ensure the MKVToolNix directory is in your system PATH
3. **Set the path manually**: Go to Settings and configure the path to `mkvpropedit` manually

> Windows release builds bundle `mkvpropedit`. If you're using a release, try reinstalling.

### The application fails to start

Common causes:

- **Missing .NET runtime**: Ensure you have .NET 10 installed if using a framework-dependent build. Published release builds are self-contained and don't require this.
- **Invalid configuration**: If `appsettings.json` has been modified and is invalid, the app may show an error window on startup. Undo the modifications or reset the file to its defaults.

---

## Usage

### Can I undo changes?

Matroska Batch Flow does not have a built-in undo feature. Changes are written directly to the file without creating a backup, so previous property values cannot be restored automatically. It goes without saying to back up irreplaceable files before processing.

### What happens if my files have different track counts?

This depends on your [validation mode](/docs/settings#batch-validation). In **Strict mode**, differing track counts are flagged as an error. In **Lenient** or **Custom mode**, this can be allowed.

When allowed, you can configure properties for all tracks, including those that are not present in every file. During processing, properties are only applied to files that actually have the corresponding track.

For example, consider a batch where not all files have a subtitle track:

| File       | Audio 1 | Audio 2 | Subtitle 1 |
| ---------- | ------- | ------- | ---------- |
| movie1.mkv | Yes     | Yes     | Yes        |
| movie2.mkv | Yes     | Yes     | No         |
| movie3.mkv | Yes     | Yes     | Yes        |

You can configure properties for all three tracks. During processing, subtitle track 1 properties will only be applied to movie1.mkv and movie3.mkv.

### What are Track Availability Indicators?

Each track in the selection dropdown shows a colored dot indicating its availability across your batch. A green dot means the track is available in every file, while an orange dot means it is only present in some files. Hovering over a dot shows a tooltip with the exact count. See [Track Availability Indicators](/docs/user-guide#track-availability-indicators) in the User Guide for more details.

### Processing seems slow

Processing speed depends on:

- **Number of files**: More files means more `mkvpropedit` invocations
- **Disk speed**: Container editing is I/O-bound
- **File size**: Larger files take slightly longer for metadata writes

In most cases, processing should be fairly quick.

---

## Troubleshooting

### File scanning fails

- Ensure the file is a valid `.mkv` (Matroska) container
- Check file permissions; the application needs read access
- Corrupted files may fail to scan; make sure your files are not corrupted

### Languages not loading

The language list is loaded from a bundled `languages.json` file. If it's missing or corrupted:

1. Re-download the release from GitHub
2. Ensure the `Resources` folder is intact alongside the executable

### Where are user settings stored?

Settings are saved to `UserSettings.json` in your local application data folder (typically `%LOCALAPPDATA%`). Deleting this file resets all preferences to defaults.

---

## Contributing & Support

### How can I contribute?

The best way to contribute is by reporting bugs or suggesting enhancements through the [issue tracker](https://github.com/TimGels/Matroska-Batch-Flow/issues). Please follow the provided templates and include enough detail for your report to be actionable. Low-effort issues may be closed without investigation. For general questions, ideas, or other discussions, use [GitHub Discussions](https://github.com/TimGels/Matroska-Batch-Flow/discussions). Note that this is a personal project maintained in spare time with no obligations to respond to issues, implement features, or provide support.

### How can I support the project?

Thank you for using Matroska Batch Flow! The project is free and open source, developed and maintained in spare time. If you find it useful and would like to help keep it going, visit the [Sponsor](/sponsor) page for more information on how to support the project.
