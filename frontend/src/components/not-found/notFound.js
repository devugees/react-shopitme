import React from 'react';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';

const styles = {
    box:{
      background: '#fff',
      margin: '1rem auto',
      padding: '.5rem 0',
    }
};

const notFound = (props) => {
  const { classes } = props;

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

notFound.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(notFound);