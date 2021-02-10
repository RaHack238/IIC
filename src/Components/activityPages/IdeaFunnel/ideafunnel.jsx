import { React } from 'react';
import { ReactComponent as Cross }  from "../../vectors/cross.svg";
import './ideafunnel.css';
import ideafunnel from '../../vectors/ideaFunnel2.svg';
import ideafunnelposter from '../../vectors/ideafunnel3.svg';
import funnel from '../../vectors/ideafunnel4.svg';

const IdeaFunnel = ({ ifView, setView, setBlur }) => {
	const imgStyle = {
		width: '30vw',
		height: '30vh',
		margin: '1rem',
	};

	return (
		<div
			className='individualComponents'
			style={{ display: ifView ? 'block' : 'none' }}
		>
			<Cross
				className='cross'
				onClick={() => {
					setView({ igniteView: false });
					setBlur(false);
				}}
			/>

			<div className='images'>
				<img src={ideafunnel} alt='icon' style={imgStyle} />
				<img src={ideafunnelposter} alt='poster' style={imgStyle} />
				<img src={funnel} alt='funnel' style={imgStyle} />
			</div>

			<div className='content'>
				<p style={{ color: 'var(--dark-blue)' }}>
					Many students have various innovative ideas that run across their minds but
					don't have the platform, guidance and direction to do so. To facilitate
					this IIT Goa has come with - Idea Funnel.
				</p>

				<p style={{ color: 'var(--dark-blue)' }}>
					Idea Funnel is a continuous tool for idea scouting, validation and
					facilitation. In order to encourage students to bring forward executable
					ideas, IIC has set up an online idea consolidation mechanism.
				</p>

				<p style={{ color: 'var(--dark-blue)' }}>
					Before building a prototype, a series of events involving learning, system
					filter, review of the idea etc. This will ensure effective and refined
					outcomes.
				</p>

				<p style={{ color: 'var(--dark-blue)' }}>
					The students will have to submit their idea. There will be a list of
					protocols and instructions that will be followed before the idea is
					approved. Students will then be counselled for 45-60 days as per faculty
					programs and will then a review for the entire idea and execution plans
					will be conducted.
				</p>

				<p style={{ color: 'var(--orange)' }}>
					Link for the application is: https://forms.gle/BeZuxVrnXFQXd9nB9
				</p>
			</div>
		</div>
	);
};

export default IdeaFunnel;