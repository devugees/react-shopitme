import React from 'react';
import {Paper, Typography, Button} from '@material-ui/core';
import { Link } from 'react-router-dom';
import './notFound.css';
import notfound from "../../pictures/notfound.png";

const styles = {
    box:{
      backgroundColor: "lightgrey",
      margin: '1rem auto',
      padding: '.5rem 0',
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
};

const notFound = props => {
  return (
    <div >
      <Paper className="main" style={styles.box} elevation={4}>
        <Typography>
          <div style={styles.not404}>
            <img src={notfound} style={{width:"16rem"}} alt="notfound"/>
            <h1 className="notFound"> 404 </h1>
            <h1 className="notFound">Page Not Found :<span>&#x28;</span> </h1>
          </div>
          <Link to="/">
            <Button variant="outlined" size="large" color="primary">
             Go Home Page
            </Button>
          </Link>
        </Typography>
      </Paper>
    </div>
  );
}

export default notFound;