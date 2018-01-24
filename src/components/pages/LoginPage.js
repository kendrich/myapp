import React from 'react'
import $ from 'jquery';
import {Login} from '../../actions/Login'
import {loginUrl} from '../../api'


// /* eslint-disable */
class LoginPage extends React.Component{
    submit = (data) => {
        $.ajax({
            type: "POST",
            url : loginUrl,
            data: {u: data.username, p: data.password},
            success (response) {
                console.log({response});
            }
        });
    }

    render() {
      return (
        <Login submit={this.submit}/>
      )
    }
}

export default LoginPage;
