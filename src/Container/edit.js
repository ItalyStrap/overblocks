import { __ } from '@wordpress/i18n';
import {Fragment} from '@wordpress/element';
import {useSelect} from '@wordpress/data';

import {
	InnerBlocks,
	InspectorControls,
	useBlockProps,
	__experimentalUseInnerBlocksProps as useInnerBlocksProps,
} from '@wordpress/block-editor';

import {
	PanelBody,
	SelectControl,
	__experimentalUnitControl as UnitControl
} from '@wordpress/components';

/**
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 *
 * @param props
 * @returns {JSX.Element}
 */
export default function edit(props) {

	const {
		className,
		attributes,
		setAttributes,
		clientId
	} = props;

	const {
		tagName,
		maxWidth,
		// verticalAlignment
	} = attributes;

	const toggleAttribute = ( attributeName ) => ( newValue ) =>
		setAttributes( { [ attributeName ]: newValue } );

	const hasInnerBlocks = useSelect(
		(select) => {
			const {getBlock} = select('core/block-editor');
			const block = getBlock(clientId);
			return !!(block && block.innerBlocks.length);
		},
		[clientId]
	);

	console.log(hasInnerBlocks);

	const onChangeElem = (tagName) => {
		setAttributes({tagName});
	};

	// const onChangeVerticalAlignment = (verticalAlignment: string) => {
	// 	props.setAttributes({verticalAlignment});
	// };

	const Tag = tagName || "div";

	const widthWithUnit = Number.isFinite( maxWidth ) ? maxWidth + '%' : maxWidth;

	const htmlAttr = {
		// id: "",
		className,
		style: widthWithUnit ? { maxWidth: widthWithUnit } : undefined,
	};

	// const widthWithUnit = Number.isFinite( width ) ? width + '%' : width;
	// const blockProps = useBlockProps( {
	// 	className,
	// 	// className: classes,
	// 	style: widthWithUnit ? { maxWidth: widthWithUnit } : undefined,
	// } );
	// const innerBlocksProps = useInnerBlocksProps( blockProps, {
	// 	// templateLock,
	// 	// renderAppender: hasChildBlocks
	// 	// 	? undefined
	// 	// 	: InnerBlocks.ButtonBlockAppender,
	// } );

	return (
		<Fragment>
			{/*<BlockControls>*/}
			{/*	<BlockVerticalAlignmentToolbar*/}
			{/*		onChange={ onChangeVerticalAlignment }*/}
			{/*		value={ verticalAlignment }*/}
			{/*	/>*/}
			{/*</BlockControls>*/}
			<InspectorControls>
				<PanelBody title={ __( 'Element Type', 'overblocks' ) }>
					<SelectControl value={tagName} onChange={onChangeElem} options={[
						{label: "div", value: "div"},
						{label: "section", value: 'section'},
						{label: "main", value: 'main'},
						{label: "aside", value: 'aside'},
						{label: "article", value: 'article'},
						{label: "header", value: 'header'},
						{label: "footer", value: 'footer'},
						{label: "nav", value: 'nav'},
						// {label: "dl", value: 'dl'},
						// {label: "dd", value: 'dd'},
						// {label: "dt", value: 'dt'}
					]}
					/>
				</PanelBody>
				<PanelBody title={ __( 'Dimension' ) }>
					<UnitControl
						label={ __( 'Width' ) }
						labelPosition="edge"
						__unstableInputWidth="80px"
						value={ maxWidth || '' }
						onChange={ ( nextWidth ) => {
							nextWidth =
								0 > parseFloat( nextWidth ) ? '0' : nextWidth;
							setAttributes( { maxWidth: nextWidth } );
						} }
					/>
				</PanelBody>
			</InspectorControls>

			{/*<Tag {...htmlAttr}>*/}
			<Tag {...htmlAttr}>
				<InnerBlocks
					renderAppender={(
						hasInnerBlocks ?
							undefined :
							() => <InnerBlocks.ButtonBlockAppender/>
					)}
				/>
			</Tag>
		</Fragment>
	);
}
