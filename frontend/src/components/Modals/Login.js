import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {IconButton, Input, InputLabel, InputAdornment, FormControl, Modal, Button} from '@material-ui/core';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import AddIcon from '@material-ui/icons/Add';
import Facebook from './svg/facebook.svg';
import Google from './svg/google.svg';

const styles = theme => ({
  modalStyle: {
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
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
    left: '8px',
    fontSize: '18px',
    transform: 'rotate(45deg)'
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
    display:'flex',
    alignItems:'center',
    padding: '0px 5px'
  },
  error: {
    color: 'crimson',
    margin: '1rem auto',
    textAlign:'center'
  },
  linkColor:{
    color: 'black'
  }
});

class Login extends React.Component {

  state = {
    open: false,
    password: '',
    showPassword: false,
  }

  UNSAFE_componentWillReceiveProps(e){
    this.setState({ open: e.openLogin});
  }

  handleClose = () => {
    this.setState({ open: false });
  }

  handleForget = (props, e) => {
    this.setState({ open: false });
    this.props.openForgotpassword(true)
  }
  // input handels
  handleChange = prop => event => {
    this.setState({ [prop]: event.target.value });
  }

  handleMouseDownPassword = event => {
    event.preventDefault();
  }

  handleClickShowPassword = () => {
    this.setState({ showPassword: !this.state.showPassword });
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
             <form 
              noValidate
              onSubmit={(e)=>{this.props.loginclick(e,{
                          email:this.state.email,
                          password:this.state.password})
                        }}>
            <Button variant="raised" color="primary" className={classes.loginButtons}>
              <img src={Facebook} className={classes.iconwww} alt="facebook"/>
              <span> using Facebook</span> 
            </Button>
            <Button variant="raised" color="secondary" className={classes.loginButtons}>
              <img src={Google} className={classes.iconwww} alt="google"/>
              <span> using Google</span>
            </Button>
            <hr />
            <div>
              <FormControl className={classNames(classes.margin, classes.loginButtons)}>
                <InputLabel
                  FormLabelClasses={{
                    focused: classes.inputLabelFocused,
                  }}
                  htmlFor="custom-color-input1"
                >
                  E-mail
              </InputLabel>
                <Input
                  onChange={this.handleChange('email')}
                  classes={{
                    underline: classes.inputUnderline,
                  }}
                  id="custom-color-input1"
                  //value={'boobyy@gmail.com'}
                />
              </FormControl>
              </div>
              <div>
                <FormControl className={classNames(classes.margin, classes.loginButtons)}>
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
                          {this.state.showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                </FormControl>
              </div>
              {this.props.error ? <p className={classNames(classes.error)}>{this.props.error}</p> : null}
              <Button
                variant="raised"
                className={classes.loginButtons} 
                type="submit"
                >
                Login 
              </Button>
              </form>
              <Button variant="flat" onClick={this.handleForget}>
                Forgot your password?
              </Button>
              <Button variant="flat">
                <a className={classes.linkColor} href='/userdetails'>Don't Have an account? Register Now</a>
              </Button>
            <Button variant="fab" mini color="secondary" className={classes.cancel} onClick={this.handleClose}>
            <AddIcon />
            </Button>
          </div>
        </Modal>
      </div>
    );
  }
}

Login.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Login);