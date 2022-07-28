import Navbar from "./components/navbar/index";
import { Route, Switch } from "react-router-dom";
import Home from "./components/home";
import Form from "./components/form";
import { useSelector } from "react-redux";

function App() {
  const loading = useSelector((state) => state.loading);

  return (
    <div>
      <Navbar />
      {loading && <h1>Loading ......!!!!!!!!!!</h1>}
      <Switch>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/create">
          <Form />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
