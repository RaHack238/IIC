import { React, useState } from 'react';
import './activity.css';
import ActivityIcons from '../../Components/activityIcons/activityIcons';
import UpcEvents from '../../Components/activityPages/UpcEvents/UpcEvents';
import FieldVisit from '../../Components/activityPages/fieldVisit/fieldVisit';
import Ignite from '../../Components/activityPages/Ignite/ignite';
import IdeaFunnel from '../../Components/activityPages/IdeaFunnel/ideafunnel';
import AcademicProgram from '../../Components/activityPages/AcademicProgram/academicProgram';
import StartupLabs from '../../Components/activityPages/StartupLabs/startup';
import Incubation from '../../Components/activityPages/Incubation/incubation';
import MicView from '../../Components/activityPages/micView/micView';
import Eni from '../../Components/activityPages/eni/eni';

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
	const [blur, setBlur] = useState(false)
	return (
		<div>
			<div className='layout' style={{ filter: blur ? 'blur(4px)' : '' }}>
				<div className='activityIcons'>
					<ActivityIcons setView={setView} setBlur={setBlur} />
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
				<IdeaFunnel ifView={view.ifView} setView={setView} setBlur={setBlur} />
				<Ignite igniteView={view.igniteView} setView={setView} setBlur={setBlur} />
				<AcademicProgram
					aepView={view.aepView}
					setView={setView}
					setBlur={setBlur}
				/>
				<StartupLabs LabView={view.LabView} setView={setView} setBlur={setBlur} />
				<Incubation
					incubationView={view.incubationView}
					setView={setView}
					setBlur={setBlur}
				/>
				<UpcEvents upcevents={view.upcevents} setView={setView} setBlur={setBlur} />
				<FieldVisit
					fieldVisits={view.fieldVisits}
					setView={setView}
					setBlur={setBlur}
				/>
				<MicView micView={view.micView} setView={setView} setBlur={setBlur} />
				<Eni eniView={view.eniView} setView={setView} setBlur={setBlur} />
			</div>
		</div>
	);
};

export default Activity;
