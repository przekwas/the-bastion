import { useState, useEffect } from 'react';

function LoaderCard({ length = 1 }) {
	const [blankLoader, setBlankLoader] = useState(true);
	
	useEffect(() => {
		const timer = setTimeout(() => setBlankLoader(false), 500);
		
		return () => {
			clearTimeout(timer);
		};
	}, []);

	if (blankLoader) return <div></div>;

	return (
		<main className="flex flex-col items-center justify-center min-h-screen px-2 lg:px-0">
			{Array(length)
				.fill('')
				.map((_, index) => (
					<div
						key={`loader-card-${index}`}
						className="w-full p-6 mb-4 border border-gray-300 rounded-lg shadow-lg md:w-2/3 lg:w-1/2 xl:w-1/3">
						<div className="w-2/3 h-5 mb-1 bg-gray-300 border rounded-xl"></div>
						<div className="w-1/3 h-5 mb-1 bg-gray-300 border rounded-xl"></div>
						<div className="w-full h-5 mb-1 bg-gray-300 border rounded-xl"></div>
						<div className="w-1/2 h-5 mb-1 bg-gray-300 border rounded-xl"></div>
						<div className="w-1/4 h-5 mb-1 bg-gray-300 border rounded-xl"></div>
						<div className="w-2/3 h-5 bg-gray-300 border rounded-xl"></div>
					</div>
				))}
		</main>
	);
}

export default LoaderCard;
