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
import workshops from './assets/workshops.svg';
import './activityIcons.css';

const ActivityIcons = ({ setView, setBlur, display, mobile }) => {
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
		<div
			className='activityIcons'
			style={{ display: mobile ? (display ? 'flex' : 'none') : '' }}
		>
			<div className='iconDiv'>
				<img
					src={funnel}
					alt='idea-funnel'
					style={imgStyle}
					onClick={() => {
						setView({
							ifView: true,
						});
						setBlur(true);
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
						setBlur(true);
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
						setBlur(true);
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
						setBlur(true);
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
						setBlur(true);
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
						setBlur(true);
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
						setBlur(true);
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
						setBlur(true);
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
						setBlur(true);
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
						setBlur(true);
					}}
				/>
			</div>
		</div>
	);
};

export default ActivityIcons;
