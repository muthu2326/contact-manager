import React from 'react'
import { Link } from 'react-router-dom'
import axios from '../../config/axios'
import { Button } from 'react-bootstrap';

class ContactShow extends React.Component{
    constructor(){
        super()
        this.state = {
            contact: {}
        }
        this.handleDelete = this.handleDelete.bind(this)
    }

    handleDelete() {
        const confirmDelete  = window.confirm('Are you sure to delete')
        if(confirmDelete){
            axios.delete(`/contacts/${this.state.contact._id}`)
                .then(() => { this.props.history.push('/contacts') })
                .catch((err => window.alert(err)))
        }
    }

    componentDidMount(){
        const id = this.props.match.params.id
        axios.get(`/contacts/${id}`)
            .then((response) => this.setState(() => ({ contact: response.data})))
    }

    render(){
        return(
            <div>
                <h2>{this.state.contact.name} </h2>
                <p> {this.state.contact.email} </p>
                <p> {this.state.contact.mobile} </p>
                <Link to={`/contacts/edit/${this.state.contact._id}`}><Button variant="primary">Edit</Button></Link>
                <Button variant="primary" onClick={ this.handleDelete }>Delete</Button>
                ​<Link to="/contacts"><Button variant="primary">Back</Button></Link>
            </div>
        )
    }
}

export default ContactShow