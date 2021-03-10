import './App.css';
import { Route, Switch } from 'react-router-dom';
import ContactUs from '../src/Pages/Contact-Us/ContactUs';
import Activity from '../src/Pages/Activity/activity';
import Home from './Components/Home/Home';
import Programs from './Pages/Programs/Programs';

function App() {

	return (
		<div className='App'>
			{/* <NavBar /> */}
			<Switch>
				<Route exact path='/' component={Home} />
				<Route path='/activities' component={Activity} />
				<Route path='/contact-us' component={ContactUs} />
				<Route path='/programs' component={Programs} />
			</Switch>
		</div>
	);
}

export default App;
