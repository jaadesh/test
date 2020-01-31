import React from 'react';
import {connect} from 'react-redux';
import {Route,Redirect} from 'react-router-dom';
import PropTypes from 'prop-types';

const UserRoute =({isAuthenticated,component:Component,...rest})=>
(   
    <Route {...rest}
    render={props=> isAuthenticated ? <Component {...props} /> : <Redirect to="/login"  />}
    />
);

UserRoute.propTypes = {
    component : PropTypes.func.isRequired,
    isAuthenticated:PropTypes.bool.isRequired
}

function mapStateToProps(state){
 return{
     isAuthenticated : !!state.Auth.token,
 }
}
export default connect(mapStateToProps)(UserRoute) ;