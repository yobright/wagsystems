import CallToAction from "./components/CallToAction";
import Description from "./components/Description";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Products from "./components/Products";
import Solutions from "./components/Solutions";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Description/>
      <Products />
      <Solutions />
      <CallToAction />
    </div>
  );
}

export default App;
