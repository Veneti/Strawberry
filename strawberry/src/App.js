import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import strawberry from './pages/strawberry';
import template from './pages/template';
import questions from './pages/questions';

import React from 'react';
function App() {
  return (
    <Router>
      <div>
        <Switch>
            <Route exact path="/strawberry" component={strawberry}/>
            <Route exact path="/template" component={template}/>
            <Route exact path="/questions" component={questions}/>
        </Switch>
      </div>
    </Router>
  );
}
export default App;