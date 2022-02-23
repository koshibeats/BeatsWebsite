import './App.css';
import Nav from './beatsWebsiteComponents/Nav';
import MainSite from './mainSite/mainSite';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import BeatsWebsite from './beatsWebsiteComponents/BeatsWebsite';

function App() {
	return (
		<Router>
			<div className="App">
				<Nav />
				<Routes>
					<Route path="/beat" element={<BeatsWebsite />} />
					<Route path="/main" element={<MainSite />} />
				</Routes>
			</div>
		</Router>
	);
}

export default App;
