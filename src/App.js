import { BrowserRouter, Switch, Route } from "react-router-dom";
import Search from "./pages/Search";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/">
          <Search />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
