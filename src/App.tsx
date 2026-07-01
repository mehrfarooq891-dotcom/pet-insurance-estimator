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
import { BlogCaliforniaCosts } from './pages/blog/CaliforniaCosts';
import { BlogTexasCosts } from './pages/blog/TexasCosts';
import { BlogGermanShepherd } from './pages/blog/GermanShepherd';
import { BlogDachshund } from './pages/blog/Dachshund';
import { BlogPreExisting } from './pages/blog/PreExisting';
import { BlogClaimsGuide } from './pages/blog/ClaimsGuide';
import { BlogMixedBreed } from './pages/blog/MixedBreed';
import { BlogDeductibles } from './pages/blog/Deductibles';
import { BlogLabrador } from './pages/blog/Labrador';
import { BlogSeniorPet } from './pages/blog/SeniorPet';
import { BlogNewYorkCosts } from './pages/blog/NewYorkCosts';
import { BlogLemonadeReview } from './pages/blog/LemonadeReview';
import { BlogCavalier } from './pages/blog/Cavalier';
import { BlogHowMuchCosts } from './pages/blog/HowMuchCosts';
import { BlogCalculatorsGuide } from './pages/blog/InsuranceCalculatorGuide';
import { BlogDogInsuranceFactor } from './pages/blog/DogInsuranceFactor';
import { BlogWorthItSEO } from './pages/blog/WorthItSEO';
import { BlogCatVsDogSEO } from './pages/blog/CatVsDogSEO';
import { BlogPuppyInsuranceSEO } from './pages/blog/PuppyInsuranceSEO';
import { BlogLowerPremiumSEO } from './pages/blog/LowerPremiumSEO';
import { BlogDeductiblesSEO } from './pages/blog/DeductiblesSEO';
import { BlogBestSeniorDogSEO } from './pages/blog/BestSeniorDogSEO';
import { BlogWaitingPeriodsSEO } from './pages/blog/WaitingPeriodsSEO';
import { BlogPreExistingConditionsSEO } from './pages/blog/PreExistingConditionsSEO';
import { BlogAnnualVsMonthlySEO } from './pages/blog/AnnualVsMonthlySEO';
import { BlogMultiPetSEO } from './pages/blog/MultiPetSEO';
import { BlogEmergencyVetBillsSEO } from './pages/blog/EmergencyVetBillsSEO';
import { BlogPromptsSEO } from './pages/blog/PromptsSEO';
import { BlogGetEstimateFiveMinutesSEO } from './pages/blog/GetEstimateFiveMinutesSEO';
import { BlogDogInsuranceEstimateByBreedSEO } from './pages/blog/DogInsuranceEstimateByBreedSEO';
import { BlogCostByStateSEO } from './pages/blog/CostByStateSEO';
import { BlogDogInsuranceQuoteCalculatorSEO } from './pages/blog/DogInsuranceQuoteCalculatorSEO';
import { BlogMonthlyCostSEO } from './pages/blog/MonthlyCostSEO';
import { BlogCalculatorAccuracySEO } from './pages/blog/CalculatorAccuracySEO';
import { BlogCatEstimateSEO } from './pages/blog/CatEstimateSEO';
import { BlogMultiPetCalculatorSEO } from './pages/blog/MultiPetCalculatorSEO';
import { BlogRottweilerInsuranceSEO } from './pages/blog/RottweilerInsuranceSEO';
import { BlogPoodleInsuranceSEO } from './pages/blog/PoodleInsuranceSEO';
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
            <Route path="/blog-california-cost" element={<BlogCaliforniaCosts />} />
            <Route path="/blog-texas-cost" element={<BlogTexasCosts />} />
            <Route path="/blog-german-shepherd" element={<BlogGermanShepherd />} />
            <Route path="/blog-dachshund" element={<BlogDachshund />} />
            <Route path="/blog-pre-existing" element={<BlogPreExisting />} />
            <Route path="/blog-claims-guide" element={<BlogClaimsGuide />} />
            <Route path="/blog-mixed-breed" element={<BlogMixedBreed />} />
            <Route path="/blog-deductibles" element={<BlogDeductibles />} />
            <Route path="/blog-labrador" element={<BlogLabrador />} />
            <Route path="/blog-senior-pet" element={<BlogSeniorPet />} />
            <Route path="/blog-new-york-cost" element={<BlogNewYorkCosts />} />
             <Route path="/blog-lemonade-review" element={<BlogLemonadeReview />} />
            <Route path="/blog-cavalier" element={<BlogCavalier />} />
            <Route path="/blog-how-much-costs" element={<BlogHowMuchCosts />} />
            <Route path="/blog-calculator-guide" element={<BlogCalculatorsGuide />} />
            <Route path="/blog-dog-insurance-factor" element={<BlogDogInsuranceFactor />} />
            <Route path="/blog-worth-it-breakdown" element={<BlogWorthItSEO />} />
            <Route path="/blog-cat-vs-dog-comparison" element={<BlogCatVsDogSEO />} />
            <Route path="/blog-puppy-insurance" element={<BlogPuppyInsuranceSEO />} />
            <Route path="/blog-lower-premiums" element={<BlogLowerPremiumSEO />} />
            <Route path="/blog-deductibles-guide" element={<BlogDeductiblesSEO />} />
            <Route path="/blog-best-senior-dog" element={<BlogBestSeniorDogSEO />} />
            <Route path="/blog-waiting-periods" element={<BlogWaitingPeriodsSEO />} />
            <Route path="/blog-pre-existing-conditions-guide" element={<BlogPreExistingConditionsSEO />} />
            <Route path="/blog-annual-vs-monthly" element={<BlogAnnualVsMonthlySEO />} />
            <Route path="/blog-multi-pet" element={<BlogMultiPetSEO />} />
            <Route path="/blog-emergency-vet-bills" element={<BlogEmergencyVetBillsSEO />} />
            <Route path="/blog-prompts" element={<BlogPromptsSEO />} />
            <Route path="/blog-get-estimate-5-minutes" element={<BlogGetEstimateFiveMinutesSEO />} />
            <Route path="/blog-dog-insurance-estimate-by-breed" element={<BlogDogInsuranceEstimateByBreedSEO />} />
            <Route path="/blog-cost-by-state" element={<BlogCostByStateSEO />} />
            <Route path="/blog-dog-insurance-quote-calculator" element={<BlogDogInsuranceQuoteCalculatorSEO />} />
            <Route path="/blog-monthly-cost-2026" element={<BlogMonthlyCostSEO />} />
            <Route path="/blog-calculator-accuracy" element={<BlogCalculatorAccuracySEO />} />
            <Route path="/blog-cat-insurance-estimate" element={<BlogCatEstimateSEO />} />
            <Route path="/blog-multi-pet-calculator" element={<BlogMultiPetCalculatorSEO />} />
            <Route path="/blog-rottweiler-insurance" element={<BlogRottweilerInsuranceSEO />} />
            <Route path="/blog-poodle-insurance" element={<BlogPoodleInsuranceSEO />} />
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
