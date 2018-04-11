import React, {Component} from 'react';
import '../css/Footer.css';

const time =new Date().getFullYear()


class Footer extends Component {

  
  render() {
    return (
      <div className="footer">
      <p> &copy; {time} Copyright: <a href="http://localhost:3000">Shopitme.com </a></p>
      </div>
    );
  }
}

export default Footer;