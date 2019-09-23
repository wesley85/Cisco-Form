import React from 'react';
import Header from './Header';
import CustomerInfo from './CustomerInfo';
import Headsets from './Headsets';
import Action from './Action';

export default class OrderForm extends React.Component {
  render() {
    const subtitle = 'Cisco Headset Order Form';

    return (
      <div>
        <Header subtitle={subtitle} />
          <div className="container">
            <CustomerInfo />
            <Headsets />
            <Action />
          </div>
      </div>
    );
  }
}
