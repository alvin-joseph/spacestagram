import React, { useState } from 'react'
import ClassNames from 'classnames'
import Loader from 'react-loader-spinner';

import './Cards.css'

const Cards = ({ photos, loading }) => {
    const [liked, setLiked] = useState(false)
    const [disliked, setDisliked] = useState(false)

    const handleClick = () => {
        if(!disliked) {
            setLiked(!liked)
        } else {
            setLiked(true)
            setDisliked(false)
        }
    }

    const classLikeButton = ClassNames({
        "fas fa-heart fa-2x like-btn": true,
        "fas fa-heart fa-2x like-btn-active": liked
    });
    return (
        <div className="container my-container">
            <div className="row">
            {loading && (
                <div className="spinner">
                    <Loader type="Puff" color="#204963" height="60" width="60" />
                    <p>Loading Data...</p>
                </div>
            )}
            {photos.map(photo => {
                return (
                        <div key={photo.id} className="col-lg-4 col-sm-6 my-col">
                            <div className="thumbnail">
                                <p className="card-title">{photo.rover.name} Rover - {photo.camera.full_name}</p>
                                <img src={photo.img_src} alt={photo.full_name} />
                                <p>Launched from Earth - {photo.rover.launch_date}</p>
                                <p>Landed on Mars - {photo.rover.landing_date}</p>
                                <p>Earth Date Taken - {photo.earth_date}</p>
                                <i onClick={handleClick} className={classLikeButton}/>
                            </div>
                        </div>
                )
            })}
            </div>
        </div>
    )
}

export default Cards;