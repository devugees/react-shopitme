import React from 'react';
import {Paper, Typography, Button} from '@material-ui/core';
import { Link } from 'react-router-dom';
import './notFound.css';

const styles = {
    box:{
      margin: '1rem auto',
      padding: '.5rem 0',
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    },
    not404: {
      "padding-bottom":"1rem",
      "fontFamily": "'Gloria Hallelujah', cursive"
    }
};


const notFound = props => {
  return (
    <div >
      <Paper className="main" style={styles.box} elevation={4}>
        <Typography>
          <h1 style={styles.not404}className="notFound">404 Not Found :<span>&#x28;</span> </h1>
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