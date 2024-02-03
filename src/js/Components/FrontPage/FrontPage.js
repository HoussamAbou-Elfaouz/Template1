import '../../../css/components/FrontPage/FrontPage.css';
import video from '../../../media/front-page-video.mp4';
import { useEffect, useState } from 'react';

export default function FrontPage({ homeRef, videoRef }) {
    const [isButtonEnabled, setIsButtonEnabled] = useState(false);
    useEffect(() => {
        videoRef.current.muted = true;
        videoRef.current.play();
        const animationDuration = 7500;
        setTimeout(() => {
            setIsButtonEnabled(true);
        }, animationDuration);
    }, [videoRef]);
    
    const scroll = (ref) => {
        ref.current.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="front-page">
            <video autoPlay playsInline loop muted className="front-page-video-container" ref={videoRef}>
                <source src={video} type="video/mp4"></source>
            </video>
            <div className="heading-container">
                <h3>UNVEIL</h3>
                <h1>Celestial Haven</h1>
                <h2>Exquisite Resort & Spa</h2>
            </div>
            <button className="front-page-btn" onClick={() => isButtonEnabled && scroll(homeRef)} style={{ opacity: isButtonEnabled ? 1 : 0, pointerEvents: isButtonEnabled ? 'auto' : 'none' }}>
                LEARN MORE
            </button>
        </div>
    );
}
