
import GoogleLogin  from 'react-google-login';
import React, { Component } from 'react'

export default class Google extends Component {

    constructor(props){
        super(props);
        this.state = {
        }
    }

    myOnSuccess(resp) {
        console.log('google login has been succesfull called ...: ', resp)
    }

    myOnFailure(err) {
        console.log('google login has FAILED ...: ', err)
    }

    render() {
        return (
            <div>
               <GoogleLogin
                    clientId="538892584854-nvglkhrqgd7hvbaqfgql7rsu6posd70e.apps.googleusercontent.com"
                    buttonText="LOGIN WITH GOOOGLE"
                    onSuccess={this.myOnSuccess.bind()}
                    onFailure={this.myOnFailure.bind()}
                    cookiePolicy={'single_host_origin'}
                /> 
            </div>
        )
    }
}
