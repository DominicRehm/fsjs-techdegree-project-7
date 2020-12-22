// Import React
import React from 'react';
// Import Components
import Photo from './Photo';
import NoPhoto from './NoPhoto';

export default function PhotoContainer({ data, name }) {

    const result = data;

    return(
        <div className="photo-container">
            <h2>Here'e the results for: {name}</h2>
            <ul>
                {   result.length > 0 ? (
                        result.map(photo => (
                            <Photo 
                                server={photo.server}
                                id={photo.id}
                                secret={photo.secret}
                                key={photo.id}
                            />
                        ))
                ) : (
                    <NoPhoto />
                )
                }
            </ul>
        </div>
    )
}