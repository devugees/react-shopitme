import React, { Component } from 'react';
import Rating from 'react-rating';
// import stars pics
import starGrey from '../pictures/starGrey.png';
import starYellow from '../pictures/starYellow.png';
import starRed from '../pictures/starRed.png';




export default class ResetRating extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: 0};
  }

  handleClick =(event) => {
    this.setState({value: undefined});
  }

  render() {
    return (
      <div>
        <Rating
          placeholderRating={3}
          emptySymbol={<img src={starGrey} className="icon" style={{width:'3rem', height:'3rem'}} />}
          placeholderSymbol={<img src={starRed} className="icon" />}
          fullSymbol={<img src={starYellow} className="icon" />}
        />
        <button onClick={this.handleClick}>Reset</button>
      </div>
    );
  }
}

<ResetRating placeholderRating={3} />