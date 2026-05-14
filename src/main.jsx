import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TemplateInteractions from './components/TemplateInteractions.jsx';
import AboutPage from './pages/about.jsx';
import BlogHomePage from './pages/blog-home.jsx';
import BlogSinglePage from './pages/blog-single.jsx';
import ContactPage from './pages/contact.jsx';
import ElementsPage from './pages/elements.jsx';
import GalleryPage from './pages/gallery.jsx';
import IndexPage from './pages/index.jsx';
import ServicePage from './pages/service.jsx';
function App() {
    return <BrowserRouter>
        <TemplateInteractions />
        <Routes>
            <Route path="/about" element={<AboutPage />} />
            <Route path="/blog-home" element={<BlogHomePage />} />
            <Route path="/blog-single" element={<BlogSinglePage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/elements" element={<ElementsPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/" element={<IndexPage />} />
            <Route path="/service" element={<ServicePage />} />
        </Routes>
    </BrowserRouter>
}
ReactDOM.createRoot(document.getElementById('root')).render(<App />)
