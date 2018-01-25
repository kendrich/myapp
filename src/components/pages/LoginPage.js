import React from 'react'
import axios from 'axios'
import {Login} from '../../actions/Login'
import {loginUrl} from '../../api'



// /* eslint-disable */
class LoginPage extends React.Component{
    submit = (data) => {
        axios.post(loginUrl, {
            u: data.username, p: data.password
        })
        .then((response) => {
            
        })
        .catch((error) => {
           
        });
    }

    render() {
      return (
        <Login submit={this.submit}/>
      )
    }
}

export default LoginPage;
