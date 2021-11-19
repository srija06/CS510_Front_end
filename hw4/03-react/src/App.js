import './App.css';
import Home from './Home';
import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
} 
from 'react-router-dom';
import Search from './Search';
import Houses from './Houses';
import Details from './Details';
function App() {
  return (
    <Router>
      <div className='App'>
        <Container>
          <h1>Exercise 03</h1>
          <Container>
            <Navbar bg="light" expand="lg">
              <Link to="/home">Home</Link>
              <Link to="/search">Search</Link>
              <Link to="/houses">Houses</Link>
            </Navbar>

          </Container>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/home" component={Home} />
            <Route path="/search" component={Search} />
            <Route path="/houses" component={Houses} />
            <Route path="/details" component={Details} />
          </Switch>
        </Container>
      </div>
    </Router>
  );
}
export default App;