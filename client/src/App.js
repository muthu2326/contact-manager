import React, { Component } from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'
import axios from '../src/config/axios'

import Home from './components/layout/Home'

// Contacts
import ContactList from './components/contacts/List'
import ContactNew from './components/contacts/New'
import ContactShow from './components/contacts/Show'
import ContactEdit from './components/contacts/Edit'

// Notes
import NoteList from './components/notes/List'
import NoteNew from './components/notes/New'
import NoteShow from './components/notes/Show'
import NoteEdit from './components/notes/Edit'

//authentication
import UserRegister from './components/authentication/Register'
import UserLogin from './components/authentication/Login'


class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      isAuthenticated: !!localStorage.getItem('token')
    }
    this.handleIsAuthenticated = this.handleIsAuthenticated.bind(this)
  }

  handleIsAuthenticated(bool) {
    this.setState(() => ({ isAuthenticated: bool}))
  }

  render() {  
    return (
      <BrowserRouter>
        <div>
          <h2>  </h2>
          <br/>

          <Link to="/"> Home </Link> |

          { !this.state.isAuthenticated && (
            <div>
              <Link to="/users/register"> Register </Link> |
              <Link to="/users/login"> Login </Link> 
            </div>
          )}

            { this.state.isAuthenticated && (
              <div>
              <Link to="/contacts">Contacts</Link>|
              <Link to="/notes">Notes</Link>
            </div>
            )}

            { this.state.isAuthenticated && <Link to="/users/logout"> Logout </Link> }

          <Switch>
            <Route path="/" component={Home} exact={true} />
            <Route path="/contacts" component={ContactList} exact={true}/>
            <Route path="/contacts/new" component={ContactNew} exact={true} />
            <Route path="/contacts/edit/:id" component={ContactEdit} exact={true} />
            <Route path="/contacts/:id" component={ContactShow} />

            <Route path="/notes" component={NoteList} exact={true}/>
            <Route path="/notes/new" component={NoteNew} exact={true} />
            <Route path="/notes/edit/:id" component={NoteEdit} exact={true} />
            <Route path="/notes/:id" component={NoteShow} />

            <Route path='/users/register' component={UserRegister} />
            <Route path='/users/login' render={() => {
              return(
                <UserLogin handleIsAuthenticated={this.handleIsAuthenticated} />
              )
            }} />

            <Route path='/users/logout' component={() => {
                  axios.defaults.headers['x-auth'] = null
                  localStorage.clear()
                  return(
                    <div>
                      <p> Successfully logged out</p>
                    </div>
                  )
                }
             } />

          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;