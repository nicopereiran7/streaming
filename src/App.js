import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/Login";
import Header from "./components/Header";

//PAGES
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import Series from "./pages/Series";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/movies">
            <Movies />
          </Route>
          <Route exact path="/series">
            <Series />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
