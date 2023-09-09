import Blog from "./pages/Blog";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Solutions from "./pages/Solutions";


function App() {
  return (
    <div className="App">
      {<routes>
        <route path="/" elements ={<Home/>} />
        <route path="/About" elements ={<About/>} />
        <route path="/contact" elements ={<Contact/>} />
        <route path="/services" elements ={<Services/>} />
        <route path="/Blog" elements ={<Blog/>} />
        <route path="/Solution" elements ={<Solutions/>} />
      </routes>}
     <>
      <Home />
      <About />
      <Services />
      <Solutions />
      <Blog />
      <Contact />
      
      </>
    </div>
  );
}

export default App;
