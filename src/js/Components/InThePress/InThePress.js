import React, { useEffect } from 'react';
import '../../../css/components/InThePress/InThePress.css';
import pressImage from '../../../img/hotel-lobby.jpeg';

const PressQuote = ({ quote, author }) => {
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('show');
                } else {
                    entry.target.classList.remove('show');
                }
            });
        });

        const hiddenElement = document.getElementById(`press-quote-${quote}`);
        if (hiddenElement) {
            observer.observe(hiddenElement);
        }

        return () => {
            observer.disconnect();
        };
    }, [quote]);

    return (
        <div className={`press-quote-container hidden`} id={`press-quote-${quote}`}>
            <p>{quote}</p>
            <span>- {author}</span>
        </div>
    );
};

const InThePress = () => {
    return (
        <div className="press-section">
            <div className="press-image-wrapper">
                <img src={pressImage} className="press-image" alt="Press Cover" />
            </div>
            <h1 className='hidden'>In the Press</h1>
            <div className="press-section-container">
                <div className="press-section-container-inner hidden">
                    <PressQuote quote="Boost your product and service's credibility by adding testimonials from your clients. People love recommendations, so feedback from others who've tried it is invaluable." author="Santa Solana Post" />
                    <PressQuote quote="Explore the luxurious offerings at Wellhall. Immerse yourself in comfort, style, and top-notch hospitality. Celestial Heaven sets the standard for an unforgettable stay." author="Travel Gazette" />
                    <PressQuote quote="Discover the hidden gem that is Celestial Heaven. A haven of elegance and tranquility, offering a retreat like no other. Your escape to luxury starts here." author="Luxury Travel Magazine" />
                </div>
            </div>
        </div>
    );
};

export default InThePress;