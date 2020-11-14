import {InnerBlocks} from "@wordpress/block-editor";
import {useSelect} from "@wordpress/data";

export default function TagNameComponent( props ) {

	const Tag = props.tagName || "div";

	const {
		className,
		attributes,
		clientId
	} = props;

	const hasInnerBlocks = useSelect(
		(select) => {
			const {getBlock} = select('core/block-editor');
			const block = getBlock(clientId);
			return !!(block && block.innerBlocks.length);
		},
		[clientId]
	);

	return (
		<Tag>
			<InnerBlocks
				renderAppender={(
					hasInnerBlocks ?
						undefined :
						() => <InnerBlocks.ButtonBlockAppender/>
				)}
			/>
		</Tag>
	);
}
