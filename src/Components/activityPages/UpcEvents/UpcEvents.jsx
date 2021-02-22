import { React } from 'react';
import { ReactComponent as Cross } from '../../vectors/cross.svg';
import upcoming from '../../vectors/upcoming2.svg';
import './upcevents.css';

const UpcEvents = ({ upcevents, setView, setBlur,mobile }) => (
	<div
		className='individualComponents'
		style={{ display: upcevents ? 'block' : 'none' }}
	>
		<Cross
			className='cross'
			onClick={() => {
				setView({ upcevents: false });
				setBlur(false);
			}}
		/>
		<h2 style={{ color: 'var(--orange)',textAlign: 'center' }}>Upcoming Events</h2>
		<div className='upce-content' >
			<div className="images" style={{display: mobile ? 'none' : 'block'}}>
				<img src={upcoming} className='upcoming' />
			</div>
			<div style={{textAlign:'center'}}>
				<span style={{fontSize: mobile? '30px' : '50px'}}>COMING SOON</span>
			</div>
		</div>
	</div> 
);

export default UpcEvents;
