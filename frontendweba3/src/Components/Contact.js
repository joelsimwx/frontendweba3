import React from 'react';
import "./Components.css";

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-section">
        <div className="contact-header">
          <h1>Find us here!</h1>
        </div>
        <div className="contact-info">
          <h2>Pet Heaven</h2>
          <h3>Location of Pet Heaven</h3>
          <p>50 Sungei Tengah Rd, Singapore 699012</p>
          <h4>Contact Number</h4>
          <p>+65 64281111</p>
          <h5>Email Address</h5>
          <p>PetHeaven@gmail.com</p>
        </div>
      </div>
      <div className="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3988.6603207530457!2d103.7313176!3d1.3804662!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da11df1d09dee5%3A0x1216bc9c47dc7028!2s50%20Sungei%20Tengah%20Rd%2C%20Singapore%20699012!5e0!3m2!1sen!2ssg!4v1692427057799!5m2!1sen!2ssg"
          width="400"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          title="Pet Heaven Location"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
