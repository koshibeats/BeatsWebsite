import { info } from 'console';
import React from 'react';
import App from '../App';
import { beat } from "../data"


function songInfo() {
	return (
		<div className="leftLayout">
			<img id="picture" src="images.jpg" />
			<div className="songInfos">
				<p id="songName">Peter MAguire</p>
				<p id="artistName">euphoria!</p>
				<button id="downloadSong">download for free</button>
			</div>
			<div className="LikeAndDownload">
				<p id="like">♥</p>
				<p id="download">➥</p>
				<p id="share">⇓</p>
			</div>
		</div>
	);
}

export default songInfo;
