/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/#registering-a-block
 */
import {
	registerBlockType
} from '@wordpress/blocks';

import * as container from './Container';

/**
 * Register blocks
 */
const registerOverBlocks = () => {
	[
		container,
	].forEach( ( { name, settings } ) => {

		console.log( name, settings );
			/**
			 * @see https://developer.wordpress.org/block-editor/developers/block-api/#registering-a-block
			 */
			registerBlockType( name, settings );
		}
	);
};

registerOverBlocks();
