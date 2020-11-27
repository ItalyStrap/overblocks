<?php
/**
 * Plugin Name:     OverBlocks
 * Description:     Only useful blocks
 * Version:         0.1.0
 * Author:          Enea Overclokk
 * License:         GPL-2.0-or-later
 * License URI:     https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:     overblocks
 *
 * @package         overblocks
 */

/**
 * Registers all block assets so that they can be enqueued through the block editor
 * in the corresponding context.
 *
 * @see https://developer.wordpress.org/block-editor/tutorials/block-tutorial/applying-styles-with-stylesheets/
 */
function create_block_overblocks_block_init() {
	$dir = dirname( __FILE__ );

	$script_asset_path = "$dir/build/index.asset.php";
	if ( ! file_exists( $script_asset_path ) ) {
		throw new Error(
			'You need to run `npm start` or `npm run build` for the "overblocks/container" block first.'
		);
	}
	$index_js     = 'build/index.js';
	$script_asset = require( $script_asset_path );
	wp_register_script(
		'overblocks-container-block-editor',
		plugins_url( $index_js, __FILE__ ),
		$script_asset['dependencies'],
		$script_asset['version']
	);
	wp_set_script_translations( 'overblocks/container-block-editor', 'overblocks' );

	$editor_css = 'build/index.css';
	wp_register_style(
		'overblocks-container-block-editor',
		plugins_url( $editor_css, __FILE__ ),
		array(),
		filemtime( "$dir/$editor_css" )
	);

	$style_css = 'build/style-index.css';
	wp_register_style(
		'overblocks-container-block',
		plugins_url( $style_css, __FILE__ ),
		array(),
		filemtime( "$dir/$style_css" )
	);

	register_block_type( 'overblocks/container', [
		'editor_script' => 'overblocks-container-block-editor',
		'editor_style'  => 'overblocks-container-block-editor',
//		'style'         => 'overblocks-container-block',
	] );
}
add_action( 'init', __NAMESPACE__ . '\create_block_overblocks_block_init' );
