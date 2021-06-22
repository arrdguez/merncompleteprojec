import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import User from './user/Users'
import NewPlace from './places/pages/NewPlaces';

function App() {
  return  <Router>
            <Switch>
               <Route path="/" exact>
                 <User/>
               </Route>
               <Route path="/places/new" exact>
                 <NewPlace/>
               </Route>
               <Redirect to="/"/>
            </Switch>
          </Router>;

}

export default App;
