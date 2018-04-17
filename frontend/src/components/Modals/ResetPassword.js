import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Input, { InputLabel } from 'material-ui/Input';
import { FormControl } from 'material-ui/Form';
import Typography from 'material-ui/Typography';
import Modal from 'material-ui/Modal';
import Button from 'material-ui/Button';

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
  cancel: {
    position: 'absolute',
    top: '8px',
    left: '16px',
    fontSize: '18px'
  },
  margin: {
    margin: theme.spacing.unit,
  },
  loginButtons: {
    width: '75%',
    margin: '10px'
  }
});

class SimpleModal extends React.Component {
  state = {
    open: true,
    password: '',
    showPassword: false,
  };

  handleClose = () => {
    this.setState({ open: false });
  };

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
            <div className={classes.container}>
              <FormControl className={classNames(classes.margin, classes.loginButtons)}>
                <InputLabel
                  FormLabelClasses={{
                    focused: classes.inputLabelFocused,
                  }}
                  htmlFor="custom-color-input"
                >
                  E-mail
                </InputLabel>
                <Input
                  classes={{
                    underline: classes.inputUnderline,
                  }}
                  id="custom-color-input"
                />
              </FormControl>
            </div>
            <Button variant="raised" color="green" className={classes.loginButtons}>
                Reset password 
            </Button>
            <Typography variant="subheading">
                <a href="./login">Login!</a>
            </Typography>
            <Typography variant="subheading">
                <a href="./register">Don't have an Account? Register now</a>
            </Typography>
            <Button variant="fab" color="secondary" className={classes.cancel} onClick={this.handleClose}>
            X
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
const ResetPassword = withStyles(styles)(SimpleModal);
export default ResetPassword ;