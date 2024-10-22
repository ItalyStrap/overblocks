import {
	InnerBlocks,
} from '@wordpress/block-editor';

/**
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#save
 */
export default function save( props ) {
	const {
		className,
		attributes
	} = props;

	const {
		tagName,
		maxWidth,
	} = attributes;

	const Tag = tagName || "div";

	let style;

	if ( maxWidth ) {
		// Numbers are handled for backward compatibility as they can be still provided with templates.
		style = { maxWidth: Number.isFinite( maxWidth ) ? maxWidth + '%' : maxWidth };
	}

	const htmlAttr = {
		// id: "",
		className,
		style
	};

	return (
		<Tag { ...htmlAttr }>
			<InnerBlocks.Content/>
		</Tag>
	);
}
