import { React } from 'react';
import { ReactComponent as Cross } from '../../vectors/cross.svg';
import './ignite.css';
import igniteIcon from '../../vectors/ignite2.svg';
import ignitePoster from '../../vectors/ignite3.svg';

const Ignite = ({ igniteView, setView, setBlur }) => {
	const imgStyle = {
		width: '30vw',
		height: '30vh',
		margin: '2rem',
	};

	return (
		<div
			className='individualComponents'
			style={{ display: igniteView ? 'block' : 'none' }}
		>
			<Cross
				className='cross'
				onClick={() => {
					setView({ igniteView: false });
					setBlur(false);
				}}
			/>

			<div className='images'>
				<img src={igniteIcon} alt='ignite-icon' style={imgStyle} />
				<img src={ignitePoster} alt='ignite-poster' style={imgStyle} />
			</div>

			<div className='content'>
				<p style={{ color: 'var(--dark-blue)', marginTop: '2rem' }}>
					<font style={{ color: 'var(--orange)' }}>Proof of Concept (POC) </font>{' '}
					program for IIT Goa is developed and designed to ignite the entrepreneurial
					spirit and develop a culture of innovation amongst students. Interested
					students submit an idea proposal and work with{' '}
					<font style={{ color: 'var(--orange)' }}>a team </font>with an option to
					leverage a faculty or subject matter expert in order to develop a
					prototype. Support and model evaluation matrices are relied upon for
					encouraging and creating a suitable ecosystem for effective development.
				</p>

				<h1 style={{ color: 'var(--orange)' }}>
					Ignite PoC Grant (Proof of Concept)
				</h1>

				<div className='images'>
					<img src={igniteIcon} alt='ignite-icon' style={imgStyle} />
					<img src={ignitePoster} alt='ignite-poster' style={imgStyle} />
				</div>

				<p style={{ color: 'var(--dark-blue)' }}>
					Selected entries may be sent for national level & international level
					competitions organised by MHRD innovation cell and recognised events as
					recommendations from{' '}
					<font style={{ color: 'var(--orange)' }}>IIC, IIT Goa.</font>
				</p>
			</div>
		</div>
	);
};

export default Ignite;
