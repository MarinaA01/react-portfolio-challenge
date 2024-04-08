import { useState } from "react";
import Nav from "./Nav";

function Header() {
    return (
        <header id="header">
            <div className="header">
                <h1>Marina Alonzo</h1>
                <h2>Full Stack Developer</h2>
            </div>
            <div className="nav">
                <Nav />
            </div>

        </header>
    );
}

export default Header;