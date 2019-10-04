import React, { Component } from 'react';

class SignOut extends Component {

    componentDidMount(){
        this.props.signOut();
    }
    
    render(){
        return(
            <div>Sorry to See you go!!</div>
        );
    }
}

export default SignOut;