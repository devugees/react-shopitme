import React from 'react';
import { Link } from 'react-router-dom';
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
  constructor(props){
    super(props)
    this.state = {
    firstname: '',
    //firstname: props.globalProps.firstname,
    firstnameError: '',
    lastname: '',
    lastnameError: '',
    email: '',
    emailError: '',
    username: '',
    usernameError: '',
    password: '',
    passwordError: '',
    confirmpassword: '',
    confirmpasswordError: '',
    street: '',
    streetError: '',
    number: '',
    numberError: '',
    postcode: '',
    postcodeError: '',
    city: '',
    cityError: '',
    mobile: '',
    mobileError: ''
  };
  }
  

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    console.log(this.state)
    // Check for errors
    // Clear form 
    this.setState ({
      
    })
    this.props.onChange({
      firstname: "",
      lastname: "",
      username: "",
      email: "",
      password: ""
    })
  };

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
                onChange={this.handleChange('firstname')}
                margin="normal"
                required={true}
                fullWidth
                value={this.state.firstname}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                id="lastname"
                label="Last"
                placeholder="Last"
                onChange={this.handleChange('lastname')}
                margin="normal"
                required
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="username"
                label="Username"
                placeholder="Username"
                onChange={this.handleChange('username')}
                margin="normal"
                required
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="email"
                label="Email"
                placeholder="Email"
                onChange={this.handleChange('email')}
                margin="normal"
                required
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="password-input"
                label="Password"
                placeholder="Password"
                onChange={this.handleChange('password')}
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
                onChange={this.handleChange('confirmpassword')}
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
                onChange={this.handleChange('street')}
                margin="normal"
                required
                fullWidth
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                id="number"
                label="Number"
                onChange={this.handleChange('number')}
                type="number"
                margin="normal"
                required
                fullWidth
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                id="postcode"
                label="Postcode"
                onChange={this.handleChange('postcode')}
                type="number"
                margin="normal"
                required
                fullWidth
              />
            </Grid>
            <Grid item xs={8}>
              <TextField
                id="full-width"
                label="City"
                placeholder="City"
                onChange={this.handleChange('city')}
                margin="normal"
                required
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="mobile"
                label="Mobile"
                placeholder="Mobile"
                onChange={this.handleChange('mobile')}
                fullWidth
                margin="normal"
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="select-gender"
                select
                label="Gender"
                className={classes.textField}
                value={this.state.gender}
                onChange={this.handleChange('gender')}
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
                onChange={this.handleChange('country')}
                margin="normal"
                required
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <Button variant="raised" color="secondary" className={classes.buttonleft}>
                <Link to="/">Cancel</Link>
              </Button>
              <Button variant="raised" color="primary" onClick={this.handleSubmit} className={classes.buttonright}>
                <Link to="">Create Account</Link>
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