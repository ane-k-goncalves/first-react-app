import Banner from "./components/Banner";
import Container from "./components/Container";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Card from "./components/Card";

function App() {
  return (
      <>
      <Header />
      <Banner image="a" />
      <Container>
      <h2> Joji </h2>
        <section className="cards">
          <Card id="NgsWGfUlwJI" />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </section>
        
      </Container>
      <Footer />
      </>
  );
}

export default App;
