import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import axios from 'axios'

import { Alert, ListGroup } from 'react-bootstrap';
import './App.css';

import GroupSubjects from './pages/GroupSubjects'

function App() {
  const [groups, setGroups] = useState([])

  const fetchData = () => {
    axios.get('http://localhost:5000/group/all')
        .then(res => {
          setGroups(res.data)
    })
  }

  useEffect(() => {
    fetchData()
  }, [])

  

  return (
    <div className="App">
      <ListGroup>
        {
          groups.length !== 0 &&
          groups.map(group => {
            return (
              <ListGroup.Item key={group.id} action href={`/groups/${group.id}`} >
                (id: {group.id}) {group.specialty}{group.course}{group.subgroup_id}
              </ListGroup.Item>
            )
          })
        }
      </ListGroup>
      <Alert variant={'success'} className='alert-container' >
        Found {groups.length} groups!
      </Alert>

      <Router>
        <Switch>
          <Route path='/groups/:groupId' component={GroupSubjects} />
        </Switch>
      </Router>

    </div>
  );
}

export default App;
