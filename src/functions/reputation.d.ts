import {
  Reputation,
  ReputationLevel,
  ReputationLevelMap,
  ReputationMap,
} from "../types/reputation";

export const getReputationImageUrl = (
  data: Reputation[],
  key?: string
): string | undefined => {
  return data.find((rl) => rl.key === key)?.imageUrl;
};

export const getReputationLevel = (
  data: ReputationLevel[],
  level: number
): ReputationLevel | undefined => {
  return data.find((rl) => rl.value === level);
};

export const getReputationPercentage = (
  data: ReputationLevel[],
  level: number,
  currentPoint: number
) => {
  const selectedValue = getReputationLevel(data, level);
  if (!selectedValue) return 0;
  const { lowerBound, upperBound } = selectedValue;
  if (upperBound === null) return 100;
  else if (upperBound === lowerBound || lowerBound === null) return 0;

  return ((currentPoint - lowerBound) / (upperBound - lowerBound)) * 100;
};

export const mapReputationByKey = (
  reputations: Reputation[]
): ReputationMap => {
  return reputations.reduce((acc, item) => {
    acc[item.key] = item;
    return acc;
  }, {} as ReputationMap);
};

export const mapReputationLevelByValue = (
  reputations: ReputationLevel[]
): ReputationLevelMap => {
  return reputations.reduce((acc, item) => {
    acc[item.value] = item;
    return acc;
  }, {} as ReputationLevelMap);
};
