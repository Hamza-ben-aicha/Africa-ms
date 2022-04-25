import Layout from "./components/layout/Layout";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import PageOne from "./pages/PageOne";
import PageTwo from "./pages/PageTwo";
import PageThree from "./pages/PageThree";
import AuthenticationForm from "./components/AuthForm/AuthenticationForm";
function App() {
    return (
      <Layout>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/page-one">
            <PageOne />
          </Route>
          <Route path="/page-two">
            <PageTwo />
          </Route>
          <Route path="/page-three">
            <PageThree />
          </Route>
          <Route path="/authenticationForm">
            <AuthenticationForm />
          </Route>
        </Switch>
      </Layout>
    );
}

export default App;
