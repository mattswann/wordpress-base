<?php
$videos = array(
	'u7jFkwwfeJc' => array(
		'title' => __( 'UI Walkthrough', 'wp-sync-db' ),
		'desc' => __( 'A brief walkthrough of the WP Sync DB plugin showing all of the different options and explaining them.', 'wp-sync-db' )
	),
	'fHFcH4bCzmU' => array(
		'title' => __( 'Pulling Live Data Into Your Local Development Environment', 'wp-sync-db' ),
		'desc' => __( 'This screencast demonstrates how you can pull data from a remote, live WordPress install and update the data in your local development environment.', 'wp-sync-db' )
	),
	'sImZW_sB47g' => array(
		'title' => __( 'Pushing Local to a Staging Environment', 'wp-sync-db' ),
		'desc' => __( 'This screencast demonstrates how you can push a local WordPress database you\'ve been using for development to a staging environment.', 'wp-sync-db' )
	),
	'jjqc5dBX9DY' => array(
		'title' => __( 'Media Files and CLI Addon', 'wp-sync-db' ),
		'desc' => __( 'A short demo of how the Media Files and CLI addons, which allow you to sync up your WordPress Media Libraries and execute migrations using via WP-CLI, respectively.', 'wp-sync-db' )
	)
);
?>

<div class="help-tab content-tab">
	<div class="support">
		<h3><?php _e( 'Support', 'wp-sync-db' ); ?></h3>
		<p>
			<?php printf( __( 'Please report bugs or ask questions in the <a href="%s">GitHub Issue Tracker</a>.', 'wp-sync-db' ), 'https://github.com/cloudverve/wp-sync-db/issues' ); ?>
		</p>
	</div>
	<div class="debug">
		<h3><?php _e( 'Diagnostic Info &amp; Error Log', 'wp-sync-db' ); ?></h3>
		<textarea class="debug-log-textarea" autocomplete="off" readonly></textarea>
		<a class="button clear-log js-action-link"><?php _e( 'Clear Error Log', 'wp-sync-db' ); ?></a>
	</div>
	<div class="videos">
		<h3><?php _e( 'Videos', 'wp-sync-db' ); ?></h3>

		<iframe class="video-viewer" style="display: none;" width="640" height="360" src="" frameborder="0" allowfullscreen></iframe>
		<ul>
		<?php foreach ( $videos as $id => $video ) : ?>
			<li class="video" data-video-id="<?php echo $id; ?>">
				<a href="//youtu.be/<?php echo $id; ?>" target="_blank"><img src="//img.youtube.com/vi/<?php echo $id; ?>/0.jpg" alt="" /></a>
				<h4><?php echo $video['title']; ?></h4>
				<p>
					<?php echo $video['desc']; ?>
				</p>
			</li>
		<?php endforeach; ?>
		</ul>
	</div>
</div>
