import React from 'react';
import { connect } from 'react-redux';
import Card from 'react-bootstrap/Card';
import { showPhone, showPhones } from '../redux/actions/phoneActions';
import { Link } from 'react-router-dom';

class PhoneCard extends React.Component {
  componentWillMount() {
    const { phone, showPhone } = this.props;
    // let phone1 = phone.phone.list.phones.find(
    //   phone => phone.id === +this.props.match.params.id
    // );
    console.log(phone);

    if (phone.length !== 1) {
      showPhone(this.props.match.params.id);
      //   // if (phones.phone.list.length === 0) {
    }
  }
  render() {
    const { phone } = this.props;
    console.log(phone);
    if (phone.name) {
      console.log(phone.imageFileName);
      return (
        <Card style={{ width: '18rem' }}>
          <Card.Img
            variant='top'
            src={require('../../api/images/' + phone.imageFileName)}
          />
          <Card.Body>
            <Card.Title>{phone.name}</Card.Title>
            <Card.Text>{phone.description}</Card.Text>
          </Card.Body>
          <Card.Footer>
            <Link to={'/'}>Back</Link>
          </Card.Footer>
        </Card>
      );
    } else {
      return <div>Loading</div>;
    }
  }
}
function mapStateToProps(state) {
  console.log(state);
  return {
    ...state
  };
}

export default connect(mapStateToProps, { showPhone, showPhones })(PhoneCard);
