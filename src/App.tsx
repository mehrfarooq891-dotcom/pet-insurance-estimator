import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar, Footer } from './components/Layout';
import { HomePage } from './pages/HomePage';
import { TexasPage } from './pages/TexasPage';
import { CaliforniaPage } from './pages/CaliforniaPage';
import { FloridaPage } from './pages/FloridaPage';
import { NewYorkPage } from './pages/NewYorkPage';
import { BlogPage } from './pages/BlogPage';
import { BlogWorthIt } from './pages/blog/WorthIt';
import { BlogVetCosts } from './pages/blog/VetCosts';
import { BlogExpensiveBreeds } from './pages/blog/ExpensiveBreeds';
import { BlogBestAge } from './pages/blog/BestAge';
import { BlogLemonadeVsSpot } from './pages/blog/LemonadeVsSpot';
import { BlogCatInsurance } from './pages/blog/CatInsurance';
import { BlogGoldenRetriever } from './pages/blog/GoldenRetriever';
import { BlogFrenchBulldog } from './pages/blog/FrenchBulldog';
import { AboutPage } from './pages/AboutPage';
import { FAQPage } from './pages/FAQPage';
import { ContactPage } from './pages/ContactPage';
import { PrivacyPage } from './pages/PrivacyPage';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/texas.html" element={<TexasPage />} />
            <Route path="/california.html" element={<CaliforniaPage />} />
            <Route path="/florida.html" element={<FloridaPage />} />
            <Route path="/new-york.html" element={<NewYorkPage />} />
            <Route path="/blog.html" element={<BlogPage />} />
            <Route path="/blog-worth-it" element={<BlogWorthIt />} />
            <Route path="/blog-vet-costs" element={<BlogVetCosts />} />
            <Route path="/blog-expensive-breeds" element={<BlogExpensiveBreeds />} />
            <Route path="/blog-best-age" element={<BlogBestAge />} />
            <Route path="/blog-lemonade-vs-spot" element={<BlogLemonadeVsSpot />} />
            <Route path="/blog-cat-insurance" element={<BlogCatInsurance />} />
            <Route path="/blog-golden-retriever" element={<BlogGoldenRetriever />} />
            <Route path="/blog-french-bulldog" element={<BlogFrenchBulldog />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}
