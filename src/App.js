import React from 'react'
import GlobalState from './global/GlobalState';
import Router from './routers/Router'


function App() {
  return (
    <GlobalState>
      <Router />
    </GlobalState>
  );
}

export default App;
