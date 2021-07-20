import React, { Component } from 'react';
import ContactUsFooter from '../../Components/ContactUsFooter/ContactUsFooter';
import './ContactUs.css';
import iiclogo from './assets/iiclogo.svg';
import iitlogo from './assets/iit goa logo@1X.svg';

import PersonCard from '../../Components/PersonCard/PersonCard';
import people from './assets/people.js';
import NavBar from '../../Components/Navbar/Navbar';
import { Link, useLocation } from 'react-router-dom';

const ContactUs = () => {
	// state = { footer_visible: false };
	const location = useLocation();
	const footer = !location.state ? false : true;
	console.log(footer);
	// componentDidMount() {
	//   console.log(people);
	// }
	// render() {
	return (
		<div className='contact__us'>
			<div className='navbar__div'>
				<div className='navbar__left'>
					<a href='https://iitgoa.ac.in/' target='_blank' rel='noreferrer'>
						<img src={iitlogo} alt='IIT Goa' className='iit__goa__logo' />
					</a>
					<Link to='/'>
						<img
							src={iiclogo}
							alt='IIC'
							style={{ width: '10vw', marginTop: '0.6vw' }}
							className='iic__logo'
						/>
					</Link>
				</div>
				<div className='navbar__center'>
					<h1 className='navbar__title'>Council</h1>
				</div>
				<div className='navbar__right'></div>
			</div>
			<NavBar />
			<div className='row main__council__window'>
				{people.map((person, index) => {
					return (
						<PersonCard
							name={person.name}
							designation={person.designation}
							index={2 * index}
							key={index}
							img={person.photo}
						/>
					);
				})}
			</div>
			<ContactUsFooter footer={footer} />
		</div>
	);
	// }
};

export default ContactUs;
