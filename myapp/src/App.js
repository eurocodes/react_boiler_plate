import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import LandingPage from './views/LandingPage';
import ErrorPage from './views/ErrorPage';

function App() {
  return (
    <div className="App">
      <Suspense fallback={(<div>Loading...</div>)}>
        <NavBar />
        <div style={{ paddingTop: '69px', minHeight: 'calc(100vh - 80px)' }}>
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route component={ErrorPage} />
          </Switch>
        </div>
      </Suspense>
    </div>
  );
}

export default App;
