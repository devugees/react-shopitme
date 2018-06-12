import React, { Component } from 'react';
import {TextField, Grid} from '@material-ui/core';

export default class PasswordForm extends Component {
  render() {
    return (
      <React.Fragment>
        <Grid item xs={12}>
          <TextField
            id="password"
            label={this.props.isRegisterForm ? "Password" : "New Password"}
            placeholder="Password"
            onChange={this.props.handleChange('password')}
            type="password"
            margin="normal"
            required
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="confirm-password"
            label="Confirm Password"
            placeholder="Confirm Password"
            onChange={this.props.handleChange('confirmpassword')}
            type="password"
            margin="normal"
            required
            fullWidth
            error={this.props.passwordMatchError}
          />
        </Grid>
      </React.Fragment>
    )
  }
}
