import React from 'react';
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
import UserDetailsFields from './UserDetailsFields'; 
import PasswordFields from './PasswordFields';

const formType = {
  Register: true,
  ChangeUser: false
}

class EditUser extends React.Component {
  render() {
    const isRegisterForm = formType.Register;
    const isChangeUser = formType.ChangeUser;
    let endpoint; 

    /* depending on the Form Type Data will be sent to different endpoints */
    if(isRegisterForm) 
        { endpoint = "register"} 
    else if (isChangeUser) 
        { endpoint = "changeuserdetails"}
    else { console.log("form type must be specified")}

    return (
      <div className="edit-user">
        <form 
          noValidate 
          autoComplete="off" 
          onSubmit={this.props.handleSubmit(endpoint)}>

          <Grid container spacing={16} className="formbgr">
          
            {/* If Register Form Render Heading Register else Render Change User Details */}
            <Grid item xs={12}>
              {(isRegisterForm) ? <Typography variant="display1">Register</Typography> :  <Typography variant="display1">Change Account Detail</Typography>}
            </Grid>
            <Grid item xs={12}>
            {(isRegisterForm) ? <Typography variant="title">Your Details</Typography> :  null}
            </Grid>
            
            {/* Render Form Part 1 with User Details */}
            {/* <Grid item container xs={12} className="formBgr" spacing={16}> */}
              <UserDetailsFields handleChange={this.props.handleChange} userdetails={this.props.userdetails} />
            {/* </Grid> */}

            {/* Submit Button for Change User/Account Details */}
            {/* <Grid item xs={12}>
              {(!isRegisterForm) ? <Button variant="flat" onClick={this.props.handleSubmit} className="button-right" size="large">
                    Change Account Details
                  </Button> :  null}
            </Grid> */}

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
              </Grid> 

              <Grid container spacing={16} className="button-right">
               { (this.props.error) ? <p className="error">{this.props.error}</p> : null}
              <Grid item container xs={12} spacing={16}>
                    {<Button variant="raised" size="large" type="submit">
                      Submit
                      </Button>}
                </Grid>
              </Grid>  
        </form>
      </div>
    );
  }
}



export default EditUser;