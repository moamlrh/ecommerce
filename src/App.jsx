import "./App.scss";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import { Container } from "@material-ui/core";
import Featured from "./components/Featured/Featured ";
import LastestProducts from "./components/latest-product/LastestProducts";
import Blog from "./components/Blog/Blog";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <div className="bg-top"></div>
      <Container maxWidth="lg">
        <Navbar />
        <Home />
        <Featured />
        <LastestProducts />
        <Blog />
        <Footer />
      </Container>
    </div>
  );
}

export default App;
