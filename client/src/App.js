import React from "react";
import Moi from "./static/images/Moi.png"
import github from "./static/images/github.png"
import linkedin from "./static/images/linkedin.png"
import ff_ from "./static/images/ff_.png"
import ff_login from "./static/images/ff_login.png"
import ff_reg from "./static/images/ff_reg.png"
import ff_search from "./static/images/ff_search.png"
import ecom_ from "./static/images/ecom_.png"
import ecom_browse from "./static/images/ecom_browse.png"
import Nav from "./components/Nav";
import {
  Routes,
  Route
} from "react-router-dom";
    
const Home = (props) => {
  return (
    <div>
    <Nav />
    <h1>TEST!!!</h1>
    <div className="logos">
        <div className="github">
          <h4><a className="text" href="https://github.com/FrenchieAP/">Github</a></h4>
          <a href="https://github.com/FrenchieAP/"><img className="logo" src={github}></img></a>
        </div>
        <div className="linkedin">
          <h4><a className="text" href="https://github.com/FrenchieAP/">LinkedIn</a></h4>
          <a href="https://www.linkedin.com/in/antoine-pepino-a88106255/"><img className="logo2" src={linkedin}></img></a>
        </div>
    </div>
    </div>
  );
}
    
const About = (props) => {
  return (
    <div>
      <Nav />
      <div>
          <h1 className="aboutMe">About Me</h1>
          <div className="aboutMain">
            <img className="moi" src={Moi}></img>
            <div className="about">
              <p>Former chef, currently a budding software developer! I have over 5 years of experience in fine dining restaurants, as well as 5 years of experience in sales and customer retention.
                I'm also natively fluent in French, and proficient in Spanish.
                During the pandemic, I discovered a new passion for coding, and decided to enroll at Coding Dojo to become a full-stack developer. 
                I am most proficient in developing full CRUD applications and APIs.
                The bootcamp provided a great foundation for me to keep developing skills on my own, and to continue learning new languages and technologies.</p>
                <p>When I'm not coding, you can usually find me training at the MMA gym, or cooking up delicious meals for my friends and family. </p>
              <p>
              Programming Languages: Java, Python, Javascript, SQL, CSS, HTML
              Libraries/Frameworks/Tools: Spring Boot, React, Flask, Bootstrap, Jinja2, JSON, Bcrypt
              Databases: MongoDB, MySQL Workbench</p>
            </div>
          </div>
      </div>
    </div>
  );
}
const Projects = (props) => {
  return (
    <div>
      <Nav />
      <div>
      <div className="cards">
        <div className="projectCard">
          <h1>Fit Finder</h1>
          <h4><a href="https://github.com/FrenchieAP/Python-FitFinder">Github</a></h4>
          <p>A full CRUD application where users may register an account and log in, then search for gyms and other fitness establishments in their area. </p>
            <p>Languages used: Python, SQL, HTML, CSS, Javascript</p>
            <p>Frameworks/Libraries/Tools: Flask, Jinja2, MySQL Workbench, Bootstrap, Bcrypt</p>
            <p>API: Google Maps</p>
            <a href="/projects/ff1"><img className="thumbnails" src={ff_reg}></img></a>
            <a href="/projects/ff2"><img className="thumbnails" src={ff_login}></img></a>
            <a href="/projects/ff3"><img className="thumbnails" src={ff_}></img></a>
            <a href="/projects/ff4"><img className="thumbnails" src={ff_search}></img></a>
        </div>
        
        <div className="projectCard">
          <h1>E-Market</h1>
          <h4><a href="https://github.com/FrenchieAP/Java-Emarket">Github</a></h4>
          <p>A full CRUD application where users may register an account and log in, then buy or sell items on the marketplace.</p> 
          <p> Languages used: Java, HTML, CSS</p>
          <p>Frameworks/Libraries/Tools: Spring Boot, MySQL Workbench, Bootstrap</p>
          <a href="/projects/ecom1"><img className="thumbnails" src={ecom_}></img></a>
          <a href="/projects/ecom2"><img className="thumbnails" src={ecom_browse}></img></a>
        </div>
      </div>
      
      </div>
    </div>
    );
}

const Ff1 = (props) => {
  return (
    <div>
      <h2><a href="/projects/ff2">Next</a></h2>
      <h2><a href="/">Home</a></h2>
      <img src={ff_reg}></img>
    </div>
  );
  }

const Ff2 = (props) => {
  return (
    <div>
      <h2><a href="/projects/ff3">Next</a></h2>
      <h2><a href="/">Home</a></h2>
      <img src={ff_login}></img>
    </div>
  );
  }

const Ff3 = (props) => {
  return (
    <div>
      <h2><a href="/projects/ff4">Next</a></h2>
      <h2><a href="/">Home</a></h2>
      <img src={ff_}></img>
    </div>
  );
  }

const Ff4 = (props) => {
  return (
    <div>
      <h2><a href="/projects">Back to projects</a></h2>
      <h2><a href="/">Home</a></h2>
      <img src={ff_search}></img>
    </div>
  );
  }

  const Ecom1 = (props) => {
    return(
      <div>
        <h2><a href="/projects/ecom2">Next</a></h2>
        <h2><a href="/">Home</a></h2>
        <img src={ecom_}></img>
      </div>
    );
  }

  const Ecom2 = (props) => {
    return(
      <div>
        <h2><a href="/projects">Back to projects</a></h2>
        <h2><a href="/">Home</a></h2>
        <img src={ecom_browse}></img>
      </div>
    );
  }

const Resume = (props) => {
  return (
    <div>
      <Nav />
      <div className="resume">
      <h1><a href="https://docs.google.com/document/d/1OblJb8kFS_63oUj4AjNQZ4o30OkonXde8d17KRM688c" className="resume">Click here to view my resume</a></h1>
      </div>
    </div>
  );
}
    
function App() {
  return (
    <div>
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/ff1" element={<Ff1 />} />
        <Route path="/projects/ff2" element={<Ff2 />} />
        <Route path="/projects/ff3" element={<Ff3 />} />
        <Route path="/projects/ff4" element={<Ff4 />} />
        <Route path="/projects/ecom1" element={<Ecom1 />} />
        <Route path="/projects/ecom2" element={<Ecom2 />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </div>
  );
}
    
export default App
