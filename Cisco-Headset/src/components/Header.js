import React from 'react';

const Header = (props) => (
  <div className="container__header">
    <div>
      <img src="../../images/intrado.png" className="header__logo" width="14%" />
    </div>
    <div className="header">
      <p className="banner-spacer"></p>
      <img src="../../images/cisco-headset-500-series.png" width="83%" />
    </div>
      <p className="banner"></p>
      
      <img src="../../images/west-is-now-intrado.png" className="westtointrado" />
      <h3 className="header__title">{props.title}</h3>
    {props.subtitle && <h2 className="header__subtitle">{props.subtitle}</h2>}
  </div>
);

Header.defaultProps = {
  title: 'Cisco Headset Marketplace'
};

export default Header;
