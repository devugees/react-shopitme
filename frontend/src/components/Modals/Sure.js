import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {Typography, Modal, Button} from '@material-ui/core';

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

class Sure extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false,
      password: '',
      showPassword: false,
    };
  }

  handleClose = () => {
    this.setState({ open: false },this.props.sendback());
  }

  static getDerivedStateFromProps(props, state){
   if(props.open){
     return { open: true};
   }
   return null
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
          className="sure-modal"
        >
          <div className={classNames(classes.paper, classes.modalStyle)}>
            <Typography variant="title" id="modal-title">
              Are you sure ?
            </Typography>
            <Typography variant="subheading" id="simple-modal-description">
              The shopping list will be deleted
            </Typography>
            <Button variant="outlined" className="delete-btn" onClick={this.handleClose}>
              Cancel
            </Button>
            <Button variant="outlined" className="create-btn">
              <Link to="/">Delete</Link>
            </Button>
          </div>
        </Modal>
      </div>
    );
  }
}

Sure.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Sure);