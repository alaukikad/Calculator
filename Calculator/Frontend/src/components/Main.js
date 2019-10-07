import React, {Component} from 'react';
//import {Route} from 'react-router-dom';
//<Route path="/calc" component={Calc}/>}
import Heading from './LandingPage/Heading';
import Calc from './Home/Calc';

//Create a Main Component
class Main extends Component {
    render(){
        return(
            <div>
             
              <Calc/>
             
            </div>
        )
    }
}
//Export The Main Component
export default Main;