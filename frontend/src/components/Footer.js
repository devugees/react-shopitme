import React, {Component} from 'react';
import Paper from 'material-ui/Paper';
import '../css/Footer.css';

const time =new Date().getFullYear()


class Footer extends Component {

  
  render() {
    return (
      <Paper>
      <div className="footer">
      <p> &copy; {time} Copyright: <a href="http://localhost:3000">Shopitme.com </a></p>
      </div>
      </Paper>
    );
  }
}

export default Footer;