import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Card, CardTitle, CardText} from 'material-ui/Card';
import Login from './Login';


const Landing =()=>{
    return(
        <MuiThemeProvider>
             
                 <Login/>

             
        </MuiThemeProvider>
    );
}

export default Landing;