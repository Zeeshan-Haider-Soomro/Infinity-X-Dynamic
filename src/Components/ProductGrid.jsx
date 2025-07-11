import React from "react";

const ProductGrid = ({ products = [] }) => {
  // Sample products if none provided
  const sampleProducts = [
    {
      id: 1,
      name: "Product 1",
      price: "$99",
      image: "/placeholder-product.jpg",
    },
    {
      id: 2,
      name: "Product 2",
      price: "$149",
      image: "/placeholder-product.jpg",
    },
    {
      id: 3,
      name: "Product 3",
      price: "$199",
      image: "/placeholder-product.jpg",
    },
    {
      id: 4,
      name: "Product 4",
      price: "$249",
      image: "/placeholder-product.jpg",
    },
    {
      id: 5,
      name: "Product 5",
      price: "$299",
      image: "/placeholder-product.jpg",
    },
    {
      id: 6,
      name: "Product 6",
      price: "$349",
      image: "/placeholder-product.jpg",
    },
  ];

  const displayProducts = products.length > 0 ? products : sampleProducts;

  return (
    <div className="product-grid-container p-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {displayProducts.map((product) => (
          <div
            key={product.id}
            className="product-card w-full max-w-[595px] h-[333px] border border-white bg-[#1A0127] rounded-lg p-6 flex flex-col justify-between hover:transform hover:scale-105 transition-transform duration-300"
          >
            <div className="product-image-container flex-1 mb-4">
              {product.image ? (
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover rounded-md"
                />
              ) : (
                <div className="w-full h-full bg-gray-800 rounded-md flex items-center justify-center">
                  <span className="text-white text-lg">{product.name}</span>
                </div>
              )}
            </div>

            <div className="product-info text-white">
              <h3 className="product-name text-xl font-semibold mb-2">
                {product.name}
              </h3>
              {product.description && (
                <p className="product-description text-gray-300 text-sm mb-3 line-clamp-2">
                  {product.description}
                </p>
              )}
              <div className="product-bottom flex justify-between items-center">
                <span className="product-price text-2xl font-bold text-[#A95C9C]">
                  {product.price}
                </span>
                <button className="add-to-cart-btn bg-[#A95C9C] hover:bg-[#8B4A86] text-white px-4 py-2 rounded-md transition-colors duration-200">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
