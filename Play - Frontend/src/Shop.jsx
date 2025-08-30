import React, { useEffect, useState } from "react";
import toy1 from "./assets/teady.jpg";
import toy2 from "./assets/animlfamily.jpg";
import toy3 from "./assets/trucktoy.jpg";
import toy4 from "./assets/Doctor Drama.jpg";
import toy5 from "./assets/fingerpuppet.jpg";
import toy6 from "./assets/screenplay.jpg";
import toy7 from "./assets/hopperball.jpg";
import toy8 from "./assets/airplane.jpg";
import axios from "axios";

const Shop = () => {
  useEffect(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth", // or "auto" if you don't want animation
      });
  }, []);
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/cart")
      .then((res) => setCart(res.data))
      .catch((err) => console.error(err));
  }, []);
  const [cart, setCart] = useState([]);
  const Toys = [
    {
      image: toy1,
      title: "Teddy Buddy",
      price: "78",
      Discription:
        "A soft and cuddly teddy bear, perfect for hugs, bedtime snuggles, and comforting companionship for kids.",
    },
    {
      image: toy2,
      title: "Cutie Pets",
      price: "140",
      Discription:
        "A mini animal family set that encourages role play, storytelling, and teaches kids about love and care for pets.",
    },
    {
      image: toy3,
      title: "Gummy Truck",
      price: "90",
      Discription:
        "A fun and durable toy truck that boosts motor skills, imagination, and keeps kids entertained for hours.",
    },
    {
      image: toy4,
      title: "Doctor Drama",
      price: "99",
      Discription:
        "A doctor play set that introduces kids to medical tools, inspires role play, and teaches kindness and care.",
    },
    {
      image: toy5,
      title: "Finger Puppet",
      price: "49",
      Discription:
        "A creative finger puppet set that sparks imagination, storytelling, and playful interactions with family.",
    },
    {
      image: toy6,
      title: "Screen Play",
      price: "69",
      Discription:
        "An educational screen board toy that makes learning numbers, letters, and doodling fun and engaging.",
    },
    {
      image: toy7,
      title: "Hopper Ball",
      price: "199",
      Discription:
        "A bouncy hopper ball that promotes balance, coordination, and keeps kids active while having fun indoors or outdoors.",
    },
    {
      image: toy8,
      title: "Airplane",
      price: "98",
      Discription:
        "A sleek toy airplane designed for adventurous little pilots who love imaginative play and flying fun.",
    },
    {
      image: toy1,
      title: "Cuddly Bear",
      price: "130",
      Discription:
        "An adorable plush bear that makes the perfect gift for kids, bringing warmth, comfort, and endless cuddles.",
    },
    {
      image: toy1,
      title: "Mini Teddy",
      price: "89",
      Discription:
        "A small-sized teddy bear toy, easy to carry around, perfect for travel and everyday comfort.",
    },
  ];

  // ✅ Add to cart
  const handleAddToCart = async (item) => {
    try {
      const res = await axios.post("http://localhost:8000/api/cart", item);
      // After successful add, re-fetch cart
      const cartRes = await axios.get("http://localhost:8000/api/cart");
      setCart(cartRes.data);
    } catch (err) {
      console.error("Error adding to cart", err);
    }
  };

  // ✅ Remove from cart
  const handleRemoveFromCart = async (id, idx) => {
    try {
      await axios.delete(`http://localhost:8000/cart/${id}`);
      const newCart = [...cart];
      newCart.splice(idx, 1);
      setCart(newCart);
    } catch (err) {
      console.error("Error removing from cart", err);
    }
  };

  // ✅ Proceed to Buy
  const handleProceedToBuy = () => {
    axios
      .post("http://localhost:8000/api/order", {
        items: cart,
        total: getTotalCartValue(cart),
        email: userEmail,
      })
      .then((res) => {
        alert(
          "✅ Order placed successfully! Check your email for confirmation."
        );
        setCart([]);
      })
      .catch(() => alert("❌ Error placing order."));
  };

  return (
    <div className="bg-gradient-to-r from-blue-300 to-purple-300 min-h-screen p-6">
      <h1 className="text-4xl font-extrabold text-center text-black mb-8">
        Toy Shop
      </h1>

      {/* Shop Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {Toys.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:scale-105"
          >
            <div className="flex justify-center items-center p-4">
              <img
                src={item.image}
                alt={item.title}
                className="w-40 h-40 object-contain"
              />
            </div>
            <div className="p-4 text-center">
              <h2 className="text-lg font-bold text-blue-600">{item.title}</h2>
              <p className="text-black mt-1">Price: ₹{item.price}</p>
              <p className="text-black mt-1">{item.Discription}</p>
              <button
                onClick={() => handleAddToCart(item)}
                className="mt-4 w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 rounded-lg font-semibold hover:scale-105 transition"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Cart Section */}
      <div className="mt-10 bg-white p-6 rounded-2xl shadow-lg">
        <h2 className="text-2xl font-bold mb-4">🛒 Your Cart</h2>
        {cart.length === 0 ? (
          <p className="text-gray-500">Your cart is empty</p>
        ) : (
          <>
            <ul className="mb-4">
              {cart.map((item, idx) => (
                <li
                  key={idx}
                  className="flex justify-between items-center border-b py-2"
                >
                  <span>
                    {item.title} - ₹{item.price}
                  </span>
                  <button
                    onClick={() => handleRemoveFromCart(item._id, idx)}
                    className="text-red-500 hover:underline"
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
            <button
              onClick={handleProceedToBuy}
              className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition"
            >
              Proceed to Buy
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Shop;