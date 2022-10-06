import { getStoredCart } from "../utilities/fakedb";

export const productsAndCartLoader = async () => {
  const res = await fetch("products.json");
  const products = await res.json();

  const savedCart = getStoredCart();
  const previousCart = [];
  for (const id in savedCart) {
    const savedItem = products.find((product) => product.id === id);
    if (savedItem) {
      savedItem.quantity = savedCart[id];
      previousCart.push(savedItem);
    }
  }

  return { products, previousCart };
};
