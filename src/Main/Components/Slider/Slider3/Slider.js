import React from "react";
import { Carousel } from 'react-responsive-carousel';
import "react-slideshow-image/dist/styles.css";
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import "./Slider.css"


let Slider=()=> {
  return (
        <Carousel autoPlay className="my-caraousel-class">
            <div>
                <img alt="" src="https://dummyimage.com/600x600/000/fff" />
                <p className="legend">Legend 1</p>
            </div>
            <div>
                <img alt="" src="https://dummyimage.com/600x600/000/fff" />
                <p className="legend">Legend 2</p>
            </div>
            <div>
                <img alt="" src="https://dummyimage.com/600x600/000/fff" />
                <p className="legend">Legend 3</p>
            </div>
            <div>
                <img alt="" src="https://dummyimage.com/600x600/000/fff" />
                <p className="legend">Legend 4</p>
            </div>
            <div>
                <img alt="" src="https://dummyimage.com/600x600/000/fff" />
                <p className="legend">Legend 5</p>
            </div>
            <div>
                <img alt="" src="https://dummyimage.com/600x600/000/fff" />
                <p className="legend">Legend 6</p>
            </div>
            <div>
                <img alt="" src="https://dummyimage.com/600x600/000/fff" />
                <p className="legend">Legend 7</p>
            </div>
            <div>
                <img alt="" src="https://dummyimage.com/600x600/000/fff" />
                <p className="legend">Legend 8</p>
            </div>
            <div>
                <img alt="" src="https://dummyimage.com/600x600/000/fff" />
                <p className="legend">Legend 9</p>
            </div>
            <div>
                <img alt="" src="https://dummyimage.com/600x600/000/fff" />
                <p className="legend">Legend 10</p>
            </div>
            <div>
                <img alt="" src="https://dummyimage.com/600x600/000/fff" />
                <p className="legend">Legend 11</p>
            </div>
            <div>
                <img alt="" src="https://dummyimage.com/600x600/000/fff" />
                <p className="legend">Legend 12</p>
            </div>
            <div>
                <img alt="" src="https://dummyimage.com/600x600/000/fff" />
                <p className="legend">Legend 13</p>
            </div>
            <div>
                <img alt="" src="https://dummyimage.com/600x600/000/fff" />
                <p className="legend">Legend 14</p>
            </div>
        </Carousel>
    );
}
export default Slider