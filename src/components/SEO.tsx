import { Helmet } from "react-helmet-async";

const SITE_NAME = "RM Partners";

export function SEO({
  title: n,
  description:
    i = "Cabinet d'expertise comptable à Paris. RM Partners accompagne entrepreneurs, PME et indépendants dans la comptabilité, la fiscalité et la paie.",
  canonical: l,
  ogType: o = "website",
  schema: u,
}) {
  const p = n ? `${n} | ${SITE_NAME}` : SITE_NAME,
    m = l ? `https://rmpartners.fr${l}` : "https://rmpartners.fr";
  return (
    <Helmet>
      <title>{p}</title>
      <meta name="description" content={i} />
      <link rel="canonical" href={m} />
      <meta property="og:type" content={o} />
      <meta property="og:title" content={p} />
      <meta property="og:description" content={i} />
      <meta property="og:url" content={m} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={p} />
      <meta name="twitter:description" content={i} />
      {u && <script type="application/ld+json">{JSON.stringify(u)}</script>}
    </Helmet>
  );
}

export default SEO;
