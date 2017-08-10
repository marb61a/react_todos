import React, { Component } from 'react';

const getCurrentPath = () => {
    const path = document.location.pathname;
    return path.substring(path.lastIndexOf('/'));
};

export class Router extends Component{
    render(){
        state = {
            route: getCurrentPath()    
        };
        return(
            <div>
                {this.props.children}
            </div>    
        );       
    }
    
}