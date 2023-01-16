import React from "react";

const Nav = (props) => {
    return (
        <div>
            <div className="nav">
                <h3><a href="/" className="navtab">Antoine Pepino - Full Stack Developer</a></h3>
                <div className="navtabs">
                    <h4><a href="/about" className="navtab">About</a></h4>
                    <h4><a href="/projects" className="navtab">Projects</a></h4>
                    <h4><a href="/resume" className="navtab">Resume</a></h4>
                </div>
            </div>
        </div>
    )
}

export default Nav;