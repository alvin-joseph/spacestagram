import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './APOD.css';

const API_KEY = process.env.REACT_APP_API_KEY;

const APOD = () => {
    const [image, setImage] = useState("");
    const [linktype, setLinktype] = useState("");

    
    useEffect(() => {
        axios
        .get(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`)
        .then(res => {
            setImage(res.data);
            if(res.data.url.toString().includes('youtube')) {
                setLinktype("video")
            }
        })
        .catch(err => {
            console.log(err);
        })
    }, []);
    
    
    return (
        <div className="apod-container">
            <h1>NASA's Astronomy Photo of the Day!</h1>
            {(linktype === "video" ?
                (
                    <div className="video-responsive">
                        <iframe
                        width="853"
                        height="480"
                        src={image.url}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        title="Embedded youtube"
                        />
                    </div>
                )
                :
                (
                    <div className="img-container">
                        <img src={image.url} alt={`${image.title}`}></img>
                    </div>
                )
            )}
            <div className="img-description">
                <h2>{image.title}</h2>
                <p>Copyright - {image.copyright || 'n/a'}</p>
                <p>{image.date}</p>
                <p className='explanation'>{image.explanation}</p>
            </div>
        </div>
    )
}

export default APOD;