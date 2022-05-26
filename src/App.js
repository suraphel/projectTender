import { Route, Switch, Redirect } from "react-router-dom";
import Home from "./pages/Home";
import Away from "./pages/Away";
import Middle from "./pages/Middle";
import Layout from "./components/layout/Layout";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <section>
      <Layout>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/quotes" />
          </Route>
          <Route path="/quotes" exact>
            <Home />
          </Route>
          <Route path="/addquotes">
            <Middle />
          </Route>
          <Route path="/quotes/:id">
            <Away />
          </Route>
          {/* Default page  */}
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Layout>
    </section>
  );
}

export default App;
