import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Home.jsx';
import Resources from './Resources.jsx';
import About from './About.jsx';
import NavBar from './NavBar.jsx';

export default function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <NavBar />
        </header>
        <main>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/resources" component={Resources} />
            <Route exact path="/about" component={About} />
          </Switch>
        </main>
      </div>
    </Router>
  );
}
