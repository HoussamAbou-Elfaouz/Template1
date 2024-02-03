import React, { useEffect } from 'react';
import '../../../css/components/Accommodations/Accommodations.css';
import deluxeRoom from '../../../img/deluxe-room.jpg';
import seaViewRoom from '../../../img/deluxe-room-sea.jpg';
import familySuite from '../../../img/family-suite.jpg';

export default function Accommodations() {
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

        const hiddenElements = document.querySelectorAll('.hidden');
        hiddenElements.forEach((element) => observer.observe(element));

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <div className="accommodations">
            <div className="accommodations-container">
                <h2 className="hidden">Accommodations</h2>
                <div className="accommodations-container-inner">
                    <div className="room-card card hidden">
                        <img src={deluxeRoom} className="carousel-image" alt="#" />
                        <div className="room-card-description blur-background">
                            <span className="room-people-count">2 adults | 1 child below 7</span>
                            <h3 className="room-title">Deluxe Room</h3>
                            <span className="room-price">from $189 a night</span>
                        </div>
                    </div>
                    <div className="room-card card hidden">
                        <img src={seaViewRoom} className="carousel-image" alt="#" />
                        <div className="room-card-description blur-background">
                            <span className="room-people-count">2 adults | 1 child below 7</span>
                            <h3 className="room-title">Deluxe Sea View</h3>
                            <span className="room-price">from $209 a night</span>
                        </div>
                    </div>
                    <div className="room-card card hidden">
                        <img src={familySuite} className="carousel-image" alt="#" />
                        <div className="room-card-description blur-background">
                            <span className="room-people-count">4 adults | 2 child below 7</span>
                            <h3 className="room-title">The Wellhall Family Suite</h3>
                            <span className="room-price">from $399 a night</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
