import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import { year } from "../../helpers/helpers.js"

const Footer = () => (
      <div className="footer">
      <p>
        <Link to="/about">About Us</Link> | <Link to="/">Contact </Link> 
        &copy; {year} <Link to="/"> Jibli.de</Link></p>
      </div>
    );

export default Footer;