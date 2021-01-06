import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { AccountProvider } from './context/AccountContext';
import LandingPage from './components/pages/LandingPage';
import Home from './components/pages/Home';
import TermsOfUse from './components/pages/TermsOfUse';
import NotFound from './components/pages/NotFound';
import './index.css';
import { Web3Provider } from './context/Web3Context';

ReactDOM.render(<App/>, document.querySelector('#root'));

function App() {
  return (
    <Web3Provider>
      <AccountProvider>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={LandingPage}></Route>
            <Route exact path="/portfolio">
              <Home/>
            </Route>
            <Route exact path="/swap">
              <Home/>
            </Route>
            <Route exact path="/liquidity">
              <Home/>
            </Route>
            <Route exact path="/terms-of-use" component={TermsOfUse}></Route>
            <Route component={NotFound}></Route>
          </Switch>
        </BrowserRouter>
      </AccountProvider>
    </Web3Provider>
  );
}

export default App;
