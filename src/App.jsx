import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Highlights from './components/Highlights';
import About from './components/About';
import Contact from './components/Contact';

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black py-8 text-center text-sm text-white/60">
      <p>
        © {new Date().getFullYear()} NeonArc — Built for creators. All rights reserved.
      </p>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main>
        <Hero />
        <Highlights />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
