import React, { Component , Fragment } from 'react';
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
      <Fragment>
        <div className="rating">
         <div><p style={{fontSize:'5rem'}}>3/5</p></div>
          <Rating

            fractions
            placeholderRating={3}
            start={0}
            stop= {5}
            emptySymbol={<img src={starGrey} className="icon" style={{width:'3rem', height:'3rem'}} />}
            placeholderSymbol={<img src={starRed} className="icon" />}
            fullSymbol={<img src={starYellow} className="icon" />}
          />
          <button onClick={this.handleClick}>Reset</button>
        </div>
        {console.log(this.state.displayValue)}
      </Fragment>
    );
  }
}

<ResetRating placeholderRating={3} />