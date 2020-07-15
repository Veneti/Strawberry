import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import strawberry from './pages/strawberry';
import template from './pages/template';
import welcome from './pages/welcome';

import React from 'react';
function App() {
  return (
    <Router>
      <div>
        <Switch>
            <Route exact path="/strawberry" component={strawberry}/>
            <Route exact path="/template" component={template}/>
            <Route exact path="/welcome" component={welcome}/>
        </Switch>
      </div>
    </Router>
  );
}
export default App;