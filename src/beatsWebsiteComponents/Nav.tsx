import lupe from '../images/lupe.svg'
import einkaufswagen from '../images/einkaufswagen.svg';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
function Nav() {
	return (
		<div className="navbar">
			<div className="left">
				<Link to="/main">
					<p id="logo">koshi</p>
				</Link>

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
