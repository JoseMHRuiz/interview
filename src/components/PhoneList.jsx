import React from 'react';
import { connect } from 'react-redux';
import { showPhones } from '../redux/actions/phoneActions';

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
        <>
          <h2>Phones</h2>
          {list.phones.map(phone => {
            return <p>{phone.name}</p>;
          })}
        </>
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
