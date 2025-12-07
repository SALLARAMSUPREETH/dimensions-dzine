import { Helmet } from 'react-helmet-async';

/**
 * Enhanced SEO Component - TOP-TIER SEO Implementation
 * Features:
 * - Dynamic meta tags optimized for search engines
 * - Structured data (JSON-LD) for rich results
 * - Breadcrumb navigation schema
 * - FAQ schema for featured snippets
 * - Open Graph & Twitter Cards
 * - Local business schema
 * - Review/Rating schema
 * - ItemList schema
 * - HowTo schema
 * - Performance optimizations (preconnect, dns-prefetch)
 * - Article schema support
 * - Video schema support
 */
const SEO = ({
    title,
    description,
    keywords,
    canonical,
    ogType = 'website',
    ogImage = '/images/og-default.webp',
    twitterCard = 'summary_large_image',
    schema,
    schemas = [], // Array of multiple schemas
    breadcrumb,
    faq,
    reviews,
    itemList,
    howTo,
    article,
    video,
    noindex = false,
    publishedTime,
    modifiedTime,
    author,
}) => {
    const siteUrl = 'https://dimensionsdzine.com';
    const siteName = 'Dimensions Dzine';
    const fullTitle = title ? `${title}` : `${siteName} - Interior Designers in Hyderabad`;
    const canonicalUrl = canonical ? `${siteUrl}${canonical}` : siteUrl;
    const fullOgImage = ogImage.startsWith('http') ? ogImage : `${siteUrl}${ogImage}`;

    // Generate Breadcrumb Schema
    const breadcrumbSchema = breadcrumb ? {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        'itemListElement': breadcrumb.map((item, index) => ({
            '@type': 'ListItem',
            'position': index + 1,
            'name': item.name,
            'item': `${siteUrl}${item.url}`,
        })),
    } : null;

    // Generate FAQ Schema
    const faqSchema = faq ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'mainEntity': faq.map(item => ({
            '@type': 'Question',
            'name': item.question,
            'acceptedAnswer': {
                '@type': 'Answer',
                'text': item.answer,
            },
        })),
    } : null;

    // Generate Review Schema
    const reviewSchema = reviews ? {
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        '@id': `${siteUrl}/#business`,
        'aggregateRating': {
            '@type': 'AggregateRating',
            'ratingValue': reviews.ratingValue || '4.8',
            'reviewCount': reviews.reviewCount || '150',
            'bestRating': '5',
            'worstRating': '1',
        },
        'review': reviews.reviews?.map(review => ({
            '@type': 'Review',
            'author': {
                '@type': 'Person',
                'name': review.author || 'Customer',
            },
            'datePublished': review.datePublished || new Date().toISOString().split('T')[0],
            'reviewBody': review.reviewBody,
            'reviewRating': {
                '@type': 'Rating',
                'ratingValue': review.rating || '5',
                'bestRating': '5',
            },
        })) || [],
    } : null;

    // Generate ItemList Schema
    const itemListSchema = itemList ? {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        'name': itemList.name || 'Items',
        'description': itemList.description,
        'numberOfItems': itemList.items?.length || 0,
        'itemListElement': itemList.items?.map((item, index) => ({
            '@type': 'ListItem',
            'position': index + 1,
            'item': {
                '@type': item.type || 'Thing',
                'name': item.name,
                'description': item.description,
                'image': item.image ? (item.image.startsWith('http') ? item.image : `${siteUrl}${item.image}`) : undefined,
                'url': item.url ? (item.url.startsWith('http') ? item.url : `${siteUrl}${item.url}`) : undefined,
            },
        })) || [],
    } : null;

    // Generate HowTo Schema
    const howToSchema = howTo ? {
        '@context': 'https://schema.org',
        '@type': 'HowTo',
        'name': howTo.name,
        'description': howTo.description,
        'image': howTo.image ? (howTo.image.startsWith('http') ? howTo.image : `${siteUrl}${howTo.image}`) : fullOgImage,
        'totalTime': howTo.totalTime,
        'estimatedCost': howTo.estimatedCost ? {
            '@type': 'MonetaryAmount',
            'currency': 'INR',
            'value': howTo.estimatedCost,
        } : undefined,
        'step': howTo.steps?.map((step, index) => ({
            '@type': 'HowToStep',
            'position': index + 1,
            'name': step.name,
            'text': step.text,
            'image': step.image ? (step.image.startsWith('http') ? step.image : `${siteUrl}${step.image}`) : undefined,
            'url': step.url ? (step.url.startsWith('http') ? step.url : `${siteUrl}${step.url}`) : undefined,
        })) || [],
    } : null;

    // Generate Article Schema
    const articleSchema = article ? {
        '@context': 'https://schema.org',
        '@type': 'Article',
        'headline': article.headline || fullTitle,
        'description': article.description || description,
        'image': article.image ? (article.image.startsWith('http') ? article.image : `${siteUrl}${article.image}`) : fullOgImage,
        'datePublished': publishedTime || article.datePublished,
        'dateModified': modifiedTime || article.dateModified || publishedTime || article.datePublished,
        'author': {
            '@type': 'Organization',
            'name': author || siteName,
            'url': siteUrl,
        },
        'publisher': {
            '@type': 'Organization',
            'name': siteName,
            'logo': {
                '@type': 'ImageObject',
                'url': `${siteUrl}/images/logo.webp`,
            },
        },
        'mainEntityOfPage': {
            '@type': 'WebPage',
            '@id': canonicalUrl,
        },
    } : null;

    // Generate Video Schema
    const videoSchema = video ? {
        '@context': 'https://schema.org',
        '@type': 'VideoObject',
        'name': video.name || fullTitle,
        'description': video.description || description,
        'thumbnailUrl': video.thumbnailUrl ? (video.thumbnailUrl.startsWith('http') ? video.thumbnailUrl : `${siteUrl}${video.thumbnailUrl}`) : fullOgImage,
        'uploadDate': video.uploadDate,
        'duration': video.duration,
        'contentUrl': video.contentUrl,
        'embedUrl': video.embedUrl,
    } : null;

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
            <meta name="author" content={author || "Dimensions Dzine"} />
            <meta name="language" content="English" />
            <meta name="geo.region" content="IN-TG" />
            <meta name="geo.placename" content="Hyderabad" />
            <meta name="geo.position" content="17.385044;78.486671" />
            <meta name="ICBM" content="17.385044, 78.486671" />
            
            {/* Article-specific meta tags */}
            {article && publishedTime && (
                <meta property="article:published_time" content={publishedTime} />
            )}
            {article && modifiedTime && (
                <meta property="article:modified_time" content={modifiedTime} />
            )}
            {article && author && (
                <meta property="article:author" content={author} />
            )}
            
            {/* Performance & Resource Hints */}
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
            <link rel="dns-prefetch" href="https://www.google-analytics.com" />
            <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
            
            {/* Mobile App Meta Tags */}
            <meta name="mobile-web-app-capable" content="yes" />
            <meta name="apple-mobile-web-app-capable" content="yes" />
            <meta name="apple-mobile-web-app-status-bar-style" content="default" />
            <meta name="apple-mobile-web-app-title" content={siteName} />
            
            {/* Additional Open Graph Tags */}
            <meta property="og:image:alt" content={description} />
            {publishedTime && <meta property="article:published_time" content={publishedTime} />}
            {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
            
            {/* Twitter Additional Tags */}
            <meta name="twitter:image:alt" content={description} />
            <meta name="twitter:creator" content="@dimensionsdzine" />
            <meta name="twitter:site" content="@dimensionsdzine" />

            {/* Schema.org JSON-LD - Main Schema */}
            {schema && (
                <script type="application/ld+json">
                    {JSON.stringify(schema)}
                </script>
            )}

            {/* Breadcrumb Schema */}
            {breadcrumbSchema && (
                <script type="application/ld+json">
                    {JSON.stringify(breadcrumbSchema)}
                </script>
            )}

            {/* FAQ Schema */}
            {faqSchema && (
                <script type="application/ld+json">
                    {JSON.stringify(faqSchema)}
                </script>
            )}

            {/* Review Schema */}
            {reviewSchema && (
                <script type="application/ld+json">
                    {JSON.stringify(reviewSchema)}
                </script>
            )}

            {/* ItemList Schema */}
            {itemListSchema && (
                <script type="application/ld+json">
                    {JSON.stringify(itemListSchema)}
                </script>
            )}

            {/* HowTo Schema */}
            {howToSchema && (
                <script type="application/ld+json">
                    {JSON.stringify(howToSchema)}
                </script>
            )}

            {/* Article Schema */}
            {articleSchema && (
                <script type="application/ld+json">
                    {JSON.stringify(articleSchema)}
                </script>
            )}

            {/* Video Schema */}
            {videoSchema && (
                <script type="application/ld+json">
                    {JSON.stringify(videoSchema)}
                </script>
            )}

            {/* Multiple Additional Schemas */}
            {schemas && schemas.length > 0 && schemas.map((additionalSchema, index) => (
                <script key={`schema-${index}`} type="application/ld+json">
                    {JSON.stringify(additionalSchema)}
                </script>
            ))}
        </Helmet>
    );
};

export default SEO;
