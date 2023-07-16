import Header from "./components/header";
import Hero from "./components/hero";
import ShortenLinks from "./components/ShortenLinks";
import Features from "./components/Features";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div>
        <main className="first-section">
          <Header />
          <Hero />

          <ShortenLinks />
          <Features />
          <Footer />
        </main>
      </div>
    </>
  );
}

export default App;
