import React from 'react' 
import { Link } from 'react-router-dom'
import { Button} from 'react-bootstrap';

class NoteForm extends React.Component {
  constructor(props) {
    super(props) 
    this.state = {
      title: '', 
      body: '', 
      tags: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this) 
  }
  
  // es6 arrow function
  handleTitleChange = (e) => {
    const title = e.target.value 
    this.setState(() => ({ title }))
  }

  handleBodyChange  = (e) => {
    const body = e.target.value 
    this.setState(() => ({ body }))
  }

  handleTagsChange = (e) => {
    const tags = e.target.value.split(',')
    this.setState(() => ({ tags }))
  }

  componentWillReceiveProps(nextProps){
    const { title, body, tags } = nextProps.note
    this.setState(() => ({title, body, tags: tags.join(',')}))
  }

  handleSubmit(e) {
    e.preventDefault() 
    const formData = {
      title: this.state.title, 
      body: this.state.body, 
      tags: this.state.tags
    }
    this.props.handleSubmit(formData)

    // clear form ​
    this.setState(() => ({ 
      title: '', body: '', tags: ''
    }))
   
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Title 
            <input type="text" value={this.state.title} onChange={this.handleTitleChange} /> 
          </label> <br/> 
          ​
          <label>
            Body
            <textarea value={this.state.body} onChange={this.handleBodyChange} />
          </label> <br /> 

          <label>
            Tags
            <input type="text" value={this.state.tags} onChange={this.handleTagsChange} />
          </label> <br /> 

          
          <Link to="/notes"><Button variant="primary">Back</Button></Link>
          <Button type='submit' variant="primary">Submit</Button>
        </form> 
      </div>
    )
  }
}

export default NoteForm
