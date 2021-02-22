import { React } from 'react';
import { ReactComponent as Cross } from '../../vectors/cross.svg';
import fieldvisits from '../../vectors/fieldvisits2.svg';

const FieldVisit = ({ fieldVisits, setView, setBlur, mobile }) => {
	const imgStyle = {
		width: '30vw',
		height: '30vh',
		margin: '2rem',
	};

	return (
		<div
			className='individualComponents'
			style={{ display: fieldVisits ? 'block' : 'none' }}
			id='idsize'
		>
			<Cross
				className='cross'
				onClick={() => {
					setView({ fieldVisits: false });
					setBlur(false);
				}}
			/>
			<h2 style={{ color: 'var(--orange)' ,textAlign:  'center' }}>Field Visits</h2>

			<div className='layout'>
				<div className='images' style={{display: mobile? 'none' : 'block'}}>
					<img src={fieldvisits} alt='fielf-visit-icon' style={imgStyle} />
				</div>

				<div className='content'>
					<h1 style={{ color: 'var(--dark-blue)', textAlign: 'center' }}>
						COMING SOON!
					</h1>
				</div>
			</div>
		</div>
	);
};

export default FieldVisit;
