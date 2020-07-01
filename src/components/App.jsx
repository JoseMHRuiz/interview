import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PhonePage from './PhonePage';
import PhoneCard from './PhoneCard';
import Header from '../components/common/Header';

const App = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path='/' component={PhonePage} />
        <Route path='/phone/:id' component={PhoneCard} />
      </Switch>
    </>
  );
};

export default App;
