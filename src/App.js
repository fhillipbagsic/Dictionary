import { BrowserRouter, Switch, Route, HashRouter } from "react-router-dom";
import Result from "./pages/Result";
import Search from "./pages/Search";

function App() {
  return (
    <HashRouter>
      <Switch>
        <Route path="/" exact component={Search} />
        <Route path="/search" component={Result} />
        {/* react helmet */}
      </Switch>
    </HashRouter>
  );
}

export default App;
