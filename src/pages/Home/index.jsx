import Header from "../../components/Navbar";
import Hero from "../../components/Hero";

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
    </div>
  );
}
export default Home;
