export function getPlurals (count, variants) {
  if (count === 1) {
    return variants[0];
  }

  return variants[1];
};
