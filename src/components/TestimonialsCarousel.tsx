import { Star } from "lucide-react";

function W0(n) {
  return n
    .split(" ")
    .map((i) => i[0])
    .join("")
    .toUpperCase();
}

export function TestimonialsCarousel({ testimonial: n }) {
  return (
    <div className="flex-shrink-0 w-80 bg-white border border-border p-7">
      <div className="flex gap-1 mb-4">
        {Array.from({
          length: n.rating,
        }).map((i, l) => (
          <Star className="w-4 h-4 fill-accent text-accent" />
        ))}
      </div>
      <p className="text-foreground/85 text-sm mb-6 leading-relaxed line-clamp-4">{n.text}</p>
      <div className="flex items-center gap-3 pt-4 border-t border-border">
        <div className="w-10 h-10 rounded-full bg-accent/15 text-accent flex items-center justify-center text-xs font-bold flex-shrink-0">
          {W0(n.name)}
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
