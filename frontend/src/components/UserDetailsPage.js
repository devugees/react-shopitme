import React, { Component } from 'react';
// import Components
import {Button} from '@material-ui/core';
// import CSS
import nyancat from '../pictures/nyancat.jpg';

export default class UserDetails extends Component {
  render() {
    return (
    <React.Fragment>
    <h1>Header H1</h1>
    <Button variant="raised" color="primary">
      Welcome to the shop
    </Button>
    <div className="text">

      <p>Lorem ipsum dolor sit amet, <a href="#">consectetur adipisicing</a> elit. Et tempore a inventore asperiores expedita dolore excepturi vitae rem praesentium sit necessitatibus animi vel ullam, doloremque illo consectetur. Cupiditate, suscipit, repellendus.</p>
      <p>Perspiciatis dolor itaque magni quod, dolores recusandae illum repudiandae, eum placeat dolorem autem similique corporis debitis ab, incidunt adipisci cumque dolorum laborum ipsum vitae doloremque, eos! Cum dolores, nostrum. Natus?</p>
      <p>Aliquam officiis eligendi sed magni voluptatem asperiores error molestiae quas, quidem quo odit illum libero assumenda quaerat ipsa, quisquam, accusantium fuga. Quae vel laudantium minus maiores sunt eveniet, delectus adipisci!</p>
      <p>Error cupiditate architecto similique corporis veritatis saepe quas, fugit! Harum modi, eveniet, id quae odit voluptatem ea voluptates at, assumenda eum repellendus reiciendis numquam adipisci minima a atque reprehenderit earum?</p>
      </div>
      <img src={nyancat} alt="nyancat"/>
      <div className="text">
      <p>Lorem ipsum dolor sit amet, <a href="#">consectetur adipisicing</a> elit. Et tempore a inventore asperiores expedita dolore excepturi vitae rem praesentium sit necessitatibus animi vel ullam, doloremque illo consectetur. Cupiditate, suscipit, repellendus.</p>
      <p>Perspiciatis dolor itaque magni quod, dolores recusandae illum repudiandae, eum placeat dolorem autem similique corporis debitis ab, incidunt adipisci cumque dolorum laborum ipsum vitae doloremque, eos! Cum dolores, nostrum. Natus?</p>
      <p>Aliquam officiis eligendi sed magni voluptatem asperiores error molestiae quas, quidem quo odit illum libero assumenda quaerat ipsa, quisquam, accusantium fuga. Quae vel laudantium minus maiores sunt eveniet, delectus adipisci!</p>
      <p>Error cupiditate architecto similique corporis veritatis saepe quas, fugit! Harum modi, eveniet, id quae odit voluptatem ea voluptates at, assumenda eum repellendus reiciendis numquam adipisci minima a atque reprehenderit earum?</p>
      </div>
    </React.Fragment>
  )
  }
}