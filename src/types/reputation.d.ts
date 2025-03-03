export interface ReputationLevel {
  description: string;
  lowerBound: number;
  upperBound: number;
  value: number;
}

export interface Reputation {
  key: string;
  imageUrl: string;
}
