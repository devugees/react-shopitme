import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import { year } from "../../helpers/helpers.js"

const Footer = () => (
      <div className="footer">
      <p> &copy; {year} Copyright: <Link to="/">Shopitme.com</Link> </p>
      </div>
    );

export default Footer;