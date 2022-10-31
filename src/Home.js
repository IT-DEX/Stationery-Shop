import React from "react";
import { useState } from 'react';
import { dataTwo } from './dataTwo';

function Home() {

    const [banner, setBanner] = useState(0);
    const {id, name, image} = dataTwo[banner];

    const nextBanner = () => {
        setBanner((banner => {
            banner++;
            if(banner > dataTwo.length-1) {
                banner=0;
            }
            return banner;
        }))
    }

    const previousBanner = () => {
        setBanner (banner => {
            banner--;
            if(banner<0) {
                return dataTwo.length-1;
            }
            return banner;
        })
    }

    return (
        <div>

            <div className="heading">
                <h1>
                    Your Favourite Stationery Shop
                </h1>

            </div>
            <div className="container">
                <img src={image} width="1000" height="450" alt="banner"/>
            </div>

            <div className="btn container">
                <button className="btn-banner" onClick={previousBanner}> previous </button>
                <button className="btn-banner" onClick={nextBanner}> next </button>
            </div>

        </div>
    )
}

export default Home;