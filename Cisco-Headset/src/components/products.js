import React from 'react';

export default class Products extends React.Component {   
    render () {
      return (
          <div className="product__container">
                <p className="product__wrapper" style={{float: 'left'}}>
                <p className="product__name">Cisco Headset 531</p>
                <img src="../../images/531.png" className="product__logo" />
                <button className="big_button_purple">
                    Add Item
                </button>
                <p className="big_button_white">
                    <a>
                        More Info
                    </a>
                </p>
            </p>
            <p className="product__wrapper" style={{float: 'right'}}>
            <p className="product__name">Cisco Headset 532</p>
                <img src="../../images/532.png" className="product__logo" />
                <button className="big_button_purple">
                    Add Item
                </button>
                <p className="big_button_white">
                    <a>
                        More Info
                    </a>
                </p>
            </p>
            <p className="product__wrapper" style={{float: 'right'}}>
            <p className="product__name">Cisco Headset 561 (Multibase)</p>
                <img src="../../images/561mb.png" className="product__logo" />
                <button className="big_button_purple">
                    Add Item
                </button>
                <p className="big_button_white">
                    <a>
                        More Info
                    </a>
                </p>
            </p>
            <p className="product__wrapper" style={{float: 'left'}}>
            <p className="product__name">Cisco Headset 561 (Standard)</p>
                <img src="../../images/561sb.png" className="product__logo" />
                <button className="big_button_purple">
                    Add Item
                </button>
                <p className="big_button_white">
                    <a>
                        More Info
                    </a>
                </p>
            </p>
            <p className="product__wrapper" style={{float: 'right'}}>
            <p className="product__name">Cisco Headset 562 (Multibase)</p>
                <img src="../../images/562mb.png" className="product__logo" />
                <button className="big_button_purple">
                    Add Item
                </button>
                <p className="big_button_white">
                    <a>
                        More Info
                    </a>
                </p>
            </p>
            <p className="product__wrapper" style={{float: 'left'}}>
            <p className="product__name">Cisco Headset 562 (Standard)</p>
                <img src="../../images/562sb.png" className="product__logo" />
                <button className="big_button_purple">
                    Add Item
                </button>
                <p className="big_button_white">
                    <a>
                        More Info
                    </a>
                </p>
            </p>
        </div>
      );
    }
  }