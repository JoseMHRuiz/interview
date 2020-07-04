import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { showPhones } from '../redux/actions/phoneActions';

import { Spinner } from 'react-bootstrap';
import './PhoneList.css';
import PhoneCard from './PhoneCard';

const PhoneList = props => {
  useEffect(() => {
    const { data, showPhones } = props;
    data.phones.length === 0 && showPhones();
  }, [props]);
  const { phones } = props.data;
  const { error } = props.data;
  if (phones.length > 0) {
    return <PhoneCard phones={phones} />;
  } else if (error) {
    return <div>{error}</div>;
  } else {
    return <Spinner animation='grow' />;
  }
};
const mapStateToProps = state => {
  return {
    ...state
  };
};

export default connect(mapStateToProps, { showPhones })(PhoneList);
