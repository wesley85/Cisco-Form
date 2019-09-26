import React from 'react';


export default class CustomerInfo extends React.Component {   
    render () {
      return (
        <div>
          <div className="container__form">
            <h1 className="form__header">Cisco Headset Order Form</h1>
          <form>
              <input
                autoFocus
                type="text"
                name="First Name"
                placeholder="First Name"
                className="form__field"
              />
              <input
                type="text"
                name="Last Name"
                placeholder="Last Name"
                className="form__field"
              />
              <input
                type="text"
                name="Email"
                placeholder="Email"
                className="form__field"
              />
              <input
                type="text"
                name="PO"
                placeholder="PO"
                className="form__field"
              />
              <textarea
                name="notes"
                placeholder="notes"
                className="form__field"
                style={{height: '100px',margin: '5% 0 5% 0'}}
              >
              </textarea>
              <button className="submit_button">
                Submit
              </button>
      </form>
    </div>
    <div className="fine__print">
      <p>Fine print. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis ultricies lacus sed turpis tincidunt id aliquet risus. Ac felis donec et odio pellentesque diam volutpat commodo sed. Nibh mauris cursus mattis molestie a iaculis at. Placerat orci nulla pellentesque dignissim enim sit amet venenatis. Adipiscing commodo elit at imperdiet dui accumsan sit. Duis ultricies lacus sed turpis tincidunt id aliquet risus feugiat. Non blandit massa enim nec dui nunc mattis enim ut.</p>

      <hr />

      <h1 className="additional__info">Need additional information?</h1>

          <p><em>We're here to help…</em></p>

          <p><b>Brian Trampler</b><br/>
          Strategic Business Development<br/>
          Video Product Manager<br/>
          Intrado<br/>
          Denver, CO<br/>
          O: 720-864-3189<br/>
          C: 303-638-1633<br/>
          <a href="mailto:btrampler@west.com">btrampler@west.com</a></p>
    </div>
  </div>
      );
    }
  }