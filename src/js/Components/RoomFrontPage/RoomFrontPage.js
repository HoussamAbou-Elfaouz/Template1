import '../../../css/components/RoomFrontPage/RoomFrontPage.css';
import familySuite from '../../../img/family-suite.jpg';
import hotelRoom from '../../../img/hotel-room.png';
import hotelBathroom from '../../../img/hotel-bathroom.png';


export default function RoomFrontPage() {


    return (
        <div className="room-front-page">
            <div className="room-front-page-container">
                <div className="room-front-page-container-inner hidden">
                    <h2>The Family Suite</h2>
                    <p>Enjoy the convenience of modern amenities
                and create lasting memories together. Book now for a delightful family getaway!</p>
                </div>
                <div className="room-front-page-image-section hidden">
                    <div className="room-front-page-image-section-inner">
                        <img src={familySuite} className="room-front-page-image" alt='#'/>
                        <div className="room-front-page-image-description">
                            <p>Our Family Suite is designed with your family's comfort in mind. Spacious and
                elegantly furnished, it features separate sleeping areas for adults and children,
                ensuring everyone has their own space. </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="room-front-page-second-section">
                <div className="room-front-page-second-section-inner hidden">
                    <img src={hotelRoom} className="room-front-page-image-detailed" alt='#'/>
                    <p> Indulge in the inviting ambiance of our well-appointed rooms. Each detail is meticulously crafted to
            provide you with the utmost comfort. A perfect blend of style and functionality awaits your stay.</p>
                </div>
                <div className="room-front-page-second-section-inner hidden" id="room-front-page-second-section-inner-bigger">
                    <img src={hotelBathroom} className="room-front-page-image-detailed" id="front-page-image-highlight" alt='#'/>
                    <p>Unwind in our luxurious bathrooms designed for ultimate relaxation. Immerse yourself in the soothing
            atmosphere and rejuvenate after a day of exploration. Your comfort is our top priority.</p>
                </div>

            </div>
        </div>
    )
}