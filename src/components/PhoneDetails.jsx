import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { showPhone } from '../redux/actions/phoneActions';

import { Container, Row, Col, Image, Table, Spinner } from 'react-bootstrap';
import _ from 'lodash';
import './PhoneCard.css';

const PhoneCard = props => {
  // const { phone, setPhone } = useState();
  console.log(props);

  useEffect(() => {
    const { data, showPhone } = props;
    console.log(props);
    if (data.id !== +props.match.params.id) {
      showPhone(props.match.params.id);
      console.log(data);
    }
  });
  const { data } = props;
  console.log(data.id);
  if (data.id === +props.match.params.id) {
    return (
      <Container className='card-container-phone' fluid>
        <Row>
          <Col>
            <Image
              src={require('../../api/images/' + data.imageFileName)}
              fluid
            />
          </Col>
          <Col>
            <h1>{data.name}</h1>
            <p>{data.description}</p>
          </Col>
          <Col>
            <Table hover>
              <tbody>
                <tr>
                  <td>Color</td>
                  <td>{_.capitalize(data.color)}</td>
                </tr>
                <tr>
                  <td>Screen</td>
                  <td>{data.screen}</td>
                </tr>
                <tr>
                  <td>Processor</td>
                  <td>{data.processor}</td>
                </tr>
                <tr>
                  <td>Ram</td>
                  <td>{data.ram} GB</td>
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

function mapStateToProps(state) {
  console.log(state);
  return {
    ...state
  };
}

export default connect(mapStateToProps, { showPhone })(PhoneCard);
