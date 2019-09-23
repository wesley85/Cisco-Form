import React from 'react';

const Header = (props) => (
  <div className="header">
  <img src="../../images/intrado-logo-wh-rev.png" className="logo-left"/>
  <div>
    <h1 className="header__title">{props.title}</h1>
    {props.subtitle && <h2 className="header__subtitle">{props.subtitle}</h2>}
    </div>
  </div>
);

Header.defaultProps = {
  title: 'Order Form'
};

export default Header;
