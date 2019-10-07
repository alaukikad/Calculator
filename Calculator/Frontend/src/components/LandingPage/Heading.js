import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import cookie from 'react-cookies';
import {Redirect} from 'react-router';

//create the Navbar Component
class Heading extends Component {
    constructor(props){
        super(props);
    }
  
    render(){
        return(
            <div>
            <nav class="navbar navbar-inverse">
                <div class="container-fluid">
                    <div class="navbar-header">
                        <a class="navbar-brand" href="#">Calculator</a>
                    </div>
                </div>
            </nav>
        </div>
        )
    }
}

export default Heading;