=== WP Sync DB ===
Contributors: hendridm
Donate link: https://paypal.me/danielhendricks
Tags: sync, synchronization, backup, database, mysql, find & replace, search & replace, import, export
Requires at least: 4.7
Requires PHP: 5.4
Tested up to: 5.0
Stable tag: 1.6.0
License: GPL-2.0
License URI: http://www.gnu.org/licenses/gpl-2.0.html

Allows you to push, pull, and sync database tables between WordPress installations.

== Description ==

WP Sync DB eliminates the manual work of migrating a WP database by exporting your database as a MySQL data dump (much like phpMyAdmin), doing a find and replace on URLs/file paths, and allowing you to save it to your computer or push/pull it directly to/from another WordPress instance.

It is especially useful for syncing a local development database with a live site.

== Installation ==

1. Install WP Sync DB by [downloading the latest release](https://github.com/cloudverve/wp-sync-db/releases).
2. Access the WP Sync DB menu option under **WP Admin** > **Tools**.
3. (optional) Install [GitHub Updater](https://github.com/afragen/github-updater) to enable automatic updates from the repository.

== Frequently Asked Questions ==

= Is multisite supported? =

This is currently not _officially_ supported.

= Does it migrate files as well? =

Using the optional [Media Files Addon](https://github.com/wp-sync-db/wp-sync-db-media-files), you can sync Media Library files between instances.

= What are the system requirements? =

Although this plugin may work with other configurations, the following minimum requirements are supported:

* WordPress 4.7 or higher
* PHP 5.4 or higher

If you encounter a problem using these minimum requirements, please [report an issue](https://github.com/cloudverve/wp-sync-db/issues).

== Changelog ==
= 1.6.0 (master) =
* Merged existing pull requests from parent
* Updated POT translation file
* Added npm, Gulp for development
* Minified JS, CSS files
* Converted CSS to basic Sass
