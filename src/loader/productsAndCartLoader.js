import { getStoredCart } from "../utilities/fakedb";

export const productsAndCartLoader = async () => {
  const res = await fetch("http://localhost:5000/products");
  const { products } = await res.json();
  console.log(
    "🚀 ~ file: productsAndCartLoader.js ~ line 6 ~ productsAndCartLoader ~ products",
    products
  );

  const savedCart = getStoredCart();
  const previousCart = [];
  for (const id in savedCart) {
    const savedItem = products.find((product) => product._id === id);
    if (savedItem) {
      savedItem.quantity = savedCart[id];
      previousCart.push(savedItem);
    }
  }

  return { products, previousCart };
};
