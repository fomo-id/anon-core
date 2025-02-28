import { Reputation, ReputationLevel } from "../types/reputation";

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

  if (upperBound === lowerBound) return 0;

  return ((currentPoint - lowerBound) / (upperBound - lowerBound)) * 100;
};
