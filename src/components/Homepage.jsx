import { useEffect, useState } from "react";
import MainJumbotron from "./MainJumbotron"
import { gsap } from "gsap";
import AboutMe from "./AboutMe";

const Homepage = () => {
    const [showSection, setShowSection] = useState(false)
    useEffect(() => {
        gsap.set(".ball", { xPercent: -50, yPercent: -50 });

        let xTo = gsap.quickTo(".ball", "x", { duration: 0.6, ease: "power3" }),
            yTo = gsap.quickTo(".ball", "y", { duration: 0.6, ease: "power3" });

        window.addEventListener("mousemove", e => {
            xTo(e.clientX);
            yTo(e.clientY);
        });
    }, [])



    return (
        <>
            <MainJumbotron showAbout={setShowSection} />
            <AboutMe showSection={showSection} setShowSection={setShowSection} />
            <div className="ball"></div>

        </>
    )
}

export default Homepage