import { Helmet } from "react-helmet-async";

import { SITE_NAME, site } from "@/data/site";

const DEFAULT_DESCRIPTION =
  "Cabinet d'expertise comptable à Paris. RM Partners accompagne entrepreneurs, PME et indépendants dans la comptabilité, la fiscalité et la paie.";

export interface SEOProps {
  /** Titre de la page, sans le suffixe « | RM Partners » ajouté ici. */
  title?: string;
  description?: string;
  /** Chemin absolu de la page (ex. « /services/audit »), pour le canonical. */
  canonical?: string;
  ogType?: string;
  /** Objet JSON-LD schema.org injecté dans la page. */
  schema?: Record<string, unknown>;
}

export function SEO({
  title,
  description = DEFAULT_DESCRIPTION,
  canonical,
  ogType = "website",
  schema,
}: SEOProps) {
  const fullTitle = title ? `${title} | ${SITE_NAME}` : SITE_NAME;
  const url = canonical ? `${site.url}${canonical}` : site.url;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:image" content={`${site.url}/og-image.jpg`} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${site.url}/og-image.jpg`} />
      {schema && <script type="application/ld+json">{JSON.stringify(schema)}</script>}
    </Helmet>
  );
}

export default SEO;
