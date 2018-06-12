import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
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
    resultMessage: '',
    inputActive:true,
    buttonActive:true,
  }

  handleChange = (prop, secondparam) => event => {
    let resultMessage = '';
    if(event.target.value !== secondparam) {
      resultMessage = 'The password didn\'t match in both fields please ckeck it';
      this.setState({
        [prop]: event.target.value,
        resultMessage: resultMessage,
        buttonActive: true
      })
    } else if(event.target.value.length < 1) {
      resultMessage = 'The fields shoudn\'t be empty, wriete a password Please!';
      this.setState({
        [prop]: event.target.value,
        resultMessage: resultMessage,
        buttonActive: true
      })
    } else {
      this.setState({ 
        [prop]: event.target.value,
        resultMessage: '',
        buttonActive: false
      })
    }
  }

  handleMouseDownPassword = event => {
    event.preventDefault();
  }

  handleClickShowPassword = () => {
    this.setState({ showPassword: !this.state.showPassword });
  }

  componentDidMount() {
    let token = window.location.href.slice(-40);
    axios.get(`http://localhost:4000/checktoken/${token}`, { token: token})
    .then( response => {
      this.setState({
        inputActive: response.data,
        buttonActive: true
      })
    })
    .catch(error => {
      console.log(error);
    });
  }

  resetHandler = () => {
    if(this.state.password1 !== this.state.password2) {
      this.setState({
        resultMessage: 'The password didn\'t match in both fields please ckeck it'
      })
    } else {
      let token = window.location.href.slice(-40);
      axios.post(`http://localhost:4000/reset/${token}`, {
      password: this.state.password2,
      })
      .then( response => {
        if (response.data === 'done') {
          this.setState({
            resultMessage: 'Your Password has been changed successfully you can login now',
            counter: 5
          })
        }
      })
      .catch(error => {
        console.log(error);
      });
    }
  }

  render() {
    if(this.state.counter) {
      if(this.state.counter > 1) {
        setTimeout(() => {
          this.setState({
            counter: this.state.counter-1
          })
        }, 1000);
      } else {
        return <Redirect to={'/'}/>
      }
    }

    const { classes } = this.props;
    return (
      <div className="App">
        <h1>{this.state.inputActive ?  'Your reset link is invalid or has been expired.' : 'Please put your new password'}</h1>
        <FormControl className={classNames(classes.margin, classes.textField)}>
          <InputLabel htmlFor="adornment-password1">Password</InputLabel>
          <Input
            disabled={this.state.inputActive}
            id="adornment-password1"
            type={this.state.showPassword ? 'text' : 'password'}
            value={this.state.password1}
            onChange={this.handleChange('password1',this.state.password2)}
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
            disabled={this.state.inputActive}
            id="adornment-password2"
            type={this.state.showPassword ? 'text' : 'password'}
            value={this.state.password2}
            onChange={this.handleChange('password2',this.state.password1)}
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
        <p>{this.state.resultMessage}</p>
        <Button variant="raised" color="primary" onClick={this.resetHandler} className={classes.button} disabled={this.state.buttonActive}>
          Reset Password
        </Button>
        {this.state.counter ? `you will be redirected in ${this.state.counter} Sec` : ''}
      </div>
    )
  }
}

NewPassword.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NewPassword);