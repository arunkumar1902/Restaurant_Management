import { Link } from "react-router-dom";
import "../styles/About.css";

export default function About(){
  return (
    <div className="about-page">
      <section className="about-hero">
        <div>
          <p>ABOUT FOODIEHUB</p>
          <h1>Good Food. Great Moments.</h1>
          <span>We believe every meal should be a memorable experience.</span>
        </div>
      </section>

      <section className="about-story">
        <div className="story-image">
          <img src="https://images.unsplash.com/photo-1515003197210-e0cd71810b5f" alt="Restaurant food"/>
        </div>

        <div className="story-content">
          <p className="section-label">OUR STORY</p>
          <h2>Passion for Food,<br />Love for People</h2>
          <p>
            FoodieHub started with a simple idea —
            bring people together through delicious food.
            What began as a small restaurant has grown
            into a place where friends, families and food
            lovers come together.
          </p>
          <p>
            We carefully select fresh ingredients and
            prepare every dish with passion. Our menu
            brings together flavors from different
            cuisines, giving our customers something
            new to discover every time they visit.
          </p>
        </div>

      </section>

      <section className="mission">
        <div className="section-heading">
          <p>WHAT WE BELIEVE</p>
          <h2> Our Mission</h2>
        </div>

        <div className="mission-grid">
          <div className="mission-card">
            <h3>Quality Food</h3>
            <p>We use fresh and quality ingredients to prepare delicious meals.</p>
          </div>

          <div className="mission-card">
            <h3>Customer First</h3>
            <p>Our customers are at the heart of everything we do.</p>
          </div>

          <div className="mission-card">
            <h3>Fresh Ingredients</h3>
            <p>We believe great food starts with great ingredients.</p>
          </div>

          <div className="mission-card">
            <h3>Great Experience</h3>
            <p>From the first bite to the last, we want every visit to be special.</p>
          </div>
        </div>
      </section>

      <section className="stats">
        <div>
          <h2>10+</h2>
          <p>Years of Experience</p>
        </div>

        <div>
          <h2>50+</h2>
          <p>Delicious Dishes</p>
        </div>

        <div>
          <h2>10K+</h2>
          <p>Happy Customers</p>
        </div>

        <div>
          <h2>4.8</h2>
          <p>Customer Rating</p>
        </div>
      </section>

      <section className="about-cta">
        <h2>Ready to Taste Something Delicious?</h2>
        <p>Explore our menu and discover your next favorite dish.</p>
        <button className="explore-btn"><Link to="/menu" className="">Explore Menu</Link></button>
      </section>

    </div>
  );
};