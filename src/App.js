import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import User from './user/pages/Users'
import NewPlace from './places/pages/NewPlaces';
import MainNavigation from './shared/components/Navigation/MainNavigation';

function App() {
  return  <Router>
            <MainNavigation/>
            <main>
            <Switch>
               <Route path="/" exact>
                 <User/>
               </Route>
               <Route path="/places/new" exact>
                 <NewPlace/>
               </Route>
               <Redirect to="/"/>
            </Switch>
            </main> 
          </Router>;

}

export default App;
