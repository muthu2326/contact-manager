import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { Button } from 'react-bootstrap';

class NoteShow extends React.Component{
    constructor(){
        super()
        this.state = {
            note: {},
            tags: ''
        }
        this.handleDelete = this.handleDelete.bind(this)
    }

    handleDelete() {
        const confirmDelete  = window.confirm('Are you sure to delete')
        if(confirmDelete){
            axios.delete(`http://localhost:3005/notes/${this.state.note._id}`)
                .then(() => { this.props.history.push('/notes') })
                .catch((err => window.alert(err)))
        }
    }

    componentDidMount(){
        const id = this.props.match.params.id
        axios.get(`http://localhost:3005/notes/${id}`)
            .then((response) => this.setState(() => ({ note: response.data, tags: response.data.tags.join(', ')})))
    }

    render(){
        return(
            <div>
                <h2>{this.state.note.title} </h2>
                <p> {this.state.note.body} </p>
                <label> tags: <b> {this.state.tags} </b> </label><br/><br/>
                <Link to={`/notes/edit/${this.state.note._id}`}><Button variant="primary">Edit</Button></Link>
                <Button variant="primary" onClick={ this.handleDelete }>Delete</Button>
                <Button variant="primary">Back</Button>
            </div>
        )
    }
}

export default NoteShow