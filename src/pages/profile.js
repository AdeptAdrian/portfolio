function profile() {
	return (
		<>
			<div className="profileWrapper">
				<div>
					<div>PICTUREHERE</div>
					<h1>
						<span>Adrian Aheyeu</span>
						<br />
						<span>
							<img></img>
							<span>Based in TX, US</span>
						</span>
					</h1>
				</div>
				<div>FULLSTACK</div>
				<div>
					<div>DEVELOPER</div>
					<a href="mailto:adrian.de.coder@gmail.com">Contact Me</a>
				</div>
				<div>
					<a target="_blank" href="https://www.linkedin.com/in/adrian-aheyeu">
						<button>
							<svg xmlns="http://www.w3.org/2000/svg">
								<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
								<rect width="4" height="12" x="2" y="9"></rect>
								<circle cx="4" cy="4" r="2"></circle>
							</svg>
						</button>
					</a>
					<a target="_blank" href="https://www.instagram.com/adrian.de.coder/">
						<button>
							<svg xmlns="http://www.w3.org/2000/svg">
								<rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
								<path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
								<line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
							</svg>
						</button>
					</a>
					<a href="https://github.com/AdeptAdrian">
						<button class="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input h-10 relative group overflow-hidden rounded-full p-2 bg-transparent text-gray-50 hover:bg-transparent hover:text-gray-50 transition-transform duration-500 hover:scale-105 hover:-rotate-12">
							<svg xmlns="http://www.w3.org/2000/svg">
								<path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
								<path d="M9 18c-4.51 2-5-2-7-2"></path>
							</svg>
						</button>
					</a>
					<a href="">
						<button class="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input h-10 relative group overflow-hidden rounded-full p-2 bg-transparent text-gray-50 hover:bg-transparent hover:text-gray-50 transition-transform duration-500 hover:scale-105 hover:-rotate-12">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="1"
								stroke-linecap="round"
								stroke-linejoin="round"
								class="lucide lucide-linkedin"
							>
								<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
								<rect width="4" height="12" x="2" y="9"></rect>
								<circle cx="4" cy="4" r="2"></circle>
								<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
								<path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
								<path d="M10 9H8"></path>
								<path d="M16 13H8"></path>
								<path d="M16 17H8"></path>
							</svg>
						</button>
					</a>
				</div>
			</div>
		</>
	);
}

export default profile;
