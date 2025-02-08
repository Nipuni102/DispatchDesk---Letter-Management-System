import { Navigate, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import AccountsNor from "./Components/AccountsNor";
import AccountsReg from "./Components/AccountsReg";
import Approvals from "./Components/Approvals";
import Dashboard from "./Components/Dashboard"; // Import Dashboard
import EstablishmentNor from "./Components/EstablishmentNor";
import EstablishmentReg from "./Components/EstablishmentReg";
import Layout from "./Components/Layout"; // Import Layout
import LoginPage from "./Components/LoginPage"; // Import LoginPage
import NewPage from "./Components/NewPage"; // Import NewPage
import RecordNor from "./Components/RecordNor";
import RecordReg from "./Components/RecordReg";
import SignupPage from "./Components/SignupPage";
import SurveyingNor from "./Components/SurveyingNor";
import SurveyingReg from "./Components/SurveyingReg";
import ActionTaken from "./Components/actionTakenLetter";

function App() {
  return (
    <Router>
      <Routes>
        {/* Default route redirects to Login Page */}
        <Route path="/" element={<Navigate to="/login" replace />} />

        {/* Routes without Sidebar */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />

        {/* Routes with Sidebar */}
        <Route
          path="/*"
          element={
            <Layout>
              <Routes>
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="new" element={<NewPage />} />
                <Route path="approvals" element={<Approvals />} />
                <Route path="establishment/registered" element={<EstablishmentReg />} />
                <Route path="establishment/normal" element={<EstablishmentNor />} />
                <Route path="accounts/registered" element={<AccountsReg />} />
                <Route path="accounts/normal" element={<AccountsNor />} />
                <Route path="surveying/registered" element={<SurveyingReg />} />
                <Route path="surveying/normal" element={<SurveyingNor />} />
                <Route path="record-room/registered" element={<RecordReg />} />
                <Route path="record-room/normal" element={<RecordNor />} />
                <Route path="action-taken-letters" element={< ActionTaken />} />
              </Routes>
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
