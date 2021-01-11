import React from 'react';
import PropTypes from 'prop-types'; 

import './Thumbnail.css';
import sample from './cedevita.png';

export const Thumbnail = (props) => {

    return (
        <div className="thumbnail">
            {props.productName}	
		<img src={sample}  height="250" />	
        </div>
    )
}


Thumbnail.propTypes = {
    productName: PropTypes.string.isRequired
  };