import Layout from "./components/layout/Layout";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import PageOne from "./pages/PageOne";
import PageTwo from "./pages/PageTwo";
import PageThree from "./pages/PageThree";
import AuthenticationForm from "./components/AuthForm/AuthenticationForm";
import Profile from "./pages/profile/Profile";
import Notifications from "./components/notifications/notifications";
import Modifierprofile from "./components/modifierProfile/Modifierprofile";
import ProjectTable from "./components/projectTable/ProjectTable";
function App() {
  const curentUser = JSON.parse(localStorage.getItem("curentUser"));
  
  return (
    <Layout>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/page-one" exact element={<PageOne />} />
        <Route path="/page-two" exact element={<PageTwo />} />
        <Route path="/page-three" exact element={<PageThree />} />
        <Route
          path="/authenticationForm"
          exact
          element={
            !curentUser ? <AuthenticationForm /> : <Navigate to="/profile" />
          }
        />
        <Route
          path="/profile"
          exact
          element={curentUser ? <Profile /> : <Navigate to="/" />}
        >
          <Route path="notifications" exact element={<Notifications />} />
          <Route path="modifier" exact element={<Modifierprofile />} />
          <Route
            path="projets"
            exact
            element={<ProjectTable id={curentUser?.user?.id} />}
          />
        </Route>
      </Routes>
    </Layout>
  );
}

export default App;
