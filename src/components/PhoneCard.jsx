import React from 'react';
import { Link } from 'react-router-dom';

import { Card } from 'react-bootstrap';

const PhoneCard = props => {
  return (
    <div className='container-fluid'>
      <div className='row'>
        {props.phones.map(phone => {
          return (
            <Card key={phone.id} style={{ width: '18rem' }}>
              <Card.Img
                variant='top'
                src={require(`../../api/images/${phone.imageFileName}`)}
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
      </div>
    </div>
  );
};

export default PhoneCard;
