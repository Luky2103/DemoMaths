import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import StoragePage from './pages/StoragePage';
import CreatePage from './pages/CreatePage';
import DemoPage from './pages/DemoPage';
import MobileNav from './components/MobileNav';
import './styles/main.css';
import './styles/mobile.css';

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <MobileNav />
        <Switch>
          <Route path="/" exact component={StoragePage} />
          <Route path="/create" component={CreatePage} />
          <Route path="/demo/:id" component={DemoPage} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;