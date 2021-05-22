import React from 'react';

function BasePage({ children }) {
	return (
		<div className="flex items-center justify-center px-2 mx-auto mt-10 lg:px-0 lg:w-2/3 xl:w-1/2">
			{children}
		</div>
	);
}

export default BasePage;
