const Grocery = () => {
  return (
    <div className="grocery-container">
      <h1 className="grocery-heading">Welcome to Big Grocery App</h1>
      <p className="grocery-description">
        Explore a variety of fresh groceries at your fingertips. Get everything
        you need with just a click!
      </p>
      <div className="grocery-buttons">
        <button className="grocery-btn grocery-btn-green">
          Start Shopping
        </button>
        <button className="grocery-btn grocery-btn-blue">Explore Offers</button>
      </div>
    </div>
  );
};

export default Grocery;
