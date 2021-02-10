import { React } from 'react';
import { ReactComponent as Cross } from '../../vectors/cross.svg';
import upcoming from '../../vectors/upcoming2.svg';
import './upcevents.css';

const UpcEvents = ({ upcevents, setView }) => (
	<div
		className='individualComponents'
		style={{ display: upcevents ? 'block' : 'none' }}
	>
		<Cross
			className='cross'
			onClick={() => {
				setView({ upcevents: false });
			}}
		/>
		<h2 style={{ color: 'var(--orange)' }}>Upcoming Events</h2>
		<div className='upce-content'>
			<img src={upcoming} className='upcoming' />
			<div style={{display: 'inline-block', width: '65vw'}}>
				<span>COMING SOON</span>
			</div>
		</div>
	</div>
);

export default UpcEvents;
