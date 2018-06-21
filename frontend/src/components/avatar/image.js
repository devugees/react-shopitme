import React from 'react';
import './image.css';

const styles = {
  position: "absolute",
  top: "0",
  right: "1rem",
  margin: 'auto',
}

const imgstyles = {
  width: '120px',
  height: '120px',
  border: '1px solid #ccc',
  borderRadius: '50%',
  padding: "0",
  marginTop: "1rem",
}

const image = props => {
  return (
    <div>
      <div style={styles} onClick={props.editpicHandler}>
        <img  style={imgstyles} src={props.imgSrc} alt=""/>
      </div>
    </div>
  )
}

export default image;