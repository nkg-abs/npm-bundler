import { render } from '@testing-library/react';
import React from 'react';
import User from './User';

describe('User', () => {
	test('renders the component with appropriate classes', () => {
		const { container: { children }} = render(<User/>);
		const [rootElement] = children;

		expect(rootElement).toBeInTheDocument();
	});
});
