/**
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';
import { createBlock } from '@wordpress/blocks';

/**
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './style.scss';

// import icon from './icon.js';

/**
 * Internal dependencies
 */
import edit from './edit';
import save from './save';

import metadata from './block.json';

const { name } = metadata;

export {
	metadata,
	name
};

export const settings = {
	...metadata,
	title: __( 'Button', 'overblocks' ),

	description: __(
		'Create custom button.',
		'overblocks'
	),

	icon: {
		// Specifying a background color to appear with the icon e.g.: in the inserter.
		background: '#fff',
		// Specifying a color for the icon (optional: if not set, a readable color will be automatically defined)
		foreground: '#259ccb',
		// Specifying an icon for the block
		// src: icon,
		src: 'smiley',
	},

	keywords: [
		__( 'button', 'overblocks' ),
	],

	/**
	 * Optional block extended support features.
	 */
	supports: {
		"anchor": true,
		"align": true,
		"color": {
			"gradients": true,
			"link": true
		},
		"spacing": {
			"padding": true,
			"margin": true,
		}
	},

	// example: {
	// 	attributes: {
	// 		tagName: "section",
	// 		style: {
	// 			color: {
	// 				text: '#000000',
	// 				background: '#b5b5b5',
	// 			},
	// 		},
	// 	},
	// 	viewportWidth: 400,
	// 	innerBlocks: [
	// 		{
	// 			name: 'core/paragraph',
	// 			attributes: {
	// 				/* translators: example text. */
	// 				content: __(
	// 					'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent et eros eu felis.'
	// 				),
	// 			},
	// 		},
	// 	],
	// },

	// transforms: {
	// 	from: [
	// 		{
	// 			type: 'block',
	// 			blocks: [ 'core/group' ],
	// 			transform: ( attributes, innerBlocks ) => {
	// 				return createBlock(
	// 					name,
	// 					attributes,
	// 					innerBlocks
	// 				);
	// 			},
	// 		},
	// 	],
	// 	to: [
	// 		{
	// 			type: 'block',
	// 			blocks: [ name ],
	// 			transform: ( attributes, innerBlocks ) => {
	// 				return createBlock(
	// 					'core/group',
	// 					attributes,
	// 					innerBlocks
	// 				);
	// 			},
	// 		},
	// 	]
	// },

	// Register block styles.
	// styles: [
	// 	// Mark style as default.
	// 	{
	// 		name: 'default',
	// 		label: __( 'Rounded' ),
	// 		isDefault: true
	// 	},
	// 	{
	// 		name: 'outline',
	// 		label: __( 'Outline' )
	// 	},
	// 	{
	// 		name: 'squared',
	// 		label: __( 'Squared' )
	// 	},
	// ],

	// variations: [
	// 	{
	// 		name: 'blue',
	// 		title: __( 'Blue Quote' ),
	// 		isDefault: true,
	// 		attributes: { className: 'is-style-blue-quote' },
	// 		icon: 'format-quote',
	// 	},
	// ],

	/**
	 * @see ./edit.js
	 */
	edit,

	/**
	 * @see ./save.js
	 */
	save,
};
