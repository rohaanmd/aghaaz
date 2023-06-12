
import "./_style.scss";

import { Routes, Route } from "react-router-dom";
import Home from "./components/home/home";
// import Home from "./components/home/eventEnded";

import Information from "./components/information/information";
import Registration from "./components/Registration/registration";

function App() {
	return (
		<Routes>
        <Route path="/" element={<Home />} />
        <Route path="/info/:infoName" element={<Information/>} />
        <Route path="/register" element={<Registration />} />
      </Routes>
		
	);
}

export default App;
