import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/navBar";
import MainPage from "./main";
import AboutMe from "./components/aboutMe";
import NotFound from "./components/notFound";
import ButtonExample from "./components/buttonExample";
import PropExample from "./components/propExample";
import DynamicButton from "./components/dynamicButton";
import NumberList from "./components/mappingExample";
import EssayForm from "./components/formExample";
import Calculator from "./examples/Calculator";
import Introduction from "./components/introduction";
import "./App.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Introduction />
      <ButtonExample />
      <PropExample name="Taehyung" />
      <DynamicButton kind="primary" onClick={() => console.log("clicked!")}>
        Click
      </DynamicButton>
      <DynamicButton kind="w" onClick={() => console.log("clicked!")}>
        Click
      </DynamicButton>
      <NumberList numbers={[1, 2, 3, 4, 5]} />
      <EssayForm />
      <Calculator />
      <main className="container">
        <Routes>
          <Route exact path="/" element={<MainPage />} />
          <Route
            exact
            path="/about-me"
            element={<AboutMe name="Taehyung Kwon" />}
          />
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
