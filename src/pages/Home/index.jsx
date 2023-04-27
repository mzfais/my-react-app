import Header from "../../components/Navbar";
import Hero from "../../components/Hero";
import Footer from "../../components/Footer";

function Home() {
  const navBarList = [
    { page: "Program", url: "#program" },
    { page: "Bidang Ilmu", url: "#bidang" },
    { page: "Tentang Edspert", url: "#about" },
  ];
  return (
    <div>
      <Header navbars={navBarList} />
      <Hero />
      <Footer />
    </div>
  );
}
export default Home;
