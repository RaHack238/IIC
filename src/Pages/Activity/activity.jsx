import { React } from 'react';
import './activity.css';

const Activity = () => {
	return (
		<div className='layout'>
			<div className='activityIcons'></div>
			<div className='container updates'>
				<div style={{ display: 'flex', flexDirection: 'column' }}>
					<h1 style={{ color: 'var(--dark-blue)', marginTop: '4rem' }}>Updates</h1>
					<div className='individualUpdates'>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
							tempor incididunt ut labore et dolore magna aliqua
						</p>
						<hr />
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
							tempor incididunt ut labore et dolore magna aliqua
						</p>
						<hr />
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
							tempor incididunt ut labore et dolore magna aliqua
						</p>
						<hr />
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
							tempor incididunt ut labore et dolore magna aliqua
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Activity;
