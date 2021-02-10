import { React, useState } from 'react';
import './activity.css';
import ActivityIcons from "../../Components/activityIcons/activityIcons";
import UpcEvents from '../../Components/activityPages/UpcEvents/UpcEvents';
import Ignite from '../../Components/activityPages/Ignite/ignite';
import IdeaFunnel from '../../Components/activityPages/IdeaFunnel/ideafunnel';
import AcademicProgram from '../../Components/activityPages/AcademicProgram/academicProgram';
import StartupLabs from '../../Components/activityPages/StartupLabs/startup';
import Incubation from '../../Components/activityPages/Incubation/incubation';

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
			<div className='layout' id="mainLayout">
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
				<IdeaFunnel ifView={view.ifView} setView={setView} />
			</div>
                  <div>
				<Ignite igniteView={view.igniteView} setView={setView} />
			</div>
                  <div>
				<AcademicProgram aepView={view.aepView} setView={setView} />
			</div>
                  <div>
				<StartupLabs LabView={view.LabView} setView={setView} />
			</div>
                  <div>
				<Incubation incubationView={view.incubationView} setView={setView} />
			</div>
			<div>
				<UpcEvents upcevents={view.upcevents} setView={setView} />
			</div>
		</div>
	);
};

export default Activity;
