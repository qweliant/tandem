import "./App.css";
import { Route, Switch } from "react-router-dom";
import Home from "./Components/Home";
import Error from "./Components/Error";



function App() {
  return (
      <div className="App">
          <div>
            <Switch>
              <Route path="/" component={Home} exact />
              <Route component={Error} />
            </Switch>
          </div>
      </div>
  );
}

export default App;
