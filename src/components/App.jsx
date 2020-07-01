import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PhonePage from './PhonePage';
import PhoneCard from './PhoneCard';
import Header from '../components/common/Header';
import { Container, Row } from 'react-bootstrap';

const App = () => {
  return (
    <>
      <Header />
      <Switch>
        <Container>
          <Row>
            <Route exact path='/' component={PhonePage} />
            <Route path='/phone/:id' component={PhoneCard} />
          </Row>
        </Container>
      </Switch>
    </>
  );
};

export default App;
