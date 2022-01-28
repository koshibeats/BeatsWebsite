import React from 'react';
import { useLayoutEffect, useMemo, useState, MouseEvent, Component, CSSProperties } from 'react';
import logo from './logo.svg';
import lupe from './lupe.svg';
//import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import einkaufswagen from './einkaufswagen.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AudioSpectrum from 'react-audio-spectrum2';
import start from './start';
import Nav from './Nav';
import Buy from './buy';
import Visualizer from './visualizer';
import SongInfo from './songInfo';
import MainSite from './mainSite';
import App from './App';

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
