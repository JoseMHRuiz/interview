import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PhoneList from './PhoneList';
import PhoneCard from './PhoneDetails';
import Header from './common/Header';
import Footer from './common/Footer';

const App = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path='/' component={PhoneList} />
        <Route path='/phone/:id' component={PhoneCard} />
      </Switch>
      <Footer />
    </>
  );
};

export default App;
