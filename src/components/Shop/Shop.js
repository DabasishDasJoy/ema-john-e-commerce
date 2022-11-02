import React, { useEffect, useState } from "react";
import { addToDb, getStoredCart } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
  //state controller
  //useState hook returns array
  // const { products, count } = useLoaderData();
  // console.log("🚀 ~ file: Shop.js ~ line 12 ~ Shop ~ count", count);
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  const [currPage, setCurrPage] = useState(0);
  const [pageSize, setPageSize] = useState(10);

  const uri = `http://localhost:5000/products?page=${currPage}&size=${pageSize}`;
  useEffect(() => {
    fetch(uri)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
        setCount(data.count);
      });
  }, [uri]);

  const pages = Math.ceil(count / pageSize);
  //Handler for lower level component product then pass it where it need
  const handleAddToCart = (selectedProduct) => {
    //Change state on every click

    //Copy the cart's data and add clicked one since state is immutable
    let newCart = [];
    const exist = cart.find((product) => product._id === selectedProduct._id);
    if (exist) {
      const rest = cart.filter((product) => product._id !== exist._id);
      exist.quantity = exist.quantity + 1;
      newCart = [...rest, exist];
    } else {
      selectedProduct.quantity = 1;
      newCart = [...cart, selectedProduct];
    }

    setCart(newCart);
    addToDb(selectedProduct._id);
  };
  //Fetch data

  //previous cart
  useEffect(() => {
    const storedCart = getStoredCart();

    const storedIds = Object.keys(storedCart);
    console.log(
      "🚀 ~ file: Shop.js ~ line 55 ~ useEffect ~ storedIds",
      storedIds
    );
    const newCart = [];

    fetch("http://localhost:5000/productsByIds", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(storedIds),
    })
      .then((res) => res.json())
      .then((data) => {
        for (const id in storedCart) {
          const savedCart = data.find((product) => product._id === id);
          if (savedCart) {
            savedCart.quantity = storedCart[id];
            newCart.push(savedCart);
          }
        }
        setCart(newCart);
      });
  }, [products]);

  return (
    <div className="shop-container">
      <div className="product-container">
        {products.map((product) => (
          <Product
            key={product._id}
            product={product}
            handleAddToCart={handleAddToCart}
          ></Product>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart}></Cart>
      </div>

      <div className="paginatin">
        <p>Current page: {currPage}</p>
        <p> pages: {pageSize}</p>
        {[...Array(pages).keys()].map((index) => (
          <button onClick={() => setCurrPage(index)} key={index}>
            {index}
          </button>
        ))}
        <select onChange={(e) => setPageSize(e.target.value)}>
          <option value="5">5</option>
          <option value="10" selected>
            10
          </option>
          <option value="15">15</option>
          <option value="20">20</option>
        </select>
      </div>
    </div>
  );
};

export default Shop;
