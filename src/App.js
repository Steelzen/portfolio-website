import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/navBar";
import MainPage from "./components/main";
import NotFound from "./components/notFound";
import Footer from "./components/footer";
import { ContactMe } from "./components/contactMe";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="main-content">
        <NavBar className="navbar" />
        <Routes>
          <Route exact path="/" element={<MainPage />} />
          <Route path="/contactme" element={<ContactMe />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
