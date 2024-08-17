import Banner from "./components/Banner";
import Container from "./components/Container";
import Footer from "./components/Footer";
import Header from "./components/Header";


function App() {
  return (
      <>
      <Header />
      <Banner image="a" />
      <Container>
        <h1> Olá mundo!Estou aprendendo React JS! </h1>
      </Container>
      <Footer />
      </>
  );
}

export default App;
