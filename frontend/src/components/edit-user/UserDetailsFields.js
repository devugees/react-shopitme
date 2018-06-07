import React, { Component } from 'react';
import {TextField, Grid }from '@material-ui/core';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

// Define the Gender Options here!!
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

const UserDetailsForm = props => {
  let userInfoLSParsed;
  const userInfoLS = localStorage.getItem('userInfo')
  if(userInfoLS){
    userInfoLSParsed = JSON.parse(userInfoLS);
    };
  return (
    <React.Fragment>
      <Grid item xs={6}>
        <TextField
          id='firstname'
          label='Firstname'
          placeholder='Firstname'
          onChange={props.handleChange('firstname')}
          margin="normal"
          required
          fullWidth
          value={userInfoLSParsed ? userInfoLSParsed.firstname : props.userdetails.firstname }
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          id='lastname'
          label='Laststname'
          placeholder='Laststname'
          onChange={props.handleChange('lastname')}
          margin="normal"
          required
          fullWidth
          value={userInfoLSParsed ? userInfoLSParsed.lastname : props.userdetails.lastname }
        />
      </Grid>
      <Grid item xs={8}>
        <TextField
          id='street'
          label='Street'
          placeholder='Street'
          onChange={props.handleChange('street')}
          margin="normal"
          required
          fullWidth
          value={userInfoLSParsed ? userInfoLSParsed.location.street : props.userdetails.street }
        />
      </Grid>
      <Grid item xs={4}>
        <TextField
          id='number'
          label='Number'
          placeholder='Number'
          onChange={props.handleChange('number')}
          margin="normal"
          required
          fullWidth
          value={userInfoLSParsed ? userInfoLSParsed.location.number : props.userdetails.number }
        />
      </Grid>
      <Grid item xs={4}>
        <TextField
          id='postcode'
          label='Postcode'
          placeholder='Postcode'
          onChange={props.handleChange('postcode')}
          margin="normal"
          required
          fullWidth
          value={userInfoLSParsed ? userInfoLSParsed.location.postcode : props.userdetails.postcode }
        />
      </Grid>
      <Grid item xs={8}>
        <TextField
          id='city'
          label='City'
          placeholder='City'
          onChange={props.handleChange('city')}
          margin="normal"
          required
          fullWidth
          value={userInfoLSParsed ? userInfoLSParsed.location.city : props.userdetails.city }
        />
      </Grid>
      {/* <Grid item xs={12}>
          <TextField
            id='country'
            label='Country'
            placeholder='Country'
            onChange={props.handleChange('country')}
            margin="normal"
            required
            fullWidth
            value={props.userdetails.deliverAdress.country}
          />
      </Grid> */}
      <Grid item xs={12}>
        <TextField
          id='email'
          label='Email'
          placeholder='Email Address'
          onChange={props.handleChange('email')}
          margin="normal"
          required
          fullWidth
          value={userInfoLSParsed ? userInfoLSParsed.email : props.userdetails.email }
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          id='mobile'
          label='Mobile'
          placeholder='Mobile'
          onChange={props.handleChange('mobile')}
          margin="normal"
          required
          fullWidth
          value={userInfoLSParsed ? userInfoLSParsed.mobile : props.userdetails.mobile }
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          id="gender"
          select
          label="Gender"
          value={userInfoLSParsed ? userInfoLSParsed.gender : props.userdetails.gender }
          onChange={props.handleChange('gender')}
          SelectProps={{
              native: true,
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
    </React.Fragment>
  );
}

export default UserDetailsForm;
