import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/navBar";
import MainPage from "./components/main";
import NotFound from "./components/notFound";
import Introduction from "./components/introduction";
import Footer from "./components/footer";
import { ContactMe } from "./components/contactMe";
import "./App.css";

function App() {
  return (
    <div className="App">
      <NavBar className="navbar" />
      <Introduction />
      <main className="container-main">
        <Routes>
          <Route exact path="/" element={<MainPage />} />
          <Route path="/contactme" element={<ContactMe />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
