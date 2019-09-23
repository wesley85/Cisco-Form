import React from 'react';
import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector';

export default class CustomerInfo extends React.Component {
    constructor (props) {
      super(props);
      this.state = { country: '', region: '' };
    }
   
    selectCountry (val) {
      this.setState({ country: val });
    }
   
    selectRegion (val) {
      this.setState({ region: val });
    }
   
    render () {
      const { country, region } = this.state;
      return (
        <div className="widget">
        <form>
            <input
              autoFocus
              type="text"
              name="First Name"
              placeholder="First Name"
              className="option-left"
            />
            <input
              type="text"
              name="Last Name"
              placeholder="Last Name"
              className="option-right"
            />
            <input
              type="text"
              name="Phone"
              placeholder="Phone"
              className="option-left"
            />
            <input
              type="text"
              name="Email"
              placeholder="Email"
              className="option-right"
            />
            <input
              type="text"
              name="Address"
              placeholder="Address"
              className="option-left"
            />
            <input
              type="text"
              name="Address 2"
              placeholder="Address 2"
              className="option-right"
            />
            <input
              type="text"
              name="Zip"
              placeholder="Zip"
              className="option-left"
            />
            <input
              type="text"
              name="City"
              placeholder="City"
              className="option-right"
            />
            <CountryDropdown
                className="option-left"
                value={country}
                onChange={(val) => this.selectCountry(val)}
            />
            <RegionDropdown
                className="option-right"
                country={country}
                value={region}
                onChange={(val) => this.selectRegion(val)}
            />
            <input
              type="text"
              name="PO"
              placeholder="PO"
              className="option-left"
            />
    </form>
  </div>
      );
    }
  }