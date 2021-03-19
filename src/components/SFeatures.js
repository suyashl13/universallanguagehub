import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll';
import courses from "../assets/courses.jpg"
import method from "../assets/method.jpg"
import native from "../assets/native-speakers.jpg"


export default function SFeatures() {

    let features = [
        {
            title: "Courses",
            image: courses,
            content: "Our courses are tailored to your exact needs: whether for travel, business, college requirements, tutoring, playgroups, language maintenance or your own pleasure. We’ll design a specific program just for you."
        },
        {
            title: "Our method",
            image: method,
            content: "Our method: We use a stimulating, conversational approach that actually permits you to speak the new language from the very first day of className."
        },
        {
            title: "Our instructors",
            image: native,
            content: "Our instructors are all trained teachers and NATIVE SPEAKERS. We feel that it is imperative for students to hear the proper accent, and to work with teachers who are relaxed, confident and comfortable in their own language."
        }
    ];

    return (
    <div className="container">
    <br/>
      <center>
        <div className="m-5" id="welcome">Silent Features</div>
      </center>
    <div className="row">
        {
            features.map(
                (e, i) => 
                <div className="col-sm-12 col-md-6 col-lg-4">
                <ScrollAnimation animateIn={ i%2 == 0 ? "fadeInRight":"fadeInLeft"} animateOnce={true}>
                <div className="card custom-card mt-4">
                        <div className="card-title">
                        <span style={{fontWeight:"bolds", fontSize:"20px"}}>
                            <center>{e.title}</center>
                        </span>
                        </div>
                        <img src={e.image} className="card-img" alt="..."/>
                        <div className="card-body">
                        <p className="card-text"><center>{e.content}</center></p>
                    </div>
                </div>
                </ScrollAnimation>    
                </div>
            )
        }
    </div>
    </div>
    )
}
