/*eslint-disable*/
import React from 'react';

function Card(props) {
  return (
    <div className="col-md-4">
      <img src={'https://codingapple1.github.io/shop/shoes' + (props.index + 1) + '.jpg'} width="100%" />
      <a href={'detail/' + props.index}>
        <h4>{props.shoes.title}</h4>
      </a>
      <p>
        {props.shoes.content} & {props.shoes.price}
      </p>
    </div>
  );
}

export default Card;
