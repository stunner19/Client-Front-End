import React, { Component } from 'react';
import Header from './header';
import { Switch , Route, Redirect,withRouter } from 'react-router-dom';
import Welcome from './Welcome';
import SignUp from './auth/SignUp';
import { signUp, signOut,signIn } from '../redux/actionCreators';
import { connect } from 'react-redux';
import Feature from './Feature';
import SignOut from './auth/SignOut';
import SignIn from './auth/SignIn';

const mapStateToProps = state => {
    return{
        errorMessage : state.auth.errorMessage,
        authenticated : state.auth.authenticated
    }
}

const mapDispatchToProps = (dispatch) => ({
    signUp: ( email, password, callback ) => dispatch(signUp(email,password,callback)),
    signOut: () => dispatch(signOut()),
    signIn: (email, password, callback ) => dispatch(signIn(email,password,callback))
});

class Main extends Component {
    render(){
        const { history } = this.props;
        return(
            <React.Fragment>
                <Header authenticated = {this.props.authenticated} />
                <Switch>
                    <Route exact path = '/' component = {Welcome} />
                    <Route exact path = '/signup' component = {() => <SignUp history = {history} signUp = {this.props.signUp} errorMessage = {this.props.errorMessage} />} />
                    <Route exact path = '/features' component = {() => <Feature history = {history} authenticated = {this.props.authenticated} />} />
                    <Route exact path = '/signout' component = {() => <SignOut signOut = {this.props.signOut} /> } />
                    <Route exact path = '/signin' component = {() => <SignIn history = {history} signIn = {this.props.signIn} /> } />
                    <Redirect to = '/'/>
                </Switch>
            </React.Fragment>
        );
    }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Main));