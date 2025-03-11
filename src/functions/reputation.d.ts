import {
  Reputation,
  ReputationLevel,
  ReputationLevelMap,
  ReputationMap,
} from "../types/reputation";

declare const getReputationImageUrl: (
  data: Reputation[],
  key?: string
) => string | undefined;

declare const getReputationLevel: (
  data: ReputationLevel[],
  level: number
) => ReputationLevel | undefined;

declare const getReputationPercentage: (
  data: ReputationLevel[],
  level: number,
  currentPoint: number
) => number;

declare const calculateReputationLevel :(lowerBound:number|null, upperBound:number|null, value:number)=> number;

declare const mapReputationByKey: (reputations: Reputation[]) => ReputationMap;

declare const mapReputationLevelByValue: (
  reputations: ReputationLevel[]
) => ReputationLevelMap;
