import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Components/Home";
import Trivia from "./Components/Trivia";
import Results from "./Components/Results";
import Error from "./Components/Error";
import Navigation from "./Components/Nav";



function App() {
  return (
      <div className="App">


        <BrowserRouter>
          <div>
            <Navigation />
            <Switch>
              <Route path="/" component={Home} exact />
              <Route path="/trivia" component={Trivia} />
              <Route path="/results" component={Results} />
              <Route component={Error} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
  );
}

export default App;
