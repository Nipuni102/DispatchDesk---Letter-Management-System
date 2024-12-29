import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./Components/Layout"; // Import Layout
import LoginPage from "./Components/LoginPage"; // Import LoginPage
import Dashboard from "./Components/Dashboard"; // Import Dashboard
import NewPage from "./Components/NewPage"; // Import NewPage
import Approvals from "./Components/Approvals";
import EstablishmentReg from "./Components/EstablishmentReg";

function App() {
  return (
    <Router>
      <Routes>
        {/* Default route redirects to Login Page */}
        <Route path="/" element={<Navigate to="/login" />} />

        {/* Route without Sidebar */}
        <Route path="/login" element={<LoginPage />} />

        {/* Routes with Sidebar */}
        <Route
          path="/*"
          element={
            <Layout>
              <Routes>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/new" element={<NewPage />} />
                <Route path="/approvals" element={<Approvals />} />
                <Route path="/establishment/registered" element={<EstablishmentReg />} />fw

              </Routes>
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
