import { Helmet } from 'react-helmet-async';

interface SocialMetaProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'profile';
  twitterCard?: 'summary' | 'summary_large_image';
  twitterHandle?: string;
}

export const SocialMeta = ({
  title = 'Timothy Bulumba - Build Back Better | Makerere Guild President 2025',
  description = 'Join Timothy Bulumba\'s Build Back Better movement. Transforming student life at Makerere University through innovation, technology, and unwavering commitment to excellence.',
  image = 'https://bulumba.ug/images/campaign-banner.jpg',
  url = 'https://bulumba.ug',
  type = 'website',
  twitterCard = 'summary_large_image',
  twitterHandle = '@TimothyBulumba'
}: SocialMetaProps) => {
  const fullTitle = title.includes('Timothy Bulumba') ? title : `${title} | Timothy Bulumba`;
  
  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Bulumba Build Back Better" />
      <meta property="og:locale" content="en_UG" />
      
      {/* Twitter */}
      <meta property="twitter:card" content={twitterCard} />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
      <meta property="twitter:site" content={twitterHandle} />
      <meta property="twitter:creator" content={twitterHandle} />
      
      {/* WhatsApp */}
      <meta property="og:image:alt" content={`${title} - Campaign Image`} />
      <meta property="og:image:type" content="image/jpeg" />
      
      {/* LinkedIn */}
      <meta property="article:author" content="Timothy Bulumba" />
      <meta property="article:published_time" content={new Date().toISOString()} />
      
      {/* Additional SEO */}
      <meta name="keywords" content="Timothy Bulumba, Makerere University, Guild President, Build Back Better, Student Leadership, Uganda, Campus Politics, Student Union" />
      <meta name="author" content="Timothy Bulumba Campaign Team" />
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      
      {/* Structured Data for Rich Snippets */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Timothy Bulumba",
          "alternateName": "Build Back Better",
          "description": description,
          "url": url,
          "image": image,
          "sameAs": [
            "https://twitter.com/TimothyBulumba",
            "https://facebook.com/TimothyBulumba",
            "https://instagram.com/TimothyBulumba",
            "https://wa.me/256703743491"
          ],
          "jobTitle": "Guild President Candidate",
          "worksFor": {
            "@type": "Organization",
            "name": "Makerere University"
          }
        })}
      </script>
    </Helmet>
  );
};