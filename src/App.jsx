
import "./_style.scss";

import { Routes, Route } from "react-router-dom";
import Home from "./components/home/home";
import Information from "./components/information/information";


function App() {
	return (
		<Routes>
        <Route path="/" element={<Home />} />
        <Route path="/info/:infoName" element={<Information/>} />
      </Routes>
		
	);
}

export default App;
