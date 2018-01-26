import React from 'react'
import $ from 'jquery'
import cookies from 'react-cookies'
import {Login} from '../../actions/Login'
import {loginUrl} from '../../api'



// /* eslint-disable */
class LoginPage extends React.Component{
    submit = (data) => {
        $.ajax({
            type: "POST",
            url: loginUrl,
            // headers: { "Authorization": `Bearer ${cookie.load('token') ? cookie.load('token') : '' }` },
            data: {
                u: data.username,
                p: data.password
            },
            success(response) {
                cookies.save('token', response, {path: '/'})
                console.log(`COOKIES: ${cookies.load('token')}`);
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
