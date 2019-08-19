
// import FacebookLogin from 'react-facebook-login';
import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';

export default class Facebook extends Component {

    constructor(props){
        super(props);
        this.state = {
            isLoggedIn: false,
            userId:'',
            name: '',
            email: '',
            picture: ''
        }
    }

    myOnClick(){
        console.log('Clicked');
    }

    myCallBack(response){
        console.log('I AM THE FACEBOOK RESPONCE: ', response);
        this.setState({
            isLoggedIn: true,
            userId: response.userId,
            name: response.name,
            email: response.email,
            picture: response.picture.data.url
        })
    }


    render() {
        let fbContent;
        if(this.state.isLoggedIn){
            fbContent = (
                <div>
                    <div>I am logged in </div>
                    <img src={this.state.picture} alt={this.state.name}/>
                </div>
            );
        }else{
            fbContent = (<FacebookLogin
                appId="393434351376565"
                autoLoad={true}
                fields="name,email,picture"
                // onClick={this.myOnClick.bind(this)}
                callback={this.myCallBack.bind(this)} 
                render={renderProps => (
                    <button id="facebookButton"  onClick={renderProps.onClick}><svg aria-hidden="true" id="logodesign" class="svg-icon iconFacebook" width="18" height="18" viewBox="0 0 18 18"><path d="M1.88 1C1.4 1 1 1.4 1 1.88v14.24c0 .48.4.88.88.88h7.67v-6.2H7.46V8.4h2.09V6.61c0-2.07 1.26-3.2 3.1-3.2.88 0 1.64.07 1.87.1v2.16h-1.29c-1 0-1.19.48-1.19 1.18V8.4h2.39l-.31 2.42h-2.08V17h4.08c.48 0 .88-.4.88-.88V1.88c0-.48-.4-.88-.88-.88H1.88z" fill="#3C5A96"></path></svg>Sign in using Facebook</button>
                  )}
                />
                )
        }
        return (
            <div>
                {fbContent}
            </div>
        )
    }
}
