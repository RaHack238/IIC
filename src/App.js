import './App.css';
import { Route, Switch } from 'react-router-dom';
import ContactUs from '../src/Pages/Contact-Us/ContactUs'
import Activity from "../src/Pages/Activity/activity";

function App() {
  return (
			<div className='App'>
				<Route exact to='/' />
				<Switch>
					<Route path='/activities' component={Activity} />
					<Route path='/contact-us' component={ContactUs} />
				</Switch>
			</div>
		);
}

export default App;
