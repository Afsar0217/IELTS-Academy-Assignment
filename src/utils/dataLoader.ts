// Simulate API delay for realistic data loading
const API_DELAY = 500;

export const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const loadFeatures = async () => {
  await delay(API_DELAY);
  const response = await fetch('/features.json');
  if (!response.ok) {
    throw new Error('Failed to load features data');
  }
  return response.json();
};

export const loadTestimonials = async () => {
  await delay(API_DELAY);
  const response = await fetch('/testimonials.json');
  if (!response.ok) {
    throw new Error('Failed to load testimonials data');
  }
  return response.json();
};
