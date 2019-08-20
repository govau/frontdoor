import React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import './App.css';
import Footer from './Footer';
import Header from './Header';

const App: React.FC = () => {
  const Index = () => <h2>Home</h2>;
  const About = () => <h2>About</h2>;
  const Users = () => <h2>Users</h2>;

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
};

export default App;
