/**
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './style.scss';

import icon from './icon.svg';

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
	title: __( 'Container', 'overblocks' ),

	description: __(
		'Example block written with ESNext standard and JSX support – build step required.',
		'overblocks'
	),

	icon: {
		// Specifying a background color to appear with the icon e.g.: in the inserter.
		background: '#fff',
		// Specifying a color for the icon (optional: if not set, a readable color will be automatically defined)
		foreground: '#259ccb',
		// Specifying an icon for the block
		src: icon,
		// src: 'smiley',
	},

	keywords: [ __( 'container', 'overblocks' ), __( 'wrapper', 'overblocks' ), __( 'box', 'overblocks' ) ],

	/**
	 * Optional block extended support features.
	 */
	supports: {
		"anchor": true,
		"align": ['wide', 'full'],
		"color": {
			"gradients": true,
			"link": true
		},
		"spacing": {
			"padding": true
		}
	},

	// attributes: {
	// 	tagName: {
	// 		type: 'string',
	// 		default: "div"
	// 	},
	// 	backgroundColor: {
	// 		type: 'string'
	// 	}
	// },

	example: {
		attributes: {
			tagName: "section",
			style: {
				color: {
					text: '#000000',
					background: '#b5b5b5',
				},
			},
		},
		viewportWidth: 400,
		innerBlocks: [
			{
				name: 'core/paragraph',
				attributes: {
					/* translators: example text. */
					content: __(
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent et eros eu felis.'
					),
				},
			},
		],
	},

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
