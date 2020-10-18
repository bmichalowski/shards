export const getValueInRange = (
  value,
  minValue = -Infinity,
  maxValue = Infinity
) => (value < minValue ? minValue : value > maxValue ? maxValue : value);
