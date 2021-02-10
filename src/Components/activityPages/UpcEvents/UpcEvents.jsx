import { React } from 'react';
import { ReactComponent as Cross }  from "../../vectors/cross.svg";
import './upcevents.css'

const UpcEvents = ({ upcevents, setView }) => (
	<div
		className='individualComponents'
		style={{ display: upcevents ? 'block' : 'none' }}
	>
		<Cross onClick={() =>{
			setView({upcevents: false})
		}}/>
	</div>
);

export default UpcEvents;