import React from 'react';
import { Redirect, Route } from 'react-router';
import PropTypes from 'prop-types';

export function IsUserRedirect({ user, loggedInPath, children, ...rest}){
    return (
        <Route
            { ...rest}
            render={() => {
                if(!user){
                    return children;
                }

                if(user){
                    return (
                        <Redirect 
                            to={{
                                pathname: loggedInPath
                            }}
                        />
                    );
                }

                return null;
            }}
            
        />       
    )
}

IsUserRedirect.propTypes = {
    children: PropTypes.any,
    user: PropTypes.any,
    loggedInPath: PropTypes.any,
};

export function ProtectedRoute({ user, children, ...rest }){
    return (
        <Route
            { ...rest}
            render={( { location }) => {
                if(user){
                    return children;
                }

                if(!user){
                    return (
                        <Redirect 
                            to={{
                                pathname: 'signin',
                                state: { from: location},
                            }}
                        />
                    );
                }

                return null;
            }}
            
        />       
    )
}

ProtectedRoute.propTypes = {
    children: PropTypes.any,
    user: PropTypes.any,
    loggedInPath: PropTypes.any,
};