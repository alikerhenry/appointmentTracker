import React from "react";
import {Link,useLocation,Outlet} from "react-router-dom"

export function Home(){
    return(
        <div>
            <h1>[Company website]</h1>
            <nav>
                <Link to="about">About</Link>
                <Link to="events">Events</Link>
                <Link to="contact">Contact</Link>
            </nav>
        </div>
    )
}
export function About(){
    return(
        <div>
            <h1>[About]</h1>
            <Outlet/>
            <nav>
                <Link to="services">Services</Link>
                <Link to="history">History</Link>
                <Link to="location">Location</Link>
            </nav>
        </div>
    )
}

export function Services(){
    return(
        <div>
            <h2>Our services</h2>
        </div>
    )
}
export function CompanyHistory(){
    return(
        <div>
            <h2>Our History</h2>
        </div>
    )
}
export function Location(){
    return(
        <div>
            <h2>Our location</h2>
            <Outlet/>
            <Link to="country">Country</Link>
        </div>
    )
}
export function Country(){
    return(
        <div>
            <h3>We are staged at Uganda</h3>
        </div>
    )
}

export function Events(){
    return(
        <div>
            <h1>[Events]</h1>
        </div>
    )
}
export function Contacts(){
    return(
        <div>
            <h1>[Contacts]</h1>
        </div>
    )
}
export function Whoops(){
    const location = useLocation();
    console.log(location);
    return(
        <div>
            <h1>Resource not found at {location.pathname}</h1>
        </div>
    )
}