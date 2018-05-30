import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {Typography, Modal, Button} from '@material-ui/core';
import './Modals.css';

const styles = theme => ({
  modalStyle: {
    top: `50%`,
    left: `50%`,
    transform: `translate(-50%, -50%)`,
  },
  paper: {
    position: 'absolute',
    width: theme.spacing.unit * 40,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
    textAlign: 'center'
  },
  margin: {
    margin: '10px',
  }
});

class SimpleModal extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false,
      password: '',
      showPassword: false,
    };
    
  }

  handleClose = () => {
    this.setState({ open: false });
  };

  componentWillReceiveProps(nextProps){
    // console.log('jj',nextProps)
    // this.setState({ open: true});
  }

  render() {
    const { classes } = this.props;

    return (
      <div>
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.state.open}
          onClose={this.handleClose}
        >
          <div className={classNames(classes.paper, classes.modalStyle)}>
            <Typography variant="title" id="modal-title">
              Are you sure ?
            </Typography>
            <Typography variant="subheading" id="simple-modal-description">
              The shopping list will be deleted
            </Typography>
            <Button variant="raised" color="secondary" className={classNames(classes.margin,classes.button)} onClick={this.handleClose}>
              Cancel
            </Button>
            <Button variant="raised" color="primary" className={classes.button}>
              <Link to="/">Delete</Link>
            </Button>
          </div>
        </Modal>
      </div>
    );
  }
}

SimpleModal.propTypes = {
  classes: PropTypes.object.isRequired,
};

// We need an intermediary variable for handling the recursive nesting.
const Sure = withStyles(styles)(SimpleModal);
export default Sure ;