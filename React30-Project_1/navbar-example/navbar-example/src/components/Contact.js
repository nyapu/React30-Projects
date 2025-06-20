import React from 'react';

function Contact() {
  return (
    <div className="container py-5">
      <h2 className="text-center text-info fw-bold mb-4">Contact Us</h2>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <form>
            <div className="mb-3">
              <label htmlFor="name" className="form-label fw-semibold">Name</label>
              <input type="text" className="form-control" id="name" placeholder="Your Name" />
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label fw-semibold">Email</label>
              <input type="email" className="form-control" id="email" placeholder="Your Email" />
            </div>

            <div className="mb-3">
              <label htmlFor="message" className="form-label fw-semibold">Message</label>
              <textarea className="form-control" id="message" rows="4" placeholder="Your Message"></textarea>
            </div>

            <button type="submit" className="btn btn-info w-100 text-white">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
