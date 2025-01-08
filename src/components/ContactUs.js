const ContactUs = () => {
  return (
    <div className="contact-container">
      <h1 className="contact-title">Contact Us</h1>
      <p className="contact-description">
        We’d love to hear from you! Fill out the form below to get in touch.
      </p>
      <div className="form-container">
        <form>
          <div className="form-group">
            <label htmlFor="name" className="form-label">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="form-input"
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-input"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message" className="form-label">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="form-textarea"
              placeholder="Type your message"
              required
            ></textarea>
          </div>
          <button type="submit" className="form-button">
            Submit
          </button>
        </form>
        <a href="/" className="back-home-button">
          Back to Home
        </a>
      </div>
    </div>
  );
};

export default ContactUs;
