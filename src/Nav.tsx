import React from 'react';
import App from './App';
import logo from './logo.svg';
import lupe from './lupe.svg';
import einkaufswagen from './einkaufswagen.svg';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

function Nav() {
	return (
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
	);
}

export default Nav;
