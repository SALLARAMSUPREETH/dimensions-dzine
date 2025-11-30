import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import './App.css';
import FloatingButtons from './components/FloatingButtons';
import ScrollToTop from './components/ScrollToTop';
import BallLoader from './components/BallLoader';
import ErrorBoundary from './components/ErrorBoundary';
import { LoadingProvider, useLoading } from './contexts/LoadingContext';

// Import pages
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Products from './pages/Products';
import Work from './pages/Work';
import Projects from './pages/Projects';
import Calculator from './pages/Calculator';
import FullHomeInteriorStepper from './pages/FullHomeInteriorStepper';
import KitchenCalculator from './pages/KitchenCalculator';
import WardrobeCalculator from './pages/WardrobeCalculator';
import DetailProjects from './pages/DetailProjects';
import DetailCategories from './pages/DetailCategories';
import { projectsRegistry } from './data/projects';
import ProjectShowcase from './components/ProjectShowcase';

// Import service pages
import Construction from './pages/services/Construction';
import InteriorDesign from './pages/services/InteriorDesign';
import Renovation from './pages/services/Renovation';
import Consultation from './pages/services/Consultation';
import Visualization3D from './pages/services/Visualization3D';
import MaterialSourcing from './pages/services/MaterialSourcing';
import NotFound from './pages/NotFound';

// Inner App component that uses the loading context
function AppContent() {
  const { isLoading } = useLoading();

  return (
    <>
      <ScrollToTop />
      <div className="App">
        <Routes>
          {/* Main pages */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/portfolio" element={<Projects />} />
          <Route path="/work" element={<Work />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/estimate/full-home-interior" element={<FullHomeInteriorStepper />} />
          <Route path="/estimate/kitchen-interior" element={<KitchenCalculator />} />
          <Route path="/estimate/wardrobe-design" element={<WardrobeCalculator />} />
          <Route path="/detail-projects" element={<DetailProjects />} />
          <Route path="/detail-categories" element={<DetailCategories />} />
          {/* Dynamic project routes - automatically generated from projectsRegistry */}
          {projectsRegistry.map(project => (
            <Route
              key={project.id}
              path={`/projects/${project.id}`}
              element={<ProjectShowcase projectData={project.data} />}
            />
          ))}

          {/* Service pages */}
          <Route path="/services/construction" element={<Construction />} />
          <Route path="/services/interior-design" element={<InteriorDesign />} />
          <Route path="/services/renovation" element={<Renovation />} />
          <Route path="/services/consultation" element={<Consultation />} />
          <Route path="/services/3d-visualization" element={<Visualization3D />} />
          <Route path="/services/material-sourcing" element={<MaterialSourcing />} />

          {/* 404 Catch-all route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <FloatingButtons />
      </div>
      <BallLoader isLoading={isLoading} />
    </>
  );
}

// Wrapper to provide ErrorBoundary
function AppWithErrorBoundary() {
  return (
    <ErrorBoundary>
      <AppContent />
    </ErrorBoundary>
  );
}

// Main App component with HelmetProvider, LoadingProvider and ErrorBoundary
function App() {
  return (
    <HelmetProvider>
      <Router>
        <LoadingProvider>
          <AppWithErrorBoundary />
        </LoadingProvider>
      </Router>
    </HelmetProvider>
  );
}

export default App;