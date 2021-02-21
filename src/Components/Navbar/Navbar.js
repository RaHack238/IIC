import React from 'react';
import './Navbar.css';
import menuButton from './menu.svg';
import xmark from './x-mark.svg';

export default class NavBar extends React.Component{
    state={
        showNavlines:true
    }

    NavbarExpandHandler=()=>{
        const doesShow=this.state.showNavlines;
        this.setState({showNavlines:!doesShow});
    }

    render(){
        let nav=null;

        if (this.state.showNavlines){
            nav=(
                <div id="buttonouter">
                    <button id="navButton" type="button" onClick={this.NavbarExpandHandler}>
                        <img src={menuButton}></img>
                    </button>
                </div>
            
                
            )
            
        }else{
            nav=(
                <div id="closingNav">
                    <div id="nbcontainer">
                        <div id="navitems">
                            <a>Activities</a>
                            <a>Programs</a>
                            <a>Council</a>
                        </div>
                        <div id="buttonouter">
                            <button id="navButton" type="button" class="cross" onClick={this.NavbarExpandHandler}>
                                <img src={xmark}></img>
                            </button>
                        </div>
                    </div>
                </div>
                
            )
        }

        return(
            <div id="navdiv">
                {nav}
            </div>
        );
    }
}