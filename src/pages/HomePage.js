import React from 'react'
import Landing from '../components/Landing'
import Navigation from '../components/Navigation'
import "bootstrap/dist/css/bootstrap.css"
import "../App.css"
import SFeatures from '../components/SFeatures'
import OurCourses from '../components/OurCourses'

export default function HomePage() {
    return (
        <div>
            <Navigation/>
            <Landing/>
            <SFeatures/>
            <OurCourses/>
        </div>
    )
}
