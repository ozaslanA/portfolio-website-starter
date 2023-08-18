import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import React, { createContext, useState } from "react";
import "./index.css";
import Footer from "./components/Footer";
import BackToTopBtn from "./components/BackToTopBtn";

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("dark");
  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <section className="App" id={theme}>
        <Header />
        <Hero />
        <About />
        <Skills />
        <Portfolio />
        <Services />
        <Testimonials />
        <Contact />
        <Footer />
        <BackToTopBtn />
      </section>
    </ThemeContext.Provider>
  );
}

export default App;
