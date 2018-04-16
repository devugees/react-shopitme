import React, { Component , Fragment } from 'react';
import Rating from 'react-rating';
// import stars pics
import starGrey from '../pictures/starGrey.png';
import starYellow from '../pictures/starYellow.png';


export default class RatingStars extends React.Component {
  constructor(props) {
    super(props);
    this.state = {userName:'Alice Doe',
                  value: 0,
                  ratingNo:0,
                  max:5};
  }

  handleRatingChange =(value)=> {
    this.setState({ratingNo:value})
  } 

  render() {
    return (
      <Fragment>
        <div className="rating" style={{width:"12rem"}}>
          <p style={{fontSize:'3rem'}} >{this.state.userName} </p>
          <p style={{fontSize:'4rem' , margin:'0rem'}}>{this.state.ratingNo}/{this.state.max}</p>
          <Rating
            fractions
            placeholderRating={this.state.ratingNo}
            start={0}
            stop= {this.state.max}
            emptySymbol={<img src={starGrey} className="icon" style={{width:'3rem', height:'3rem'}} />}
            placeholderSymbol={<img src={starYellow} className="icon" />}
            fullSymbol={<img src={starYellow} className="icon" />}
            onChange={this.handleRatingChange}
          />
        </div>
      </Fragment>
    );
  }
}

<RatingStars placeholderRating={3} />