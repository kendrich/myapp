import React from 'react';
import PropTypes from 'prop-types';
import cookies from 'react-cookies';
import { Button,Form,Grid,Header,Segment,Input} from 'semantic-ui-react';
import {Home} from '../components/pages/Home'

const InlineError = ({text}) => <span style={{color: "#912d2b"}}>{text}</span>
InlineError.propTypes ={
    text: PropTypes.string.isRequired
}


export class Login extends React.Component {
    state = {
        data:{
            username:'',
            password:''
        },
        loading: false,
        errors:{},
    };

    componentWillMount() {
        this.state.token= cookies.load('token')
    }

    onChange = e => this.setState({
        data: {...this.state.data, [e.target.name]: e.target.value}
    });

    onSubmit = () => {
        const errors = this.validate(this.state.data);
        this.setState({errors});
        if(Object.keys(errors).length === 0){
            this.props.submit(this.state.data);
        }
    }

    validate = (data) =>{
        const errors ={};
        if(!data.username) errors.username = "Username field is empty!"
        if(!data.password) errors.password = "Password field is empty!";
        return errors;
    }
    

    render() {
        const { data, errors, token } = this.state;
        if (token) {
            return (
                <Home/>
            )
        }
        return (
            <div className='login-form'>
                <Grid
                    textAlign='center'
                    style={{
                    height: '100%'
                }}
                    verticalAlign='middle'>
                    <Grid.Column style={{
                        maxWidth: 450
                    }}>
                        <Header as='h2' color='teal' textAlign='center'>
                            Sign in to start your session
                        </Header>
                        <Form onSubmit={this.onSubmit}>
                            <Segment stacked>
                                <Form.Field error={!!errors.username}>
                                    <Input 
                                        icon='user' 
                                        iconPosition='left' 
                                        placeholder='Username'
                                        type="text"
                                        name="username"
                                        value={data.username}
                                        onChange={this.onChange}
                                    />
                                    {errors.username && <InlineError text={errors.username}/>}
                                </Form.Field>
                                <Form.Field error={!!errors.password}>
                                    <Input 
                                        icon='lock' 
                                        iconPosition='left' 
                                        placeholder='Password'
                                        type="password"
                                        name="password"
                                        value={data.password}
                                        onChange={this.onChange}
                                    />
                                    {errors.password && <InlineError text={errors.password}/>}
                                </Form.Field>
                                <Button color='teal' fluid size='large'>Login</Button>
                            </Segment>
                        </Form>
                    </Grid.Column>
                </Grid>
            </div>
        )
    }
}

Login.propTypes = {
    submit: PropTypes.func.isRequired
}

export default Login;
