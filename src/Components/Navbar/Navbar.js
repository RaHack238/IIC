import React from 'react';
import './Navbar.css';
import menuButton from './menu.svg';
import xmark from './x-mark.svg';
import { Link } from 'react-router-dom';
import { withRouter, useLocation } from 'react-router-dom';

class NavBar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			showNavlines: true,
		};
	}
	
	NavbarExpandHandler = () => {
		const doesShow = this.state.showNavlines;
		this.setState({ showNavlines: !doesShow });
	};

	render() {
		let nav = null;
		if (this.state.showNavlines) {
			nav = (
				<div id='buttonouter'>
					<button id='navButton' type='button' onClick={this.NavbarExpandHandler}>
						<img src={menuButton}></img>
					</button>
				</div>
			);
		} else {
			nav = (
				<div id='closingNav'>
					<div id='nbcontainer'>
						<div id='navitems'>
							<Link to='/activities'>Activities</Link>
							<Link to='/programs'>Programs</Link>
							<Link to='/contact-us'>Council</Link>
						</div>
						<div id='buttonouter'>
							<button
								id='navButton'
								type='button'
								class='cross2'
								onClick={this.NavbarExpandHandler}
							>
								<img src={xmark}></img>
							</button>
						</div>
					</div>
				</div>
			);
		}

		return <div id='navdiv'>{nav}</div>;
	}
}
export default withRouter(NavBar);


// this.props.location.pathname;