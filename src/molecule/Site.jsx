import React from 'react';

const Sitemap = () => {
  const productCategories = [
    { title: 'Products', products: ['Kundan Matil 151008', 'Zircon Bangle 151008', 'Zircon Earring 151008'] },
    { title: 'Collections', products: ['Kundan Matil 151008', 'Zircon Bangle 151008', 'Zircon Earring 151008'] },
    { title: 'Blogs', products: ['Kundan Matil 151008'] },
    { title: 'Blog Posts', products: ['Kundan Matil 151008', 'Zircon Bangle 151008', 'Zircon Earring 151008'] },
    { title: 'Pages', products: ['Kundan Matil 151008', 'Zircon Bangle 151008', 'Zircon Earring 151008'] }
  ];

  return (
    <div className="hero-section-site">
      <div className="heading">
        <h1 className="products-sitemap" style={{ textAlign: "center", padding: "36px 0px" }}>Sitemap</h1>
      </div>

      {productCategories.map((category, categoryIndex) => (
        <div className="card-site" key={categoryIndex}>
          <div className="products-map">
            <h2 className="products-sitemap">{category.title}</h2>
            <div className="product-content">
              {category.products.map((product, productIndex) => (
                <div className="product1" key={productIndex}>
                  {/* Check if the category is "Blogs" to render Kundan only once */}
                  {category.title === 'Blogs' ? (
                    <a className="producttag" href="#" key="single-kundan">{product}</a>
                  ) : (
                    // For other categories, repeat the product 14 times as before
                    Array(14).fill().map((_, i) => (
                      <a className="producttag" href="#" key={i}>{product}</a>
                    ))
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Sitemap;
