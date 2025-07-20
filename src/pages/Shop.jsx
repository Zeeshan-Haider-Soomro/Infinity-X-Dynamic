import React, { useState } from "react";
import ProductGrid from "@/temp/components/ProductGrid";
import Header from "@/temp/components/Header";
import Footer from "@/temp/components/Footer";

const Shop = () => {
  const [products] = useState([
    {
      id: 1,
      name: "2D Animation Package",
      price: "$499",
      description: "Professional 2D animation services for your business needs",
      image: "/placeholder-2d.jpg",
      category: "animation",
    },
    {
      id: 2,
      name: "3D Animation Package",
      price: "$799",
      description: "High-quality 3D animation and modeling services",
      image: "/placeholder-3d.jpg",
      category: "animation",
    },
    {
      id: 3,
      name: "Logo Animation",
      price: "$299",
      description: "Eye-catching animated logos to boost your brand",
      image: "/placeholder-logo.jpg",
      category: "animation",
    },
    {
      id: 4,
      name: "VFX & CGI Package",
      price: "$999",
      description: "Advanced visual effects and CGI production",
      image: "/placeholder-vfx.jpg",
      category: "vfx",
    },
    {
      id: 5,
      name: "Web Development",
      price: "$1299",
      description: "Custom website development and design",
      image: "/placeholder-web.jpg",
      category: "development",
    },
    {
      id: 6,
      name: "Motion Graphics",
      price: "$399",
      description: "Dynamic motion graphics for presentations and marketing",
      image: "/placeholder-motion.jpg",
      category: "animation",
    },
  ]);

  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Products" },
    { id: "animation", name: "Animation" },
    { id: "vfx", name: "VFX & CGI" },
    { id: "development", name: "Development" },
  ];

  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  return (
    <div className="shop-page min-h-screen bg-gradient-to-b from-[#0A0A0A] to-[#1A0127]">
      <Header />

      {/* Hero Section */}
      <section className="hero-section pt-32 pb-16 text-center">
        <div className="container mx-auto px-4">
          <h1 className="page-title text-5xl md:text-6xl font-bold text-white mb-6">
            Our <span className="text-[#A95C9C]">Shop</span>
          </h1>
          <p className="page-subtitle text-xl text-gray-300 max-w-3xl mx-auto">
            Discover our premium animation, VFX, and development packages
            designed to elevate your business
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="filter-section py-8">
        <div className="container mx-auto px-4">
          <div className="category-filters flex flex-wrap justify-center gap-4 mb-8">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`category-btn px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? "bg-[#A95C9C] text-white"
                    : "bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Product Grid Section */}
      <section className="products-section pb-16">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-3xl font-bold text-white text-center mb-12">
            {selectedCategory === "all"
              ? "All Products"
              : categories.find((cat) => cat.id === selectedCategory)?.name}
          </h2>
          <ProductGrid products={filteredProducts} />
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section py-16 bg-[#1A0127] border-t border-[#A95C9C]">
        <div className="container mx-auto px-4 text-center">
          <h3 className="cta-title text-3xl font-bold text-white mb-6">
            Need a Custom Solution?
          </h3>
          <p className="cta-subtitle text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Contact us for personalized quotes and custom packages tailored to
            your specific requirements
          </p>
          <button className="cta-button bg-[#A95C9C] hover:bg-[#8B4A86] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-300">
            Get Custom Quote
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Shop;
