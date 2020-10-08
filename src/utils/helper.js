export function calculatePercent(value, totalValue) {
  return totalValue === 0 ? 0 : Math.floor((value / totalValue) * 100);
}
