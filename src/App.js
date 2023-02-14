import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/navBar";
import MainPage from "./main";
import NotFound from "./components/notFound";
import Introduction from "./components/introduction";
import "./App.css";
import Tools from "./components/tools";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Introduction />
      <main className="container">
        <Routes>
          <Route exact path="/" element={<MainPage />} />
          <Route exact path="/tools" element={<Tools />} />
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
