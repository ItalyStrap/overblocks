import { __ } from '@wordpress/i18n';
import {Fragment} from '@wordpress/element';

import {
	InspectorControls,
	RichText
} from '@wordpress/block-editor';

import {
	PanelBody
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
		isSelected,
		clientId
	} = props;

	const {
		url,
		tagName,
		text
	} = attributes;

	const toggleAttribute = ( attributeName ) => ( newValue ) =>
		setAttributes( { [ attributeName ]: newValue } );

	const Tag = tagName || "a";

	const htmlAttr = {
		className,
		href: url || undefined
	};

	return (
		<Fragment>
			<InspectorControls>
				<PanelBody title={ __( 'Dimension' ) }>
				</PanelBody>
			</InspectorControls>

			<Tag {...htmlAttr}>
				<RichText
					tagName="span"
					onChange={( text ) => setAttributes( { text } )}
					value={text}
					placeholder={ __( 'Add text…', 'overblocks' ) }
					isSelected={ isSelected }
					keepPlaceholderOnFocus
				/>
			</Tag>
		</Fragment>
	);
}
