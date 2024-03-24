<!-- 
    Copyright (c) 2023 Promineo Tech
    Author:  Promineo Tech Academic Team
    Subject: React Router Boiler Plate
  ------------------------------------------->
  
# Web App Design with React Router Week 16 Coding Assignment

## Instructions 

1. run ```npm install```
2. run ```npm start```

Router code before adding nav (in case it doesn't work)
<Router>
    <div>
        <ul>
          <li>
            <Link to="/">Home</Link> 
          </li>
        </ul>
    </div>
    <div>
    <ul>
      <li>
        <Link to="/inspiration">Inspiration</Link> 
      </li>
    </ul>
    <div>
    <ul>
      <li>
        <Link to="/journal">Journal</Link> 
      </li>
    </ul>
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
</div>
  </Router>


