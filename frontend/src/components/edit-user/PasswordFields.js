import React, { Component } from 'react';
import {TextField, Grid} from '@material-ui/core';

class PasswordForm extends Component {
    render() {
      console.log(this.props.isRegisterForm)
        return (
            <React.Fragment>
                <Grid item xs={12}>
                {(this.props.isRegisterForm) ? <TextField
                    id="password"
                    label="Password"
                    placeholder="Password"
                    onChange={this.props.handleChange('password')}
                    type="password"
                    margin="normal"
                    required
                    fullWidth
                  /> : <TextField
                  id="password"
                  label="New Password"
                  placeholder=" New Password"
                  onChange={this.props.handleChange('password')}
                  type="password"
                  margin="normal"
                  required
                  fullWidth
                />}
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
        );
    }
}

export default PasswordForm;