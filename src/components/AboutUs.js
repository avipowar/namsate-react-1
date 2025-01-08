const AboutUs = () => {
  return (
    <div className="about-container">
      <h1 className="about-title">About Us</h1>
      <p className="about-description">
        Welcome to Swiggy! We are dedicated to delivering your favorite meals
        right to your doorstep. Our mission is to connect food lovers with the
        best local restaurants, ensuring fast and reliable delivery every time.
      </p>
      <div className="about-content">
        <h2 className="about-subtitle">Our Story</h2>
        <p>
          Swiggy started with a simple idea: make ordering food as easy as a
          click of a button. From our humble beginnings to becoming one of the
          most loved food delivery services, we have always put our customers
          first.
        </p>
        <h2 className="about-subtitle">Why Choose Us?</h2>
        <ul className="about-list">
          <li>Wide selection of restaurants and cuisines</li>
          <li>Fast and reliable delivery</li>
          <li>Easy-to-use platform</li>
          <li>Exciting offers and discounts</li>
        </ul>
        <h2 className="about-subtitle">Our Commitment</h2>
        <p>
          We are committed to bringing joy to your dining experience with
          top-notch customer service and a seamless delivery process.
        </p>
      </div>
      <a href="/" className="about-home-button">
        Back to Home
      </a>
    </div>
  );
};

export default AboutUs;
