import Layout from "./components/layout/Layout";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import PageOne from "./pages/NormePage/PageOne";
import PageTwo from "./pages/PageTwo";
import PageThree from "./pages/PageThree";
import AuthenticationForm from "./components/AuthForm/AuthenticationForm";
import Profile from "./pages/profile/Profile";
import Notifications from "./components/notifications/notifications";
import Modifierprofile from "./components/modifierProfile/Modifierprofile";
import ProjectTable from "./components/projectTable/ProjectTable";
import { UserContext } from "./context/userContext";
import { useEffect, useState } from "react";
import API from "./api";
import EntProjects from "./components/enProjects/EntProjects";
import OneProject from "./components/oneProject/OneProject";
import BasicDocument from "./components/pdfGen/BasicDocument";
function App() {
  const curentUser = JSON.parse(localStorage.getItem("curentUser"));
  const [user, setUser] = useState();
  useEffect(() => {
    if (curentUser) {
      API.post("/decodeToken").then((result) => {
        setUser(result?.data);
      });
    } else {
      setUser(null);
    }
  }, []);

  return (
    <Layout>
      <UserContext.Provider value={user}>
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
          {/* <UserContext.Provider > */}
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
              element={
                user?.role === "entreprise" ? <EntProjects /> : <ProjectTable />
              }
            />
            <Route path="projet/:id" exact element={<OneProject />} />

          </Route>
          {/* </UserContext.Provider> */}
        </Routes>
      </UserContext.Provider>
    </Layout>
  );
}

export default App;
