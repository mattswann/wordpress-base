<?php
/**
 * Custom functionality added to the plugin
 */
class WPSDB_Extra extends WPSDB_Base {

  /**
	 * @var string
	 */
  protected $plugin_file_path;

  /**
	 * @var string
	 */
  protected $plugin_indentifier;

  /**
	 * @param string $plugin_file_path
	 */
  public function __construct( $plugin_file_path ) {

    $this->plugin_file_path = $plugin_file_path;
    $this->plugin_indentifier = implode( DIRECTORY_SEPARATOR, array_slice( explode( DIRECTORY_SEPARATOR, $plugin_file_path ), -2, 2, true ) );

    // Give credit to original developer
    add_filter( 'plugin_row_meta', array( $this, 'modify_plugin_row_meta' ), 10, 2 );

  }

  /**
	 * Add extra links to plugin page
	 */
	function modify_plugin_row_meta( $links, $file ) {
    if( $file != $this->plugin_indentifier ) return $links;

		$row_meta = array(
			'original_author' => sprintf( '%s: <a href="%s" aria-label="%s">%s</a>', __( 'Original Developer', 'wp-sync-db' ), 'http://slang.cx', __( 'Original Developer', 'wp-sync-db' ), 'Sean Lang' )
		);

		return array_merge( $links, $row_meta );

	}

}
