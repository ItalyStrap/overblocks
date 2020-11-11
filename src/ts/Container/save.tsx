// import * as React from 'react';

declare const React: any;

import {
	InnerBlocks,
} from '@wordpress/block-editor';

import PropsInterface from '../Interfaces/PropsInterface';
import HtmlAttrInterface from "./HtmlAttrInterface";

/**
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#save
 */
export default function save( props: any ) {
	const {
		className,
		attributes
	} = props;

	const Tag: any = attributes.tagName || "div";

	const htmlAttr: HtmlAttrInterface = {
		id: "",
		className,
	};

	return (
		<Tag { ...htmlAttr }>
			<InnerBlocks.Content/>
		</Tag>
	);
}
