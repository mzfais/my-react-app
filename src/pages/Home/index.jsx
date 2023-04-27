import Header from "../../components/Navbar";
import Hero from "../../components/Hero";
import ProductList from "../../components/ProductList";
import Footer from "../../components/Footer";

function Home() {
  const navBarList = [
    { page: "Program", url: "#program" },
    { page: "Bidang Ilmu", url: "#bidang" },
    { page: "Tentang Edspert", url: "#about" },
  ];
  const productList = [
    {
      image:
        "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVhY3R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      tittle: "React Js",
      tanggal: "20 Februari 2023",
      mentor: "Ales",
      hg_asli: "Rp. 500.000",
      hg_promo: "Rp. 99.000",
    },
    {
      image:
        "https://images.unsplash.com/photo-1653387300291-bfa1eeb90e16?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      tittle: "Vue Js",
      tanggal: "15 April 2023",
      mentor: "Alesya Pixie",
      hg_asli: "Rp. 750.000",
      hg_promo: "Rp. 149.000",
    },
    {
      image:
        "https://images.unsplash.com/photo-1526498460520-4c246339dccb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
      tittle: "Next Js",
      tanggal: "18 Mei 2023",
      mentor: "Geo Renaldi",
      hg_asli: "Rp. 1.000.000",
      hg_promo: "Rp. 299.000",
    },
    {
      image:
        "https://images.unsplash.com/photo-1653387137517-fbc54d488ed8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
      tittle: "Full Stack Develoepr",
      tanggal: "2 Juni 2023",
      mentor: "Putra Minang",
      hg_asli: "Rp. 2.000.000",
      hg_promo: "Rp. 499.000",
    },
  ];

  return (
    <div>
      <Header navbars={navBarList} />
      <Hero />
      <ProductList productList={productList} />
      <Footer />
    </div>
  );
}
export default Home;
