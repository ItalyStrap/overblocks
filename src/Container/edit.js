import classnames from 'classnames';

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
		minHeight,
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

	const onChangeTagName = (tagName) => {
		setAttributes({tagName});
	};

	// const onChangeVerticalAlignment = (verticalAlignment: string) => {
	// 	props.setAttributes({verticalAlignment});
	// };

	const Tag = tagName || "div";

	const widthWithUnit = Number.isFinite( maxWidth ) ? maxWidth + '%' : maxWidth;

	// const blockProps = useBlockProps( {
	// 	className,
	// 	style: widthWithUnit ? { maxWidth: widthWithUnit } : undefined,
	// } );

	const htmlAttr = {
		className,
		// style: widthWithUnit ? { maxWidth: widthWithUnit } : undefined,
		style: {
			maxWidth: widthWithUnit
		},
	};

	function parseValueToZero(nextWidth) {
		return ( 0 > parseFloat(nextWidth) ) ? '0' : nextWidth;
	}

	const onChangeUnitControl = ( attributeName ) => ( nextWidth ) => {
		setAttributes( { [ attributeName ]: parseValueToZero(nextWidth) } );
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
					<SelectControl value={tagName} onChange={onChangeTagName} options={[
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
						label={ __( 'Max width' ) }
						labelPosition="edge"
						__unstableInputWidth="80px"
						value={ maxWidth || '' }
						onChange={onChangeUnitControl("maxWidth")}
					/>
				</PanelBody>
			</InspectorControls>

			<Tag {...htmlAttr}>
			{/*<Tag {...blockProps}>*/}
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
