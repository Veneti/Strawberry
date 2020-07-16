import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import strawberry from './pages/strawberry';
import template from './pages/template';
import welcome from './pages/welcome';
import recommend from './pages/recommend';
import questions from './pages/questions';
import AutoPage from './pages/AutoPage';
import categories from './pages/categories';
import hello from './pages/hello';

import React from 'react';
function App() {
  return (
    <Router>
      <div>
        <Switch>
            <Route exact path="/hello" component={hello}/>
            <Route exact path="/strawberry" component={strawberry}/>
            <Route exact path="/template" component={template}/>
            <Route exact path="/" component={welcome}/>
            <Route exact path="/recommend" component={recommend}/>
            <Route exact path="/questions" component={questions}/>
            <Route exact path="/AutoPage" component={AutoPage}/>
            <Route exact path="/categories" component={categories}/>
        </Switch>
      </div>
    </Router>
  );
}
export default App;