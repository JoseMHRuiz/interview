import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { showPhones } from '../redux/actions/phoneActions';

import { Spinner } from 'react-bootstrap';
import './PhoneList.css';
import PhoneCard from './PhoneCard';

const PhoneList = props => {
  useEffect(() => {
    const { data, showPhones } = props;
    if (data.phones.length === 0) {
      showPhones();
    }
  }, [props]);
  console.log(props);
  const { phones } = props.data;
  if (phones.length > 1) {
    return <PhoneCard phones={phones} />;
  } else {
    return <Spinner animation='grow' />;
  }
};
function mapStateToProps(state) {
  return {
    ...state
  };
}

export default connect(mapStateToProps, { showPhones })(PhoneList);
