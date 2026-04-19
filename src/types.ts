export interface Breed {
  name: string;
  risk: 'low' | 'medium' | 'high';
  insight: string;
}

export interface StateData {
  name: string;
  multiplier: number;
  note: string;
}

export interface EstimateResult {
  low: number;
  mid: number;
  high: number;
  breed: Breed;
  age: number;
  stateCode: string | null;
  stateName: string | null;
  stateNote: string | null;
  petType: 'dog' | 'cat';
  coverage: 'accident' | 'standard' | 'wellness';
}
