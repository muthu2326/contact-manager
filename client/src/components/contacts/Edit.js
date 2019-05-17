import React from 'react'
import axios from '../../config/axios'
import ContactForm from './Form'

class ContactEdit extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            contact: {},
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount(){
        const id = this.props.match.params.id
        axios.get(`/contacts/${id}`)
            .then((response => this.setState(() => ({contact: response.data, isLoaded: true}))))
    }

    handleSubmit(formData) {
        console.log('contact new component')
        axios.put(`/contacts/${this.state.contact._id}`, formData)
            .then(() => this.props.history.push(`/contacts/${this.state.contact._id}`))
            .catch(err => console.log(err))
    }

    render(){
        return(
            <div>
                <br/>
                <h3>Edit Contact</h3>
                <ContactForm contact={this.state.contact} handleSubmit={this.handleSubmit} />
            </div>
        )
    }
}

export default ContactEdit