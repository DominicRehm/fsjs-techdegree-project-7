import React from 'react';
import Photo from './Photo';

const PhotoContainer = (props) => {

    return(
        <div className="photo-container">
            <h2>Results</h2>
            <ul>
                {props.data.map((picture) => (
                    <Photo 
                        key={picture.id}
                        server={picture.server}
                        id={picture.id}
                        secret={picture.secret}
                    />
                ))}
            </ul>
        </div>
    )
}

export default PhotoContainer;