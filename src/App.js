import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './modules/Home';
import Country from './modules/Country';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/country/:alpha3Code" component={Country} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
