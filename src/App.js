import { BrowserRouter } from "react-router-dom";
import { GlobalStyle } from "./globalStyles";
import Hero from "./components/Hero/Hero";
import Products from "./components/Products/Products";
import Feature from "./components/Feature/Feature";
import { productData, DessertData } from "./components/Products/data";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalStyle />
        <Hero />
        <Products heading="Choose your favorite" data={productData} />
        <Feature />
        <Products heading="Sweet Treats for You" data={DessertData} />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
