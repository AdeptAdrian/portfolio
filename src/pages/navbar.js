function navbar() {
	return (
		<>
			<div className="fixed left-1/2 -translate-x-1/2 w-full md:w-auto">
				<nav className="relative ">
					<ul className="relative grid grid-cols-4 items-center">
						<li className="relative px-2 py-2 text-center cursor-pointer border border-white/10 backdrop-blur-md rounded-full text-neutral-300">
							<a href="#">Profile</a>
						</li>
						<li className="relative px-2 py-2 text-center cursor-pointer border border-white/10 backdrop-blur-md rounded-full text-neutral-300">
							<a href="#stack">My Stack</a>
						</li>
						<li className="relative px-2 py-2 text-center cursor-pointer border border-white/10 backdrop-blur-md rounded-full text-neutral-300">
							<a href="#projects">My Projects</a>
						</li>
						<li className="relative px-2 py-2 text-center cursor-pointer border border-white/10 backdrop-blur-md rounded-full text-neutral-300">
							<a href="#aboutme">About Me</a>
						</li>
					</ul>
				</nav>
			</div>
		</>
	);
}

export default navbar;
