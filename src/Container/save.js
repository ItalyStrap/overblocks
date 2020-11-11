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

	const Tag = attributes.tagName || "div";

	const htmlAttr = {
		id: "",
		className,
	};

	return (
		<Tag { ...htmlAttr }>
			<InnerBlocks.Content/>
		</Tag>
	);
}
