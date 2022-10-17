import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { removeFromDb } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import ReviewItem from "../ReviewItem/ReviewItem";

const Orders = () => {
  const { previousCart } = useLoaderData();
  const [cart, setCart] = useState(previousCart);

  const handleRemoveItem = (id) => {
    const remaining = cart.filter((item) => item.id !== id);
    setCart(remaining);
    removeFromDb(id);
  };
  return (
    <div className="shop-container">
      <div className="review-items-container">
        {cart.map((product) => (
          <ReviewItem
            key={product.id}
            product={product}
            handleRemoveItem={handleRemoveItem}
          ></ReviewItem>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart}>
          <Link to={"/orders"}>
            <button>Go to orders</button>
          </Link>
        </Cart>
      </div>
    </div>
  );
};

export default Orders;
