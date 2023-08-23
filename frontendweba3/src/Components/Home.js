import React from "react";
import "./Components.css";
import "./Layout.css";
import wallpaperImage from "./homewallpaper.jpg";

const testimonials = [
  {
    id: 1,
    name: "Jane Tan",
    text: "I adopted the most wonderful cat from Pet Heaven Society. My new furry friend has brought so much joy into my life!",
  },
  {
    id: 2,
    name: "John Lim",
    text: "I can't thank Pet Heaven Society enough for helping me find my perfect dog companion.Wonderful service and guide from them!",
  },

];

const Home = () => {
  const backgroundStyle = {
    backgroundImage: `url(${wallpaperImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    width: "100%",
    height: "100vh",
  };
  return (
    <div style={backgroundStyle}>
      <h1 className="homeh1">Provide fur babies a new home!</h1>
      <div className="mission-section">
        <h2>Our Mission</h2>
         <p>At Pet Heaven Society, our core ethos revolves around the firm conviction that every companion animal merits a compassionate and nurturing home. We are steadfast proponents of affording our cherished furry companions a renewed opportunity for happiness, while also guaranteeing them unwavering affection and care.</p>
        <h3>History </h3>
        <p>Founded in 1985, Pet Heaven Society is driven by a singular mission: to extend unwavering compassion to all forms of life on our planet. As a charitable organization, our operations are wholly sustained through the generous donations of our community.</p>
        <h4>Testimonials from new fur parents.</h4>
        <div className="testimonials-section">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial">
              <h5>{testimonial.name}</h5>
              <p>{testimonial.text}</p>
            </div>
          ))}
        </div>
    </div>
    </div>
  );
};

export default Home;







