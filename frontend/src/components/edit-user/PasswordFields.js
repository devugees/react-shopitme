import React, { Component } from 'react';
import {TextField, Grid} from '@material-ui/core';

class PasswordForm extends Component {
    render() {
        return (
            <React.Fragment>
                <Grid item xs={12}>
                <TextField
                  id="password"
                  label="Password"
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
                />
              </Grid>
            </React.Fragment>
        );
    }
}

export default PasswordForm;