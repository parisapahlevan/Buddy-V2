import React from 'react';
import GoogleLogin  from 'react-google-login';
import React, { Component } from 'react';
import {PostData} from '../Google/PostData';
import {Redirect} from 'react-router-dom';


 
export default class google extends Component {
    constructor(props){
        super(props);
        this.states={
            redirectToReferrer: false
        }
        this.signup = this.signup.bind(this);
    }
    signup(res,type){
        let postData;
        if(type === 'google' && res.w3.U3){
           postData = {name: res.w3.ig, provider: type, email: res.w3.U3, provider_id: res.El, token: res.Zi.access_token, provider_pic: res.w3.Paa}  
        }
       PostData('signup',postData).then((result) => {
           let responseJson = result;
           if(responseJson.userData){
               sessionStorage.setItem('userData', JSON.stringify(responseJson));
               this.setState({redirectToReferrer: true});
           }
       });
    }


    render() {
        if(this.state.redirectToReferrer){
          return (<Redirect to={'/home'}/>)
        }
        const responseGoogle = (response) => {
            console.log(response);
            this.signup(response, 'google')
          }
           
        return (
            <div>
               <GoogleLogin
    clientId="538892584854-3p6srvqq3cjtnagk177m02ghladi24a2.apps.googleusercontent.com"
    buttonText="Login"
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
    cookiePolicy={'single_host_origin'}
  />, 
            </div>
        )
    }
}
