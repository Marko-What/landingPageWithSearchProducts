import React from 'react';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';

import './bannerSlider.css';
import sample from './cedevita.png';

export const BannerSlider = () => {
	
const content = [{title: "cedevita", description: "cedevita drink",},{title: "cedevita", description: "cedevita drink"},{title: "cedevita", description: "cedevita drink"}];

    return (
        <div className="bannerSliderDiv">
            <Slider>
		  {content.map((article, index) => <div key={index}>
		    <h2>{article.title}</h2>
		    <div>{article.description}</div>
			 <img src={sample}  height="250" />
		    
		  </div>)}
	    </Slider>
        </div>
    )
}
