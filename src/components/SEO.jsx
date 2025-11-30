import { Helmet } from 'react-helmet-async';

/**
 * SEO Component - Comprehensive metadata management
 * Optimized for AI search, traditional SEO, and social sharing
 */
const SEO = ({
    title,
    description,
    keywords,
    canonical,
    ogType = 'website',
    ogImage = '/images/og-default.jpg',
    twitterCard = 'summary_large_image',
    schema,
    noindex = false,
}) => {
    const siteUrl = 'https://dimensionsdzine.com';
    const siteName = 'Dimensions Dzine';
    const fullTitle = title ? `${title} | ${siteName}` : `${siteName} - Budget-Friendly Interior Design & Construction in Hyderabad`;
    const canonicalUrl = canonical ? `${siteUrl}${canonical}` : siteUrl;
    const fullOgImage = ogImage.startsWith('http') ? ogImage : `${siteUrl}${ogImage}`;

    return (
        <Helmet>
            {/* Primary Meta Tags */}
            <title>{fullTitle}</title>
            <meta name="title" content={fullTitle} />
            <meta name="description" content={description} />
            {keywords && <meta name="keywords" content={keywords} />}
            <link rel="canonical" href={canonicalUrl} />

            {/* Robots */}
            {noindex ? (
                <meta name="robots" content="noindex, nofollow" />
            ) : (
                <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
            )}

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={ogType} />
            <meta property="og:url" content={canonicalUrl} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={fullOgImage} />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
            <meta property="og:site_name" content={siteName} />
            <meta property="og:locale" content="en_IN" />

            {/* Twitter */}
            <meta name="twitter:card" content={twitterCard} />
            <meta name="twitter:url" content={canonicalUrl} />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={fullOgImage} />

            {/* Additional SEO Tags */}
            <meta name="author" content="Dimensions Dzine" />
            <meta name="language" content="English" />
            <meta name="geo.region" content="IN-TG" />
            <meta name="geo.placename" content="Hyderabad" />
            <meta name="geo.position" content="17.385044;78.486671" />
            <meta name="ICBM" content="17.385044, 78.486671" />

            {/* Schema.org JSON-LD */}
            {schema && (
                <script type="application/ld+json">
                    {JSON.stringify(schema)}
                </script>
            )}
        </Helmet>
    );
};

export default SEO;
