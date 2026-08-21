import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <>
    <Navbar />
    <main className="container-main">
      <Header />
      <About />
      <Projects />
      <Contact />
    </main>
    <Footer />
    </>
  );
}
