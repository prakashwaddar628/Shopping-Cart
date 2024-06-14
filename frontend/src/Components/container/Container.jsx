import React from 'react';
import './Container.css';
import WirelessHeadphones from '../assets/WirelessHeadphones.png';
import NoiseSmartwatches from '../assets/NoiseSmartwatches.png';
import MobileSpeakers from '../assets/MobileSpeakers.png';
import MirrorlessCameras from '../assets/MirrorlessCameras.png';
import printers from '../assets/Printers.png';
import FastrackSmartwatches from '../assets/FastrackSmartwatches.png';


export const Container = () => {
  return (
    <main className='list-container-products'>
      <div className='gridcontaint'>
        <div className='item-container'>
          <img src={WirelessHeadphones} alt="Best True Wireless Headphones" />
        </div>
        <div className="item-name">Best True Wireless Headphones</div>
        <div className="item-price">Grab Now</div>
      </div>
      <div className='gridcontaint'>
        <div className='item-container'>
          <img src={NoiseSmartwatches} alt="Noise Smartwatches" />
        </div>
        <div className="item-name">Noise Smartwatches</div>
        <div className="item-price">From ₹1,099</div>
      </div>
      <div className='gridcontaint'>
        <div className='item-container'>
          <img src={MobileSpeakers} alt="Best Selling Mobile Speakers" />
        </div>
        <div className="item-name">Best Selling Mobile Speakers</div>
        <div className="item-price">From ₹499*</div>
      </div>
      <div className='gridcontaint'>
        <div className='item-container'>
          <img src={MirrorlessCameras} alt="Top Mirrorless Cameras" />
        </div>
        <div className="item-name">Top Mirrorless Cameras</div>
        <div className="item-price">Shop Now!</div>
      </div>
      <div className='gridcontaint'>
        <div className='item-container'>
          <img src={printers} alt="Printers" />
        </div>
        <div className="item-name">Printers</div>
        <div className="item-price">From ₹3,999</div>
      </div>
      <div className='gridcontaint'>
        <div className='item-container'>
          <img src={FastrackSmartwatches} alt="Fastrack Smartwatch" />
        </div>
        <div className="item-name">Fastrack Smartwatches</div>
        <div className="item-price">From ₹1,399</div>
      </div>
    </main>
  );
};
