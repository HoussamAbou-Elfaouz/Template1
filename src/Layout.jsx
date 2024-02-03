import { Link, Outlet } from "react-router-dom";

export default function Layout(){
    return(
        <>
            <nav>
                <ul>
                    <li><Link to='./js/Components/FrontPage/FrontPage.js'>WellHall</Link></li>
                    <li><Link to='./js/Components/Home/Home.js'>Home</Link></li>
                    <li><Link to='./js/Components/Accommodations/Accommodations.js'>Accommodations</Link></li>
                    <li><Link to='./js/Components/RoomFrontPage/RoomFrontPage.js'>Room Front-Page</Link></li>
                    <li><Link to='./js/Components/Promos/Promos.js'>Promos & Offers</Link></li>
                    <li><Link to='./js/Components/InThePress/InThePress.js'>In The Press</Link></li>
                    <li><Link to='./js/Components/Contact.js'>Contact</Link></li>
                </ul>
            </nav>
            <Outlet />
        </>
    )
}