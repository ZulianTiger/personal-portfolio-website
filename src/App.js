import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Home from './Containers/Home'
import About from './Containers/About'
import Contact from './Containers/Contact'
import NoPage from './Containers/NoPage'
import { Layout } from './Components/Layout'
import { NavigationBar } from './Components/NavigationBar'

function App() {
  return (
    <React.Fragment>
      <Router>
        
        {/*<Layout>*/}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route component={NoPage} />
        </Switch>
        {/*</Layout>*/}
      </Router>
    </React.Fragment>
  );
}

export default App;
