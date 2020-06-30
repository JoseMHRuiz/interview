import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PhonePage from './PhonePage';
import Header from '../components/common/Header';

const App = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path='/' component={PhonePage} />
        {/* <Route /> */}
      </Switch>
    </>
  );
};

export default App;
