import Buy from './buy';
import Visualizer from './visualizer';
import SongInfo from './songInfo';
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
