"use client"

import Timeline from "./components/ui/timeline"
import NavBar from "./sections/NavBar"
import Header from "./sections/Header"
import Projects from "./sections/Projects"
import Contact from "./sections/Contact"
import Footer from "./sections/Footer"

const Portfolio: React.FC = () => {
    return (
        <div className="min-h-screen w-full flex flex-col">
            <NavBar />
            <main className="flex-1 w-full">
                <Header />
                <Projects />
                <Timeline />
                <Contact />
            </main>
            <Footer />
        </div>
    )
}
export default Portfolio