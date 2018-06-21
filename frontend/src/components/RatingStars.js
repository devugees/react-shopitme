import React from 'react';
import StarRatingComponent from 'react-star-rating-component';
import {Paper, Grid} from '@material-ui/core';

export default class RatingStars extends React.Component {
  constructor(props) {
    super();
    this.state = {
      rating: props.rating
    };
  }
 
  onStarClick = (nextValue, prevValue, name) => {
    this.setState({rating: nextValue});
  }

  render() {
    const {rating} = this.state;
    const userInfo = JSON.parse(localStorage.getItem('userInfo'))

    return (
      <div className="ratingStars">
            <h2>{userInfo.firstname} {userInfo.lastname}</h2>
            <h2>{rating}/5</h2>
            <StarRatingComponent
              name="rate1"
              starCount={5}
              value={rating}
              onStarClick={this
              .onStarClick
              .bind(this)}/>
      </div>
    );
  }
}
