import React from 'react';

export default class ProductInfo extends React.Component {
    render () {
      return (
        <div className="product__container">
          <h1 className="product__header">Cisco Headsets are available through Intrado</h1>

          <p className="product__body" style={{fontWeight: 'bold'}}>The Cisco Headset 500 Series is a professional range of wired and wireless headsets optimized for Cisco IP phones and soft clients.</p>

          <p className="product__body">The Cisco® Headset 500 Series delivers surprisingly vibrant sound for open workspaces. Users can stay focused in noisy environments with rich sound, exceptional comfort, and proven reliability. The 500 Series offers a lightweight form factor that is comfortable to wear, even for an entire workday. It’s designed for workers who spend a lot of time wearing headsets for voice communications and listening to music.</p>
        </div>
      );
    }
  }