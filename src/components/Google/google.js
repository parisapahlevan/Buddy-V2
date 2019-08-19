
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
                    render={renderProps => (
                        <button id="googleButton" onClick={renderProps.onClick} disabled={renderProps.disabled}><svg aria-hidden="true" id= "mygoogle" class="svg-icon native iconGoogle" width="18" height="18" viewBox="0 0 18 18"><path d="M16.51 8H8.98v3h4.3c-.18 1-.74 1.48-1.6 2.04v2.01h2.6a7.8 7.8 0 0 0 2.38-5.88c0-.57-.05-.66-.15-1.18z" fill="#4285F4"></path><path d="M8.98 17c2.16 0 3.97-.72 5.3-1.94l-2.6-2a4.8 4.8 0 0 1-7.18-2.54H1.83v2.07A8 8 0 0 0 8.98 17z" fill="#34A853"></path><path d="M4.5 10.52a4.8 4.8 0 0 1 0-3.04V5.41H1.83a8 8 0 0 0 0 7.18l2.67-2.07z" fill="#FBBC05"></path><path d="M8.98 4.18c1.17 0 2.23.4 3.06 1.2l2.3-2.3A8 8 0 0 0 1.83 5.4L4.5 7.49a4.77 4.77 0 0 1 4.48-3.3z" fill="#EA4335"></path></svg>Sign in using Google</button>
                      )}
                    buttonText="LOGIN WITH GOOOGLE"
                    onSuccess={this.myOnSuccess.bind()}
                    onFailure={this.myOnFailure.bind()}
                    cookiePolicy={'single_host_origin'}
                /> 
            </div>
        )
    }
}
