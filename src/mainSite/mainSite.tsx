import React from 'react';
import App from '../App';
import songInfo from '../beatsWebsiteComponents/songInfo';
import { beat } from "../data"
import css from "./mainSite.module.scss"

interface Args{
	info : beat[];
}
function mainSite() {
	return (
		<div className="App">
			<div className={css.beat}>
				Hi
			</div>
		</div>
	);
}

export default mainSite;
