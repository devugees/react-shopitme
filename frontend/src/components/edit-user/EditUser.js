import React from 'react';
import PropTypes from 'prop-types';
// Material UI
import { withStyles } from 'material-ui/styles';
import MenuItem from 'material-ui/Menu/MenuItem';
import { FormControl, FormHelperText } from 'material-ui/Form';
import Input, { InputLabel } from 'material-ui/Input';
import Select from 'material-ui/Select';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';

// Sub Components & CSS
import './EditUser.css';
import UserDetails from './UserDetails'; 
import PasswordFields from './PasswordFields';

const formType = {
  Register: true,
}

class EditUser extends React.Component {
  render() {
    const { classes } = this.props;
    const isRegisterForm = formType.Register;

    return (
      <div className="edit-user">
        <form noValidate autoComplete="off">
          <Grid container spacing={16}>
            {/* If Register Form Render Heading Register else Render Change User Details */}
            <Grid item xs={12}>
              {(isRegisterForm) ? <Typography variant="display1">Register</Typography> :  <Typography variant="display1">Change Account Detail</Typography>}
            </Grid>
            <Grid item xs={12}>
            {(isRegisterForm) ? <Typography variant="title">Your Details</Typography> :  null}
            </Grid>
            
            {/* Render Form Part 1 with User Details */}
            <Grid item container xs={12} className="formBgr" spacing={16}>
              <UserDetails handleChange={this.props.handleChange} userdetails={this.props.userdetails} />
            </Grid>

            {/* Submit Button for Change User/Account Details */}
            <Grid item xs={12}>
              {(!isRegisterForm) ? <Button variant="flat" onClick={this.props.handleSubmit} className="button-right" size="large">
                    Change Account Details
                  </Button> :  null}
            </Grid>

            {/* If Change User Details Form Render Change User Details Heading */}
            <Grid item xs={12}>
              {(!isRegisterForm) ? <Typography variant="display1" className="margin">Change Password</Typography> :  <Typography variant="title" className="margin">Your Password</Typography>}
            </Grid>

   
            {/* If Change User Details Form Render Additional Textfield Old Password */}
            <Grid item container xs={12} className="formBgr" spacing={16}>
              {(!isRegisterForm) ? 
                    <Grid item xs={12}>
                        <TextField
                          id="old-password"
                          label="Old Password"
                          placeholder="Old Password"
                          onChange={this.props.handleChange('password')}
                          type="password"
                          margin="normal"
                          required
                          fullWidth
                        />
                      </Grid> :  null }
                {/* Password / Confirm Password Fields */}
                <PasswordFields handleChange={this.props.handleChange} />
              </Grid>
              
              
              <Grid item xs={12}>
                <Button variant="flat" onClick={this.props.handleSubmit} className="button-right" size="large">
                  {(!isRegisterForm) ? "Change Password" :  "Submit Registration"}
                </Button>
              </Grid>
            
            </Grid>
        </form>
      </div>
    );
  }
}

EditUser.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default EditUser;