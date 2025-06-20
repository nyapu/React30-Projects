import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Optional: For custom styling if needed
import reactLogo from '../assets/react.svg'; // Add your icon images in /assets folder
import jsLogo from '../assets/js.png';
import htmlLogo from '../assets/html.jpeg';
import cssLogo from '../assets/css.jpeg';
import gitLogo from '../assets/git.png';

function Home() {
  return (
    <div className="container py-5 text-center">
      {/* Hero Section */}
      <section className="mb-5">
        <h1 className="display-4 fw-bold text-primary">Hi, I'm Sameer Nyapu 👋</h1>
        <p className="lead text-secondary">
          React.js Developer | JavaScript Enthusiast | Future DevOps Engineer
        </p>
        <div className="mt-4">
          <Link to="/blog" className="btn btn-primary me-3">View Projects</Link>
          <Link to="/contact" className="btn btn-outline-primary">Contact Me</Link>
        </div>
      </section>

      <hr className="w-50 mx-auto" />

      {/* About Preview */}
      <section className="my-5">
        <h2 className="mb-3">About Me</h2>
        <p className="text-muted w-75 mx-auto">
          I'm a passionate frontend developer focused on building web apps using React.js.
          I'm currently on a journey to complete 30 React projects, improving my skills in
          frontend development and API integration.
        </p>
        <Link to="/about" className="btn btn-link">Read more →</Link>
      </section>

      {/* Tech Stack */}
      <section className="my-5">
        <h3 className="mb-4">Tech Stack</h3>
        <div className="d-flex justify-content-center flex-wrap gap-4">
          <img src={reactLogo} alt="React" className="tech-icon" />
          <img src={jsLogo} alt="JavaScript" className="tech-icon" />
          <img src={htmlLogo} alt="HTML" className="tech-icon" />
          <img src={cssLogo} alt="CSS" className="tech-icon" />
          <img src={gitLogo} alt="Git" className="tech-icon" />
        </div>
      </section>

      {/* Project Highlights */}
      <section className="my-5">
        <h3 className="mb-4">React30 Highlights</h3>
        <div className="row justify-content-center">
          <div className="col-md-4 mb-4">
            <div className="card shadow-sm">
              <img src="https://via.placeholder.com/300x150" alt="Project 1" className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">Todo App</h5>
                <p className="card-text">React, Bootstrap</p>
                <a href="#" className="btn btn-sm btn-primary me-2">See Live</a>
                <a href="#" className="btn btn-sm btn-outline-secondary">View Code</a>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card shadow-sm">
              <img src="https://via.placeholder.com/300x150" alt="Project 2" className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">Weather App</h5>
                <p className="card-text">React, OpenWeather API</p>
                <a href="#" className="btn btn-sm btn-primary me-2">See Live</a>
                <a href="#" className="btn btn-sm btn-outline-secondary">View Code</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="my-5">
        <blockquote className="blockquote text-secondary">
          <p>"Code is like humor. When you have to explain it, it’s bad."</p>
          <footer className="blockquote-footer">Cory House</footer>
        </blockquote>
      </section>

      {/* Footer Preview */}
      <footer className="mt-5">
        <h5>Let’s connect!</h5>
        <div className="d-flex justify-content-center gap-3 mt-2">
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="mailto:youremail@example.com">Email</a>
        </div>
        <p className="text-muted mt-3">Created by @Nyapu</p>
      </footer>
    </div>
  );
}

export default Home;
