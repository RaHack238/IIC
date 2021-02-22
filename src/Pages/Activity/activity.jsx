import React, { useState, useEffect } from 'react';
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
import Update from '../../Components/activityIcons/update/update';

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
	const [updateV, setUpdateV] = useState(false);
	const [iconV, setIconV] = useState(true);
	const mediaMatch = window.matchMedia('(max-width: 720px)');
	const [mobile, setMobile] = useState(mediaMatch.matches);
	useEffect(() => {
		const handler = (e) => setMobile(e.matches);
		mediaMatch.addListener(handler);
		return () => mediaMatch.removeListener(handler);
	});

	return (
		
		<div>
			{console.log(mobile)}
			<div className='layout' style={{ filter: blur ? 'blur(4px)' : '' }}>
				<div className='activity' style={{ width: iconV ? '100%' : '' }}>
					<div
						className='iconButton'
						style={{ display: mobile ? (iconV ? 'none' : 'flex') : 'none' }}
						onClick={() => {
							setIconV(true);
							setUpdateV(false);
						}}
					>
						&rarr;
					</div>
					<ActivityIcons
						setView={setView}
						setBlur={setBlur}
						mobile={mobile}
						display={iconV}
					/>
				</div>
				<div
					className='updateButton'
					style={{ display: mobile ? updateV ? 'none' : 'flex':'none' }}
					onClick={() => {
						setIconV(false);
						setUpdateV(true);
					}}
				>
					{' '}
					&larr;
				</div>
				<div
					className='updateContainer'
					style={{ display: mobile ? (updateV ? 'flex' : 'none') : 'flex' }}
				>
					<div className='container updates'>
						<Update />
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
				<Workshops
					workshopView={view.workshopView}
					setView={setView}
					setBlur={setBlur}
				/>
				<Talks eniView={view.eniView} setView={setView} setBlur={setBlur} />
				<MIC micView={view.micView} setView={setView} setBlur={setBlur} />
				<UpcEvents upcevents={view.upcevents} setView={setView} setBlur={setBlur} />
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
