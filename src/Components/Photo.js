import React from 'react';

export default function Photo({  server, id, secret }) {

    const url = `https://live.staticflickr.com/${server}/${id}_${secret}_w.jpg` 

    return(
        <li>
            <img src={url} alt=""/>
        </li>
    )
}