import { React } from 'react';
import { ReactComponent as Cross } from '../../vectors/cross.svg';
import fieldvisits from '../../vectors/fieldvisits2.svg';

const FieldVisit = ({ fieldVisits, setView, setBlur }) => (
	<div
		className='individualComponents'
		style={{ display: fieldVisits ? 'block' : 'none' }}
	>
		<Cross
			className='cross'
			onClick={() => {
				setView({ fieldVisits: false });
                setBlur(false);
			}}
		/>
		<h2 style={{ color: 'var(--orange)' }}>Field Visits</h2>
		<div className='upce-content'>
			<img src={fieldvisits} className='upcoming' />
			<div style={{ display: 'inline-block', width: '65vw' }}>
				<span>COMING SOON</span>
			</div>
		</div>
	</div>
);

export default FieldVisit;
