import React from 'react'
import axios from 'axios'

class UserRegister extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            username: '',
            email: '',
            password: '',
            notice: ''
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(e) {
        e.preventDefault()
        const formData = {
            username: this.state.username,
            email: this.state.email,
            password: this.state.password
        }
        console.log(this.state)
        axios.post('http://localhost:3005/users/register', formData)
            .then((response) => {
                console.log(response.data)
                this.setState(() => ({
                    name: '', email: '', password: '',
                    notice: 'successfully registered, taking you to login screen'
                }))
                setTimeout(() => {
                    this.props.history.push('/users/login')
                },2000)
            })
            .catch(err => console.log(err))
    }

    handleChange(e) {
        e.persist()
        this.setState(() => ({
            [e.target.name]: e.target.value
        }))
    }

    render(){
        return(
            <div>
              <br/>
                <h2>Register with us</h2>  <br/>
                { this.state.notice && <p> { this.state.notice } </p>}
                <form onSubmit={this.handleSubmit}>
                    <label>Username:
                        <input type='text' onChange={this.handleChange} name='username'/>
                    </label><br/>

                    <label>Email:
                        <input type='text' onChange={this.handleChange} name='email'/>
                    </label><br/>
 
                    <label>Password:
                        <input type='password' onChange={this.handleChange} name='password'/>
                    </label><br/>
                    <input type='submit' />
                </form>
            </div>
        )
    }
}

export default UserRegister