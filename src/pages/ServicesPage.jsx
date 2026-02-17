import React from "react";
import ServicesList from "../components/ServicesList/ServicesList";
import ContactSection from "../components/ContactSection/ContactSection";
import services from "../data/data.json";

function ServicesPage() {
  return (
    <>
      <div className="page">
        <ServicesList services={services} />
        <ContactSection />
      </div>

    </>
  );
}

export default ServicesPage;
