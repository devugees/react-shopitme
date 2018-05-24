import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import axios from 'axios';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing.unit,
  },
  textField: {
    flexBasis: 400,
  },
  button: {
    margin: '1rem auto',
    display:'block'
  },
});

class NewPassword extends React.Component {
  state = {
    password1: '',
    password2: '',
    showPassword: false,
    resaultMessage: '',
  };

  handleChange = prop => event => {
    this.setState({ [prop]: event.target.value });
  };

  handleMouseDownPassword = event => {
    event.preventDefault();
  };

  handleClickShowPassword = () => {
    this.setState({ showPassword: !this.state.showPassword });
  };

  resetHandler = () => {
    if(this.state.password1 !== this.state.password2) {
      this.setState({
        resaultMessage: 'The password didn\'t match in both fields please ckeck it'
      })
    } else {
      let token = window.location.href.slice(-40);
      axios.post(`http://localhost:4000/reset/${token}`, {
      password: this.state.password2,
      })
      .then( response => {
        this.setState({
          resaultMessage: response.data
        })
      })
      .catch(function (error) {
        console.log(error);
      });
    }
  }

  render() {
    const { classes } = this.props;
    return (
      <div className="App">
        <h1>Please put your new password</h1>
        <FormControl className={classNames(classes.margin, classes.textField)}>
          <InputLabel htmlFor="adornment-password1">Password</InputLabel>
          <Input
            id="adornment-password1"
            type={this.state.showPassword ? 'text' : 'password'}
            value={this.state.password1}
            onChange={this.handleChange('password1')}
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
        <FormControl className={classNames(classes.margin, classes.textField)}>
          <InputLabel htmlFor="adornment-password2">Conferm Password</InputLabel>
          <Input
            id="adornment-password2"
            type={this.state.showPassword ? 'text' : 'password'}
            value={this.state.password2}
            onChange={this.handleChange('password2')}
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
        <p>{this.state.resaultMessage}</p>
        <Button variant="raised" color="primary" onClick={this.resetHandler} className={classes.button}>
          Reset Password
        </Button>
      </div>
    );
  }
}

NewPassword.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NewPassword);