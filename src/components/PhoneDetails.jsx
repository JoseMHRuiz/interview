import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { showPhone } from '../redux/actions/phoneActions';

import { Container, Row, Col, Image, Table, Spinner } from 'react-bootstrap';
import _ from 'lodash';
import './PhoneCard.css';

const PhoneCard = props => {
  useEffect(() => {
    const { data, showPhone } = props;
    console.log(props);
    if (data.phone.id !== +props.match.params.id) {
      showPhone(props.match.params.id);
    }
  });
  const { phone } = props.data;
  if (phone.id === +props.match.params.id) {
    return (
      <Container className='card-container-phone' fluid>
        <Row>
          <Col>
            <Image
              src={require('../../api/images/' + phone.imageFileName)}
              fluid
            />
          </Col>
          <Col>
            <h1>{phone.name}</h1>
            <p>{phone.description}</p>
          </Col>
          <Col>
            <Table hover>
              <tbody>
                <tr>
                  <td>Color</td>
                  <td>{_.capitalize(phone.color)}</td>
                </tr>
                <tr>
                  <td>Screen</td>
                  <td>{phone.screen}</td>
                </tr>
                <tr>
                  <td>Processor</td>
                  <td>{phone.processor}</td>
                </tr>
                <tr>
                  <td>Ram</td>
                  <td>{phone.ram} GB</td>
                </tr>
              </tbody>
            </Table>
            <Link to={'/'}>Back</Link>
          </Col>
        </Row>
      </Container>
    );
  } else {
    return (
      <Container>
        <Spinner animation='grow' />
      </Container>
    );
  }
};

const mapStateToProps = state => {
  return {
    ...state
  };
};

export default connect(mapStateToProps, { showPhone })(PhoneCard);
