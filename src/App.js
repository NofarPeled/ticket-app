import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { useDispatch } from 'react-redux';

import TicketApp from './pages/TicketApp';
import TicketDetails from './pages/TicketDetails';
import TicketEdit from './pages/TicketEdit';
import { query } from './store/actions/TicketAction';


const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(query());
  })

  return (
   <Router>
      <div className = 'App'>
        <Switch>
          <Route path = { process.env.PUBLIC_URL + '/ticket/edit/:id?' } component = { TicketEdit } />
          <Route path = { process.env.PUBLIC_URL + '/ticket/:id' } component = { TicketDetails } />
          <Route path = { process.env.PUBLIC_URL + '/' } component = { TicketApp } />
        </Switch>
      </div>
   </Router>
  );
}

export default App;
