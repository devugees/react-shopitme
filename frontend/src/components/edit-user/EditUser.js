import React from 'react';
// Material UI
import { Grid, Typography, Button } from '@material-ui/core';
// Sub Components & CSS
import './EditUser.css';
import UserDetailsFields from './UserDetailsFields';
import PasswordFields from './PasswordFields';

export default class EditUser extends React.Component {
  render() {
    let isRegisterForm = this.props.isRegisterForm;
    let isChangeUser = this.props.isChangeUser; 
    let endpoint;

    /* depending on the Form Type Data will be sent to different endpoints */
    if (isRegisterForm) { endpoint = "register" }
    else if (isChangeUser) { endpoint = "changeuserdetails" }
    else { console.log("form type must be specified") }

    return (
      <div className="edit-user">
        <form
          noValidate
          autoComplete="off"
          onSubmit={this.props.handleSubmit(endpoint)}
        >
          <Grid container spacing={16} className="formbgr">
            {/* If Register Form Render Heading Register else Render Change User Details */}
            <Grid item xs={12}>
              {(isRegisterForm) ?
                <h2>Register</h2> : <h2>Change Account Details</h2>}
            </Grid>
            <Grid item xs={12}>
              {(isRegisterForm) ? <Typography variant="title">Your Details</Typography> : null}
            </Grid>
            {/* Render Form Part 1 with User Details */}
            {/* <Grid item container xs={12} className="formBgr" spacing={16}> */}
            <UserDetailsFields handleChange={this.props.handleChange} />
            {/* </Grid> */}
            {/* Submit Button for Change User/Account Details */}
            {/* <Grid item xs={12}>
              {(!isRegisterForm) ? <Button variant="flat" onClick={this.props.handleSubmit} className="button-right" size="large">
                    Change Account Details
                  </Button> :  null}
            </Grid> */}
            {/* If Change User Details Form Render Change User Details Heading */}
            <Grid item xs={12}>
              {(!isRegisterForm) ? <h2>Change Password</h2> : <h2>Your Password</h2>}
            </Grid>
            {/* If Change User Details Form Render Additional Textfield Old Password */}
            <Grid item container xs={12} className="formBgr" spacing={16}>
              <PasswordFields handleChange={this.props.handleChange} passwordMatchError={this.props.userdetails.passwordMatchError} isRegisterForm={isRegisterForm} />
            </Grid>
          </Grid>
          <Grid container spacing={16} className="button-right">
            {(this.props.error) ? <p className="error">{this.props.error}</p> : null}
            {(this.props.response) ? <p className="message">{this.props.response}</p> : null}
            <Grid item container xs={12} spacing={16}>
            {(
              (isRegisterForm && !this.props.userdetails.passwordMatchError) || 
              (isChangeUser && !this.props.userdetails.password && !this.props.userdetails.confirmpassword) ||
              (isChangeUser && !this.props.userdetails.passwordMatchError) ) ? 
              <Button variant="outlined" size="large" type="submit" className="editUserButton">Submit</Button> : 
              <Button label="Submit" disabled size="large" className="editUserButton">Submit</Button>
            }
            </Grid>
          </Grid>
        </form>
      </div>
    );
  }
}
