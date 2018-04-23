import React, { Component , Fragment } from 'react';
import StarRatingComponent from 'react-star-rating-component';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';

// import stars pics
import starGrey from '../pictures/starGrey.png';
import starYellow from '../pictures/starYellow.png';



export default class RatingStars extends React.Component {
  constructor() {
    super();
 
    this.state = {
      rating: 1
    };
  }
 
  onStarClick(nextValue, prevValue, name) {
    this.setState({rating: nextValue});
  }
 
  render() {
    const { rating } = this.state;
    
    return (                
      <div>
      <Grid item xs={6} sm={6}>
        <Paper>
        <h1>Alice Doe</h1>
        <h2>{rating}/5</h2>
        <StarRatingComponent 
          name="rate1" 
          starCount={5}
          value={rating}
          onStarClick={this.onStarClick.bind(this)}
        />
        </Paper>
        </Grid>
      </div>
    );
  }
}
