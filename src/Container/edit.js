import {Fragment} from '@wordpress/element';
import {useSelect} from '@wordpress/data';

import {InnerBlocks, InspectorControls,} from '@wordpress/block-editor';

import {PanelBody, SelectControl,} from '@wordpress/components';

/**
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

// import PropsInterface from "../Interfaces/PropsInterface";
// import HtmlAttrInterface from "./HtmlAttrInterface";

export default function edit(props) {

	const {
		className,
		attributes,
		clientId
	} = props;

	const {
		tagName,
		// verticalAlignment
	} = attributes;

	const hasInnerBlocks = useSelect(
		(select) => {
			const {getBlock} = select('core/block-editor');
			const block = getBlock(clientId);
			return !!(block && block.innerBlocks.length);
		},
		[clientId]
	);

	const onChangeElem = (tagName) => {
		props.setAttributes({tagName});
	};

	// const onChangeVerticalAlignment = (verticalAlignment: string) => {
	// 	props.setAttributes({verticalAlignment});
	// };

	const Tag = tagName || "div";

	const htmlAttr = {
		id: "",
		className,
	};

	return (
		<Fragment>
			{/*<BlockControls>*/}
			{/*	<BlockVerticalAlignmentToolbar*/}
			{/*		onChange={ onChangeVerticalAlignment }*/}
			{/*		value={ verticalAlignment }*/}
			{/*	/>*/}
			{/*</BlockControls>*/}
			<InspectorControls>
				<PanelBody title="Element Type">
					<SelectControl value={tagName} onChange={onChangeElem} options={[
						{label: "div", value: "div"},
						{label: "section", value: 'section'},
						{label: "main", value: 'main'},
						{label: "aside", value: 'aside'},
						{label: "article", value: 'article'},
						{label: "header", value: 'header'},
						{label: "footer", value: 'footer'},
						{label: "nav", value: 'nav'},
						{label: "dl", value: 'dl'},
						{label: "dd", value: 'dd'},
						{label: "dt", value: 'dt'}
					]}
					/>
				</PanelBody>
			</InspectorControls>

			<Tag {...htmlAttr}>
				<InnerBlocks
					renderAppender={(
						hasInnerBlocks ?
							undefined :
							() => <InnerBlocks.ButtonBlockerAppender/>
					)}
				/>
			</Tag>
		</Fragment>
	);
}
