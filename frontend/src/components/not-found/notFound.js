import React from 'react';
import {Paper, Typography} from '@material-ui/core';

const styles = {
    box:{
      background: '#fff',
      margin: '1rem auto',
      padding: '.5rem 0',
    }
};

const notFound = props => {

  return (
    <div>
      <Paper className="main" style={styles.box} elevation={4}>
        <Typography>
          <h1>404 Not Found</h1>
        </Typography>
      </Paper>
    </div>
  );
}


export default notFound;