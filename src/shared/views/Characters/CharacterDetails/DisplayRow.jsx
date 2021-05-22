function DisplayRow({ label, children }) {
	return (
		<div className="flex flex-col items-start justify-center w-full my-2">
			<div className="text-sm font-bold tracking-tight text-gray-500">{label}</div>
			{children}
		</div>
	);
}

export default DisplayRow;
