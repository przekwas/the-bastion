function NavBase({ children }) {
	return (
		<nav className="px-4 py-1 text-indigo-100 bg-indigo-900 md:px-0">
			{children}
		</nav>
	);
}

export default NavBase;