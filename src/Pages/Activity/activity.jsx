import { React } from 'react';
import './activity.css';
import funnel from './ideaFunnel.svg';
import ignite from './ignite.svg';
import acdprogram from './academicProgram.svg';
import startuplab from './StartupLab.svg';
import visits from './FieldVisit.svg';
import upcevents from './UpcomingEvents.svg';
import incubation from './Incubation.svg';
import mic from './MICActivity.svg';
import talks from './Talks.svg';
import workshops from './Workshops.svg';

const Activity = () => {
	const imgStyle = {
		width: '15vw',
		height: '20vh',
		cursor: 'pointer'
	};

	const imgStyle1 = {
		width: '15vw',
		height: '18vh',
		paddingTop: '1.5rem',
		cursor: 'pointer',
	};

	const imgStyle2 = {
		width: '12vw',
		height: '18vh',
		cursor: 'pointer',
	};

      

	return (
		<div className='layout'>
			<div className='activityIcons'>
				<div className='iconDiv'>
					<img src={funnel} alt='idea-funnel' style={imgStyle}  onClick={() => onClick()} />
					<img src={ignite} alt='ignite' style={imgStyle1} onClick={() => onClick()} />
					<img src={acdprogram} alt='acdprogram' style={imgStyle1} onClick={() => onClick()}  />
					<img src={startuplab} alt='startup-lab' style={imgStyle} onClick={() => onClick()} />
				</div>
				<div className='iconDiv'>
					<img src={incubation} alt='incubation' style={imgStyle} onClick={() => onClick()}  />
					<img src={workshops} alt='workshops' style={imgStyle} onClick={() => onClick()} />
					<img src={talks} alt='talks' style={imgStyle} onClick={() => onClick()} />
					<img src={mic} alt='mic-activity' style={imgStyle} onClick={() => onClick()} />
				</div>
				<div className='iconDiv'>
					<img src={visits} alt='field-visits' style={imgStyle1} onClick={() => onClick()} />
					<img src={upcevents} alt='upc-events' style={imgStyle1} onClick={() => onClick()} />
				</div>
			</div>
			<div className='container updates'>
				<div style={{ display: 'flex', flexDirection: 'column' }}>
					<h1 style={{ color: 'var(--dark-blue)', marginTop: '4rem' }}>Updates</h1>
					<div className='individualUpdates'>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
							tempor incididunt ut labore et dolore magna aliqua
							<hr />
						</p>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
							tempor incididunt ut labore et dolore magna aliqua
							<hr />
						</p>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
							tempor incididunt ut labore et dolore magna aliqua
							<hr />
						</p>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
							tempor incididunt ut labore et dolore magna aliqua
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Activity;
