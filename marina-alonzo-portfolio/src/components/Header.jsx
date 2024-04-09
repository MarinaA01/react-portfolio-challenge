import { useState } from "react";
import Nav from "./Nav";
import Portfolio from "../pages/Portfolio";

function Header() {
    return (
        <header id="header">
            <div className="header">
                <h1>Marina Alonzo</h1>
            </div>
            <div className="nav">
                <Nav />
            </div>

        </header>
    );
}

export default Header;