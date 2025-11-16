import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import "./App.css";
import { Layout } from "./pages/Layout";
import { About } from "./pages/About";
import { Experience } from "./pages/Experience";
import { Contact } from "./pages/Contact";
import { Project } from "./pages/Project";
import { Resume } from "./pages/Resume";

export const PageRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="experience" element={<Experience />} />
          <Route path="projects" element={<Project />} />
          <Route path="resume" element={<Resume />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
