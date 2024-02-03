import { useEffect } from 'react';
import '../../../css/components/Home/Home.css';
import image from '../../../img/woman-image.png'

export default function Home({ homeRef }) {
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
        <div className="home" ref={homeRef}>
            <div className="home-container">
                <div className="home-container-inner hidden">
                    <div className="home-heading-container">
                        <h2 className='hidden'>Welcome to Celestial Heaven - Where luxury meets tranquility.</h2>
                        <p className='hidden'>Welcome to Celestial Heaven – where luxury meets tranquility. Nestled in the heart of our enchanting surroundings, our property stands as a testament to unparalleled comfort and sophistication. Immerse yourself in an experience crafted with meticulous attention to detail, ensuring each moment is a celebration of refined living. What sets us apart is not just the elegance of our accommodations but the promise of a haven that transcends expectations. From world-class amenities to personalized service, every aspect of Celestial Heaven is designed to create memories that linger long after your stay. Choose us for an indulgent escape, where opulence is a standard, and every guest is treated to an immersive journey of relaxation and rejuvenation. Your journey to an extraordinary retreat begins here – welcome to the epitome of luxury at Celestial Heaven.</p>

                    </div>
                    <img src={image} className="home-image" alt='#'/>
                </div>
            </div>
        </div>
    )
}