/**
 * https://developer.wordpress.org/block-editor/developers/block-api/block-registration/#icon-optional
 * https://developer.wordpress.org/block-editor/components/svg/
 */

import { G, Path, SVG } from '@wordpress/components';

export default () => (
	<SVG
		viewBox="0 0 24 24"
		xmlns="http://www.w3.org/2000/svg"
	>
		<Path fill-rule="evenodd" d="M14 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
	</SVG>
);

// <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
// <path fill-rule="evenodd" d="M14 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/></svg>
