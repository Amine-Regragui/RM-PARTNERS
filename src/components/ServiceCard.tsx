import type { ReactNode } from "react";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ArrowUpRight } from "lucide-react";
import { Link } from "wouter";

export interface ServiceCardProps {
  /** Icône déjà rendue (ex. <Calculator />), stylée par le conteneur. */
  icon: ReactNode;
  title: string;
  description: string;
  /** Lien interne vers la page du service. */
  href: string;
  features?: string[];
}

export function ServiceCard({ icon, title, description, href, features }: ServiceCardProps) {
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
            {icon}
          </div>
        </div>
        <h3 className="text-lg font-bold mb-1.5">{title}</h3>
        <p className="text-sm text-foreground/70 leading-relaxed">{description}</p>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        {features && (
          <ul className="space-y-2 text-sm text-foreground/70">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="text-accent font-bold mt-1">•</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        )}
        {/* wouter v3 rend lui-même la balise <a> : pas de <a> imbriqué. */}
        <Link
          href={href}
          className="inline-flex items-center gap-2 text-sm font-semibold text-heading border border-heading/25 px-4 py-2 hover:bg-primary hover:text-white hover:border-primary transition-all duration-200 mt-1"
        >
          En savoir plus
          <ArrowUpRight className="w-3.5 h-3.5" />
        </Link>
      </CardContent>
    </Card>
  );
}

export default ServiceCard;
