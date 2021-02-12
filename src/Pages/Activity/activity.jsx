import { React, useState } from 'react';
import './activity.css';
import ActivityIcons from '../../Components/activityIcons/activityIcons';
import UpcEvents from '../../Components/activityPages/UpcEvents/UpcEvents';
import Ignite from '../../Components/activityPages/Ignite/ignite';
import IdeaFunnel from '../../Components/activityPages/IdeaFunnel/ideafunnel';
import AcademicProgram from '../../Components/activityPages/AcademicProgram/academicProgram';
import StartupLabs from '../../Components/activityPages/StartupLabs/startup';
import Incubation from '../../Components/activityPages/Incubation/incubation';
import FieldVisit from '../../Components/activityPages/fieldVisit/fieldVisit';
import Workshops from '../../Components/activityPages/Workshops/workshops';
import Talks from '../../Components/activityPages/Talks/talks';
import MIC from '../../Components/activityPages/MIC/mic';

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
	const [blur, setBlur] = useState(false);
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
			</div>
			<div>
				<Ignite igniteView={view.igniteView} setView={setView} setBlur={setBlur} />
			</div>
			<div>
				<AcademicProgram
					aepView={view.aepView}
					setView={setView}
					setBlur={setBlur}
				/>
			</div>
			<div>
				<StartupLabs LabView={view.LabView} setView={setView} setBlur={setBlur} />
			</div>
			<div>
				<Incubation
					incubationView={view.incubationView}
					setView={setView}
					setBlur={setBlur}
				/>
			</div>
			<div>
				<Workshops
					workshopView={view.workshopView}
					setView={setView}
					setBlur={setBlur}
				/>
			</div>
			<div>
				<Talks eniView={view.eniView} setView={setView} setBlur={setBlur} />
			</div>
			<div>
				<MIC micView={view.micView} setView={setView} setBlur={setBlur} />
			</div>
			<div>
				<UpcEvents upcevents={view.upcevents} setView={setView} setBlur={setBlur} />
			</div>
			<div>
				<FieldVisit
					fieldVisits={view.fieldVisits}
					setView={setView}
					setBlur={setBlur}
				/>
			</div>
		</div>
	);
};

export default Activity;
