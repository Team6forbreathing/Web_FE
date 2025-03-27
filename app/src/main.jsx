import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import HomePage from "./Pages/HomePage";
import LoginPage from "./Pages/LoginPage";
import PersonalPage from "./Pages/PersonalPage";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/mypage" element={<PersonalPage />} />
        </Routes>
      </Router>
    </AuthProvider>
  </StrictMode>
);
