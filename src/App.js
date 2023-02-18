import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/navBar";
import MainPage from "./components/main";
import NotFound from "./components/notFound";
import Introduction from "./components/introduction";
import Tools from "./components/tools";
import "./App.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Introduction />
      <main className="container-main">
        <Routes>
          <Route exact path="/" element={<MainPage />} />
          <Route path="/tools/:id" element={<Tools />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <div className="footer">
        <h2>This is Footer </h2>
      </div>
    </div>
  );
}

export default App;
