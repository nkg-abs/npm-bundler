import { render } from '@testing-library/react';
import React from 'react';
import Product from './Product';

describe('Product', () => {
	test('renders the component with appropriate classes', () => {
		const { container: { children }} = render(<Product/>);
		const [rootElement] = children;

		expect(rootElement).toBeInTheDocument();
	});
});
