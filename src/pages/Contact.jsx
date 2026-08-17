import "../styles/Contact.css";

export default function Contact(){
  return (
    <div className="contact-page">
      <section className="contact-header">
        <p>GET IN TOUCH</p>
        <h1>Contact Us</h1>
        <span>We'd love to hear from you. Visit us or get in touch with our team.</span>
      </section>

      <section className="contact-container">
        <div className="contact-info">
          <p className="section-label">FOODIEHUB</p>
          <h2>We'd Love to Hear From You</h2>
          <p className="contact-description">
            Whether you're looking to make a reservation,
            ask about our menu, or simply want to say hello,
            feel free to contact us.
          </p>

          <div className="contact-item">
            <div>
              <h3>Address</h3>
              <p>123 Food Street,<br />abc Road,<br />xyz city, Tamil Nadu 600028,<br />India</p>
            </div>
          </div>

          <div className="contact-item">
            <div>
              <h3>Phone</h3>
              <p>+91 98765 43210<br />+91 91234 56780</p>
            </div>
          </div>

          <div className="contact-item">
            <div>
              <h3>Email</h3>
              <p>hello@foodiehub.com<br />support@foodiehub.com</p>
            </div>
          </div>

          <div className="contact-item">
            <div>
              <h3>Opening Hours</h3>
              <p>Monday - Sunday
                <br />
                10:00 AM - 11:00 PM
              </p>
            </div>
          </div>

        </div>

        <div className="contact-card">
          <h2>Visit FoodieHub</h2>
          <p>Come and enjoy delicious food, great service, and a warm atmosphere with your family and friends.</p>

          <div className="contact-card-info">
            <div>
              <strong>Location</strong>
              <span>xyz city, Tamil Nadu</span>
            </div>

            <div>
              <strong>Call Us</strong>
              <span>+91 98765 43210</span>
            </div>

            <div>
              <strong>Email Us</strong>
              <span>hello@foodiehub.com</span>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};