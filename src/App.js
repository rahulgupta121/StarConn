import "./styles/styles.css"
import Heading_logo from "./components/Heading_logo";
import TopNavbar from "./components/Navbar";
import TabNav from "./components/TabNav";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Heading_logo />
      <TopNavbar />
      
      <TabNav />
      </header>
      <Footer/>
    </div>
  );
}

export default App;
