import { React, useState } from 'react';
import './activity.css';
import ActivityIcons from "../../Components/activityIcons/activityIcons";
import UpcEvents from '../../Components/activityPages/UpcEvents/UpcEvents'

const Activity = () => {
	
	const [view, setView] = useState({
		ifView: false,
		igniteView: false,
		aepView: false,
		LabView: false,
		incubationView: false,
		workshopView: false,
		eniView: false,
		micView: false,
		fieldVisits: false,
		upcevents: false,
	});
	return (
		<div>
			<div className='layout'>
				<div className='activityIcons'>
					<ActivityIcons setView={setView} />
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
			<div>
				<UpcEvents upcevents={view.upcevents} setView={setView} />
			</div>
		</div>
	);
};

export default Activity;
