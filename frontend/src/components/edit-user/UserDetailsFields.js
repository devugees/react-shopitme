import React, { Component } from 'react';
import {TextField, Grid }from '@material-ui/core';

// Define the Gender Options here!!
const genders = [
    { value: 'Female', label: 'Female' },
    { value: 'Male', label: 'Male' },
    { value: 'Other', label: 'Other' },
    { value: 'Rather Not Say', label: 'Rather Not Say' },
  ];

export default class UserDetailsForm extends Component {
  render() {
    return (
      <React.Fragment>
        <Grid item xs={6}>
          <TextField
            id='firstname'
            label='Firstname'
            placeholder='Firstname'
            onChange={this.props.handleChange('firstname')}
            margin="normal"
            required
            fullWidth
            value={this.props.userdetails.firstname}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            id='lastname'
            label='Laststname'
            placeholder='Laststname'
            onChange={this.props.handleChange('lastname')}
            margin="normal"
            required
            fullWidth
            value={this.props.userdetails.lastname}
          />
        </Grid>
        <Grid item xs={8}>
          <TextField
            id='street'
            label='Street'
            placeholder='Street'
            onChange={this.props.handleChange('street')}
            margin="normal"
            required
            fullWidth
            value={this.props.userdetails.street}
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            id='number'
            label='Number'
            placeholder='Number'
            onChange={this.props.handleChange('number')}
            margin="normal"
            required
            fullWidth
            value={this.props.userdetails.number}
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            id='postcode'
            label='Postcode'
            placeholder='Postcode'
            onChange={this.props.handleChange('postcode')}
            margin="normal"
            required
            fullWidth
            value={this.props.userdetails.postcode}
          />
        </Grid>
        <Grid item xs={8}>
          <TextField
            id='city'
            label='City'
            placeholder='City'
            onChange={this.props.handleChange('city')}
            margin="normal"
            required
            fullWidth
            value={this.props.userdetails.city}
          />
        </Grid>
        {/* <Grid item xs={12}>
            <TextField
                    id='country'
                    label='Country'
                    placeholder='Country'
                    onChange={this.props.handleChange('country')}
                    margin="normal"
                    required
                    fullWidth
                    value={this.props.userdetails.deliverAdress.country}
            />
        </Grid> */}
        <Grid item xs={12}>
          <TextField
            id='email'
            label='Email'
            placeholder='Email Address'
            onChange={this.props.handleChange('email')}
            margin="normal"
            required
            fullWidth
            value={this.props.userdetails.email}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id='mobile'
            label='Mobile'
            placeholder='Mobile'
            onChange={this.props.handleChange('mobile')}
            margin="normal"
            required
            fullWidth
            value={this.props.userdetails.mobile}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="gender"
            select
            label="Gender"
            value={this.props.userdetails.gender}
            onChange={this.props.handleChange('gender')}
            SelectProps={{
                native: true,
                }}
            helperText="Please select your gender"
            margin="normal"
            fullWidth
          >
          {genders.map(gender => (
            <option key={gender.value} value={gender.value}>{gender.label}</option>
          )
          )}
          </TextField>
        </Grid>
      </React.Fragment>
    );
  }
}
