import Header from "./components/header";
import Hero from "./components/hero";
import ShortenLinks from "./components/ShortenLinks";
import Features from "./components/Features";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div>
        <section className="first-section">
          <Header />
          <Hero />
        </section>

        <section className="second-section">
          <ShortenLinks />
          <Features />
          <Footer />
        </section>
      </div>
    </>
  );
}

export default App;
