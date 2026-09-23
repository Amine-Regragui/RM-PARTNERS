import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ArrowUpRight } from "lucide-react";
import { Link } from "wouter";

export function ServiceCard({ icon: n, title: i, description: l, href: o, features: u }) {
  return (
    <Card className="rm-card h-full rounded-none">
      <CardHeader>
        <div className="mb-5">
          <div
            className="[&_svg]:w-9 [&_svg]:h-9 [&_svg]:text-accent"
            style={{
              strokeWidth: 1.5,
            }}
          >
            {n}
          </div>
        </div>
        <h3 className="text-lg font-bold mb-1.5">{i}</h3>
        <p className="text-sm text-foreground/70 leading-relaxed">{l}</p>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        {u && (
          <ul className="space-y-2 text-sm text-foreground/70">
            {u.map((p, m) => (
              <li className="flex items-start gap-2">
                <span className="text-accent font-bold mt-1">•</span>
                <span>{p}</span>
              </li>
            ))}
          </ul>
        )}
        <Link href={o}>
          <a className="inline-flex items-center gap-2 text-sm font-semibold text-heading border border-heading/25 px-4 py-2 hover:bg-primary hover:text-white hover:border-primary transition-all duration-200 mt-1">
            En savoir plus
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </Link>
      </CardContent>
    </Card>
  );
}

export default ServiceCard;
