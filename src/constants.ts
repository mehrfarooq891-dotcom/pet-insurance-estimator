import { Breed, StateData } from './types';

export const BREED_DATA: Record<'dog' | 'cat', Breed[]> = {
  dog: [
    { name: "Mixed Breed / Mutt", risk: "low", insight: "Mixed breeds tend to be healthier than purebreds due to genetic diversity." },
    { name: "Labrador Retriever", risk: "medium", insight: "Labs are prone to obesity and hip dysplasia — both manageable with good care." },
    { name: "Golden Retriever", risk: "high", insight: "Golden Retrievers have one of the highest cancer rates of any breed — insurance is strongly recommended." },
    { name: "German Shepherd", risk: "high", insight: "German Shepherds commonly develop hip and elbow dysplasia, increasing lifetime vet costs." },
    { name: "French Bulldog", risk: "high", insight: "Frenchies are a brachycephalic (flat-faced) breed with frequent respiratory and spinal issues." },
    { name: "Bulldog (English)", risk: "high", insight: "English Bulldogs face breathing issues, joint problems, and skin fold infections throughout their life." },
    { name: "Poodle (Standard)", risk: "medium", insight: "Standard Poodles can develop bloat (GDV), which is a serious and costly emergency." },
    { name: "Beagle", risk: "medium", insight: "Beagles are generally healthy but prone to ear infections and weight gain." },
    { name: "Rottweiler", risk: "high", insight: "Rottweilers have high risk for joint disease and cancer, especially osteosarcoma." },
    { name: "Yorkshire Terrier", risk: "medium", insight: "Yorkies commonly develop dental disease and tracheal collapse in older age." },
    { name: "Boxer", risk: "high", insight: "Boxers have elevated cancer rates and heart conditions like cardiomyopathy." },
    { name: "Dachshund", risk: "high", insight: "Dachshunds are highly prone to spinal disease (IVDD), which can require costly surgery." },
    { name: "Siberian Husky", risk: "medium", insight: "Huskies are generally robust but prone to eye conditions and hip dysplasia." },
    { name: "Great Dane", risk: "high", insight: "Great Danes have a short lifespan and high risk for bloat, heart disease, and bone cancer." },
    { name: "Bernese Mountain Dog", risk: "high", insight: "Berners have one of the highest rates of cancer of any breed, and short average lifespans." },
    { name: "Chihuahua", risk: "low", insight: "Chihuahuas are long-lived and generally healthy, though prone to dental disease." },
    { name: "Shih Tzu", risk: "medium", insight: "Shih Tzus can develop breathing issues and eye conditions due to their flat faces." },
    { name: "Australian Shepherd", risk: "medium", insight: "Aussies can develop drug sensitivities (MDR1 gene) and eye conditions." },
    { name: "Border Collie", risk: "low", insight: "Border Collies are among the healthiest breeds, though prone to eye issues." },
    { name: "Cavalier King Charles Spaniel", risk: "high", insight: "Cavaliers have very high rates of heart disease (MVD) — virtually all are affected by age 10." }
  ],
  cat: [
    { name: "Domestic Shorthair (Mixed)", risk: "low", insight: "Mixed-breed cats are hardy and tend to live long, healthy lives." },
    { name: "Maine Coon", risk: "medium", insight: "Maine Coons are prone to hypertrophic cardiomyopathy (HCM), a serious heart condition." },
    { name: "Persian", risk: "high", insight: "Persians frequently develop kidney disease and respiratory issues due to their flat faces." },
    { name: "Siamese", risk: "medium", insight: "Siamese cats can develop respiratory issues and are prone to certain cancers." },
    { name: "Ragdoll", risk: "medium", insight: "Ragdolls, like Maine Coons, have elevated risk of HCM." },
    { name: "Bengal", risk: "medium", insight: "Bengals can develop heart and eye conditions but are generally active and healthy." },
    { name: "British Shorthair", risk: "medium", insight: "British Shorthairs can develop HCM and PKD (polycystic kidney disease)." },
    { name: "Scottish Fold", risk: "high", insight: "Scottish Folds have a genetic mutation that causes painful joint disease throughout life." },
    { name: "Sphynx", risk: "high", insight: "Sphynx cats have high rates of HCM and skin conditions requiring ongoing care." },
    { name: "Abyssinian", risk: "medium", insight: "Abyssinians are prone to kidney disease and dental issues." }
  ]
};

export const STATE_DATA: Record<string, StateData> = {
  "CA": { name: "California", multiplier: 1.45, note: "Vet costs in California are among the highest in the US — about 45% above the national average." },
  "NY": { name: "New York", multiplier: 1.50, note: "New York City and surrounding areas have the highest veterinary costs in the country." },
  "MA": { name: "Massachusetts", multiplier: 1.35, note: "Boston-area vets charge well above the national average." },
  "WA": { name: "Washington", multiplier: 1.30, note: "Seattle's high cost of living extends to veterinary care." },
  "CO": { name: "Colorado", multiplier: 1.20, note: "Denver and Boulder have above-average vet costs." },
  "FL": { name: "Florida", multiplier: 1.10, note: "Florida's vet costs are slightly above the US average." },
  "TX": { name: "Texas", multiplier: 1.05, note: "Texas vet costs are close to the national average, with variation between urban and rural areas." },
  "IL": { name: "Illinois", multiplier: 1.15, note: "Chicago-area vets charge above-average rates." },
  "OH": { name: "Ohio", multiplier: 0.95, note: "Ohio has below-average vet costs, making insurance more affordable here." },
  "GA": { name: "Georgia", multiplier: 1.00, note: "Georgia tracks close to the national average." },
  "NC": { name: "North Carolina", multiplier: 0.95, note: "North Carolina has slightly below-average veterinary costs." },
  "MI": { name: "Michigan", multiplier: 0.92, note: "Michigan's vet costs are below the national average." },
  "PA": { name: "Pennsylvania", multiplier: 1.05, note: "Pennsylvania is near the national average, higher in Philadelphia." },
  "AZ": { name: "Arizona", multiplier: 1.08, note: "Phoenix and Scottsdale have slightly above-average vet costs." },
  "TN": { name: "Tennessee", multiplier: 0.90, note: "Tennessee is one of the more affordable states for veterinary care." },
  "MO": { name: "Missouri", multiplier: 0.88, note: "Missouri has some of the most affordable vet costs in the US." },
  "IA": { name: "Iowa", multiplier: 0.85, note: "Iowa has some of the lowest veterinary costs in the country." },
  "MS": { name: "Mississippi", multiplier: 0.82, note: "Mississippi has the lowest average vet costs in the US." },
  "OR": { name: "Oregon", multiplier: 1.25, note: "Portland's vet costs are notably above average." },
  "NV": { name: "Nevada", multiplier: 1.10, note: "Las Vegas vet costs sit above the national average." }
};

export function zipToState(zip: string): string | null {
  const z = parseInt(zip.slice(0, 3));
  if (z >= 900 && z <= 961) return "CA";
  if (z >= 100 && z <= 149) return "NY";
  if (z >= 10 && z <= 27) return "MA";
  if (z >= 980 && z <= 994) return "WA";
  if (z >= 800 && z <= 816) return "CO";
  if (z >= 320 && z <= 349) return "FL";
  if (z >= 750 && z <= 799) return "TX";
  if (z >= 600 && z <= 629) return "IL";
  if (z >= 430 && z <= 459) return "OH";
  if (z >= 300 && z <= 319) return "GA";
  if (z >= 270 && z <= 289) return "NC";
  if (z >= 480 && z <= 499) return "MI";
  if (z >= 150 && z <= 196) return "PA";
  if (z >= 850 && z <= 865) return "AZ";
  if (z >= 370 && z <= 385) return "TN";
  if (z >= 630 && z <= 658) return "MO";
  if (z >= 500 && z <= 528) return "IA";
  if (z >= 386 && z <= 397) return "MS";
  if (z >= 970 && z <= 979) return "OR";
  if (z >= 889 && z <= 898) return "NV";
  return null;
}
