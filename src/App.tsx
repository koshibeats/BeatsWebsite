import React from 'react';
import { useLayoutEffect, useMemo, useState } from 'react';
import logo from './logo.svg';
import lupe from './lupe.svg';
import einkaufswagen from './einkaufswagen.svg';
import './App.css';
import AudioSpectrum from 'react-audio-spectrum2';

function App() {
	const buttons = document.getElementById('play');
	const audio = useMemo(() => new Audio('song.mp3'), []);

	const [ playing, setPlaying ] = useState(false);

	const [ lastClick, setLastClick ] = useState(+new Date());

	useLayoutEffect(
		() => {
			const paused = () => setPlaying(false);

			const resumed = () => setPlaying(true);

			audio.addEventListener('ended', paused);

			audio.addEventListener('pause', paused);

			audio.addEventListener('play', resumed);
		},
		[ audio ]
	);

	function toggle() {
		if (audio.paused) {
			audio.play();
		} else {
			audio.pause();
		}

		setLastClick(+new Date());
	}

	return (
		<div className="App">
			<div className="navbar">
				<div className="left">
					<p id="logo">koshi</p>
					<div className="searchBar">
						<img src={lupe} id="lupe" />

						<input id="inputBox" placeholder="What are you looking for?" />
					</div>
				</div>

				<div className="right">
					<p id="register">signup</p>
					<button id="signIn">login</button>
					<button id="sell">sell</button>
					<img src={einkaufswagen} id="einkaufswagen" />
				</div>
			</div>

			<div className="rapper">
				<div className="leftLayout">
					<img id="picture" src="images.jpg" />
					<div className="songInfos">
						<p id="songName">Peter Maguire</p>
						<p id="artistName">euphoria!</p>
						<button id="downloadSong">download for free</button>
					</div>
					<div className="LikeAndDownload">
						<p id="like">♥</p>
						<p id="download">➥</p>
						<p id="share">⇓</p>
					</div>
				</div>
				<div className="middleLayout">
					<div className="visualizer">
						<button onClick={toggle} id="play">
							⏵︎
						</button>

						<AudioSpectrum
							id="audio-canvas"
							height={50}
							width={1000}
							audioEle={audio}
							capColor={'white'}
							capHeight={0}
							meterWidth={2}
							meterCount={150}
							meterColor={[
								{ stop: 0, color: 'white' },
								{ stop: 0.5, color: 'white' },
								{ stop: 1, color: 'red' }
							]}
							gap={4}
						/>
					</div>
					<hr id="black" />
					<div className="rightLayout">
						<div className="BuyBeat">
							<button id="buy">mp3 lease</button>
							<button id="buy">wav lease</button>
							<button id="buy">exclusive lease</button>
							<button id="buy">unlimited lease</button>
						</div>
						<div className="commentBox">
							<p id="comments">Here are the comments</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
