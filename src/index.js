/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/#registering-a-block
 */
import {
	registerBlockType
} from '@wordpress/blocks';

import * as container from './Container';
// import * as button from './Button';

/**
 * Register blocks
 */
const registerOverBlocks = () => {
	[
		container,
		// button,
	].forEach( ( { name, settings } ) => {

			/**
			 * @see https://developer.wordpress.org/block-editor/developers/block-api/#registering-a-block
			 */
			registerBlockType( name, settings );
		}
	);
};

registerOverBlocks();
