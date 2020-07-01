import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { showPhone } from '../redux/actions/phoneActions';

import { Container, Row, Col, Image, Table, Spinner } from 'react-bootstrap';
import _ from 'lodash';
import './PhoneCard.css';

class PhoneCard extends React.Component {
  componentDidMount() {
    const { phone, showPhone } = this.props;
    if (phone.length !== 1) {
      showPhone(this.props.match.params.id);
    }
  }
  render() {
    const { phone } = this.props;
    if (phone.id === +this.props.match.params.id) {
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
      return <Spinner animation='grow' />;
    }
  }
}
function mapStateToProps(state) {
  return {
    ...state
  };
}

export default connect(mapStateToProps, { showPhone })(PhoneCard);
