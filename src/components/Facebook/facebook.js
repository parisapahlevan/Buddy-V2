import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';

export default class facebook extends Component {

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




    onClick(){
        console.log('Clicked');
    }

    callBack(response){
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
                onClick={this.onClick.bind(this)}
                callback={this.callBack.bind(this)} />)
        }
        return (
            <div>
                {fbContent}
            </div>
        )
    }
}
