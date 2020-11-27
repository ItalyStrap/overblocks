import {render} from '@testing-library/react';
import Edit from '../edit';

describe('Edit match snapshot', () => {
	test('It should match', () => {
		const attributes = {};
		const setAttributes = jest.fn();

		expect(
			render(
				<Edit
					{
						...{
							attributes,
							setAttributes,
							clientId: 'string',
							className: 'ciao',
						}
					}
				/>
			)
		).toMatchSnapshot();
	});
});
