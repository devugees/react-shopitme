import React, { Component } from 'react'

const styles = {
    width: '135px',
    height: '135px',
    position: "absolute",
    top: "56px",
    right: "1rem",
    margin: 'auto',
    border: '1px solid #ccc',
    borderRadius: '50%',
    marginTop: '20px'
 }

 const image =(props)=> {
    return (
      <div>
        <p>sdfsdfasd</p>
        <img style={styles} src={props.imgSrc} alt=""/>
      </div>
    )
};

export default image;