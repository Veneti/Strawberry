import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import strawberry from './pages/strawberry';
import template from './pages/template';
import explanation from './pages/explanation';
import React from 'react';


function App() {
  return (
    <Router>
      <div>
        <Switch>
            <Route exact path="/strawberry" component={strawberry}/>
            <Route exact path="/template" component={template}/>
            <Route exact path="/explanation" component={explanation}/>
        </Switch>
      </div>
    </Router>
  );
}
export default App;