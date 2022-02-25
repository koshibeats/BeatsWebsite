import React from 'react';
import AudioSpectrum from 'react-audio-spectrum2';
import App from '../App';
import { useLayoutEffect, useMemo, useState } from 'react';

function Visualizer() {
	const buttons = document.getElementById('play');
	const glass = document.getElementById('lupe');
	const audio = useMemo(() => new Audio('song.mp3'), []);
	const buyButton = document.getElementById('buy');
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
		<span>
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
		</span>
	);
}
export default Visualizer;
