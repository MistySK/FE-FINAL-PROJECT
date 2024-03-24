import React from 'react';
import './App.css';
//import router pieces from react router dom
import {
  BrowserRouter as Router,
  Switch,
  Route, 
  Link,
  useRouteMatch
} from 'react-router-dom';

import Inspiration from './Components/Inspiration';
import Home from './Components/Home';
import Journal from  './Components/Journal'


//need to add data that I want to include (this will be in place of Hello World
export default function App() {
  
return (
  //<Router> set up the routing component and system for our app
  //<div> to set up links for different pages/views of the site
  //<Switch> allows us to have multiple routes pointing to one component but only render one at a time
  <Router>
    <header>
      <h1>Daily Wellness Journal</h1>
    </header>
    
    <div>
      <nav>
        <ul className="navbar">
          <li>
            <Link to="/">Home</Link> 
          </li>
        
          <li>
            <Link to="/inspiration">Inspiration</Link> 
          </li>
    
          <li>
            <Link to="/journal">Journal</Link> 
          </li>
      </ul>
    </nav>

    <Switch>
      <Route path="/inspiration">
        <Inspiration inspiration={Inspiration} />
      </Route>
      <Route path="/journal">
        <Journal journal={Journal} />
      </Route>
      <Route path="/">
        <Home  />
      </Route>
    </Switch>
</div>
  </Router>
);
}








