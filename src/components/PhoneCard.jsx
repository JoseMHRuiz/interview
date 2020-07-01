import React from 'react';
import { connect } from 'react-redux';
import { showPhone, showPhones } from '../redux/actions/phoneActions';
import { Link } from 'react-router-dom';

import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Table from 'react-bootstrap/Table';
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
    if (phone.name) {
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
        // <Card>
        //   <Card.Img
        //     variant='top'
        //     src={require('../../api/images/' + phone.imageFileName)}
        //   />
        //   <Card.Body>
        //     <Card.Title>{phone.name}</Card.Title>
        //     <Card.Text>{phone.description}</Card.Text>
        //   </Card.Body>
        //   <Card.Footer>
        //     <Link to={'/'}>Back</Link>
        //   </Card.Footer>
        // </Card>
      );
    } else {
      return <div>Loading</div>;
    }
  }
}
function mapStateToProps(state) {
  return {
    ...state
  };
}

export default connect(mapStateToProps, { showPhone, showPhones })(PhoneCard);
