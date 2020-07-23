import React from 'react';
import Coverflow from 'react-coverflow';
import "./Card.css"


let arr = [0, 1, 2, 3, 4, 5]

let MyCard = () => {
    const fn = function () {
        console.log("a")
    }
    return (
        <Coverflow width="960" height="300"
            displayQuantityOfSide={2}
            navigation={true}
            enableScroll={false}
            clickable={true}
            active={2}
        >
            {arr.map((i) => (<div
                key={i}
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
            </div>))}
        </Coverflow>
    )
}
export default MyCard