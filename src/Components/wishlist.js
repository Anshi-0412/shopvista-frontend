import React, { useState } from 'react';

const Wishlist = ({ products }) => {
  const [wishlistItems, setWishlistItems] = useState([]);

  const addToWishlist = (productId) => {
    if (!wishlistItems.includes(productId)) {
      setWishlistItems([...wishlistItems, productId]);
    }
  };

  const removeFromWishlist = (productId) => {
    setWishlistItems(wishlistItems.filter((id) => id !== productId));
  };

  return (
    <div className="w-full max-w-screen-lg mx-auto px-4">
      <h2 className="text-3xl font-semibold mb-4">Wishlist</h2>
      {wishlistItems.length === 0 ? (
        <p className="text-gray-500">Your wishlist is empty.</p>
      ) : (
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {wishlistItems.map((productId) => {
            const product = products.find((p) => p.id === productId);
            return (
              <li key={productId} className="bg-white rounded shadow-md p-4">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold">{product.name}</h3>
                  <button
                    onClick={() => removeFromWishlist(productId)}
                    className="text-red-500 hover:text-red-700"
                  >
                    Remove
                  </button>
                </div>
                <p className="text-gray-500">{product.description}</p>
                <div className="mt-4 flex justify-between items-center">
                  <span className="text-gray-700">${product.price}</span>
                  {/* Add to Cart button */}
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Wishlist;
