import React, { Component } from 'react';
import './DynamicOffer.css';

class DynamicOffer extends Component {
    state = { 
        user: {
            name: 'John Doe',
            age: 28,
            interests: ['travel', 'fitness', 'technology']
        },
        offers: [
            { id: 1, title: '50% off on travel accessories', description: 'Get the best deals on travel accessories.' },
            { id: 2, title: 'Gym membership discount', description: 'Save 30% on your next gym membership.' },
            { id: 3, title: 'Latest tech gadgets', description: 'Exclusive offers on the latest tech gadgets.' }
        ]
    };

    render() { 
        const { user, offers } = this.state;

        return (
            <div className="dynamicoffers">
                <div className='profilesection'>
                    <h2>{user.name}</h2>
                    <p>Age: {user.age}</p>
                    <p>Interests: {user.interests.join(', ')}</p>
                </div>
                <div className="descriptionsection">
                    {offers.map(offer => (
                        <div key={offer.id} className="offer">
                            <h3>{offer.title}</h3>
                            <p>{offer.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}
 
export default DynamicOffer;
