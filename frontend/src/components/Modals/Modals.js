import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import IconButton from 'material-ui/IconButton';
import Input, { InputLabel, InputAdornment } from 'material-ui/Input';
import { FormControl } from 'material-ui/Form';
import Typography from 'material-ui/Typography';
import Modal from 'material-ui/Modal';
import Button from 'material-ui/Button';

import Visibility from './svg/visibility.svg';
import VisibilityOff from './svg/visibilityOff.svg';
import Facebook from './svg/facebook.svg';
import Google from './svg/google.svg';

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
  textField: {
    flexBasis: 200,
  },
  loginButtons: {
    width: '75%',
    margin: '10px'
  },
  iconwww: {
    width: '24%',
  }
});

class SimpleModal extends React.Component {
  state = {
    open: false,
    password: '',
    showPassword: false,
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  // input handels
  handleChange = prop => event => {
    this.setState({ [prop]: event.target.value });
  };

  handleMouseDownPassword = event => {
    event.preventDefault();
  };

  handleClickShowPassword = () => {
    this.setState({ showPassword: !this.state.showPassword });
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
        <Typography gutterBottom>Click to get the full Modal experience!</Typography>
        <Button onClick={this.handleOpen}>Open Modal</Button>
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.state.open}
          onClose={this.handleClose}
        >
          <div className={classNames(classes.paper, classes.modalStyle)}>
            <div>
              ************************************
            </div>
            <Button variant="raised" color="primary" className={classes.loginButtons}>
              <img src={Facebook} className={classes.iconwww} alt="facebook"/>
              Login with Facebook 
            </Button>
            <Button variant="raised" color="secondary" className={classes.loginButtons}>
              <img src={Google} className={classes.iconwww} alt="google"/>
              Login with Google
            </Button>
            <hr />
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
              <div className={classes.container}>
                <FormControl className={classNames(classes.margin, classes.textField, classes.loginButtons)}>
                  <InputLabel htmlFor="adornment-password">Password</InputLabel>
                  <Input
                    id="adornment-password"
                    type={this.state.showPassword ? 'text' : 'password'}
                    value={this.state.password}
                    onChange={this.handleChange('password')}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="Toggle password visibility"
                          onClick={this.handleClickShowPassword}
                          onMouseDown={this.handleMouseDownPassword}
                        >
                          {this.state.showPassword ? <img src={Visibility} alt="Visibility"/> : <img src={VisibilityOff} alt="VisibilityOff"/>}
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                </FormControl>
              </div>
              <Button variant="raised" color="green" className={classes.loginButtons}>
                Login 
              </Button>
              <Typography variant="subheading">
                <a href="#">Forgot your password?</a>
              </Typography>
              <Typography variant="subheading">
                <a href="#">Don't have an Account? Register now</a>
              </Typography>
            <div>
              ************************************
            </div>
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
                <a href="#">Login!</a>
              </Typography>
              <Typography variant="subheading">
                <a href="#">Don't have an Account? Register now</a>
              </Typography>
            <div>
              ************************************
            </div>
            <Typography variant="title" id="modal-title">
              Are you sure ?
            </Typography>
            <Typography variant="subheading" id="simple-modal-description">
              The shopping list will be deleted
            </Typography>
            <Button variant="raised" color="secondary" className={classes.button} onClick={this.handleClose}>
              Cancel
            </Button>
            <Button variant="raised" color="primary" className={classes.button}>
              Delete
            </Button>
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
const Modals = withStyles(styles)(SimpleModal);

export default Modals;