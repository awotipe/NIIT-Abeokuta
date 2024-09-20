import './App.css';
import Header from "./Components/Navbar/Navbar"
import Router from "./Router";
import Footer from "./Components/Footer/Footer";


function App() {
  return (
    <div className="App">
        <Header/>
        <Router/>
        <Footer/>
    </div>
  );
}

export default App;
