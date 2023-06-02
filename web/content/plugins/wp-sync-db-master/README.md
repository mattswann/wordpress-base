# WP Sync DB

- [Features](#features)
- [Installation](#installation)
   - [Requirements](#requirements)
- [Demonstration Videos](#demonstration-videos)
- [Frequently Asked Questions](#frequently-asked-questions)
- [Legal Notes](#legal-notes)

This is a fork of the original [WP Sync DB](https://github.com/wp-sync-db/wp-sync-db) by [Sean Lang](http://slang.cx) ("original developer").

WP Sync DB eliminates the manual work of migrating a WP database by exporting your database as a MySQL data dump (much like phpMyAdmin), doing a find and replace on URLs/file paths, and allowing you to save it to your computer or push/pull it directly to/from another WordPress instance.

It is especially useful for syncing a local development database with a live site.

### Download Installable ZIP: [wp-sync-db.zip](https://github.com/cloudverve/wp-sync-db/releases/download/1.6.0/wp-sync-db.zip)

:pushpin: **Help Wanted - Translations:** If you know of any quality translations or are able to [translate strings](https://github.com/cloudverve/wp-sync-db/blob/master/languages/wp-sync-db.pot) from another language, please let me know. If you don't have or know how to use Poedit, no problem - You can simply translate in a text file and I will create the translation files.

:pushpin: **Composer:** This fork will be added to Packagist once it is closer to release.

![Screenshot](https://rawcdn.githack.com/cloudverve/wp-sync-db/master/asset/images/screenshot1.png "Screenshot")

## Features

- **Selective Sync** - Choose which tables to migrate. For example, if you have large log/analytics tables that you don't need to migrate, you can simply deselect them.
- **Automatic Find & Replace** - When migrating a WordPress site, URLs in the content, widgets, menus, etc can be updated to the new site's URL.
- **Bi-Directional Sync**:
   - **Pull** - Replace local database data with a remote site's data.
   - **Push** - Replace a remote site's data with a local database's data.
- **Database Export & Backup** - An alternative to pushing/pulling data, you can export data to a file that can be imported using any MySQL client/app.
- **Environment Adaptability** - WP Sync DB checks both the remote and local servers to determine limitations and optimize for performance. For example, it detects the MySQL `max_allowed_packet_size` and adjusts accordingly.
- :construction: **Sync Media Libraries Between Installations** - Using the optional [WP Sync DB Media Files](https://github.com/wp-sync-db/wp-sync-db-media-files) addon, you can sync Media Library files between instances.

## Installation

1. Install WP Sync DB by downloading the latest [release](https://github.com/cloudverve/wp-sync-db/releases).
2. Access the WP Sync DB menu option under **WP Admin** > **Tools**.
3. :construction: (optional) Install the [WP Sync DB Media Files](https://github.com/wp-sync-db/wp-sync-db-media-files) addon to sync media libraries.

**Tip:** You can also install [GitHub Updater](https://github.com/afragen/github-updater) to enable automatic updates from this repository.

### Requirements

Although this plugin may work with other configurations, the following minimum requirements are supported:

- WordPress 4.7 or higher
- PHP 5.4 or higher

If you encounter a problem using these minimum requirements, please [report an issue](https://github.com/cloudverve/wp-sync-db/issues).

## Demonstration Videos

#### Feature Walk-Through

[![UI Walkthrough](https://img.youtube.com/vi/u7jFkwwfeJc/0.jpg)](https://www.youtube.com/watch?v=u7jFkwwfeJc "UI Walkthrough")

#### Pulling Live Data to Your Local Development Environment

[![Pulling Live Data Into Your Local Development Environment](https://img.youtube.com/vi/fHFcH4bCzmU/0.jpg)](https://www.youtube.com/watch?v=fHFcH4bCzmU "Pulling Live Data Into Your Local Development Environment")

#### Pushing Local Development Data to a Staging Environment

[![Pushing Local to a Staging Environment](https://img.youtube.com/vi/FjTzNqAlQE0/0.jpg)](https://www.youtube.com/watch?v=FjTzNqAlQE0 "Pushing Local to a Staging Environment")

#### :construction: Media Files Addon Demo

A short demo of the [Media Files Addon](https://github.com/wp-sync-db/wp-sync-db-media-files), which allows you to sync your WordPress Media Libraries.

[![Media Files and CLI Addons](https://img.youtube.com/vi/0aR8-jC2XXM/0.jpg)](https://www.youtube.com/watch?v=0aR8-jC2XXM "Media Files and CLI Addons")

## Frequently Asked Questions

#### Is multisite supported?

This is currently not officially supported.

Although they lack admin interfaces, you might try [Network Sub-domain Updater](https://github.com/dmhendricks/wordpress-network-subdomain-updater-plugin) in conjunction with [Rewrite Content URLs](https://github.com/dmhendricks/wordpress-rewrite-content-urls-plugin) to assist with _manual_ migration of multisite data.

If you'd prefer a wizard, a commercial alternative is [WP Migrate DB Pro](https://deliciousbrains.com/wp-migrate-db-pro/) and its [Multisite Tools Addon](https://deliciousbrains.com/wp-migrate-db-pro/doc/multisite-tools-addon/).

#### Does it migrate files as well?

:construction: Using the optional [Media Files Addon](https://github.com/wp-sync-db/wp-sync-db-media-files), you can sync Media Library files between instances.

_Note: Due to various changes/improvements over time, support for this addon is currently in testing phase. Use at your own risk._

## Legal Notes

The software that this is forked from was released under the [GPL version 2.0](https://github.com/cloudverve/wp-sync-db/blob/master/LICENSE) copyleft license, granting freedom to copy, distribute, and/or modify this software. Due to a [DMCA takedown request](https://wptavern.com/dmca-takedown-notice-issued-against-fork-of-wp-migrate-db-pro), the original developer renamed it and removed branding/trademarks and license verification code.

[![Analytics](https://ga-beacon.appspot.com/UA-67333102-2/cloudverve/wp-sync-db?flat)](https://ga-beacon.appspot.com/?utm_source=github.com&utm_medium=campaign&utm_content=button&utm_campaign=cloudverve%2Fwp-sync-db)
