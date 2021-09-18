import React from 'react'
import Loader from 'react-loader-spinner';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import './Cards.css'

const Cards = ({ photos, loading }) => {
    const listenForLikes = () => {
        const likes = document.querySelectorAll(".like-btn");
        likes.forEach(like => {
         like.addEventListener("click", (event) => {
           event.target.classList.toggle("like-btn");
           event.target.classList.toggle("like-btn-active");
         })
        })
    }

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
                                <LazyLoadImage
                                    className="rover-img"
                                    effect="blur"
                                    src={photo.img_src} 
                                    alt={photo.full_name} 
                                />
                                <p>Launched from Earth - {photo.rover.launch_date}</p>
                                <p>Landed on Mars - {photo.rover.landing_date}</p>
                                <p>Earth Date Taken - {photo.earth_date}</p>
                                <i onClick={listenForLikes} className={"fas fa-heart fa-2x like-btn"}/>
                            </div>
                        </div>
                )
            })}
            </div>
        </div>
    )
}

export default Cards;