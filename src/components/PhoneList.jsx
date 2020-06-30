import React from 'react';
import { connect } from 'react-redux';
import { showPhones } from '../redux/actions/phoneActions';
import Card from 'react-bootstrap/Card';
import './PhoneList.css';
import { Link } from 'react-router-dom';

class PhoneList extends React.Component {
  componentDidMount() {
    const { phones, showPhones } = this.props;
    console.log(phones);
    console.log(this.props);
    if (phones.phone.list.length === 0) {
      showPhones();
    }
  }

  render() {
    const { list } = this.props.phones.phone;
    console.log(list.phones);
    if (list.phones) {
      return (
        <div className='container-fluid'>
          <div className='row'>
            {list.phones.map(phone => {
              return (
                <Card style={{ width: '18rem' }}>
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
                    <Link to={'/phone/' + phone.id}>More details</Link>
                  </Card.Footer>
                </Card>
              );
            })}
          </div>
        </div>
      );
    } else {
      return <div>Loading</div>;
    }
  }
}
function mapStateToProps(state) {
  return {
    phones: state
  };
}

export default connect(mapStateToProps, { showPhones })(PhoneList);
