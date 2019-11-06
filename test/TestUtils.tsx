import React from 'react';

import { createGenerateClassName, StylesProvider } from '@material-ui/core/styles';
import { render } from '@testing-library/react';

function MyStyles({ children }: any) {
	// make a copy of the data because the state is mutated below in one of the tests for clicks
	// then the state is used again for comparison later, which causes tests to be dependent on execution
	// order and fail.
	const generateClassName = createGenerateClassName({
		disableGlobal: true,
		productionPrefix: 'test',
	});

	return <StylesProvider generateClassName={generateClassName}>{children}</StylesProvider>;
}

const customRender = (ui: any, options?: any) => render(ui, { wrapper: MyStyles, ...options });

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render };
