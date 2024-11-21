function navbar() {
	return (
		<>
			<div className="fixed top-10 left-1/2 -translate-x-1/2 w-full md:w-auto">
				<nav className="relative ">
					<ul className="relative grid grid-cols-4 items-center border border-white/10 rounded-full backdrop-blur-md py-2 shadow-lg mx-2 md:mx-2">
						<li className="relative md:px-4 px-2 py-2 text-center cursor-pointer  text-neutral-300">
							<a href="#">Profile</a>
						</li>
						<li className="relative md:px-4 px-2 py-2 text-center cursor-pointer text-neutral-300">
							<a href="#stack">My Stack</a>
						</li>
						<li className="relative md:px-4 px-2 py-2 text-center cursor-pointer text-neutral-300">
							<a href="#projects">My Projects</a>
						</li>
						<li className="relative md:px-4 px-2 py-2 text-center cursor-pointer text-neutral-300">
							<a href="#aboutme">About Me</a>
						</li>
					</ul>
				</nav>
			</div>
		</>
	);
}

export default navbar;
