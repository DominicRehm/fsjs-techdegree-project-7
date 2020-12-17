import React from 'react';

const Photo = (props) => {

    let url = `https://live.staticflickr.com/${props.server}/${props.id}_${props.secret}_w.jpg`;

    return(
        <li key={props.key}>
            <img src={url} alt={props.id}/>
        </li>
    )
}

export default Photo;