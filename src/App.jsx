import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

import LeadPopup from "./components/LeadPopup/leadPopup";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import SocialLinks from "./components/SocialLinks/SocialLinks";

import Home from "./pages/Home";
import FeaturesPage from "./pages/FeaturesPage";
import ServicesPage from "./pages/ServicesPage";
import Rating from "./components/Rating/Rating";
import Packages from "./pages/Packages";
import PackageDetails from "./pages/PackageDetails";
import SelectPackage from "./pages/SelectPackage";

import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import PageLoader from "./components/PageLoader/PageLoader";
import "./App.css";
import WhoWeAre from "./components/WhoWeAre/WhoWeAre";

function AppContent() {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  // Page transition loader
  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timeout);
  }, [location.pathname]);

  return (
    <>
      <ScrollToTop />
      <LeadPopup />
      <Header />
      {loading && <PageLoader />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/features" element={<FeaturesPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/rating" element={<Rating />} />

        <Route path="/packages" element={<Packages />} />
        <Route path="/packages/:id" element={<PackageDetails />} />
        <Route path="/packages/:id/select" element={<SelectPackage />} />

        <Route path="/data" element={<WhoWeAre />} />
      </Routes>

      <SocialLinks />
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
