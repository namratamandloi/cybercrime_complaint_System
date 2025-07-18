import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route, Navigate } from "react-router-dom";
import ScrollToTop from "components/ScrollToTop";
import ErrorBoundary from "components/ErrorBoundary";
// Add your imports here
import HomeLandingPage from "pages/home-landing-page";
import AboutUs from "pages/about-us";
import UserRegistrationLogin from "pages/user-registration-login";
import ComplaintStatusDashboard from "pages/complaint-status-dashboard";
import CybercrimeReportingForm from "pages/cybercrime-reporting-form";
import FeedBack from "pages/Feedback";
import AdminDashboard from "pages/Admin-dashboard";

// PrivateRoute for role-based protection
const PrivateRoute = ({ element, allowedRoles }) => {
  const user = JSON.parse(localStorage.getItem('user'));
  if (!user) return <Navigate to="/user-registration-login" replace />;
  if (allowedRoles && !allowedRoles.includes(user.role)) {
    return <Navigate to="/user-registration-login" replace />;
  }
  return element;
};

const Routes = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
      <ScrollToTop />
      <RouterRoutes>
        {/* Define your routes here */}
        <Route path="/" element={<HomeLandingPage />} />
        <Route path="/about-us" element={<AboutUs/>} />
        <Route path="/Feedback" element={<FeedBack/>} />
        <Route path="/home-landing-page" element={<HomeLandingPage />} />
        <Route path="/user-registration-login" element={<UserRegistrationLogin />} />
        <Route path="/complaint-status-dashboard" element={<PrivateRoute element={<ComplaintStatusDashboard />} allowedRoles={['USER']} />} />
        <Route path="/cybercrime-reporting-form" element={<PrivateRoute element={<CybercrimeReportingForm />} allowedRoles={['USER']} />} />
        <Route path="/admin-dashboard" element={<PrivateRoute element={<AdminDashboard />} allowedRoles={['ADMIN']} />} />
      </RouterRoutes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;