import Hero from '../components/sections/Hero';
import Products from '../components/sections/Products';
import About from '../components/sections/About';
import Contact from '../components/sections/Contact';
import './Home.css';

export default function Home() {
  return (
    <main className="home-page">
      <Hero />
      <Products />
      <About />
      <Contact />
    </main>
  );
}