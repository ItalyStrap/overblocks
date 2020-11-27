import {
	InnerBlocks,
} from '@wordpress/block-editor';
import {text} from "@wordpress/components/build/text/styles/text-mixins";

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
		text
	} = attributes;

	const Tag = tagName || "a";

	let style;

	const htmlAttr = {
		// id: "",
		className,
		style
	};

	return (
		<Tag { ...htmlAttr }>
			{{text}}
		</Tag>
	);
}
