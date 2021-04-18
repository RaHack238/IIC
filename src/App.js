import './App.css';
import { Route, Switch, withRouter } from 'react-router-dom';
import ContactUs from '../src/Pages/Contact-Us/ContactUs';
import Activity from '../src/Pages/Activity/activity';
import Home from './Components/Home/Home';
import Programs from './Pages/Programs/Programs';

function App(props) {
	if (props.location.pathname !== '/') {
		document.getElementById('expertrons_pop_up').style.display = 'none';
	}else{
		document.getElementById('expertrons_pop_up').style.display = 'block';
	}
	return (
		<div className='App'>
			<Switch>
				<Route exact path='/' component={Home} />
				<Route path='/activities' component={Activity} />
				<Route path='/contact-us' component={ContactUs} />
				<Route path='/programs' component={Programs} />
			</Switch>
		</div>
	);
}

export default withRouter(App);
