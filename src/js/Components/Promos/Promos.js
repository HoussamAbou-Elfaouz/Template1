import { useEffect } from 'react';
import '../../../css/components/Promos/Promos.css';
import discountImage1 from '../../../img/laptop-image.jpg';
import discountImage2 from '../../../img/hotel-spa-people.jpg';
import discountImage3 from '../../../img/suitcase-image.png';

const PromoCard = ({ image, title, description }) => {
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

        const hiddenElement = document.getElementById(title);
        if (hiddenElement) {
            observer.observe(hiddenElement);
        }

        return () => {
            observer.disconnect();
        };
    }, [title]);

    return (
        <div className={`promo-card hidden`} id={title}>
            <img src={image} className="carousel-image" alt={`Promo ${title}`} />
            <div className="promo-card-description">
                <h3 className="promo-title">{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    );
};

const Promos = () => {
    return (
        <div className="promos">
            <div className="promos-container">
                <h1 className='hidden'>Promos and Offers</h1>
                <div className="promos-container-inner hidden">
                    <PromoCard
                        image={discountImage1}
                        title="Early Bird Discount"
                        description="Book in advance and enjoy exclusive discounts with our Early Bird promotion. Plan your stay ahead and secure your spot in our luxurious accommodations."
                    />
                    <PromoCard
                        image={discountImage2}
                        title="Celestial Heaven Members Club"
                        description="Join the Celestial Heaven Members Club to unlock exclusive perks and privileges. Enjoy special rates, complimentary services, and personalized experiences tailored just for our valued members."
                    />
                    <PromoCard
                        image={discountImage3}
                        title="Book 3 Nights, Get 1 Night Free"
                        description="Extend your stay and make the most of your time with our Book 3 Nights, Get 1 Night Free promotion. Relax, unwind, and experience the luxury of an extra night on us."
                    />
                </div>
            </div>
        </div>
    );
};

export default Promos;
