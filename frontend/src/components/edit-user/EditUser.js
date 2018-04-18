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
import Textfield from './Textfield';
import Submit from './Button';


const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  menu: {
    width: 200,
  },
  buttonright: {
    margin: theme.spacing.unit,
    float: "right"
  },
  input: {
    display: 'none',
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing.unit,
  },
});

const gender = [
  {
    value: 'Female',
    label: 'Female',
  },
  {
    value: 'Male',
    label: 'Male',
  },
  {
    value: 'Other',
    label: 'Other',
  },
  {
    value: 'Rather Not Say',
    label: 'Rather Not Say',
  },
];




class EditUser extends React.Component {

  makeFields(userdetails, handleChange) {
    console.log(userdetails, handleChange)
    return Object.keys(userdetails).map(
      key => {
        console.log('key is ', key)
        return <Textfield handleChange={handleChange} index={key} key={key} userdetails={userdetails}/>
      }
    )
  }

  render() {

    

    const { classes } = this.props;

    const isRegisterForm = this.props.formType.Register;

    console.log(isRegisterForm);
    return (
      <div className="edit-user">
        <form className={classes.container} noValidate autoComplete="off">
          <Grid container spacing={16}>
          {(isRegisterForm) ? <Typography variant="display1">Register</Typography> :  <Typography variant="display1">Change Account Detail</Typography>}
            {/*Object.keys(this.props.userdetails).map(
              key => {
                console.log('key is ', key)
                return <Textfield handleChange={this.props.handleChange} index={key} key={key} userdetails={this.props.userdetails}/>
              }
            )*/}

            {this.makeFields(this.props.userdetails, this.props.handleChange)}

              <Grid item xs={12}>
                <TextField
                  id="select-gender"
                  select
                  label="Gender"
                  className={classes.textField}
                  value={this.props.userdetails.gender}
                  onChange={this.props.handleChange('gender')}
                  SelectProps={{
                    native: true,
                    MenuProps: {
                      className: classes.menu,
                    },
                  }}
                  helperText="Please select your gender"
                  margin="normal"
                  fullWidth
                >
                  {gender.map(option => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </TextField>
              </Grid>

              {(!isRegisterForm) ? <Typography variant="display1">Change Password</Typography> :  null}

              
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
              </Grid>
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
            <Grid item xs={12}>
              <Button variant="raised" color="secondary" className={classes.buttonleft}>
                Cancel
              </Button>
              <Button variant="raised" color="primary" onClick={this.props.handleSubmit} className={classes.buttonright}>
                Create Account
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

export default withStyles(styles)(EditUser);