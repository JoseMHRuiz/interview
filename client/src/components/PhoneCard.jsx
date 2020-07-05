import React from 'react';
import { Link } from 'react-router-dom';

import { Card, Row, Container } from 'react-bootstrap';

const PhoneCard = props => {
  return (
    <Container className='container-fluid'>
      <Row className='row'>
        {props.phones.map(phone => {
          return (
            <Card key={phone.id} style={{ width: '22rem' }}>
              <Card.Img
                variant='top'
                src={require(`../../public/images/${phone.imageFileName}`)}
              />
              <Card.Body>
                <Card.Title>{phone.name}</Card.Title>
                <Card.Subtitle className='mb-2 text-muted'>
                  {phone.manufacturer}
                </Card.Subtitle>
                <Card.Text>{phone.price} €</Card.Text>
              </Card.Body>
              <Card.Footer>
                <Link to={'/phone/' + phone.id}>Show More</Link>
              </Card.Footer>
            </Card>
          );
        })}
      </Row>
    </Container>
  );
};

export default PhoneCard;
