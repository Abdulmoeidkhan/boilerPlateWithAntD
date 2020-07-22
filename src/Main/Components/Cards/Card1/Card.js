import React from 'react';
import Coverflow from 'react-coverflow';
import "./Card.css"


let MyCard = () => {
    const fn = function () {
        console.log("a")
    }
    return (
        <Coverflow width="960" height="500"
            displayQuantityOfSide={2}
            navigation={true}
            enableScroll={false}
            clickable={true}
            active={2}
        >
            <div
                onClick={() => fn()}
                onKeyDown={() => fn()}
                role="menuitem"
                tabIndex="0"
            >
                <img
                    src='https://dummyimage.com/600x400/000/fff'
                    alt='title or description'
                    style={{
                        display: 'block',
                        width: '100%',
                    }}
                />
            </div>
            <img src='https://dummyimage.com/600x400/000/fff' alt='title or description' 
            // data-action="http://andyyou.github.io/react-coverflow/"
             />
            <img src='https://dummyimage.com/600x400/000/fff' alt='title or description' 
            // data-action="http://andyyou.github.io/react-coverflow/"
             />
             <img src='https://dummyimage.com/600x400/000/fff' alt='title or description' 
            // data-action="http://andyyou.github.io/react-coverflow/"
             />
             <img src='https://dummyimage.com/600x400/000/fff' alt='title or description' 
            // data-action="http://andyyou.github.io/react-coverflow/"
             />
             <img src='https://dummyimage.com/600x400/000/fff' alt='title or description' 
            // data-action="http://andyyou.github.io/react-coverflow/"
             />
             <img src='https://dummyimage.com/600x400/000/fff' alt='title or description' 
            // data-action="http://andyyou.github.io/react-coverflow/"
             />
             <img src='https://dummyimage.com/600x400/000/fff' alt='title or description' 
            // data-action="http://andyyou.github.io/react-coverflow/"
             />
        </Coverflow>
    )
}
export default MyCard