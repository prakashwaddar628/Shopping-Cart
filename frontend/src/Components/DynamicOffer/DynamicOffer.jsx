import React, { Component } from 'react';
import './DynamicOffer.css';
import watch from '../assets/watche.png';
import popularMens from '../assets/Stylishwhitesuit.png';
import popularwomens from '../assets/womensfashion.png';
import popularkids from '../assets/kids.png';

class DynamicOffer extends Component {
    state = {
        currentIndex: 0,
        offers: [
            { title: "POEDAGAR", discount: "UP TO 60% OFF", img: watch },
            { title: "Mens Fashion", discount: "Up to 25% Off", img: popularMens },
            { title: "Womens Fashion", discount: "Up to 25% Off", img: popularwomens },
            { title: "Kids Fashion", discount: "Up to 25% Off", img: popularkids }
        ]
    };

    componentDidMount() {
        this.interval = setInterval(this.nextSlide, 3000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    nextSlide = () => {
        this.setState(prevState => ({
            currentIndex: (prevState.currentIndex + 1) % prevState.offers.length
        }));
    };

    prevSlide = () => {
        this.setState(prevState => ({
            currentIndex: (prevState.currentIndex - 1 + prevState.offers.length) % prevState.offers.length
        }));
    };

    render() {
        const { currentIndex, offers } = this.state;

        return (
            <div className="carousel-container">
                <button className="carousel-button left" onClick={this.prevSlide}>‹</button>
                <div className="carousel-slide" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                    {offers.map((offer, index) => (
                        <div className="dynamicoffers" key={index}>
                            <div className='profilesection'>
                                <img src={offer.img} alt="" />
                            </div>
                            <div className="descriptionsection">
                                <div>
                                    <h1>{offer.title}</h1>
                                    <p>{offer.discount}</p>
                                    <button>SHOP NOW</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <button className="carousel-button right" onClick={this.nextSlide}>›</button>
                <div className="carousel-indicators">
                    {offers.map((_, index) => (
                        <div key={index} className={`indicator ${index === currentIndex ? 'active' : ''}`}></div>
                    ))}
                </div>
            </div>
        );
    }
}

export default DynamicOffer;
