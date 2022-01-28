import React from 'react';
import App from './App';

function buy() {
	return (
		<div className="rightLayout">
			<div className="BuyBeat">
				<button id="buy">mp3 lease</button>
				<button id="buy">wav lease</button>
				<button id="buy">exclusive</button>
				<button id="buy">unlimited</button>
			</div>
			<div className="commentBox">
				<p id="comments">Here are the comments</p>
			</div>
		</div>
	);
}

export default buy;
