import {render} from '@testing-library/react';
// import {useSelect} from "@wordpress/data";
import TagNameComponent from '../TagNameComponent';

// jest.mock( '@wordpress/data/src/components/use-select', () => {
// 	return jest.fn();
// } );

// jest.mock('@wordpress/data', () => ({
// 	...jest.requireActual('@wordpress/data'),
// 	useSelect: jest.fn(),
// }));
//
const useSelect = jest.fn();
console.log(useSelect);
describe('TagNameComponent', () => {

	test('should be return a DIV element by default', () => {
		useSelect.mockImplementation( () => ( {
			name: 'ciao',
			attributes: null,
		} ) );

		const { container } = render( <TagNameComponent /> );
		let expected = "DIV";
		expect( container.tagName ).toContain( expected );

		expect( useSelect ).toBeCalledTimes(1);
	});
});






// // import { screen } from '@testing-library/dom';
// import {render} from '@testing-library/react';
// import { renderHook, act } from "@testing-library/react-hooks";
//
// // import {InnerBlocks} from "@wordpress/block-editor";
// import {useSelect} from "@wordpress/data";
//
// import TagNameComponent from '../TagNameComponent';
//
// jest.mock( '@wordpress/data/src/components/use-select', () => {
// 	return jest.fn();
// } );

// jest.mock('@wordpress/data/src/components/use-select', () => ({
// 	// useSelect: jest.fn()
// 	// default: jest.fn()
// 	default: jest.fn().mockImplementation( () => ( {
// 		name: null,
// 		attributes: null,
// 	} ) )
// }));

// jest.mock('@wordpress/data', () => ({
// 	// useSelect: jest.fn()
// 	// default: jest.fn()
// 	default: jest.fn().mockImplementation( () => ( {
// 		name: null,
// 		attributes: null,
// 	} ) )
// }));

// jest.mock("@wordpress/block-editor", () => {
// 	return function InnerBlocks(props) {
// 		return <div></div>;
// 	};
// });

describe('TagNameComponent', () => {

	// let mockClientId = "1";
	//
	// test('should be return a DIV element by default', () => {
	// 	const { result } = renderHook(() => useSelect((select)=>{}));
	// 	console.log(result);
	// 	// useSelect.mockImplementation( () => ( {
	// 	// useSelect.mockReturnValue( () => ( {
	// 	// 	name: null,
	// 	// 	attributes: null,
	// 	// } ) );
	//
	// 	// ciao.mockImplementation( () => ( {
	// 	// 	name: null,
	// 	// 	attributes: null,
	// 	// } ) );
	//
	// 	const { container, debug, getByRole } = render( <TagNameComponent /> );
	// 	let expected = "DIV";
	// 	// expect( container.tagName ).toContain( expected );
	//
	// 	expect( useSelect ).toBeCalledTimes(1);
	// });

	// test('it should works', () => {
	// 	let clientId = "1";
	// 	const attributes = {};
	// 	const setAttributes = jest.fn();
	// 	const { container, debug, getByRole } = render( <TagNameComponent /> );
	//
	// 	// screen.debug( screen.getByRole('heading') );
	// 	// screen.debug( container );
	// 	// debug( container.firstChild );
	//
	// 	// let Expected = <div>Hello</div>;
	//
	//
	// 	expect( container.tagName ).toContain( "DIV" );
	// 	// expect( screen.getByRole('heading') ).toBe('<h1>Hello</h1>');
	// 	// expect( screen.getByRole('heading') ).toContain(<h1>Hello</h1>);
	// 	// expect( screen.getByRole('heading') ).toMatchSnapshot();
	// });

	// test('it should works', () => {
	// 	const attributes = {};
	// 	const setAttributes = jest.fn();
	// 	const { container } = render( <TagNameComponent /> );
	//
	// 	// screen.debug( screen.getByRole('heading') );
	// 	screen.debug( container );
	//
	// });
		// test('adds 1 + 2 to equal 3', () => {
		// 	expect(1+2).toBe(3);
		// });

});

// test('adds 1 + 2 to equal 3', () => {
// 	expect(1+2+3).toBe(6);
// });
//
//
// test('adds 1 + 2 to equal 3', () => {
// 	expect(1+2+3+4).toBe(10);
// });
