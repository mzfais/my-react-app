import Header from "../../components/Navbar";
import Hero from "../../components/Hero";
import ProductList from "../../components/ProductList";
import Footer from "../../components/Footer";
import Products from "../../data/Products";

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
      <ProductList productList={Products} />
      <Footer />
    </div>
  );
}
export default Home;
