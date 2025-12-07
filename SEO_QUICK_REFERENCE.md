# SEO Quick Reference Card

## 🚀 Adding SEO to a New Page (Copy & Paste)

### Step 1: Import SEO Component
```jsx
import SEO from '../components/SEO';
import { seoData } from '../config/seoData';
```

### Step 2: Add SEO Component to Return Statement
```jsx
const YourPage = () => {
  return (
    <>
      <SEO
        title="Your Page Title (50-60 chars)"
        description="Your compelling description that makes people want to click (150-160 chars)"
        keywords="keyword1, keyword2, keyword3, location-based keywords"
        canonical="/your-page-url"
        ogImage="/images/your-og-image.webp"
        schema={{
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          name: 'Your Page Name',
          description: 'Your page description',
        }}
      />
      <div className="page-wrapper">
        {/* Your page content */}
      </div>
    </>
  );
};
```

## 📝 SEO Component Props

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `title` | string | Yes | Page title (50-60 chars) |
| `description` | string | Yes | Meta description (150-160 chars) |
| `keywords` | string | No | Comma-separated keywords |
| `canonical` | string | No | Canonical URL path |
| `ogType` | string | No | Open Graph type (default: 'website') |
| `ogImage` | string | No | Social sharing image (1200x630px) |
| `twitterCard` | string | No | Twitter card type (default: 'summary_large_image') |
| `schema` | object | No | JSON-LD structured data |
| `noindex` | boolean | No | Prevent indexing (default: false) |

## 🎯 Title Tag Best Practices

✅ **Good Examples:**
- "Budget Interior Design Services in Hyderabad | Dimensions Dzine"
- "Modular Kitchen Design - Affordable & Premium Quality"
- "Home Renovation Services Hyderabad - Free Consultation"

❌ **Bad Examples:**
- "Home" (too short, not descriptive)
- "Welcome to Dimensions Dzine Interior Design and Construction Services in Hyderabad Telangana India" (too long)
- "Page 1" (not descriptive)

**Rules:**
- Keep under 60 characters
- Include primary keyword
- Add location if relevant
- Make it compelling
- Include brand name

## 📄 Meta Description Best Practices

✅ **Good Examples:**
- "Transform your space with Dimensions Dzine - Hyderabad's trusted interior design experts. Premium quality, affordable prices, timely delivery. Free consultation!"
- "Get instant cost estimates for your interior design project. Modular kitchen, home interiors, wardrobes & more. Budget-friendly solutions in Hyderabad."

❌ **Bad Examples:**
- "Interior design" (too short)
- "We are the best interior design company..." (not compelling)
- A 300-character paragraph (too long, gets cut off)

**Rules:**
- Keep 150-160 characters
- Include call-to-action
- Mention key benefits
- Use active voice
- Include location

## 🔑 Keyword Selection

### Primary Keywords (1-2 per page)
- Main service or topic
- Example: "interior designers in Hyderabad"

### Secondary Keywords (2-3 per page)
- Related services
- Example: "modular kitchen design", "home renovation"

### Long-tail Keywords (3-5 per page)
- Specific phrases
- Example: "affordable interior design Hyderabad", "budget modular kitchen"

### Location Keywords (Always include)
- City: Hyderabad
- State: Telangana
- Region: "near me", "in Hyderabad"

## 🖼️ Open Graph Image Guidelines

**Dimensions:** 1200 x 630 pixels
**Format:** JPG or PNG
**File Size:** Under 1MB
**Content:**
- Include your logo
- Show your work/service
- Add text overlay with page title
- Use brand colors
- Ensure text is readable

**Tools to Create:**
- Canva (canva.com)
- Figma (figma.com)
- Adobe Express (adobe.com/express)

## 📊 Schema.org Types

### Common Schema Types:

#### LocalBusiness (Home Page)
```javascript
{
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Dimensions Dzine',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Your Address',
    addressLocality: 'Hyderabad',
    addressRegion: 'Telangana',
    postalCode: '500001',
    addressCountry: 'IN',
  },
}
```

#### Service (Service Pages)
```javascript
{
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Interior Design',
  provider: {
    '@type': 'Organization',
    name: 'Dimensions Dzine',
  },
}
```

#### WebPage (Generic Pages)
```javascript
{
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Page Name',
  description: 'Page description',
}
```

#### Article (Blog Posts)
```javascript
{
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Article Title',
  author: {
    '@type': 'Organization',
    name: 'Dimensions Dzine',
  },
  datePublished: '2025-01-01',
}
```

## ✅ SEO Checklist for New Pages

- [ ] Title tag added (50-60 chars)
- [ ] Meta description added (150-160 chars)
- [ ] Keywords included (location-based)
- [ ] Canonical URL set
- [ ] Open Graph image created (1200x630px)
- [ ] Schema markup added
- [ ] Tested with Rich Results Test
- [ ] Tested with Facebook Debugger
- [ ] Mobile-friendly verified
- [ ] Page speed optimized
- [ ] Added to sitemap.xml
- [ ] Internal links added
- [ ] Alt text on images
- [ ] H1 tag present and unique

## 🧪 Quick Testing

### 1. View Page Source
Right-click → View Page Source
Look for:
```html
<title>Your Title</title>
<meta name="description" content="Your description">
<meta property="og:image" content="...">
<script type="application/ld+json">...</script>
```

### 2. Test Tools
- **Rich Results:** https://search.google.com/test/rich-results
- **Facebook:** https://developers.facebook.com/tools/debug/
- **Twitter:** https://cards-dev.twitter.com/validator

### 3. Browser Extensions
- **SEO Meta in 1 Click** (Chrome)
- **SEOquake** (Chrome/Firefox)
- **MozBar** (Chrome)

## 💡 Pro Tips

1. **Update Regularly:** Refresh metadata every 6 months
2. **A/B Test:** Try different titles/descriptions
3. **Monitor Performance:** Use Google Search Console
4. **Analyze Competitors:** See what they rank for
5. **Use Numbers:** "10 Tips" performs better than "Tips"
6. **Add Dates:** "2025 Guide" shows freshness
7. **Include CTAs:** "Get Free Quote", "Learn More"
8. **Avoid Keyword Stuffing:** Write naturally
9. **Match Intent:** Understand what users want
10. **Mobile First:** Most traffic is mobile

## 🚨 Common Mistakes to Avoid

❌ Duplicate titles across pages
❌ Missing meta descriptions
❌ Keyword stuffing
❌ Broken canonical URLs
❌ Missing Open Graph images
❌ Invalid schema markup
❌ Too-long titles (>60 chars)
❌ Too-short descriptions (<120 chars)
❌ Generic descriptions ("Welcome to our site")
❌ Not testing on mobile

## 📞 Need Help?

1. Check `SEO_IMPLEMENTATION_GUIDE.md` for detailed examples
2. Review `src/config/seoData.js` for existing configurations
3. Copy from similar pages and modify
4. Test before deploying

---

**Quick Copy Template:**

```jsx
import SEO from '../components/SEO';

const NewPage = () => {
  return (
    <>
      <SEO
        title="Page Title Here"
        description="Compelling description that makes people want to click and visit your page."
        keywords="keyword1, keyword2, Hyderabad, Telangana"
        canonical="/new-page"
        ogImage="/images/new-page-og.webp"
      />
      {/* Your content */}
    </>
  );
};
```

**Save this file for quick reference when creating new pages!**
