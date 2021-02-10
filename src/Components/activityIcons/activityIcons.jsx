import { React, useState } from 'react';
import funnel from './assets/ideaFunnel.svg';
import ignite from './assets/ignite.svg';
import acdprogram from './assets/academicProgram.svg';
import startuplab from './assets/StartupLab.svg';
import visits from './assets/FieldVisit.svg';
import upcevents from './assets/UpcomingEvents.svg';
import incubation from './assets/Incubation.svg';
import mic from './assets/MICActivity.svg';
import talks from './assets/Talks.svg';
import workshops from './assets/Workshops.svg';
import './activityIcons.css'

const ActivityIcons = ({setView}) => {
	const imgStyle = {
		width: '15vw',
		height: '20vh',
		cursor: 'pointer',
	};

	const imgStyle1 = {
		width: '15vw',
		height: '18vh',
		paddingTop: '1.5rem',
		cursor: 'pointer',
	};
	return (
		<div>
			<div className='iconDiv'>
				<img
					src={funnel}
					alt='idea-funnel'
					style={imgStyle}
					onClick={() => {
						setView({
							ifView: true,
						});
					}}
				/>
				<img
					src={ignite}
					alt='ignite'
					style={imgStyle1}
					onClick={() => {
						setView({
							igniteView: true,
						});
					}}
				/>
				<img
					src={acdprogram}
					alt='acdprogram'
					style={imgStyle1}
					onClick={() => {
						setView({
							aepView: true,
						});
					}}
				/>
				<img
					src={startuplab}
					alt='startup-lab'
					style={imgStyle}
					onClick={() => {
						setView({
							LabView: true,
						});
					}}
				/>
			</div>
			<div className='iconDiv'>
				<img
					src={incubation}
					alt='incubation'
					style={imgStyle}
					onClick={() => {
						setView({
							incubationView: true,
						});
					}}
				/>
				<img
					src={workshops}
					alt='workshops'
					style={imgStyle}
					onClick={() => {
						setView({
							workshopView: true,
						});
					}}
				/>
				<img
					src={talks}
					alt='talks'
					style={imgStyle}
					onClick={() => {
						setView({
							eniView: true,
						});
					}}
				/>
				<img
					src={mic}
					alt='mic-activity'
					style={imgStyle}
					onClick={() => {
						setView({
							micView: true,
						});
					}}
				/>
			</div>
			<div className='iconDiv'>
				<img
					src={visits}
					alt='field-visits'
					style={imgStyle1}
					onClick={() => {
						setView({
							fieldVisits: true,
						});
					}}
				/>
				<img
					src={upcevents}
					alt='upc-events'
					style={imgStyle1}
					onClick={() => {
						setView({
							upcevents: true,
						});
					}}
				/>
			</div>
		</div>
	);
};

export default ActivityIcons;