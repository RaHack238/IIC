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
import iitlogo from '../../Components/Home/assets/iitgoalogo.svg';
import iiclogo from '../../Components/Home/assets/iiclogo.svg';


const Activity = () => {
	const hasWindow = typeof window !== 'undefined';
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
	const [mobile, setMobile] = useState(false);
	const [updateV, setUpdateV] = useState(true);
	const [iconV, setIconV] = useState(false);

	useEffect(() => {
		const width = hasWindow ? window.innerWidth : null;
		if (width < 720) {
			setMobile(true);
		}
		console.log(width);
	}, []);

	return (
		<div>
			{console.log(mobile)}
			{/* <div className="navbar">
				<div className="logos">
					<img src={iitlogo} alt="IIT Goa Logo" style={{width:'8.3vw', marginTop:'0.83vw',marginLeft:'1.5vw',marginRight:'0.8vw'}} />
					<img src={iiclogo} alt="IIC Logo" style={{width:'15.2vw', marginTop:'0.83vw'}}/>
				</div>
				<div className="navbar__center">
					<h1 className="navbar__title">Activity</h1>
				</div>
					<div
						className='iconButton'
						style={{ display: mobile ? (iconV ? 'none' : 'flex') : 'none' }}
						onClick={() => {
							setIconV(true);
							setUpdateV(false)	}}>
							&rarr;
						</div>
			</div> */}
			<div className='layout' style={{ filter: blur ? 'blur(4px)' : '' }}>
			
					<div className='activity' style={{ width: iconV ? '100%' : '' }}>
						<div
							className='iconButton'
							style={{ display: mobile ? (iconV ? 'none' : 'flex') : 'none' }}
							onClick={() => {
								setIconV(true);
								setUpdateV(false)	}}>
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
						style={{ display: updateV ? 'none' : 'flex' }}
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
						style={{ display: mobile ? (updateV ? 'flex' : 'none') : 'flex' }} >
						<div className='container updates'>
							<Update />
						</div>
					</div>
			</div>
			<div>
				<IdeaFunnel ifView={view.ifView} setView={setView} setBlur={setBlur}  mobile={mobile}/>
				<Ignite igniteView={view.igniteView} setView={setView} setBlur={setBlur} mobile={mobile}/>
				<AcademicProgram aepView={view.aepView} setView={setView} setBlur={setBlur} mobile={mobile}/>
				<StartupLabs LabView={view.LabView} setView={setView} setBlur={setBlur} mobile={mobile}/>
				<Incubation
					incubationView={view.incubationView}
					setView={setView}
					setBlur={setBlur}
					mobile={mobile}
				/>
				<Workshops
					workshopView={view.workshopView}
					setView={setView}
					setBlur={setBlur} 
					mobile={mobile} />
				<Talks eniView={view.eniView} setView={setView} setBlur={setBlur} mobile={mobile}/>
				<MIC micView={view.micView} setView={setView} setBlur={setBlur} mobile={mobile} />
				<UpcEvents upcevents={view.upcevents} setView={setView} setBlur={setBlur} mobile={mobile}/>
				<FieldVisit fieldVisits={view.fieldVisits} setView={setView} setBlur={setBlur} mobile={mobile}/>
			</div>
		</div>
	);
};

export default Activity;
