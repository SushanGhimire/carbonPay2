import { Switch, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Footer from "./components/static/Footer";
import NavBar from "./components/static/NavBar";
function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
