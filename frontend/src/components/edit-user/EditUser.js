import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import MenuItem from 'material-ui/Menu/MenuItem';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import { FormControl, FormHelperText } from 'material-ui/Form';
import Input, { InputLabel } from 'material-ui/Input';
import Select from 'material-ui/Select';
import Grid from 'material-ui/Grid';
import './EditUser.css';



const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  menu: {
    width: 200,
  },
  buttonleft: {
    margin: theme.spacing.unit,
    float: "left"
  },
  buttonright: {
    margin: theme.spacing.unit,
    float: "right"
  },
  input: {
    display: 'none',
  },
  root: {
    display: 'flex',
    flexWrap: 'wrap',
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

  render() {
    const { classes } = this.props;

    return (
      <div className="edit-user">
        <form className={classes.container} noValidate autoComplete="off">
          <Grid container spacing={16}>
            <Grid item xs={6}>
              <TextField
                id="firstname"
                label="First"
                placeholder="First"
                onChange={this.props.handleChange('firstname')}
                margin="normal"
                required={true}
                fullWidth
                value={this.props.userdetails.firstname}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                id="lastname"
                label="Last"
                placeholder="Last"
                onChange={this.props.handleChange('lastname')}
                margin="normal"
                required
                fullWidth
                value={this.props.userdetails.lastname}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="username"
                label="Username"
                placeholder="Username"
                onChange={this.props.handleChange('username')}
                margin="normal"
                required
                fullWidth
                value={this.props.userdetails.username}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="email"
                label="Email"
                placeholder="Email"
                onChange={this.props.handleChange('email')}
                margin="normal"
                required
                fullWidth
                value={this.props.userdetails.email}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="password-input"
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
                id="confirm-password-input"
                label="Confirm Password"
                placeholder="Confirm Password"
                onChange={this.props.handleChange('confirmpassword')}
                type="password"
                margin="normal"
                required
                fullWidth
              />
            </Grid>
            <Grid item xs={8}>
              <TextField
                id="street"
                label="Street"
                placeholder="Street"
                onChange={this.props.handleChange('street')}
                margin="normal"
                required
                fullWidth
                value={this.props.userdetails.street}
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                id="number"
                label="Number"
                onChange={this.props.handleChange('number')}
                type="number"
                margin="normal"
                required
                fullWidth
                value={this.props.userdetails.number}
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                id="postcode"
                label="Postcode"
                onChange={this.props.handleChange('postcode')}
                type="number"
                margin="normal"
                required
                fullWidth
                value={this.props.userdetails.postcode}
              />
            </Grid>
            <Grid item xs={8}>
              <TextField
                id="full-width"
                label="City"
                placeholder="City"
                onChange={this.props.handleChange('city')}
                margin="normal"
                required
                fullWidth
                value={this.props.userdetails.city}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="mobile"
                label="Mobile"
                placeholder="Mobile"
                onChange={this.props.handleChange('mobile')}
                fullWidth
                margin="normal"
                required
                value={this.props.userdetails.mobile}
              />
            </Grid>
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
            <Grid item xs={12}>
              <TextField
                id="country"
                label="Country"
                placeholder="Country"
                onChange={this.props.handleChange('country')}
                margin="normal"
                required
                fullWidth
                value={this.props.userdetails.country}
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