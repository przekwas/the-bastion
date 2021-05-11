import React from 'react';

function BasePage({ children }) {
	return (
		<div className="flex items-center justify-center px-2 mx-auto mt-10 md:px-0 md:w-2/3 lg:w-1/2 xl:w-1/3">
			{children}
		</div>
	);
}

export default BasePage;
