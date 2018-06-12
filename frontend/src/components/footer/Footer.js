import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import { getFullYear } from "../../helpers/helpers.js"

const Footer = () => (
      <div className="footer">
      <p> &copy; {getFullYear()} Copyright: <Link to="/">Shopitme.com</Link> </p>
      </div>
    );

export default Footer;