import "./App.css";
import Navbar from "./pages/navbar.js";
import Profile from "./pages/profile.js";
import Stack from "./pages/stack.js";
import Projects from "./pages/projects.js";
import AboutMe from "./pages/aboutme.js";

function App() {
	return (
		<div>
			<Navbar />
			<Profile />
			<Stack />
			<Projects />
			<AboutMe />
		</div>
	);
}

export default App;
