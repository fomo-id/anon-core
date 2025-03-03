export const getReputationImageUrl = (data, key) => {
  return data.find((rl) => rl.key === key)?.imageUrl;
};

export const getReputationLevel = (data, level) => {
  return data.find((rl) => rl.value === level);
};

export const getReputationPercentage = (data, level, currentPoint) => {
  const selectedValue = getReputationLevel(data, level);
  if (!selectedValue) return 0;

  const { lowerBound, upperBound } = selectedValue;

  if (upperBound === lowerBound) return 0;

  return ((currentPoint - lowerBound) / (upperBound - lowerBound)) * 100;
};
