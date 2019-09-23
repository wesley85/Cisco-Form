import React from 'react';
import LeftCounter from './LeftCounter';
import RightCounter from './RightCounter';

const Headsets = (props) => (
  <div className="option">
    <div>
      <p className="header-left">Cisco Headset 561 and 562 with Standard base station</p>
      <p className="header-right">Cisco Headset 531, 532, and desktop USB headset<br/> adapter</p>
        <img src="../../images/Headset_561_562.png" className="thumbnail-left"/>
        <img src="../../images/Headset_531_532.png" className="thumbnail-right"/>
      <LeftCounter />
      <RightCounter />
    </div>
  </div>
);

export default Headsets;