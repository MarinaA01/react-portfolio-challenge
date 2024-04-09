import { useState } from "react";
import Header from "../components/Header";
import Navbar from "../components/Nav";
import Footer from "../components/Footer";

function Portfolio() {
    return (
        <div className="projects" id="portfolio">
            <Header />
            <Navbar />
            <div className="portfolio-content">
                <h1>Portfolio</h1>
                <div className="portfolio-items">
                    <div className="portfolio-item">
                        <h2>Project 1</h2>
                        <p>
                            This is a description of project 1. It was built using HTML, CSS, and JavaScript.
                        </p>
                    </div>
                    <div className="portfolio-item">
                        <h2>Project 2</h2>
                        <p>
                            This is a description of project 2. It was built using React and Node.js.
                        </p>
                    </div>
                    <div className="portfolio-item">
                        <h2>Project 3</h2>
                        <p>
                            This is a description of project 3. It was built using Angular and Express.js.
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Portfolio;