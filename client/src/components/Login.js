import React, { Component } from "react";
import StripeCheckout from 'react-stripe-checkout';
import RaisedButton from 'material-ui/RaisedButton';
import { connect } from "react-redux";
import FacebookLogin from 'react-facebook-login'

import * as actions from '../actions'
class Login extends Component{
    state = {
        isLoggedIn: false,
        userId: '',
        name: '',
        email: '',
        picture: ''
    }


    componentClicked = () => {
        //console.log('clicked')

    }

    responseFacebook = response => {
        console.log(response);
        this.setState({
            isLoggedIn: true,
            userId: response.userId,
            name: response.name,
            email: response.email,
            picture: response.picture.data.url
        })
        // return <Redirect  to='/Executive'/>
    }
    render(){
        if (this.state.isLoggedIn) {

            // return (
            //     <div>
            //         <App />
            //         <Redirect to= {redirectPage} />

            //     </div>
            // )

            // // return <Redirect  to='/Executive'/>
            // fbContent =(
            // <div style = {{
            //     width: '400px',
            //     margin : 'auto',
            //     background: '#f4f4f4',
            //     padding: '20px'
            // }}>

            //     <img src={this.state.picture} alt={this.state.name}></img>
            //     <h2>Welcome {this.state.name}</h2>
            //     Email:  {this.state.email}

            // </div>


               <div>logged in</div>
            // );
        } else {
            return (
                <div>
                    <div className="App">
                        <div>
                            <div className="fb-header">
                                <h2>Let's move forward with Advance World</h2>
                                <FacebookLogin
                                    appId="618945671807192"
                                    autoLoad={true}
                                    fields="name,email,picture"
                                    onClick={this.componentClicked}
                                    callback={this.responseFacebook} />
                            </div>
                            <div style={{width: '50%', float : 'left'}}>
                
                            </div>
                        </div>
 
                    </div>



                </div>

            )
        }
    }
}
 export default connect(null,actions)(Login);