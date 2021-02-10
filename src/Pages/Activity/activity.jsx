import { React } from 'react';
import { Table } from 'react-bootstrap';
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
	};

	const imgStyle1 = {
		width: '15vw',
		height: '18vh',
		paddingTop: '1.5rem',
	};

	const imgStyle2 = {
		width: '12vw',
		height: '18vh',
	};

	return (
		<div className='layout'>
			<div className='activityIcons'>
				<Table responsive='sm' style={{ padding: '1.5rem' }}>
					<tr>
						<td>
							<img src={funnel} alt='idea-funnel' style={imgStyle} />
						</td>
						<td>
							<img src={ignite} alt='ignite' style={imgStyle1} />
						</td>
						<td>
							<img src={acdprogram} alt='acdprogram' style={imgStyle1} />
						</td>
						<td>
							<img src={startuplab} alt='startup-lab' style={imgStyle} />
						</td>
					</tr>
					<tr>
						<td>
							<img src={incubation} alt='incubation' style={imgStyle} />
						</td>
						<td>
							<img src={workshops} alt='workshops' style={imgStyle} />
						</td>
						<td>
							<img src={talks} alt='talks' style={imgStyle} />
						</td>
						<td>
							<img src={mic} alt='mic-activity' style={imgStyle} />
						</td>
					</tr>
					<tr>
						<td style={{ textAlign: 'center' }}>
							<img src={visits} alt='field-visits' style={imgStyle2} />
						</td>
						<td style={{ textAlign: 'center' }}>
							<img src={upcevents} alt='upc-events' style={imgStyle2} />
						</td>
					</tr>
				</Table>
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
