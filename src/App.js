import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { ScrollingProvider } from "react-scroll-section";

import MainContainer from './Containers/MainContainer'
import NoPage from './Containers/NoPage'

function App() {
  return (
    <ScrollingProvider scrollBehavior="smooth" >
      <Router>
        <Switch>
          <Route exact path='/' component={MainContainer} />
          <Route path="*" component={NoPage} />
        </Switch>
      </Router>
    </ScrollingProvider >
  );
}

export default App;
