import React from 'react';

import Carousel from 'react-carousel';
import 'react-carousel/dist/index.css';

const App = () => {
    return (
        <div className="movies">
            <Carousel responsive={{
                large: {
                    toShow: 5,
                    toSlide: 5
                },
                desktop: {
                    toShow: 4,
                    toSlide: 4
                },
                ipad: {
                    toShow: 3,
                    toSlide: 3
                },
                mobile: {
                    toShow: 2,
                    toSlide: 2
                }
            }}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </Carousel>
        </div >
    )
};

export default App