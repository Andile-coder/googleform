import Header from "./components/Header";
import "./styles/dist/header.css";
import "./styles/dist/body.css";
import "./styles/dist/title.css";
import "./styles/dist/form.css";
import "./styles/dist/formSide.css";
import "./styles/dist/cheader.css";
import "./styles/dist/pages.css";
import CHeader from "./components/CHeader";
import Body from "./components/Body";
import Pages from "./components/Pages";
import Title from "./components/Title";
function App() {
  return (
    <div className="App">
      <CHeader />
      <Pages />
      <Title />
    </div>
  );
}

export default App;
