import './Products.css';

const productsData = [
  {
    id: 1,
    name: "🌶️ Garam Masala (Special)",
    tagline: "Nature's Aromatic Power",
    description: "Keth Spices' Garam Masala is stone-ground in small batches using traditional methods. It includes premium cumin, fragrant cinnamon, green cardamom, cloves, and bay leaf. No chemicals, no artificial colors. This blend brings back the authentic aroma to your dal, vegetables, or meat dishes. 100% organic, no preservatives.",
    imageUrl: "https://t4.ftcdn.net/jpg/01/86/45/63/360_F_186456306_crFfy6WlvrBmJkqzJCpmDP9CGjSvUAHx.jpg",
    alt: "Garam Masala"
  },
  {
    id: 2,
    name: "🍛 Kitchen King Masala",
    tagline: "One Masala for All Curries",
    description: "Kitchen King Masala is a versatile blend – perfect for vegetables, paneer, dal, or mixed curries. Keth Spices' Kitchen King combines 12+ spices including coriander, red chili, turmeric, kasoori methi, dry mango powder, and garam masala. Pure desi taste without any artificial flavors. Just one spoon, and your dish transforms.",
    imageUrl: "https://i.pinimg.com/736x/4b/44/f7/4b44f7ac10cd8e1b02fd503d73fdfa75.jpg",
    alt: "Kitchen King Masala"
  },
  {
    id: 3,
    name: "🍃 Chole Masala",
    tagline: "Delhi Style Chickpea Masala",
    description: "Bring the streets of Delhi or Amritsar to your kitchen with Keth Spices' Chole Masala. This special blend contains pomegranate seed (anardana), dry mango powder (amchoor), kashmiri red chili, and 14 aromatic spices. It gives that tangy, spicy, and rich flavor to chickpea curry. No added color, no MSG. Pure desi taste.",
    imageUrl: "https://i.pinimg.com/736x/74/82/23/7482231c9bf4183b4e897a038e2ecff2.jpg",
    alt: "Chole Masala"
  },
  {
    id: 4,
    name: "🍚 Biryani Masala",
    tagline: "Royal Aroma for Perfect Biryani",
    description: "Take your biryani to the next level with Keth Spices' Biryani Masala. A handcrafted blend of mace, nutmeg, star anise, shahi jeera, green cardamom, black cardamom, cinnamon, cloves, and rose petals. No artificial colors or fillers. Perfect for chicken, mutton, or vegetable biryani. Authentic Lucknowi & Hyderabadi taste in every grain.",
    imageUrl: "https://i.pinimg.com/1200x/06/5f/52/065f52590b9f34f25f8e8f397aa023ac.jpg",
    alt: "Biryani Masala"
  }
];

export default function Products() {
  return (
    <section id="products" className="products-section">
      <div className="products-container">
        <div className="section-header">
          <span className="section-badge">✨ Our Spices ✨</span>
          <h2>Freshly Ground • Naturally Aromatic</h2>
          <p>Small batch, every spice tells a story</p>
        </div>

        {productsData.map((product, index) => (
          <div key={product.id} className={`product-row ${index % 2 === 0 ? 'row-left' : 'row-right'}`}>
            <div className="product-text">
              <h3>{product.name}</h3>
              <p className="tagline">{product.tagline}</p>
              <p className="description">{product.description}</p>
            </div>
            <div className="product-image-wrapper">
              <img src={product.imageUrl} alt={product.alt} loading="lazy" />
            </div>
          </div>
        ))}

        <div className="products-note">
          💚 All spices are <strong>100% organic, no preservatives, no artificial colors</strong>. EST 2026.
        </div>
      </div>
    </section>
  );
}