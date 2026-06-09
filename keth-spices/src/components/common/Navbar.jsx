import './Navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="logo">
          🌿 Kheth Spices
        </div>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#products">Masale</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <div className="mobile-menu-icon">
          ☰
        </div>
      </div>
    </nav>
  );
}