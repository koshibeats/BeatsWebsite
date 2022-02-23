import Buy from './beatsWebsiteComponents/buy';
import Visualizer from './beatsWebsiteComponents/visualizer';
import SongInfo from './beatsWebsiteComponents/songInfo';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function BeatsWebsite() {
	return (
		<div className="App">
			<div className="rapper">
				<SongInfo />

				<div className="middleLayout">
					<Visualizer />
					<Buy />
				</div>
			</div>
		</div>
	);
}
export default BeatsWebsite;
