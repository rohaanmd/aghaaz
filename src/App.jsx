import Footer from "./components/footer/footer";
import Headers from "./components/header/header";
import "./_style.scss";
import "./responsiveness.scss";
import LandingPage from "./components/landingPage/landing";

function App() {
	return (
		<div classname="App">
			<Headers />
			<LandingPage />
			<Footer />
		</div>
	);
}

export default App;
