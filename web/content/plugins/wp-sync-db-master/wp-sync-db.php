<?php
/**
 * Plugin Name:         WP Sync DB
 * Plugin URI:          https://wp-sync-db.github.io/
 * Description:         Sync database data between WordPress instances
 * Version:             1.6.0
 * Author:              WPSDB Contributors
 * Author URI:          https://github.com/cloudverve/wp-sync-db/graphs/contributors/
 * License:             GPL-2.0 or Later
 * License URI:         https://opensource.org/licenses/GPL-2.0
 * Text Domain:         wp-sync-db
 * Domain Path:         languages
 * Network:             True
 * GitHub Plugin URI:   cloudverve/wp-sync-db
 */

$GLOBALS['wpsdb_meta']['wp-sync-db']['version'] = '1.6.0';
$GLOBALS['wpsdb_meta']['wp-sync-db']['folder'] = basename( plugin_dir_path( __FILE__ ) );
$GLOBALS['wpsdb_config'] = [
  'wp_admin_path' => defined( 'WP_ADMIN_DIR' ) ? WP_ADMIN_DIR : 'wp-admin'
];

// Define the directory seperator if it isn't already
if( !defined( 'DS' ) ) {
  if (strtoupper(substr(PHP_OS, 0, 3)) == 'WIN') {
    define('DS', '\\');
  }
  else {
    define('DS', '/');
  }
}

function wp_sync_db_loaded() {
  // if neither WordPress admin nor running from wp-cli, exit quickly to prevent performance impact
  if ( !is_admin() && ! ( defined( 'WP_CLI' ) && WP_CLI ) ) return;

  require_once 'class/wpsdb-base.php';
  require_once 'class/wpsdb-addon.php';
  require_once 'class/wpsdb-extra.php';
  require_once 'class/wpsdb.php';

  global $wpsdb;
  $wpsdb = new WPSDB( __FILE__ );
  new WPSDB_Extra( __FILE__ );
}

add_action( 'plugins_loaded', 'wp_sync_db_loaded' );

function wp_sync_db_init() {
  // if neither WordPress admin nor running from wp-cli, exit quickly to prevent performance impact
  if ( !is_admin() && ! ( defined( 'WP_CLI' ) && WP_CLI ) ) return;

  load_plugin_textdomain( 'wp-sync-db', false, dirname( plugin_basename( __FILE__ ) ) . '/languages/' );
}

add_action( 'init', 'wp_sync_db_init' );
