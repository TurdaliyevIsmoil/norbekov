import React, { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ServiceInner from "./pages/ServiceInner";
import HomePage from "./pages/HomePage";
import ServicesPage from "./pages/ServicesPage";
import NewsPage from "./pages/NewsPage";
import NewInner from "./pages/NewInner";
import ContactsPage from "./pages/ContactsPage";
import TablesPage from "./pages/TablesPage";
import TableContent from "./components/TableComponents/TableContent";

function App() {
  const params = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [params]);
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="services" element={<ServicesPage />} />
        <Route path="services/:id" element={<ServiceInner />} />
        <Route path="news" element={<NewsPage />} />
        <Route path="news/:id" element={<NewInner />} />
        <Route path="/contacts" element={<ContactsPage />} />
        <Route path="/tables" element={<TablesPage />} />
        <Route path="/tables/:id" element={<TableContent />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
