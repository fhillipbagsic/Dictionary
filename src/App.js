import { BrowserRouter, Switch, Route } from "react-router-dom";
import Result from "./pages/Result";
import Search from "./pages/Search";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Search} />
        <Route path="/search" component={Result} />
        {/* react helmet */}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
