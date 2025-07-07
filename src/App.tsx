import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import { PopupProvider } from './contexts/PopupContext';
import { AuthProvider } from './contexts/AuthContext';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import ImportExport from './pages/ImportExport';
import Contact from './pages/Contact';
import PopupManager from './components/PopupManager';

function App() {
  return (
    <ThemeProvider>
      <PopupProvider>
        <AuthProvider>
          <Router>
            <div className="min-h-screen bg-gradient-to-br from-slate-50 to-emerald-50 dark:from-slate-900 dark:to-emerald-900 transition-all duration-500">
              <Layout>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/services" element={<Services />} />
                  <Route path="/import-export" element={<ImportExport />} />
                  <Route path="/contact" element={<Contact />} />
                </Routes>
              </Layout>
              <PopupManager />
            </div>
          </Router>
        </AuthProvider>
      </PopupProvider>
    </ThemeProvider>
  );
}

export default App;