import "./App.css";
import { Route, Switch, withRouter } from "react-router-dom";
import ContactUs from "../src/Pages/Contact-Us/ContactUs";
import Activity from "../src/Pages/Activity/activity";
import Home from "./Components/Home/Home";
import Programs from "./Pages/Programs/Programs";
import { Component } from "react";
import iitlogo from "./Components/Home/assets/iit goa logo@1X.svg";
import iiclogo from "./Components/Home/assets/iiclogo.svg";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showLoader: true,
      location: props.location,
    };
  }

  LoaderHandler = () => {
    this.setState({ showLoader: false });
  };
  render() {
    let load = null;
    setTimeout(this.LoaderHandler, 2000);
    if (this.state.showLoader) {
      load = (
        <div class="loader">
          <div class="loaderiit ldr">
            <img src={iitlogo}></img>
          </div>
          <div class="loaderiic ldr">
            <img src={iiclogo}></img>
          </div>
        </div>
      );
    }
    document.getElementById("expertrons_pop_up").style.display =
      this.state.location.pathname !== "/" ? "none" : "block";
    return (
      <div className="App">
        {load}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/activities" component={Activity} />
          <Route path="/contact-us" component={ContactUs} />
          <Route path="/programs" component={Programs} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
