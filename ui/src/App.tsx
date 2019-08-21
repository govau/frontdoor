import React, {lazy, Suspense} from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';
import './main.css';

const SellerPage = lazy(() => import('./pages/seller/SellerPage'));
const BuyerPage = lazy(() => import('./pages/buyer/BuyerPage'));

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
                <li>
                  <Link to="/buyer/">Buyer</Link>
                </li>
                <li>
                  <Link to="/seller/">Seller</Link>
                </li>
              </ul>
            </nav>

            <Suspense fallback={<div>Loading...</div>}>
              <Switch>
                <Route path="/" exact component={Index} />
                <Route path="/about/" component={About} />
                <Route path="/users/" component={Users} />
                <Route path="/buyer/" component={BuyerPage} />
                <Route path="/seller/" component={SellerPage} />
              </Switch>
            </Suspense>
          </div>
        </Router>
      </div>
      <Footer />
    </div>
  );
};

export default App;
