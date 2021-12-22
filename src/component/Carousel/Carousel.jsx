import React, { useState } from 'react';
import './carousel.css';

export const CarouselItem = ({ children, width }) => {
 return(
     <div className="carousel-item" style={{width: width}}>
         {children}
     </div>
 )
};

export const Carousel = ({ children }) => {
    const [ activeIndex, setActiveIndex ] = useState(0);

    const updateIndex = (newIndex) => {
        if(newIndex<0) {
            newIndex = 0;
        }
        else if(newIndex >= React.Children.count(children)) {
            newIndex = React.Children.count(children) - 1;
        }

        setActiveIndex(newIndex);
    }
    return(
        <div className="carousel">
            <div className="inner" style={{transform:` translateX(-${activeIndex*100}%)`}}>
                {React.Children.map(children, (child, index) => {
                    return React.cloneElement(child, {width: "100%"});
                })}
            </div>

            <div className="indicators">
                <button onClick={() => {
                    updateIndex(activeIndex-1);
                }}>Prev</button>
                {
                    React.Children.map(children, (child, index) => {
                        return(
                            <button onClick={() => {updateIndex(index)}}>
                                {index+1}
                            </button>
                        )
                    })
                }
                <button onClick={() => {
                    updateIndex(activeIndex+1);
                }}>Next</button>
            </div>
        </div>
    )
};