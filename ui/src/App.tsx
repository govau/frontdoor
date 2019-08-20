import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import logo from './logo.svg';
import Header from './Header'
import Footer from './Footer'
import './App.css';

const App: React.FC = () => {
  const Index = () => <h2>Home</h2>
  const About = () => <h2>About</h2>
  const Users = () => <h2>Users</h2>

  return (
    <div className="au-grid">
      <Header />
      <div className="col-xs-offset-3">
        <Router>
          <div>
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about/">About</Link>
                </li>
                <li>
                  <Link to="/users/">Users</Link>
                </li>
              </ul>
            </nav>

            <Route path="/" exact component={Index} />
            <Route path="/about/" component={About} />
            <Route path="/users/" component={Users} />
          </div>
        </Router>
      </div>
      <Footer />
    </div>
  );
}

export default App;
