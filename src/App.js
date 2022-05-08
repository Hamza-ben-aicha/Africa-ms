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
function App() {
  const curentUser = JSON.parse(localStorage.getItem("curentUser"));
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/page-one" element={<PageOne />} />
        <Route path="/page-two" element={<PageTwo />} />
        <Route path="/page-three" element={<PageThree />} />
        <Route
          path="/authenticationForm"
          element={
            !curentUser ? <AuthenticationForm /> : <Navigate to="/profile" />
          }
        />
        <Route
          path="/profile"
          element={curentUser ? <Profile /> : <Navigate to="/" />}
        >
          <Route path="notifications" element={<Notifications />} />
          <Route path="modifier" element={<Modifierprofile />} />
        </Route>
      </Routes>
    </Layout>
  );
}

export default App;
