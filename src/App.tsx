import React from 'react';
import { BrowserRouter, Router } from 'react-router-dom';
import Routes from './Routes';
import ReactGA from 'react-ga';
/*import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

// Initialize google analytics page view tracking
history.listen(location => {
  ReactGA.set({ page: location.pathname }); // Update the user's current page
  ReactGA.pageview(location.pathname); // Record a pageview for the given page
});*/

const App = () => {
  ReactGA.initialize('UA-144177360-1');
  console.log(process.env.PUBLIC_URL);
  return(
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Routes/>
  </BrowserRouter>
  )
}

export default App;
