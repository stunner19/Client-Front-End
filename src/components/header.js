import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './HeaderStyle.css';

class Header extends Component {

    renderLinks = () => {
        if(this.props.authenticated){
            return(
                <div>
                    <Link to = '/signout'>Sign Out</Link>
                    <Link to = '/features'>Features</Link>
                </div>
            );
        }
        else{
            return(
                <div>
                    <Link to = '/signin'>Sign In</Link>
                    <Link to = '/signup'>Sign Up</Link>
                </div>
            );
        }
    }

    render(){
        return(
            <div className = "header">
                <Link to = '/'>Redux Auth</Link>
                {this.renderLinks()}
            </div>
        );
    }
}

export default Header;