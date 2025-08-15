import { Helmet } from 'react-helmet-async';

interface StructuredDataProps {
  type?: 'Organization' | 'Person' | 'Event' | 'Article';
  data?: any;
}

export const StructuredData = ({ type = 'Organization', data }: StructuredDataProps) => {
  const getStructuredData = () => {
    switch (type) {
      case 'Organization':
        return {
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Bulumba Build Back Better",
          "alternateName": "Timothy Bulumba Campaign",
          "url": "https://www.timothybulumba.com",
          "logo": "https://www.timothybulumba.com/logo.jpg",
          "description": "Timothy Bulumba's Build Back Better campaign for Makerere University Guild President 2025",
          "founder": {
            "@type": "Person",
            "name": "Timothy Bulumba",
            "jobTitle": "Guild President Candidate",
            "affiliation": {
              "@type": "Organization",
              "name": "Makerere University"
            }
          },
          "sameAs": [
            "https://twitter.com/TimothyBulumba",
            "https://facebook.com/TimothyBulumba",
            "https://instagram.com/TimothyBulumba"
          ],
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+256-703-743-491",
            "contactType": "Campaign Office",
            "availableLanguage": ["English", "Luganda"]
          }
        };
      
      case 'Person':
        return {
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Timothy Bulumba",
          "alternateName": "Build Back Better",
          "description": "Visionary leader and Guild President candidate at Makerere University",
          "url": "https://www.timothybulumba.com/about",
          "image": "https://www.timothybulumba.com/timothy-profile.jpg",
          "sameAs": [
            "https://twitter.com/TimothyBulumba",
            "https://facebook.com/TimothyBulumba",
            "https://instagram.com/TimothyBulumba",
            "https://wa.me/256703743491"
          ],
          "jobTitle": "Student Leader & Guild President Candidate",
          "worksFor": {
            "@type": "Organization",
            "name": "Makerere University"
          },
          "alumniOf": {
            "@type": "Organization",
            "name": "Makerere University"
          },
          "knowsAbout": [
            "Student Leadership",
            "Digital Innovation",
            "Educational Reform",
            "Community Development"
          ]
        };
      
      case 'Event':
        return {
          "@context": "https://schema.org",
          "@type": "Event",
          "name": "Makerere University Guild Elections 2025",
          "description": "Vote for Timothy Bulumba - Build Back Better",
          "startDate": "2025-03-01",
          "endDate": "2025-03-02",
          "location": {
            "@type": "Place",
            "name": "Makerere University",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Kampala",
              "addressCountry": "Uganda"
            }
          },
          "organizer": {
            "@type": "Organization",
            "name": "Makerere University Electoral Commission"
          },
          "performer": {
            "@type": "Person",
            "name": "Timothy Bulumba"
          },
          "eventStatus": "https://schema.org/EventScheduled",
          "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode"
        };
      
      default:
        return data || {};
    }
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(getStructuredData())}
      </script>
    </Helmet>
  );
};

// Breadcrumb structured data
export const BreadcrumbStructuredData = ({ items }: { items: Array<{ name: string; url: string }> }) => {
  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(breadcrumbData)}
      </script>
    </Helmet>
  );
};

// FAQ structured data
export const FAQStructuredData = ({ faqs }: { faqs: Array<{ question: string; answer: string }> }) => {
  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(faqData)}
      </script>
    </Helmet>
  );
};