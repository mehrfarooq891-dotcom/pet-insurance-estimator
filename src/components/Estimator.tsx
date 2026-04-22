import React, { useState, useEffect, useRef } from 'react';
import { PawPrint, ShieldCheck, Heart, Star, Diamond, AlertCircle, MapPin, Calendar, Info, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { BREED_DATA, STATE_DATA, zipToState } from '../constants';
import { Breed, EstimateResult } from '../types';

export const Estimator = () => {
  const [petType, setPetType] = useState<'dog' | 'cat' | ''>('');
  const [breedIdx, setBreedIdx] = useState<string>('');
  const [age, setAge] = useState<string>('');
  const [zip, setZip] = useState<string>('');
  const [coverage, setCoverage] = useState<'accident' | 'standard' | 'wellness'>('standard');
  const [result, setResult] = useState<EstimateResult | null>(null);
  const resultRef = useRef<HTMLDivElement>(null);

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!petType) return alert('Please select a pet type.');
    if (breedIdx === '') return alert('Please select a breed.');
    const ageNum = parseFloat(age);
    if (isNaN(ageNum) || ageNum < 0 || ageNum > 25) return alert('Please enter a valid pet age (0–25).');
    if (zip.length < 5 || isNaN(Number(zip))) return alert('Please enter a valid 5-digit US ZIP code.');

    const breeds = BREED_DATA[petType as 'dog' | 'cat'];
    const breed = breeds[parseInt(breedIdx)];

    // Base Calculation Logic
    let base = petType === 'dog' ? 28 : 16;
    const riskMult = breed.risk === 'high' ? 1.55 : breed.risk === 'medium' ? 1.25 : 1.0;

    let ageFactor;
    if (ageNum <= 1) ageFactor = 0.85;
    else if (ageNum <= 3) ageFactor = 1.0;
    else if (ageNum <= 6) ageFactor = 1.2;
    else if (ageNum <= 9) ageFactor = 1.6;
    else ageFactor = 2.1;

    const covMult = coverage === 'accident' ? 0.65 : coverage === 'standard' ? 1.0 : 1.45;

    const stateCode = zipToState(zip);
    const state = stateCode ? STATE_DATA[stateCode] : null;
    const locMult = state ? state.multiplier : 1.0;

    const core = base * riskMult * ageFactor * covMult * locMult;
    
    const newResult: EstimateResult = {
      low: Math.round(core * 0.82),
      mid: Math.round(core),
      high: Math.round(core * 1.28),
      breed,
      age: ageNum,
      stateCode,
      stateName: state ? state.name : null,
      stateNote: state ? state.note : null,
      petType: petType as 'dog' | 'cat',
      coverage
    };

    setResult(newResult);
    
    // Smooth scroll to result
    setTimeout(() => {
      resultRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, 100);
  };

  const getInsights = (res: EstimateResult) => {
    const insights = [];
    insights.push({ icon: <PawPrint className="w-4 h-4" />, text: res.breed.insight });
    if (res.age > 7) insights.push({ icon: <Calendar className="w-4 h-4" />, text: `At age ${res.age}, premiums are higher than for younger pets. Senior pets require more vet visits on average.` });
    if (res.age <= 2) insights.push({ icon: <ShieldCheck className="w-4 h-4" />, text: `Insuring your pet now (at age ${res.age}) locks in lower premiums before any pre-existing conditions can develop.` });
    if (res.stateNote) insights.push({ icon: <MapPin className="w-4 h-4" />, text: res.stateNote });
    if (res.breed.risk === 'high') insights.push({ icon: <AlertCircle className="w-4 h-4" />, text: `This breed has higher-than-average lifetime vet costs. Full illness coverage is recommended over accident-only.` });
    if (res.coverage === 'accident') insights.push({ icon: <Info className="w-4 h-4" />, text: `Accident-only plans won't cover illnesses like cancer, diabetes, or infections. Many pet owners later upgrade to illness coverage.` });
    return insights;
  };

  return (
    <div className="bg-surface rounded-xl border border-border shadow-hero overflow-hidden">
      <div className="bg-gradient-to-br from-primary-dark to-primary p-7 flex items-center gap-4">
        <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center text-white text-2xl">
          🐾
        </div>
        <h2 className="text-white text-xl font-serif font-bold tracking-tight">Pet Insurance Cost Estimator</h2>
      </div>
      
      <div className="p-8">
        <form onSubmit={handleCalculate} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col gap-1.5">
            <label className="text-[10px] font-bold text-text-muted uppercase tracking-widest">Pet Species</label>
            <select 
              value={petType}
              onChange={(e) => {
                setPetType(e.target.value as any);
                setBreedIdx('');
              }}
              className="p-3.5 border border-border rounded-lg text-sm bg-warm text-text-main focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all appearance-none cursor-pointer"
              style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='14' height='14' viewBox='0 0 24 24' fill='none' stroke='%23555' stroke-width='2'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 12px center' }}
            >
              <option value="">Select species…</option>
              <option value="dog">🐕 Dog</option>
              <option value="cat">🐈 Cat</option>
            </select>
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-[10px] font-bold text-text-muted uppercase tracking-widest">Pet Breed</label>
            <select 
              value={breedIdx}
              onChange={(e) => setBreedIdx(e.target.value)}
              className="p-3.5 border border-border rounded-lg text-sm bg-warm text-text-main focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all appearance-none cursor-pointer disabled:opacity-50"
              disabled={!petType}
              style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='14' height='14' viewBox='0 0 24 24' fill='none' stroke='%23555' stroke-width='2'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 12px center' }}
            >
              <option value="">{petType ? 'Select breed…' : 'Select pet type first'}</option>
              {petType && BREED_DATA[petType as 'dog' | 'cat'].map((b, i) => (
                <option key={b.name} value={i}>{b.name}</option>
              ))}
            </select>
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-[10px] font-bold text-text-muted uppercase tracking-widest">Age (Years)</label>
            <input 
              type="number" 
              value={age}
              onChange={(e) => setAge(e.target.value)}
              placeholder="e.g. 3" 
              className="p-3.5 border border-border rounded-lg text-sm bg-warm text-text-main focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-[10px] font-bold text-text-muted uppercase tracking-widest">ZIP Code</label>
            <input 
              type="text" 
              value={zip}
              onChange={(e) => setZip(e.target.value.slice(0, 5))}
              placeholder="e.g. 90210" 
              className="p-3.5 border border-border rounded-lg text-sm bg-warm text-text-main focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all"
            />
          </div>

          <div className="md:col-span-2 flex flex-col gap-1.5">
            <label className="text-[10px] font-bold text-text-muted uppercase tracking-widest">Coverage Target</label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-1">
              {[
                { id: 'accident', icon: '🚨', label: 'Accident Only', desc: 'Injuries only' },
                { id: 'standard', icon: '🏥', label: 'Standard (Most Popular)', desc: 'Full coverage' },
                { id: 'wellness', icon: '💊', label: 'Premium (Full Wellness)', desc: 'Routine care' }
              ].map((opt) => (
                <div 
                  key={opt.id}
                  onClick={() => setCoverage(opt.id as any)}
                  className={`p-3 border rounded-xl text-center cursor-pointer transition-all ${
                    coverage === opt.id 
                    ? 'border-primary bg-primary-pale ring-4 ring-primary/5' 
                    : 'border-border bg-warm hover:border-text-muted/30'
                  }`}
                >
                  <div className="text-xl mb-1">{opt.icon}</div>
                  <div className={`text-[11px] font-bold ${coverage === opt.id ? 'text-primary' : 'text-text-main'}`}>{opt.label}</div>
                  <div className="text-[9px] text-text-muted font-medium mt-0.5">{opt.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </form>

        <button 
          onClick={handleCalculate}
          className="w-full mt-8 p-4 bg-primary text-white rounded-lg font-bold text-base hover:bg-primary-dark transition-all transform hover:-translate-y-0.5 active:translate-y-0 shadow-lg shadow-primary/10"
        >
          🔍 Get My Instant Estimate — Free
        </button>
        <p className="text-center text-[11px] text-text-muted font-medium mt-4">
          🔒 <strong className="text-primary">Zero email required.</strong> Results appear instantly.
        </p>

        <AnimatePresence>
          {result && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-10"
              ref={resultRef}
            >
              <div className="bg-gradient-to-br from-primary-dark to-primary rounded-xl p-6 text-white mb-6 shadow-lg">
                <div className="flex justify-between items-center mb-1">
                  <div className="text-[11px] uppercase tracking-widest font-bold opacity-70">Estimated Monthly Premium</div>
                  <div className="text-[11px] uppercase tracking-widest font-bold opacity-70">{result.stateName || 'National'} Average</div>
                </div>
                <div className="flex justify-between items-baseline">
                  <h3 className="text-lg font-bold truncate pr-4">{result.breed.name} · Age {result.age}</h3>
                  <div className="text-4xl font-serif font-bold">${result.mid}<span className="text-sm font-sans font-normal opacity-70">/mo</span></div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
                {[
                  { label: 'Budget', val: result.low, icon: '💛', desc: 'Higher deductible' },
                  { label: 'Recommended', val: result.mid, icon: '💚', desc: 'Best value balance', active: true },
                  { label: 'Premium', val: result.high, icon: '💎', desc: 'Lower deductible' }
                ].map((plan) => (
                  <div 
                    key={plan.label} 
                    className={`relative p-5 text-center border rounded-xl bg-surface transition-all ${
                      plan.active ? 'border-primary ring-4 ring-primary/5 bg-primary-pale' : 'border-border'
                    }`}
                  >
                    {plan.active && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white text-[9px] font-bold px-3 py-1 rounded-full uppercase tracking-widest whitespace-nowrap shadow-sm">
                        ⭐ Best Value
                      </div>
                    )}
                    <div className="text-xl mb-2">{plan.icon}</div>
                    <div className="text-[10px] font-extrabold text-text-muted uppercase tracking-widest mb-1">{plan.label}</div>
                    <div className="text-2xl font-serif font-bold text-text-main">${plan.val}<sub className="text-[10px] font-sans font-normal">/mo</sub></div>
                    <div className="text-[9px] text-text-muted mt-2 leading-tight">{plan.desc}</div>
                  </div>
                ))}
              </div>

              <div className="bg-blue-50/50 rounded-xl p-6 mb-8 border border-blue-100">
                <h4 className="text-[10px] font-bold text-blue-500 uppercase tracking-widest mb-4">💡 Smart Insights for Your Pet</h4>
                <div className="space-y-3">
                  {getInsights(result).map((insight, idx) => (
                    <div key={idx} className="flex gap-3 text-xs text-text-main leading-relaxed">
                      <div className="text-blue-500 mt-0.5 flex-shrink-0">{insight.icon}</div>
                      <p>{insight.text}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <a 
                  href="https://lemonade.com/pet" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-accent text-white py-4 rounded-lg font-bold text-center text-sm shadow-lg shadow-accent/20 hover:bg-accent-light transition-all flex items-center justify-center gap-2 group"
                >
                  Get Real Quotes <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </a>
                <a 
                  href="#providers" 
                  className="border-2 border-primary text-primary py-4 rounded-lg font-bold text-center text-sm hover:bg-primary-pale transition-all"
                >
                  Compare All Plans
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
