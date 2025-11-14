# Cap't Loui Seafood Restaurant Website

## Overview

This is a **static Next.js website** for Cap't Loui, a seafood restaurant chain with 21 locations across 9 states. The site features an interactive location finder with Google Maps integration, individual pages for each restaurant location, a comprehensive menu system, and modern web features including cookie consent management and conditional analytics loading.

## Website Stack

- **Next.js 15**: React framework with App Router and Turbopack
- **Tailwind CSS 4**: Utility-first CSS framework with typography plugin
- **TypeScript 5**: Type-safe JavaScript development
- **React 19**: Latest React with modern features
- **Google Maps**: Interactive maps for location finder with `@react-google-maps/api`
- **React Markdown**: Markdown rendering for legal pages
- **Cookie Management**: Custom cookie utilities for consent and analytics

## Key Features

### 🌐 **Website Site Features**

- **Interactive Location Finder**: Google Maps integration with search and filtering
- **Individual Location Pages**: Detailed pages for each restaurant location
- **Comprehensive Menu System**: Category-based menu navigation with interactive elements
- **Responsive Design**: Mobile-first design with Tailwind CSS
- **SEO Optimized**: Meta tags, structured data, and semantic HTML

### 🍪 **Privacy & Compliance Features**

- **Cookie Consent Banner**: GDPR-compliant cookie consent management
- **Conditional Analytics**: Google Analytics and Facebook Meta Pixel only load after consent
- **Legal Pages**: Privacy Policy, Terms of Use, and Accessibility Statement
- **Data Protection**: Automatic analytics data clearing when cookies are declined

### 🎯 **Enhanced User Experience**

- **Reservation System**: OpenTable integration for eligible locations
- **Interactive Elements**: Hover effects, smooth transitions, and responsive interactions
- **Accessibility**: WCAG-compliant design with proper semantic markup
- **Performance**: Optimized images, lazy loading, and efficient rendering

### 🗺️ **Google Maps Integration**

- **Interactive Store Maps**: Embedded Google Maps for each store location
- **21 Working Embed URLs**: All operational stores have functional map embeds
- **Mobile-Responsive Maps**: Optimized display for all device sizes
- **Direct Location Links**: Clickable maps that open in Google Maps app

### 📧 **Newsletter Integration**

- **General Newsletter**: Mailchimp integration for general website signups
- **Location-Specific Forms**: Dedicated newsletter forms for coming soon locations
- **Edison Newsletter**: Specialized signup for Edison, NJ location
- **Los Angeles Newsletter**: Dedicated signup for Los Angeles, CA location
- **Responsive Design**: Mobile-optimized newsletter forms with proper styling

### 📱 **Mobile Optimizations**

- **Responsive Banner**: Coming soon banner text wraps properly on mobile
- **Touch-Friendly Navigation**: Optimized mobile menu and interactions
- **Mobile-First Design**: All components designed for mobile first
- **Performance**: Fast loading on mobile devices

### 📢 **Announcement Bar System**

- **Coming Soon Banner**: Top announcement bar for new location announcements
- **Mobile-Responsive Text**: Text wraps to multiple lines on mobile devices
- **Desktop Single Line**: Maintains single-line layout on larger screens
- **Call-to-Action Integration**: Includes clickable links to relevant pages
- **Brand-Consistent Styling**: Uses primary brand colors and typography

## Project Structure

```
captloui/
├── public/                    # Static assets
│   ├── images/               # Image assets organized by category
│   │   ├── menu/            # Menu category images and items
│   │   ├── home/            # Homepage images
│   │   ├── stores/          # Store location images
│   │   ├── about/           # About page images
│   │   ├── franchise/       # Franchise page images
│   │   ├── contact/         # Contact page images
│   │   └── shop/            # Shop page images
│   ├── videos/              # Video assets
│   ├── logo.png             # Main logo
│   └── logo-white.png       # White logo for dark backgrounds
├── src/
│   ├── app/                 # Next.js App Router
│   │   ├── [slug]/          # Dynamic location pages
│   │   ├── about-us/        # About Us page
│   │   ├── accessibility/   # Accessibility Statement
│   │   ├── careers/         # Careers page
│   │   ├── contact-us/      # Contact page
│   │   ├── franchise/       # Franchise opportunities
│   │   ├── locations/       # Location finder page
│   │   ├── menu/            # Menu system
│   │   ├── privacy-policy/  # Privacy Policy
│   │   ├── shop/            # Online ordering
│   │   ├── terms-of-use/    # Terms of Use
│   │   ├── globals.css      # Global styles and CSS variables
│   │   ├── layout.tsx       # Root layout with providers
│   │   └── page.tsx         # Homepage
│   ├── components/          # Reusable UI components
│   │   ├── about/           # About page components
│   │   ├── contact/         # Contact page components
│   │   ├── franchise/       # Franchise page components
│   │   ├── homes/           # Homepage sections
│   │   ├── menu/            # Menu components
│   │   ├── shop/            # Shop components
│   │   ├── ConditionalAnalytics.tsx  # Analytics loading logic
│   │   ├── CookieBanner.tsx # Cookie consent banner
│   │   ├── Footer.tsx       # Site footer with legal links
│   │   └── Header.tsx       # Site header and navigation
│   ├── types/               # TypeScript type definitions
│   │   └── store.ts         # Store and data interfaces
│   ├── utils/               # Utility functions
│   │   ├── cookies.ts       # Cookie management utilities
│   │   ├── location.ts      # Location utilities
│   │   ├── menuData.ts      # Menu data and configuration
│   │   ├── stateMap.ts      # State mapping utilities
│   │   └── storeData.ts     # Store data and configuration
│   ├── eslint.config.mjs    # ESLint configuration
│   ├── next.config.ts       # Next.js configuration
│   ├── postcss.config.mjs   # PostCSS configuration
│   ├── tailwind.config.js   # Tailwind CSS configuration
│   └── tsconfig.json        # TypeScript configuration
```

## New Features & Updates

### 🗺️ **Google Maps Embed Integration** (Latest Update)

#### **Store Detail Page Maps**

- **21 Working Embed URLs**: All operational stores now have functional Google Maps embeds
- **Direct Location Mapping**: Each embed points directly to the specific Cap't Loui location
- **Mobile-Responsive**: Maps display properly on all device sizes
- **Consistent Styling**: All embeds use standardized height and styling

#### **Embed URL Management**

```typescript
// New field in Store interface:
interface Store {
  // ... existing fields
  googleMapsEmbedUrl?: string;  // Google Maps embed URL for store detail pages
}

// Example usage in storeData:
{
  name: "Cap't Loui Stoneham",
  googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2941.8450663481467!2d-71.10466772337543!3d42.49484637118066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e374a19ef17999%3A0x8853587137e56d67!2sCap%27t%20Loui!5e0!3m2!1sen!2sus!4v1756939148490!5m2!1sen!2sus"
}
```

#### **URL Encoding Fixes**

- **Apostrophe Encoding**: Fixed `&#39;` to `%27` for proper URL encoding
- **Locale Standardization**: Changed `!2sid!` to `!2sus!` for US locale consistency
- **Special Characters**: Properly encoded all special characters in store names

### 📧 **Newsletter System Integration** (Latest Update)

#### **General Newsletter Component** (`src/components/GeneralNewsletterEmbed.tsx`)

- **Mailchimp Integration**: Direct embed of Mailchimp form HTML
- **Homepage Integration**: Added to main homepage for general signups
- **Responsive Design**: Mobile-optimized layout with proper styling
- **Brand Consistency**: Matches site design with Tailwind CSS classes

#### **Location-Specific Newsletters**

**Edison Newsletter** (`src/components/EdisonNewsletterEmbed.tsx`):

- **Dedicated Form**: Specialized signup for Edison, NJ coming soon location
- **Side-by-Side Layout**: Email input and subscribe button on same line (desktop)
- **Mobile Stacking**: Responsive design that stacks on mobile devices
- **Mailchimp Tags**: Proper tagging for location-specific analytics

**Los Angeles Newsletter** (`src/components/LANewsletterEmbed.tsx`):

- **LA-Specific Form**: Dedicated signup for Los Angeles, CA coming soon location
- **Consistent Styling**: Matches general newsletter design
- **Proper Integration**: Seamlessly integrated into store detail pages

#### **Newsletter Implementation**

```tsx
// General newsletter on homepage
<GeneralNewsletterEmbed />;

// Location-specific newsletters on store detail pages
{
  store.slug === "edison-nj" && <EdisonNewsletterEmbed />;
}
{
  store.slug === "los-angeles-ca" && <LANewsletterEmbed />;
}
```

### 📱 **Mobile Responsive Improvements** (Latest Update)

#### **Announcement Bar System** (`src/app/layout.tsx`)

- **Top-Level Banner**: Positioned between header and main content
- **Mobile Text Wrapping**: "See all coming soon locations" wraps to new line on mobile
- **Desktop Single Line**: Maintains original single-line layout on desktop
- **Responsive Classes**: Uses `block sm:inline` for proper mobile/desktop display
- **Brand Styling**: Primary background color with white text and uppercase typography

```tsx
<div className="bg-primary text-white text-center py-2">
  <div className="text-sm font-semibold uppercase tracking-wide">
    <span className="block sm:inline">
      Los Angeles and Edison, NJ Coming Soon.
    </span>{" "}
    <Link
      href="/locations"
      className="underline hover:text-white/90 transition-colors block sm:inline"
    >
      See all coming soon locations
    </Link>
  </div>
</div>
```

#### **Announcement Bar Features**

- **Global Visibility**: Appears on all pages of the website
- **Call-to-Action**: Links to locations page for more information
- **Hover Effects**: Link changes opacity on hover for better UX
- **Accessibility**: Proper contrast and readable typography
- **Easy Updates**: Simple to modify text and links in layout file

### 🏪 **Store Management Updates** (Latest Update)

#### **Coming Soon Store Features**

- **Now Hiring Section**: Coming soon stores show "Now Hiring" button linking to careers
- **Conditional Rendering**: Store details hide "Visit Our Location" and "Find Us" for coming soon stores
- **Newsletter Integration**: Coming soon stores show location-specific newsletter forms
- **Store Status**: Clear distinction between operational and coming soon locations

#### **Store Data Structure Updates**

```typescript
// Updated Store interface for coming soon stores
interface Store {
  // ... existing fields
  isComingSoon?: boolean; // Flag for coming soon stores
  openingDate?: string; // Expected opening date
  googleMapsEmbedUrl?: string; // Embed URL (only for operational stores)
}
```

### 🔒 **Cookie Consent & Privacy Management**

#### **Cookie Banner Component** (`src/components/CookieBanner.tsx`)

- **GDPR Compliant**: Accept/Decline options with clear consent text
- **Customizable Text**: Configurable consent message via props
- **Automatic Reload**: Page reloads after consent choice to apply/remove analytics
- **Responsive Design**: Mobile-optimized layout with proper spacing

#### **Cookie Utilities** (`src/utils/cookies.ts`)

```typescript
// Key functions available:
setCookie(name, value, days); // Set cookie with expiration
getCookie(name); // Retrieve cookie value
hasAcceptedCookies(); // Check if user accepted cookies
hasDeclinedCookies(); // Check if user declined cookies
areAnalyticsAllowed(); // Check if analytics can load
clearAnalyticsData(); // Clear analytics data on decline
```

#### **Conditional Analytics** (`src/components/ConditionalAnalytics.tsx`)

- **Google Analytics**: Only loads after cookie consent
- **Facebook Meta Pixel**: Integrated tracking with consent management
- **Performance Optimized**: Uses Next.js Script component with proper strategies
- **Fallback Support**: Noscript fallback for Facebook Pixel

### 📄 **Legal Pages**

#### **Privacy Policy** (`/privacy-policy`)

- **Comprehensive Coverage**: Detailed privacy information and data handling
- **Markdown Rendering**: Rich content with proper typography
- **Responsive Layout**: Mobile-friendly design with proper spacing
- **SEO Optimized**: Meta tags and structured content

#### **Terms of Use** (`/terms-of-use`)

- **Legal Framework**: Complete terms and conditions
- **User Agreement**: Clear acceptance and usage guidelines
- **Markdown Content**: Rich text with proper heading hierarchy
- **Professional Layout**: Clean, readable design

#### **Accessibility Statement** (`/accessibility`)

- **WCAG Compliance**: Commitment to accessibility standards
- **Contact Information**: Direct accessibility support contact
- **Feedback System**: Process for accessibility improvements
- **Vendor Guidelines**: Third-party accessibility requirements

### 🎯 **Reservation System**

#### **OpenTable Integration**

- **Location-Specific**: Only shows for locations with OpenTable links
- **Smart Placement**: Positioned under store address information
- **Visual Design**: Primary-colored button with "R" icon
- **Hover Effects**: Consistent with other primary buttons (white background, primary border)

#### **Store Data Updates**

```typescript
// New field in Store interface:
interface Store {
  // ... existing fields
  openTableUrl?: string;  // Optional OpenTable reservation link
}

// Example usage in storeData:
{
  name: "Cap't Loui Fort Lee",
  openTableUrl: "https://www.opentable.com/r/capt-loui-fort-lee?ref=1068"
}
```

### 🎨 **Enhanced Styling & UI**

#### **CSS Variables & Theming**

```css
:root {
  --primary-color: #a30f0f; /* Cap't Loui brand red */
}

/* Primary color usage throughout the site */
.bg-primary {
  background-color: var(--primary-color);
}
.text-primary {
  color: var(--primary-color);
}
.border-primary {
  border-color: var(--primary-color);
}
```

#### **Markdown Content Styling**

```css
.markdown-content {
  /* Typography improvements */
  line-height: 1.6;

  /* Heading hierarchy */
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-top: 1.5em;
    margin-bottom: 0.5em;
    font-weight: 600;
  }

  /* Interactive elements */
  blockquote {
    border-left: 4px solid var(--color-primary);
    padding-left: 1em;
    font-style: italic;
  }
}
```

#### **Button Hover States**

```css
/* Primary button hover pattern */
.hover\:bg-white:hover:bg-white
.hover\:border-primary:hover:border-primary
.hover\:text-primary:hover:text-primary
.transition-all.duration-200
```

## Current Restaurant Locations (21 Locations)

**Alabama (1 location)**

- Madison

**California (1 location)**

- Cupertino

**Georgia (2 locations)**

- Decatur
- Duluth

**Massachusetts (3 locations)**

- Auburn
- Braintree
- Stoneham

**Nevada (2 locations)**

- Henderson
- Summerlin

**New Jersey (3 locations)**

- Fort Lee
- Montclair
- Springfield

**New York (7 locations)**

- Brooklyn
- Broadway
- Harlem
- 32nd Street
- Ozone Park
- Sunnyside
- Whitestone

**Rhode Island (1 location)**

- Providence

**Texas (1 location)**

- Carrollton

## Coming Soon Locations (2 Locations)

**New Jersey (1 location)**

- Edison

**California (1 location)**

- Los Angeles

## Promo Management System

### **Overview**

The promo system allows you to display promotional images on store detail pages. Promos can be set for individual stores or applied nationwide to all stores. The promo section appears below the "Nearby Attractions" section on store pages.

**Data File**: `src/data/promoData.json`

**Component**: `src/components/promo/PromoSection.tsx`

**Utilities**: `src/utils/promoUtils.ts`

### **Promo Data Structure**

```json
{
  "storePromos": {
    "store-slug": [
      {
        "id": "promo-id",
        "image": "/images/promo.webp"
      }
    ]
  },
  "nationwidePromos": [
    {
      "id": "nationwide-promo-id",
      "image": "/images/promo.webp"
    }
  ]
}
```

### **Promo Types**

1. **Empty Promotion**: Store has no promos (section is hidden)
2. **Single Promotion**: Store has one promo (displays as single image)
3. **Multiple Promotions**: Store has multiple promos (displays as carousel with navigation)
4. **Nationwide Promotion**: Applied to all stores (shown first, before store-specific promos)

### **Adding Store-Specific Promos**

**Step 1**: Open `src/data/promoData.json`

**Step 2**: Add or update the store slug in `storePromos`:

```json
{
  "storePromos": {
    "stoneham-ma": [
      {
        "id": "stoneham-promo-1",
        "image": "/images/promo.webp"
      }
    ],
    "fortlee-nj": [
      {
        "id": "fortlee-promo-1",
        "image": "/images/promo.webp"
      },
      {
        "id": "fortlee-promo-2",
        "image": "/images/promo.webp"
      }
    ]
  }
}
```

**Step 3**: Place promo images in `/public/images/` directory

**Step 4**: Use the image path in the promo data (e.g., `/images/promo.webp`)

### **Adding Nationwide Promos**

Nationwide promos appear on all store pages before store-specific promos.

**Step 1**: Open `src/data/promoData.json`

**Step 2**: Add promos to the `nationwidePromos` array:

```json
{
  "nationwidePromos": [
    {
      "id": "nationwide-1",
      "image": "/images/promo.webp"
    },
    {
      "id": "nationwide-2",
      "image": "/images/promo-2.webp"
    }
  ]
}
```

### **Promo Display Behavior**

- **No Promos**: Section is hidden (returns `null`)
- **Single Promo**: Displays as a single image with title
- **Multiple Promos**: Displays as a carousel with:
  - Previous/Next navigation buttons
  - Dot indicators for each promo
  - Current promo counter (e.g., "1 / 3")
- **Nationwide + Store Promos**: Nationwide promos appear first, then store-specific promos

### **Finding Store Slugs**

Store slugs are defined in `src/utils/storeData.ts`. The slug is the `slug` field for each store:

```typescript
{
  name: "Cap't Loui Stoneham",
  slug: "stoneham-ma",  // This is the slug to use in promoData.json
  // ... other fields
}
```

### **Image Requirements**

- **Format**: WebP preferred, but PNG/JPG also supported
- **Location**: Place images in `/public/images/` directory
- **Path**: Use absolute paths starting with `/images/`
- **Size**: Images will be displayed at 400px height (responsive)
- **Aspect Ratio**: Images will fill the available space

### **Example: Complete Promo Setup**

**Step 1**: Add promo image to `/public/images/promo.webp`

**Step 2**: Update `promoData.json`:

```json
{
  "storePromos": {
    "stoneham-ma": [
      {
        "id": "stoneham-promo-1",
        "image": "/images/promo.webp"
      }
    ]
  },
  "nationwidePromos": [
    {
      "id": "nationwide-1",
      "image": "/images/promo.webp"
    }
  ]
}
```

**Result**: 
- Stoneham store will show 2 promos (nationwide first, then store-specific)
- All other stores will show 1 promo (nationwide only)

### **Removing Promos**

**To remove store-specific promos**:
- Set the store slug array to empty: `"store-slug": []`
- Or remove the store slug entry entirely

**To remove nationwide promos**:
- Set `nationwidePromos` to empty array: `"nationwidePromos": []`

**To hide promo section for a store**:
- Ensure the store has no store-specific promos AND no nationwide promos exist

### **Promo Section Layout**

The promo section is positioned:
- **Location**: Below "Nearby Attractions" section
- **Layout**: Left side of 2-column grid (with video on right)
- **Height**: Automatically matches the height of the video section
- **Responsive**: Full width on mobile, half width on desktop

### **Troubleshooting**

**Promo not showing**:
- Verify the store slug matches exactly (case-sensitive)
- Check that the image path is correct and file exists
- Ensure JSON syntax is valid (no trailing commas)
- Check browser console for errors

**Multiple promos not showing carousel**:
- Verify you have more than one promo in the array
- Check that the carousel navigation buttons are visible
- Ensure the component is rendering (check if section is hidden)

**Nationwide promos not appearing**:
- Verify `nationwidePromos` array is not empty
- Check that the promo data is being loaded correctly
- Ensure the store page is using the `PromoSection` component

**Image not loading**:
- Verify image path starts with `/images/`
- Check that image file exists in `/public/images/` directory
- Ensure image format is supported (WebP, PNG, JPG)
- Check Next.js image configuration for external domains (if using external URLs)

## Location Management System

### **Store Data Structure** (`src/utils/storeData.ts`)

Each location requires these fields:

```tsx
{
  id: number,
  name: string, // Format: "Cap't Loui [City]"
  email: string, // Store email address
  address: string, // Full street address
  phone: string, // Format: "(xxx) xxx-xxxx"
  hours: string, // Use \n for line breaks
  state: string, // Two-letter abbreviation
  zipcode: string, // 5-digit zip code
  coordinates: [number, number], // [longitude, latitude] for Google Maps
  slug: string, // URL identifier (lowercase, hyphens)
  viewStoreUrl: string, // Internal page URL
  orderUrl: string, // External ordering platform link
  nearbyAttractions: string, // Optional, pipe-separated
  storeImages?: string[], // Array of store photo paths
  tagline: string, // Location-specific messaging
  menuItems?: { title: string, image: string }[], // Menu items for this location
  menuStyle?: "A" | "B", // Menu display style
  metaDescription: string, // SEO description
  metaTitle: string, // SEO title
  bannerVideo: string, // Background video URL
  googleMapsUrl: string, // Direct Google Maps link
  googleMapsEmbedUrl?: string, // Google Maps embed URL for store detail pages
  openTableUrl?: string, // Optional OpenTable reservation link
  isComingSoon?: boolean, // Flag for coming soon stores
  openingDate?: string, // Expected opening date for coming soon stores
  youtubeUrl?: string // YouTube video URL for store
}
```

### **Updating New Features**

#### **📢 Updating the Announcement Bar**

**Location**: `src/app/layout.tsx`

**To change the announcement text**:

```tsx
// Update the text content
<span className="block sm:inline">Your New Announcement Text Here.</span>
```

**To change the call-to-action link**:

```tsx
// Update the href and text
<Link
  href="/your-new-page" // Change destination
  className="underline hover:text-white/90 transition-colors block sm:inline"
>
  Your New Link Text
</Link>
```

**To disable the announcement bar**:

```tsx
// Comment out or remove the entire div
{
  /* 
<div className="bg-primary text-white text-center py-2">
  // ... announcement content
</div>
*/
}
```

#### **📧 Updating Newsletter Forms**

**General Newsletter** (`src/components/GeneralNewsletterEmbed.tsx`):

**To update Mailchimp action URL**:

```tsx
// Change the form action URL
<form
  action="https://your-new-mailchimp-url"
  method="post"
  // ... other attributes
>
```

**To update form styling**:

```tsx
// Modify Tailwind classes
<input
  className="required email text-black flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-sm sm:text-base"
  // ... other attributes
/>
```

**Location-Specific Newsletters**:

**Edison Newsletter** (`src/components/EdisonNewsletterEmbed.tsx`):

- Update action URL for Edison-specific Mailchimp list
- Modify tags for location-specific analytics
- Adjust form layout and styling

**Los Angeles Newsletter** (`src/components/LANewsletterEmbed.tsx`):

- Update action URL for LA-specific Mailchimp list
- Modify tags for location-specific analytics
- Ensure consistent styling with other forms

#### **🗺️ Updating Google Maps Embeds**

**Adding embed URL to existing store**:

```typescript
// In src/utils/storeData.ts
{
  name: "Cap't Loui Store Name",
  // ... existing fields
  googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d...", // Add this line
}
```

**Getting new embed URL**:

1. Go to Google Maps
2. Search for your store location
3. Click "Share" → "Embed a map"
4. Copy the iframe src URL
5. Fix encoding issues:
   - Change `&#39;` to `%27` (apostrophe)
   - Change `!2sid!` to `!2sus!` (US locale)

**Updating existing embed URL**:

```typescript
// Replace the entire googleMapsEmbedUrl value
googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d...",
```

#### **🏪 Updating Coming Soon Store Features**

**Adding "Now Hiring" section to coming soon store**:

```typescript
// In storeData.ts, ensure coming soon stores have:
{
  name: "Cap't Loui Coming Soon Store",
  isComingSoon: true,
  openingDate: "Coming Soon", // or specific date
  // ... other fields
}
```

**Updating coming soon store display**:

- The "Now Hiring" button automatically appears for `isComingSoon: true` stores
- Newsletter forms automatically show for Edison and Los Angeles stores
- "Visit Our Location" and "Find Us" sections are automatically hidden

#### **📱 Updating Mobile Responsive Features**

**Modifying announcement bar mobile behavior**:

```tsx
// In src/app/layout.tsx, adjust responsive classes
<span className="block sm:inline md:inline">
  {" "}
  // Add md:inline for tablet Your Text Here
</span>
```

**Changing mobile breakpoints**:

```tsx
// Use different Tailwind breakpoints
<span className="block lg:inline">
  {" "}
  // Changes at large screens instead of small Your Text Here
</span>
```

**Adding new mobile-specific styles**:

```tsx
// Add mobile-specific classes
<div className="text-sm font-semibold uppercase tracking-wide px-4 sm:px-0">
  // px-4 adds padding on mobile, removed on larger screens
</div>
```

**Testing mobile responsiveness**:

1. Use browser developer tools (F12)
2. Toggle device toolbar (Ctrl+Shift+M)
3. Test different screen sizes
4. Verify text wrapping behavior
5. Check touch interactions

#### **🔧 Troubleshooting New Features**

**Announcement Bar Issues**:

- **Text not wrapping on mobile**: Check for `block sm:inline` classes
- **Link not working**: Verify href path exists and is correct
- **Styling issues**: Ensure Tailwind classes are properly applied
- **Not appearing**: Check if the div is commented out or removed

**Newsletter Form Issues**:

- **Form not submitting**: Verify Mailchimp action URL is correct
- **Styling broken**: Check Tailwind classes and ensure proper imports
- **Not appearing on page**: Verify component is imported and used correctly
- **Mobile layout issues**: Check responsive classes and flexbox properties

**Google Maps Embed Issues**:

- **Map not loading**: Check if embed URL is properly encoded
- **Encoding errors**: Fix `&#39;` to `%27` and `!2sid!` to `!2sus!`
- **Wrong location**: Verify embed URL points to correct store
- **Not responsive**: Ensure iframe has proper width/height attributes

**YouTube Video Issues**:

- **Thumbnail not showing**: Uses `hqdefault.jpg` which is more reliable than `maxresdefault.jpg`
- **Video not playing**: Check if YouTube URL is valid and video is public
- **Modal not opening**: Verify video ID extraction is working correctly
- **Poor thumbnail quality**: `hqdefault.jpg` provides 480x360 resolution (reliable)

**Google Tag Manager Issues**:

- **GTM not loading**: Check if GTM ID is correct (GTM-P7FPWVKN)
- **Script not executing**: Verify script is in `<head>` section
- **Noscript not working**: Ensure iframe is in `<body>` section
- **Data not tracking**: Check GTM container configuration and triggers

**Coming Soon Store Issues**:

- **"Now Hiring" not showing**: Ensure `isComingSoon: true` is set
- **Newsletter not appearing**: Check store slug matches conditional logic
- **Wrong sections hidden**: Verify `isComingSoon` flag is properly set
- **Store details showing**: Check conditional rendering logic

**Mobile Responsive Issues**:

- **Text not wrapping**: Verify `block sm:inline` classes are applied
- **Layout breaking**: Check for conflicting CSS or missing responsive classes
- **Touch issues**: Ensure proper touch targets and spacing
- **Performance**: Optimize images and reduce unnecessary animations

### **Adding New Restaurant Locations**

**Step 1**: Add location data to `src/utils/storeData.ts`

```tsx
{
  id: 22, // Next available ID
  name: "Cap't Loui New City",
  email: "newcity@captloui.com",
  address: "123 Main St, New City, ST 12345",
  phone: "(555) 123-4567",
  hours: "Mon-Thu: 11:00am - 10:00pm\nFri-Sat: 11:00am - 11:00pm\nSun: 12:00pm - 9:00pm",
  state: "ST", // Two-letter state code
  zipcode: "12345",
  coordinates: [-longitude, latitude], // Get from Google Maps
  slug: "new-city", // URL-friendly identifier
  viewStoreUrl: "/new-city",
  orderUrl: "https://ordering-platform.com/new-city",
  nearbyAttractions: "Mall | Park | Theater",
  storeImages: ["/images/stores/new-city/store-1.webp", "/images/stores/new-city/store-2.webp"],
  tagline: "Bringing Cajun flavor to New City!",
  menuItems: [{ title: "Menu 1", image: "menu-image-url" }],
  menuStyle: "A",
  metaDescription: "Cap't Loui New City - Authentic Cajun seafood in New City",
  metaTitle: "Cap't Loui New City | Cajun Seafood Restaurant",
  bannerVideo: "video-url-or-empty-string",
  googleMapsUrl: "https://maps.app.goo.gl/your-map-link"
}
```

**Step 2**: Add store images to `/public/images/stores/new-city/`

**Step 3**: New page automatically available at `/new-city`

**Step 4**: Location appears in search results and map markers

## Main Location Finder (`src/app/locations/page.tsx`)

### **Google Maps Integration**

The location finder uses **Google Maps JavaScript API** with the following configuration:

**Required Environment Variables**:

```bash
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_google_maps_api_key
```

**Map Configuration**:

```tsx
const mapOptions = {
  disableDefaultUI: false,
  zoomControl: true,
  mapTypeControl: false,
  scaleControl: true,
  streetViewControl: false,
  rotateControl: false,
  fullscreenControl: true,
};
```

**Custom Markers**:

- **Image**: `/images/marker.png` (32x52px)
- **Anchor point**: (16, 42) for proper positioning
- **Fallback**: Default Google Maps markers if custom image fails to load

### **Search Functionality**

**State Filter**:

- Dropdown with all available states
- Filters stores by state abbreviation
- Updates map view to show filtered locations

**Search Input**:

- **Zip Code Search**: 5-digit zip codes
  - Exact match: Shows single store if found
  - State match: Shows all stores in the same state as zip code
- **State Search**: Supports state names or abbreviations
  - Uses `stateMap` utility for name-to-abbreviation conversion

**Search Implementation**:

```tsx
const handleSearch = useCallback(async () => {
  const query = searchQuery.trim().toUpperCase();

  if (/^\d{5}$/.test(query)) {
    // 5-digit zip code search
    const exactMatch = storeData.find((store) => store.zipcode === query);
    if (exactMatch) {
      filtered = [exactMatch];
    } else {
      // Find stores in same state as zip code
      const stateAbbr = await getStateFromZip(query);
      if (stateAbbr) {
        filtered = storeData.filter((store) => store.state === stateAbbr);
      }
    }
  } else {
    // State name/abbreviation search
    const stateAbbr = stateMap[query] || query;
    filtered = storeData.filter((store) => store.state === stateAbbr);
  }
}, [searchQuery, updateMapView]);
```

### **Responsive Design**

**Mobile Optimizations**:

- **Map height**: 400px on mobile, 500px on desktop
- **Zoom levels**: Lower zoom on mobile (4 vs 5 default)
- **Touch-friendly**: Larger click targets for store selection
- **Layout**: Store list appears above map on mobile

**Desktop Features**:

- **Store list sidebar**: Left column with scrollable store list
- **Map view**: Right column with interactive Google Maps
- **Hover effects**: Store cards highlight on hover

### **Map Behavior**

**Dynamic Map Updates**:

- **All stores**: Centers on US (41.4925, -99.9018) with zoom 4-5
- **Single store**: Centers on store location with zoom 10-12
- **Multiple stores**: Centers on average coordinates with zoom 6-8
- **State filter**: Adjusts view to show all stores in selected state

**Interactive Features**:

- **Marker clicks**: Open info windows with store details
- **Store list clicks**: Update selected store and map focus
- **Info windows**: Show store info with "View Store" and "Order Now" buttons

### **Store Information Display**

**Store List Items**:

```tsx
// Each store shows:
- Store name (clickable)
- Full address with MapPin icon
- Phone number with Phone icon
- Operating hours with Clock icon
- Action buttons: "View Store" and "Order Now"
```

**Info Windows**:

```tsx
// Popup on map marker click shows:
- Store name
- Address
- Phone number
- Operating hours
- Action buttons (smaller size for popup)
```

### **Utility Functions**

**Location Services** (`src/utils/location.ts`):

```tsx
getStateFromZip(zipcode: string): Promise<string>
// Converts zip code to state abbreviation
```

**State Mapping** (`src/utils/stateMap.ts`):

```tsx
// Maps full state names to abbreviations
const stateMap = {
  TEXAS: "TX",
  CALIFORNIA: "CA",
  "NEW YORK": "NY",
  // ... etc
};
```

## Individual Location Pages

### **Dynamic Location Pages** (`src/app/[slug]/page.tsx`)

Each location has its own page with URL format: `/[slug]`

**Components include**:

- **Hero video section** with background video
- **Store services** (dine-in, catering, takeout, family seating, delivery, parking)
- **Store information** (address, phone, hours)
- **Google Maps embed** for location visualization
- **Store image and nearby attractions**
- **Action buttons** (Order Now, Get Directions, Make Reservation if available)
- **Newsletter signup** for coming soon locations

**Services displayed**:

```tsx
const features = [
  { icon: "✓", label: "DINE-IN" },
  { icon: "✓", label: "CATERING" },
  { icon: "✓", label: "TAKEOUT" },
  { icon: "✓", label: "FAMILY SEATING" },
  { icon: "✓", label: "DELIVERY" },
  { icon: "✓", label: "PARKING AVAILABLE" },
];
```

**Hero video**: Uses `bannerVideo` field from store data, or falls back to default

**Reservation Button**: Only shows when `openTableUrl` is present in store data

## Menu Management System

### **Menu Data Structure** (`src/utils/menuData.ts`)

The menu system is organized by categories with each category having its own page at `/menu/[category]`.

#### **Menu Categories**

```typescript
const MENU_CATEGORIES = [
  { key: "the-boiler", label: "THE BOILER" },
  { key: "soup", label: "SOUP" },
  { key: "sandwiches", label: "SANDWICHES" },
  { key: "sides", label: "SIDES" },
  { key: "the-fryer", label: "THE FRYER" },
  { key: "lunch-special", label: "LUNCH SPECIAL" },
  { key: "kids", label: "FOR KIDS" },
  { key: "drinks", label: "DRINKS" },
  { key: "dessert", label: "DESSERT" },
];
```

#### **Menu Item Structure**

Each menu category follows this data structure:

```typescript
{
  title: string,              // Display name
  displayName: string,        // Alternative display name
  description: string,        // Category description
  image: string,             // Hero image path
  hasSpiceLevel: boolean,    // Show spice level selector
  hasSauce: boolean,         // Show sauce options
  items: Array<{            // Main menu items
    name: string,
    image: string
  }>,
  sides: Array<{            // Side items (only for "the-boiler")
    name: string,
    image: string
  }>
}
```

### **Special Features**

#### **The Boiler Category**

The signature "THE BOILER" category includes special interactive features:

- **Step-by-step ordering process**:
  1. STEP 1: Pick your protein
  2. STEP 2: Sauce it up
  3. STEP 3: Choose spice level
- **Sauce Options**: CAP'T LOUI and LEMON PEPPER
- **Spice Levels**: MILD, MED, HOT, X-HOT, 2X-HOT, INFERNO
- **Sides**: Additional side items displayed separately

#### **Spice Level System**

```typescript
const spiceLevels = ["MILD", "MED", "HOT", "X-HOT", "2X-HOT", "INFERNO"];
```

Each spice level has a corresponding image: `/images/menu/spicylevel1.jpg` through `/images/menu/spicylevel6.jpg`

#### **Sauce Options**

```typescript
const sauceOptions = [
  { name: "CAP'T LOUI", image: "/images/menu/sauce.webp" },
  { name: "LEMON PEPPER", image: "/images/menu/sauce.webp" },
];
```

### **Adding New Menu Categories**

**Step 1**: Add category to `MENU_CATEGORIES` in `src/utils/menuData.ts`

```typescript
{ key: "new-category", label: "NEW CATEGORY" }
```

**Step 2**: Add category data to `MENU_DATA`

```typescript
"new-category": {
  title: "NEW CATEGORY",
  displayName: "NEW CATEGORY",
  description: "Description of the new category",
  image: "/images/menu/new-category.jpg",
  hasSpiceLevel: false,
  hasSauce: false,
  items: [
    { name: "NEW ITEM 1", image: "/images/menu/item1.jpg" },
    { name: "NEW ITEM 2", image: "/images/menu/item2.jpg" },
  ],
  sides: [],
}
```

**Step 3**: Add category hero image to `/public/images/menu/`

### **Adding Menu Items**

To add items to existing categories, update the `items` array:

```typescript
items: [
  { name: "EXISTING ITEM", image: "/images/menu/existing.jpg" },
  { name: "NEW ITEM NAME", image: "/images/menu/new-item.jpg" }, // Add this line
];
```

### **Adding Menu Images**

#### **Image Organization**

```
public/images/menu/
├── boiler-bag.webp          # The Boiler hero image
├── sauce.webp               # Sauce option image
├── drinks.webp              # Drinks hero image
├── dessert.webp             # Dessert hero image
├── for-kids.jpg             # Kids menu hero image
├── lobster.png              # Generic item image
├── spicylevel1.jpg          # MILD spice level
├── spicylevel2.jpg          # MED spice level
├── spicylevel3.jpg          # HOT spice level
├── spicylevel4.jpg          # X-HOT spice level
├── spicylevel5.jpg          # 2X-HOT spice level
└── spicylevel6.jpg          # INFERNO spice level
```

#### **Image Requirements**

- **Hero images**: 300x300px recommended, square aspect ratio
- **Menu items**: 150-200px recommended, square aspect ratio
- **Spice levels**: 96x96px, circular crop recommended
- **Sauce options**: 200x200px, product shot style
- **Map markers**: 32x52px for custom Google Maps markers
- **Formats**: WebP preferred, PNG/JPG acceptable

#### **Adding New Images**

1. **Place image files** in `/public/images/menu/`
2. **Update menu data** with correct image paths
3. **Use relative paths** starting with `/images/menu/`

Example:

```typescript
// Add new item with custom image
{ name: "CAJUN SHRIMP", image: "/images/menu/cajun-shrimp.webp" }

// Update hero image for category
image: "/images/menu/new-hero-image.jpg"
```

### **Menu Page Components**

#### **ItemCarousel Component** (`src/components/menu/ItemCarousel.tsx`)

- Displays menu items in a responsive carousel
- Used for both main items and sides
- Handles mobile and desktop layouts

#### **SpiceLevelCarousel Component** (`src/components/menu/SpiceLevelCarousel.tsx`)

- Mobile-specific carousel for spice level selection
- Desktop shows all spice levels in a grid

### **Menu Navigation**

The menu uses a **sidebar navigation** on desktop and **mobile-friendly** navigation:

- **URL structure**: `/menu/[category]`
- **Default category**: "the-boiler" (redirects if invalid category)
- **Sticky sidebar**: Shows all categories with active state
- **Mobile responsive**: Collapsible menu for smaller screens

### **Updating Menu Content**

#### **Change Category Description**

```typescript
// In MENU_DATA
description: "New description for this category";
```

#### **Add Special Features**

```typescript
// Enable sauce selection
hasSauce: true;

// Enable spice level selection
hasSpiceLevel: true;
```

#### **Update Sauce Options**

```typescript
const sauceOptions = [
  { name: "CAP'T LOUI", image: "/images/menu/sauce1.webp" },
  { name: "LEMON PEPPER", image: "/images/menu/sauce2.webp" },
  { name: "NEW SAUCE", image: "/images/menu/new-sauce.webp" }, // Add new sauce
];
```

#### **Modify Spice Levels**

```typescript
const spiceLevels = [
  "MILD",
  "MED",
  "HOT",
  "X-HOT",
  "2X-HOT",
  "INFERNO",
  "NEW-LEVEL", // Add new level
];
```

## Nutrition & Allergen Data Management

### **Overview**

The nutrition and allergen information system provides comprehensive nutritional facts and allergen data for all menu items. This data is displayed on the `/nutrition` page with two tabs: **Nutrition Information** and **Allergen Information**.

**Data Files**:
- **Nutrition Data**: `src/data/nutritionData.json`
- **Allergen Data**: `src/data/allergenData.json`

**Utilities**: `src/utils/nutritionUtils.ts` - Functions to read and process nutrition/allergen data

### **Data Structure**

Both nutrition and allergen data files follow the same category-based structure:

```json
{
  "categories": {
    "category-key": [
      {
        "id": "item-id",
        "name": "Item Name",
        "image": "/images/menu/item-image.webp",
        // Nutrition-specific fields
        "nutrition": {
          "calories": 0,
          "fat": 0,
          "saturatedFat": 0,
          "transFat": 0,
          "cholesterol": 0,
          "sodium": 0,
          "carbohydrates": 0,
          "fiber": 0,
          "sugars": 0,
          "protein": 0
        },
        // Allergen-specific fields
        "allergens": {
          "shellfish": false,
          "milk": false,
          "egg": false,
          "soybean": false,
          "wheat": false,
          "sesame": false,
          "treeNuts": false,
          "peanut": false,
          "fish": false
        }
      }
    ]
  }
}
```

### **Available Categories**

The nutrition and allergen data uses the same category keys as the menu system:

- `the-boiler` - The Boiler items
- `soup` - Soup items
- `sandwiches` - Sandwich items
- `sides` - Side items
- `the-fryer` - Fried items
- `lunch-specials` - Lunch specials
- `kids` - Kids menu items
- `drinks` - Drink items
- `dessert` - Dessert items

### **Updating Nutrition Data**

**Location**: `src/data/nutritionData.json`

#### **Adding a New Nutrition Item**

1. **Find the appropriate category** in the JSON file
2. **Add a new item object** to that category's array:

```json
{
  "categories": {
    "the-boiler": [
      {
        "id": "new-item-id",
        "name": "New Item Name",
        "image": "/images/menu/new-item-image.webp",
        "nutrition": {
          "calories": 200,
          "fat": 5,
          "saturatedFat": 2,
          "transFat": 0,
          "cholesterol": 50,
          "sodium": 300,
          "carbohydrates": 25,
          "fiber": 3,
          "sugars": 5,
          "protein": 15
        }
      }
    ]
  }
}
```

#### **Updating Existing Nutrition Values**

1. **Find the item** in the appropriate category
2. **Update the nutrition values**:

```json
{
  "id": "existing-item-id",
  "name": "Existing Item",
  "nutrition": {
    "calories": 250,  // Updated value
    "fat": 8,         // Updated value
    // ... other nutrition values
  }
}
```

#### **Important Notes for Nutrition Data**

- **All values must be numbers** (integers or decimals)
- **Values are in grams** except calories (which are in kcal)
- **Item ID must match** between nutrition and allergen data files
- **Item name should match** the menu item name for consistency
- **Image path** should point to an existing menu item image

### **Updating Allergen Data**

**Location**: `src/data/allergenData.json`

#### **Adding a New Allergen Item**

1. **Find the appropriate category** in the JSON file
2. **Add a new item object** to that category's array:

```json
{
  "categories": {
    "the-boiler": [
      {
        "id": "new-item-id",
        "name": "New Item Name",
        "allergens": {
          "shellfish": true,   // true if item contains this allergen
          "milk": false,       // false if item does NOT contain this allergen
          "egg": false,
          "soybean": false,
          "wheat": false,
          "sesame": false,
          "treeNuts": false,
          "peanut": false,
          "fish": false
        }
      }
    ]
  }
}
```

#### **Updating Existing Allergen Information**

1. **Find the item** in the appropriate category
2. **Update allergen values** (use `true` if item contains allergen, `false` if it doesn't):

```json
{
  "id": "existing-item-id",
  "name": "Existing Item",
  "allergens": {
    "shellfish": true,   // Changed from false to true
    "milk": false,
    "egg": true,         // Changed from false to true
    // ... other allergens
  }
}
```

#### **Important Notes for Allergen Data**

- **All values must be booleans** (`true` or `false`)
- **Item ID must match** the corresponding item in nutrition data
- **Item name should match** the menu item name for consistency
- **All allergen fields are required** for each item

### **Adding Items to New Categories**

If you need to add nutrition/allergen data for a category that doesn't exist yet:

1. **Add the category key** to both JSON files:

```json
{
  "categories": {
    "existing-category": [...],
    "new-category": [  // Add new category
      {
        "id": "item-1",
        "name": "Item 1",
        // ... nutrition or allergen data
      }
    ]
  }
}
```

2. **Ensure the category exists** in `src/utils/menuData.ts` under `NUTRITION_CATEGORIES`

### **Best Practices**

#### **Data Consistency**

- **Keep IDs consistent**: The same item should have the same `id` in both nutrition and allergen files
- **Match menu names**: Item names should match the menu item names for user clarity
- **Use lowercase IDs**: Item IDs should be lowercase with hyphens (e.g., `lobster-tail`)
- **Category alignment**: Ensure items are in the same category in both files

#### **Data Validation**

Before saving changes:

1. **Validate JSON syntax**: Use a JSON validator to ensure proper formatting
2. **Check required fields**: All nutrition and allergen fields must be present
3. **Verify data types**: Numbers for nutrition, booleans for allergens
4. **Test on site**: View the `/nutrition` page to ensure data displays correctly

#### **Example: Complete Item Update**

To add or update a complete item with both nutrition and allergen data:

**Step 1**: Update `nutritionData.json`:

```json
{
  "categories": {
    "the-boiler": [
      {
        "id": "lobster-tail",
        "name": "Lobster Tail",
        "image": "/images/menu/boiler-lobster-tail.webp",
        "nutrition": {
          "calories": 130,
          "fat": 2,
          "saturatedFat": 0,
          "transFat": 0,
          "cholesterol": 80,
          "sodium": 200,
          "carbohydrates": 3,
          "fiber": 0,
          "sugars": 0,
          "protein": 23
        }
      }
    ]
  }
}
```

**Step 2**: Update `allergenData.json` (with matching ID):

```json
{
  "categories": {
    "the-boiler": [
      {
        "id": "lobster-tail",
        "name": "Lobster Tail",
        "allergens": {
          "shellfish": true,
          "milk": false,
          "egg": false,
          "soybean": false,
          "wheat": false,
          "sesame": false,
          "treeNuts": false,
          "peanut": false,
          "fish": false
        }
      }
    ]
  }
}
```

### **Troubleshooting**

#### **Common Issues**

**Item not showing on nutrition page**:
- Check that the item ID exists in both JSON files
- Verify the category key matches a category in `NUTRITION_CATEGORIES`
- Ensure JSON syntax is valid (no trailing commas, proper quotes)

**Nutrition values not displaying**:
- Verify all nutrition fields are numbers (not strings)
- Check that the JSON structure is correct (nested objects properly)
- Ensure the item is in the correct category

**Allergen information incorrect**:
- Verify all allergen fields are booleans (`true`/`false`, not strings)
- Check that the item ID matches between nutrition and allergen files
- Ensure all 9 allergen fields are present

**Category not appearing**:
- Verify the category exists in `NUTRITION_CATEGORIES` in `menuData.ts`
- Check that the category has at least one item in both JSON files
- Ensure the category key matches exactly (case-sensitive)

#### **Validation Tools**

- **JSON Validator**: Use online tools like [JSONLint](https://jsonlint.com/) to validate syntax
- **TypeScript**: The project will catch type errors during build
- **Browser DevTools**: Check the browser console for runtime errors

### **Data Import/Export**

If you need to update data in bulk:

1. **Export existing data**: Copy the JSON structure from the files
2. **Edit in spreadsheet**: Convert to CSV, edit in Excel/Google Sheets, convert back
3. **Validate JSON**: Use a validator before pasting back into files
4. **Test thoroughly**: Verify all items display correctly on the nutrition page

## JSON-LD Structured Data Management

### **Overview**

JSON-LD (JavaScript Object Notation for Linked Data) is implemented throughout the website to provide search engines with structured information about our content. This improves SEO, enables rich snippets in search results, and helps search engines better understand our website structure.

**Current Implementation Status**: ✅ **Complete** - All pages now use server-side JSON-LD injection for optimal SEO performance.

**Location**: All schemas are centralized in `/src/utils/jsonLdSchemas.ts`

### **Schema Types Implemented**

#### **1. Organization Schema** (Global)

- **Location**: Root layout (`src/app/layout.tsx`)
- **Purpose**: Provides company information across all pages
- **Content**: Company name, description, founding date, social media links

#### **2. Page-Specific Schemas**

- **Home Page**: Restaurant information with cuisine and offerings
- **About Us**: Company history and brand information
- **Menu**: Restaurant menu with categories and items
- **Locations**: Restaurant location finder
- **Shop**: Product information for merchandise
- **Franchise**: Franchise opportunity details
- **Careers**: Job posting information
- **Contact Us**: Contact information and services
- **Legal Pages**: Privacy Policy, Terms of Use, Accessibility Statement

#### **3. Dynamic Schemas**

- **Store Pages**: Individual restaurant information with location data
- **Menu Category Pages**: Specific menu sections with items

### **File Structure**

```
src/utils/jsonLdSchemas.ts
├── Type Definitions
│   ├── Store interface
│   ├── MenuItem interface
│   ├── MenuCategory interface
│   └── JsonLdSchema interface
├── Static Schemas
│   ├── homePageSchema
│   ├── aboutUsSchema
│   ├── menuSchema
│   ├── locationsSchema
│   ├── shopSchema
│   ├── franchiseSchema
│   ├── careersSchema
│   ├── contactUsSchema
│   ├── privacyPolicySchema
│   ├── termsOfUseSchema
│   ├── accessibilitySchema
│   └── organizationSchema
├── Dynamic Schema Generators
│   ├── generateStoreSchema()
│   └── generateMenuCategorySchema()
└── Utility Functions
    └── (Deprecated: injectJsonLd() - replaced with server-side injection)
```

### **How to Modify JSON-LD Schemas**

#### **Adding New Static Schemas**

**Step 1**: Define the schema in `src/utils/jsonLdSchemas.ts`

```typescript
export const newPageSchema: JsonLdSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "New Page Title",
  description: "Description of the new page",
  url: "https://captloui.com/new-page",
  mainEntity: {
    "@type": "Restaurant",
    name: "Cap't Loui",
    // ... additional properties
  },
};
```

**Step 2**: Import and use in your page component (Server-Side Approach)

```typescript
import { newPageSchema } from "@/utils/jsonLdSchemas";

export default function NewPage() {
  return (
    <>
      {/* Inject JSON-LD directly for immediate SEO availability */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(newPageSchema),
        }}
      />

      {/* Your page content */}
    </>
  );
}
```

#### **Modifying Existing Schemas**

**Example**: Update the home page schema

```typescript
// In src/utils/jsonLdSchemas.ts
export const homePageSchema: JsonLdSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "NEW TITLE - Cap't Loui", // Change this
  description: "NEW DESCRIPTION", // Change this
  url: "https://captloui.com",
  mainEntity: {
    "@type": "Restaurant",
    name: "Cap't Loui",
    description: "NEW RESTAURANT DESCRIPTION", // Change this
    // ... rest of the schema
  },
};
```

**Note**: After modifying a schema, the changes will automatically appear on the page since the schema is injected server-side.

#### **Adding New Dynamic Schema Types**

**Step 1**: Define the interface for your data

```typescript
// Add to interfaces section
interface NewDataType {
  title: string;
  description: string;
  // ... other properties
}
```

**Step 2**: Create the schema generator function

```typescript
export const generateNewDataTypeSchema = (
  data: NewDataType,
  identifier: string
): JsonLdSchema => ({
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: `${data.title} - Cap't Loui`,
  description: data.description,
  url: `https://captloui.com/${identifier}`,
  mainEntity: {
    "@type": "Restaurant",
    name: "Cap't Loui",
    // ... additional properties based on data
  },
});
```

**Step 3**: Use in your page component (Server-Side Approach)

```typescript
import { generateNewDataTypeSchema } from "@/utils/jsonLdSchemas";

export default function DynamicPage({ data, identifier }) {
  // Generate schema on the server side
  const schema = generateNewDataTypeSchema(data, identifier);

  return (
    <>
      {/* Inject JSON-LD directly for immediate SEO availability */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema),
        }}
      />

      {/* Your page content */}
    </>
  );
}
```

### **Server-Side JSON-LD Injection**

**Important**: We've moved from client-side to server-side JSON-LD injection for better SEO performance and immediate availability to search engines.

#### **Benefits of Server-Side Injection**

- **Immediate SEO Availability**: JSON-LD is available as soon as the page loads
- **No JavaScript Dependencies**: Works even if JavaScript is disabled
- **Better Search Engine Crawling**: Search engines can immediately read structured data
- **Improved Performance**: No client-side JavaScript execution needed
- **Consistent with Next.js**: Follows Next.js best practices for metadata

#### **Implementation Pattern**

All pages now use this pattern:

```typescript
import { pageSchema } from "@/utils/jsonLdSchemas";

export default function Page() {
  return (
    <>
      {/* Inject JSON-LD directly for immediate SEO availability */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(pageSchema),
        }}
      />

      {/* Page content */}
    </>
  );
}
```

#### **Migration from Client-Side**

**Before (Deprecated)**:

```typescript
"use client";
import { useEffect } from "react";
import { pageSchema, injectJsonLd } from "@/utils/jsonLdSchemas";

export default function Page() {
  useEffect(() => {
    const cleanup = injectJsonLd(pageSchema);
    return cleanup;
  }, []);

  return <div>Page content</div>;
}
```

**After (Current)**:

```typescript
import { pageSchema } from "@/utils/jsonLdSchemas";

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(pageSchema),
        }}
      />
      <div>Page content</div>
    </>
  );
}
```

### **Schema.org Types Used**

#### **Core Types**

- **`WebPage`**: Standard page information
- **`Restaurant`**: Restaurant-specific details
- **`Organization`**: Company information
- **`Brand`**: Brand identity

#### **Restaurant-Specific Types**

- **`MenuItem`**: Individual food items
- **`MenuSection`**: Menu categories
- **`OfferCatalog`**: Service offerings
- **`PostalAddress`**: Location addresses
- **`GeoCoordinates`**: Map coordinates

#### **Business Types**

- **`ContactPoint`**: Contact information
- **`JobPosting`**: Career opportunities
- **`Product`**: Merchandise items
- **`Offer`**: Product availability

### **Best Practices for Schema Updates**

#### **1. Maintain Schema.org Compliance**

- Always use valid `@type` values from [Schema.org](https://schema.org/)
- Follow the official property structure
- Use appropriate data types (string, number, boolean)

#### **2. Keep URLs Current**

- Update URLs when page structures change
- Use absolute URLs (https://captloui.com/...)
- Ensure all internal links are valid

#### **3. Validate Your Schemas**

- Use [Google's Rich Results Test](https://search.google.com/test/rich-results)
- Test with [Schema.org Validator](https://validator.schema.org/)
- Check for console errors in browser developer tools

#### **4. Performance Considerations**

- Schemas are injected client-side for dynamic content
- Static schemas are included in the initial HTML
- Cleanup functions prevent memory leaks

### **Common Schema Modifications**

#### **Update Restaurant Information**

```typescript
// In organizationSchema or homePageSchema
mainEntity: {
  "@type": "Restaurant",
  name: "Cap't Loui",
  description: "Updated restaurant description",
  foundingDate: "2016",
  servesCuisine: "Cajun Seafood",
  priceRange: "$$",
  // ... other properties
}
```

#### **Add New Menu Categories**

```typescript
// In menuSchema
hasMenuSection: [
  // ... existing categories
  {
    "@type": "MenuSection",
    name: "NEW CATEGORY",
    description: "Description of new category",
  },
];
```

#### **Update Contact Information**

```typescript
// In organizationSchema
contactPoint: {
  "@type": "ContactPoint",
  contactType: "customer service",
  availableLanguage: "English",
  telephone: "+1-555-123-4567", // Add phone if needed
}
```

#### **Modify Store Location Data**

```typescript
// In generateStoreSchema function
export const generateStoreSchema = (
  store: Store,
  slug: string
): JsonLdSchema => ({
  // ... existing properties
  address: {
    "@type": "PostalAddress",
    streetAddress: store.address,
    addressRegion: store.state,
    postalCode: store.zipcode,
    addressCountry: "US",
    // Add new fields if needed
    addressLocality: store.city, // If you add city field
  },
  // ... rest of schema
});
```

### **Troubleshooting JSON-LD Issues**

#### **Common Problems**

1. **Schema Not Loading**

   - Check browser console for JavaScript errors
   - Verify JSON-LD script tag is present in HTML source
   - Ensure page component imports the correct schema

2. **Invalid Schema Structure**

   - Validate with Google Rich Results Test
   - Check for missing required properties
   - Verify property names match Schema.org exactly

3. **Dynamic Data Not Updating**
   - Check that data is available when schema generates
   - Verify schema generation function is working properly
   - Ensure server-side data fetching is successful

#### **Debugging Steps**

1. **Check Browser Console**

   ```javascript
   // Add this to your page for debugging
   console.log("Generated Schema:", schema);
   ```

2. **Inspect HTML Source**

   - Look for `<script type="application/ld+json">` tags
   - Verify schema content is present
   - Check for syntax errors in JSON
   - Ensure schema is injected server-side

3. **Test Schema Validation**
   - Copy schema from HTML source or browser console
   - Paste into Google Rich Results Test
   - Look for validation errors

### **Schema Testing Tools**

- **[Google Rich Results Test](https://search.google.com/test/rich-results)**: Test how your schemas appear in search results
- **[Schema.org Validator](https://validator.schema.org/)**: Validate schema structure and syntax
- **[Structured Data Testing Tool](https://search.google.com/structured-data/testing-tool/)**: Legacy tool for schema validation
- **Browser Developer Tools**: Check for JavaScript errors and inspect generated HTML

### **Performance Impact**

- **Static Schemas**: No performance impact (included in HTML)
- **Dynamic Schemas**: No performance impact (generated server-side)
- **Memory Management**: No client-side memory usage
- **SEO Benefits**: Significantly outweigh minimal performance cost
- **Server-Side Rendering**: Follows Next.js best practices

### **Future Schema Enhancements**

#### **Planned Additions**

- **Review Schemas**: Customer reviews and ratings
- **Event Schemas**: Special events and promotions
- **FAQ Schemas**: Frequently asked questions
- **Breadcrumb Schemas**: Navigation structure

#### **Advanced Features**

- **Aggregate Rating**: Overall restaurant ratings
- **Opening Hours**: Detailed business hours
- **Service Area**: Geographic service coverage
- **Payment Methods**: Accepted payment types

---

## Homepage Structure

Your homepage (`src/app/page.tsx`) imports these sections:

```tsx
import AboutUsSection from "@/components/homes/AboutUsSection";
import DeliciousDishesSection from "@/components/homes/DeliciousDishesSection";
import FranchiseSection from "@/components/homes/FranchiseSection";
import Hero from "@/components/homes/HeroSection";
import LocationSection from "@/components/homes/LocationSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutUsSection />
      <LocationSection />
      <DeliciousDishesSection />
      <FranchiseSection />
    </>
  );
}
```

### **Hero Section** (`src/components/homes/HeroSection.tsx`)

**Current Content**:

- **Main headline**: "HANDS-ON FLAVOR"
- **Tagline**: "Our signature Cajun seafood boils are loud, messy, and unforgettable."
- **Background image**: `/images/home/banner.jpg`
- **Call-to-action buttons**:
  - "VIEW MENU" (links to `/menu`)
  - "ORDER NOW" (links to ChowNow ordering)

**Technical Features**:

- **Clickable hero**: Entire section opens ChowNow ordering when clicked
- **Full-height design**: `h-[calc(100vh-120px)]`
- **Responsive typography**: `text-3xl md:text-7xl`
- **Dark overlay**: `bg-black/60` for text readability
- **Hover effects**: White shadow on buttons

**To update hero content**:

```tsx
// Change main headline
<h1 className="text-3xl md:text-7xl font-semibold text-white tracking-widest">
  HANDS-ON FLAVOR
</h1>

// Change tagline
<p className="text-white text-lg md:text-xl mt-4 font-medium">
  Our signature Cajun seafood boils are loud, messy, and unforgettable.
</p>

// Change background image
<Image
  src="/images/home/banner.jpg"
  alt="Cajun Seafood"
  fill
  className="object-cover z-0"
  priority
/>
```

## Brand Design System

### **Global Styling** (`src/app/globals.css`)

**Color System**:

```css
:root {
  --background: #ffffff; /* Light mode */
  --foreground: #171717; /* Light mode text */
  --primary-color: #a30f0f; /* Cap't Loui brand red */
}

@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --font-sans: var(--font-inter);
}

@theme {
  --color-primary: var(--primary-color, #a30f0f);
}

@theme {
  --shadow-all: 0 0 10px rgba(0, 0, 0, 0.25);
}

@media (prefers-color-scheme: dark) {
  :root {
    --background: #0a0a0a; /* Dark mode */
    --foreground: #ededed; /* Dark mode text */
  }
}
```

**Typography**:

```css
@theme {
  --font-dancing: "Dancing Script", cursive;
}

@theme {
  --shadow-all: 0 0 10px rgba(0, 0, 0, 0.25);
}

h1,
h2,
h4 {
  font-family: var(--font-josefin);
}

body {
  font-family: var(--font-inter);
}

.font-dancing {
  font-family: var(--font-dancing) !important;
}

html {
  scroll-behavior: smooth;
}
```

## Dependencies & Packages

### **Core Dependencies**

```json
{
  "next": "15.3.5",
  "react": "^19.0.0",
  "react-dom": "^19.0.0",
  "@react-google-maps/api": "^2.20.7",
  "react-markdown": "^10.1.0",
  "lucide-react": "^0.525.0"
}
```

### **Development Dependencies**

```json
{
  "@tailwindcss/typography": "^0.5.16",
  "typescript": "^5",
  "eslint": "^9",
  "tailwindcss": "^4"
}
```

### **Key Package Updates**

- **React Markdown**: Added for legal page content rendering
- **Tailwind Typography**: Enhanced markdown content styling
- **Cookie Management**: Custom utilities for GDPR compliance
- **Analytics Integration**: Conditional loading with consent management

## Google Maps Setup

### **API Key Configuration**

1. **Get Google Maps API Key**:

   - Visit [Google Cloud Console](https://console.cloud.google.com/)
   - Enable Maps JavaScript API
   - Create API key with domain restrictions

2. **Environment Setup**:

```bash
# .env.local
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_actual_api_key_here
```

3. **API Restrictions** (Recommended):
   - Restrict key to your domain(s)
   - Enable only Maps JavaScript API
   - Set up billing to avoid quota issues

### **Custom Marker Setup**

**Marker Image Requirements**:

- **File**: `/public/images/marker.png`
- **Size**: 32x52 pixels (or scalable SVG)
- **Style**: Should match brand colors and be visible on map
- **Fallback**: System gracefully falls back to default Google markers

## Development & Deployment

### **Development Commands**

```bash
# Install dependencies
npm install

# Start development server with Turbopack
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint
```

### **Environment Setup**

```bash
# Required environment variables
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_google_maps_api_key

# Optional environment variables
NODE_ENV=development
```

### **Build Configuration**

- **Next.js 15**: Latest features with App Router
- **Turbopack**: Fast development builds
- **TypeScript**: Strict type checking
- **ESLint**: Code quality enforcement
- **Tailwind CSS 4**: Modern utility-first styling

## Privacy & Compliance

### **GDPR Compliance**

- **Explicit Consent**: Clear accept/decline options
- **Data Minimization**: Only collect necessary data
- **User Control**: Easy consent withdrawal
- **Transparency**: Clear privacy policy and terms

### **Cookie Management**

- **Essential Cookies**: Always enabled for site functionality
- **Analytics Cookies**: Only with explicit consent
- **Automatic Cleanup**: Analytics data removed on decline
- **Persistent Choice**: User preferences saved for future visits

### **Analytics Implementation**

- **Google Analytics**: Website traffic and user behavior
- **Facebook Meta Pixel**: Social media advertising tracking
- **Conditional Loading**: Scripts only load after consent
- **Performance Impact**: Minimal performance impact when disabled

## Accessibility Features

### **WCAG Compliance**

- **Semantic HTML**: Proper heading hierarchy and landmarks
- **Keyboard Navigation**: Full keyboard accessibility
- **Screen Reader Support**: ARIA labels and descriptions
- **Color Contrast**: Meets accessibility standards
- **Focus Management**: Clear focus indicators

### **User Experience**

- **Responsive Design**: Works on all device sizes
- **Touch Friendly**: Mobile-optimized interactions
- **Loading States**: Clear feedback for user actions
- **Error Handling**: Helpful error messages and recovery

## Performance & Optimization

### **Image Optimization**

- **Next.js Image**: Automatic optimization and lazy loading
- **WebP Format**: Modern image formats for better compression
- **Responsive Images**: Different sizes for different devices
- **Lazy Loading**: Images load as needed

### **Code Optimization**

- **Tree Shaking**: Unused code elimination
- **Code Splitting**: Automatic route-based splitting
- **Bundle Analysis**: Built-in bundle analyzer
- **Performance Monitoring**: Core Web Vitals tracking

## Future Enhancements

### **Planned Features**

- **Online Ordering**: Direct integration with ordering platforms
- **Loyalty Program**: Customer rewards and tracking
- **Mobile App**: Native mobile application
- **Advanced Analytics**: Enhanced user behavior insights
- **Multi-language Support**: Internationalization features

### **Technical Improvements**

- **PWA Support**: Progressive Web App capabilities
- **Service Workers**: Offline functionality
- **Advanced Caching**: Intelligent content caching
- **Performance Monitoring**: Real-time performance tracking

## Support & Maintenance

### **Technical Support**

- **Documentation**: Comprehensive code documentation
- **Code Quality**: ESLint and TypeScript enforcement
- **Testing**: Component and integration testing
- **Performance**: Regular performance audits

### **Content Management**

- **Static Content**: Easy-to-update content files
- **Image Management**: Organized image structure
- **Menu Updates**: Simple menu data modifications
- **Location Management**: Easy addition of new locations

## Important Notes

- Store data drives both the location finder and individual location pages
- Each location can use different ordering platforms
- Map markers use `/images/marker.png` for consistent branding, with fallback to Google defaults
- Hours format uses `\n` for line breaks in store data
- Menu system automatically generates category pages
- All menu images should be optimized for web (WebP preferred)
- The Boiler category has special step-by-step ordering features
- Google Maps API key must be set in environment variables
- Coordinate format is `[longitude, latitude]` for Google Maps compatibility
- Search functionality supports both exact zip code matches and state-based searches
- Cookie consent is required before analytics scripts load
- Legal pages use markdown rendering with Tailwind Typography
- Reservation buttons only appear for locations with OpenTable integration
- All new features maintain backward compatibility

---

**Cap't Loui Seafood Restaurant Website**  
_Built with Next.js 15, Tailwind CSS 4, TypeScript, and modern web technologies_  
_Last Updated: January 2025_
