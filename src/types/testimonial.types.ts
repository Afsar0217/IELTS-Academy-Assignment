export interface Testimonial {
  id: string;
  name: string;
  score: string;
  quote: string;
  imageUrl: string;
  rating: number;
}

export interface TestimonialsData {
  testimonials: Testimonial[];
}
