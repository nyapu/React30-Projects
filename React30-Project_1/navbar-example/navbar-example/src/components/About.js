import React from 'react';

function About() {
  return (
    <div className="container py-5">
      <h2 className="text-center text-primary fw-bold mb-4">About Us</h2>
      <div className="row justify-content-center">
        <div className="col-md-8">
          <p className="lead text-muted">
            Welcome to our React app! We're a team of passionate developers building modern, responsive, and efficient web applications. 
            This project is part of a React30 challenge to sharpen our frontend development skills.
          </p>
          <p className="text-muted">
            We use cutting-edge technologies like React.js, React Router, and Bootstrap to deliver seamless user experiences.
            Our goal is to create intuitive, fast, and visually appealing interfaces.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
