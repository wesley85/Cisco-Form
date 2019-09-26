import React from 'react';
import Header from './Header';
import CustomerInfo from './CustomerInfo';
import ProductInfo from './ProductInfo';
import Products from './products';
import Footer from './Footer';

export default class OrderForm extends React.Component {
  render() {
    const subtitle = 'Research and Order Cisco 500 series Headsets';
    return (
      <div>
        <Header subtitle={subtitle} />
          <div className="container">
            <ProductInfo />
            <Products />
            <CustomerInfo />
          </div>
            <Footer />
      </div>
    );
  }
}
