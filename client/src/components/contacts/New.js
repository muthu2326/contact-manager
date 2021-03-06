import React from 'react' 
import axios from '../../config/axios'
import ContactForm from './Form'

class ContactNew extends React.Component {
    constructor(){
        super() 
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(formData) {
        console.log('contact new component')
        axios.post('/contacts', formData)
            .then(() => this.props.history.push('/contacts'))
            .catch(err => console.log(err))
    }

    render(){
        return (
            <div>
                <br/>
                <h3> Add Contact </h3>
                <ContactForm handleSubmit={this.handleSubmit} /> 
            </div>
        )
    }
}

export default ContactNew