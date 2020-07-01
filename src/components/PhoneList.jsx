import React from 'react';
import { connect } from 'react-redux';
import { showPhones } from '../redux/actions/phoneActions';
import Card from 'react-bootstrap/Card';
import './PhoneList.css';
import { Link } from 'react-router-dom';

class PhoneList extends React.Component {
  componentDidMount() {
    const { phones, showPhones } = this.props;
    if (phones.length === 0) {
      showPhones();
    }
  }

  render() {
    const { phones } = this.props.phones;
    if (phones) {
      return (
        <div className='container-fluid'>
          <div className='row'>
            {phones.map(phone => {
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

export default connect(mapStateToProps, { showPhones })(PhoneList);
