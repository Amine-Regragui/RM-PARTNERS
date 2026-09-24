import { Star } from "lucide-react";

import type { CarouselTestimonial } from "@/data/testimonials";

/** Initiales d'un nom complet, pour la pastille d'avatar. */
function getInitials(fullName: string): string {
  return fullName
    .split(" ")
    .map((word) => word[0])
    .join("")
    .toUpperCase();
}

export interface TestimonialsCarouselProps {
  testimonial: CarouselTestimonial;
}

export function TestimonialsCarousel({ testimonial: n }: TestimonialsCarouselProps) {
  return (
    <div className="flex-shrink-0 w-80 bg-white border border-border p-7">
      <div className="flex gap-1 mb-4">
        {Array.from({
          length: n.rating,
        }).map((_, index) => (
          <Star key={index} className="w-4 h-4 fill-accent text-accent" />
        ))}
      </div>
      <p className="text-foreground/85 text-sm mb-6 leading-relaxed line-clamp-4">{n.text}</p>
      <div className="flex items-center gap-3 pt-4 border-t border-border">
        <div className="w-10 h-10 rounded-full bg-accent/15 text-accent flex items-center justify-center text-xs font-bold flex-shrink-0">
          {getInitials(n.name)}
        </div>
        <div>
          <p className="font-semibold text-sm text-foreground">{n.name}</p>
          <p className="text-xs text-muted-foreground">{n.company}</p>
        </div>
      </div>
    </div>
  );
}
export default TestimonialsCarousel;
