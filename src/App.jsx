import { Routes, Route } from "react-router-dom";
import ScrollToHash from "./components/ScrollToHash";

import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import ProjectsPage from "./pages/ProjectsPage";
import AboutPage from "./pages/AboutPage";
import ProjectCaseStudy from "./pages/ProjectCaseStudy";

export default function App() {
  return (
    <>
      <ScrollToHash />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path='/projects/*' element={<ProjectsPage />} />
        <Route path="/projects/:slug" element={<ProjectCaseStudy />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </>
  );
}