import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import { showPhones } from '../redux/actions/phoneActions';

class App extends Component {
  componentWillMount() {
    this.props.showPhones();
    console.log(this.props.phones);
  }

  renderUsersList() {
    console.log(this.props.phones);
  }

  render() {
    return (
      <>
        <div className='phone-list'>
          <h1>Phone List</h1>
          <div>{this.renderUsersList()}</div>
        </div>
      </>
    );
  }
}

function mapStateToProps(state) {
  return {
    phones: state
  };
}

export default connect(mapStateToProps, { showPhones })(App);
