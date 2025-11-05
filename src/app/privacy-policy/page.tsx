import { Metadata } from "next";
import { privacyPolicySchema } from "@/utils/jsonLdSchemas";

export const metadata: Metadata = {
  title: "Privacy Policy - Cap't Loui",
  description: "Learn how we protect and handle your personal information",
  alternates: {
    canonical: `https://captloui.com/privacy-policy`,
  },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(privacyPolicySchema),
        }}
      />

      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-primary mb-4 uppercase">
                Privacy Policy
              </h1>
              <p className="text-xl text-gray-600 mb-4">
                Learn how we protect and handle your personal information
              </p>
              <div className="flex justify-center items-center gap-4 text-sm text-gray-500">
                <span>Last Updated: 28 August 2025</span>
                <span>Version: 1.0</span>
              </div>
            </div>

            
            <div className="p-8 space-y-6">
              <div className="prose prose-lg max-w-none">

                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  1. Introduction
                </h2>
                <p className="text-gray-700 mb-6">
                  This privacy policy (&quot;<strong>Privacy Policy</strong>
                  &quot;) describes how Cap&apos;t Loui, LLC and its
                  subsidiaries and affiliates (
                  <strong>&quot;Cap&apos;t Loui&quot;</strong>, &quot;
                  <strong>we</strong>&quot;, &quot;<strong>us</strong>&quot; or
                  &quot;<strong>our</strong>&quot;) collect, use, store, and
                  share your information when (1) you access and/or use our
                  websites, mobile applications, or other digital properties we
                  own and operate and that link to this Privacy Policy,
                  including{" "}
                  <a
                    href="http://www.captloui.com"
                    className="text-blue-500 underline"
                  >
                    www.captloui.com
                  </a>{" "}
                  (&quot;<strong>Websites</strong>&quot;); (2) you communicate
                  with us in any manner, including by email, direct messaging,
                  telephone, and/or in person (&quot;
                  <strong>Communications</strong>&quot;); and (3) we interact
                  with certain third party partners.
                </p>
                <p className="text-gray-700 mb-6">
                  Please note the following sections that include important
                  disclosures related to our Websites:
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                  <li>
                    <strong className="underline">
                      Cookies, Advertising, and Tracking Technology Disclosures
                    </strong>
                    : To learn more about how our Websites, Products, and
                    Communications use cookies and related technologies
                    (including from Third Parties), see{" "}
                    <a
                      href="#automatic-collection-technologies"
                      className="text-blue-500 underline"
                    >
                      Automatic Information Collection Technologies below.
                    </a>
                  </li>
                  <li>
                    <strong className="underline">
                      Your Choices Disclosures
                    </strong>
                    : To learn more about your choices concerning your
                    information, see{" "}
                    <a href="#your-choices" className="text-blue-500 underline">
                      Your Choices
                    </a>{" "}
                    below.
                  </li>
                </ul>

                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  2. What Type Of Information Do We Collect?
                </h2>
                <p className="text-gray-700 mb-4">
                  Depending on how you interact with our Websites, the nature of
                  our Communications, and how we may interact with certain third
                  party partners, we may collect the following pieces of your
                  information:
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                  <li>
                    <strong className="underline">
                      Basic Identifying Information
                    </strong>
                    . Information you provide when you sign-up to receive
                    information or make requests on our Website, including your
                    full name, postal address, e-mail address, phone number, and
                    other similar identifiers.
                  </li>
                  <li>
                    <strong className="underline">
                      Device Identifier and other Unique Identifiers
                    </strong>
                    . Information such as your device identifier, internet
                    protocol (IP) address, cookies, beacons, pixel tags, mobile
                    ad identifier, and other unique identifiers.
                  </li>
                  <li>
                    <strong className="underline">
                      Internet or Other Network Activity
                    </strong>
                    . Information such as your browsing or search history, and
                    other information regarding your interactions with our
                    Websites, emails, and advertisements.
                  </li>
                  <li>
                    <strong className="underline">Geolocation Data</strong>.
                    Information including imprecise location data (such as
                    location derived from an IP address or data that indicates a
                    city or postal code level).
                  </li>
                  <li>
                    <strong className="underline">
                      Commercial Information
                    </strong>
                    . Information such as the products and samples you have
                    purchased and considered, your preferences on various
                    products and brands, photographs of your receipts containing
                    purchases, and related information about your commercial
                    activities.
                  </li>
                  <li>
                    <strong className="underline">
                      Demographic Information
                    </strong>
                    . Information such as your age, gender, and date of birth.
                  </li>
                  <li>
                    <strong className="underline">User Content</strong>.
                    Information such as your Communications with us and any
                    other content you provide, survey responses, comments,
                    product reviews, and other content.
                  </li>
                  <li>
                    <strong className="underline">
                      Audio and Visual Information
                    </strong>
                    . Information such as photographs, images, videos, and
                    recordings of your voice (such as when we record customer
                    service calls for quality assurance).
                  </li>
                  <li>
                    <strong className="underline">Inferences</strong>.
                    Information such as inferences drawn from or created based
                    on the information identified above.
                  </li>
                </ul>
                <p className="text-gray-700 mb-6">
                  You may choose to voluntarily provide other information to us
                  that we do not request, and, in such instances, and in such
                  situations we have no control over what categories of personal
                  information such disclosure may include. Any additional
                  information provided by you to us is provided at your own
                  risk.
                </p>

                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  3. How Do We Collect Your Information?
                </h2>
                <p className="text-gray-700 mb-4">
                  We collect your information in three ways: (1) directly from
                  you when you use our Websites and Communicate with us; (2)
                  automatically using online technologies when you engage with
                  our Websites and Communications; and (3) from our third party
                  partners.
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                  <li>
                    <strong className="underline">Directly from you</strong>. We
                    collect information directly from you when you enter your
                    information on our Websites, access our content, take a
                    survey or a poll, use our Websites, engage in Communications
                    with us, or sign-up to receive emails, text messages, or
                    certain other Communications from us.
                  </li>
                  <li>
                    <strong className="underline">
                      Automatically Using Online Technologies
                    </strong>
                    . When you visit our Websites, open or click on emails we
                    send you or related Communications, or interact with our
                    advertisements, we or other third parties may automatically
                    collect certain information about you using online tracking
                    technologies such as cookies, pixels, web beacons, software
                    developer kits, and related technologies. For more
                    information, see{" "}
                    <a
                      href="#automatic-collection-technologies"
                      className="text-blue-500 underline"
                    >
                      Cookies and Related Online Tracking Technologies below.
                    </a>
                  </li>
                  <li>
                    <strong className="underline">From Third Parties</strong>.
                    We collect information from our third parties, such as
                    franchisees, brand partners, data analytics providers,
                    marketing or advertising providers, fraud prevention service
                    providers, and other service providers that provide services
                    for us.
                  </li>
                </ul>

                <h2
                  id="automatic-collection-technologies"
                  className="text-2xl font-semibold text-gray-900 mb-4"
                >
                  4. Automatic Collection Technologies
                </h2>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  A. Technologies Used
                </h3>
                <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                  <li>
                    <strong>Cookies</strong>. Cookies are small bits of data
                    cached or stored on your computer based on Internet
                    activity. Information collected through cookies may be
                    obtained directly by or shared with third parties so that
                    those third parties can provide analytics and advertising
                    services to us. We use first party and third party cookies
                    and other tools to monitor individual activity in aggregate
                    to improve the Websites. The information we gather includes
                    IP address, user language, the operating system, browser
                    type, the presence/absence of &quot;flash&quot; plug-ins,
                    screen resolution, connection type, browsing behavior, and
                    information that identifies the cookie.
                  </li>
                  <li>
                    <strong>Pixels</strong>: Pixels (also known as web beacons)
                    are types of code embedded in a website, video, email, or
                    advertisement that sends information about your use to a
                    server. When you access a website, video, email, or
                    advertisement that contains a pixel, the pixel may permit us
                    or a separate entity to drop or read cookies on your
                    browser.
                  </li>
                  <li>
                    <strong>Analytic Tools</strong>: We use third-party
                    analytics providers such as Google Analytics on the Sites.
                    Analytic tools like Google Analytics use cookies and similar
                    technologies and IP address to collect and analyze
                    information about use of the Websites and report on
                    activities and trends.
                  </li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  B. Purpose For Using Automatic Information Collection
                  Technologies
                </h3>
                <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                  <li>
                    <strong>Functionality, Support and Security</strong>: Some
                    of the online tracking technologies like the cookies we use
                    for a variety of functionality and support purposes, such as
                    to recognize your device, facilitate navigation, display
                    information more effectively, personalize your experience
                    such as recognize you when you leave or return to our Site,
                    maintain the security of our Sites, manage your account,
                    prevent crashes, fix bugs, save your preferences, and assist
                    with basic Site functions and other performance functions.
                  </li>
                </ul>
                <p className="text-gray-700 mb-6">
                  We utilize Google reCAPTCHA on certain parts of our Site to
                  help protect against spam, abuse, and fraudulent activity.
                  reCAPTCHA analyzes interactions with the Site to determine
                  whether an action is being performed by a human or an
                  automated process. This service may collect information such
                  as your IP address, browser details, and user behavior data,
                  which is transmitted to and processed by Google in accordance
                  with Google&apos;s Privacy Policy and Terms of Service. The
                  use of reCAPTCHA is essential for maintaining the security and
                  integrity of our Site and your information.
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                  <li>
                    <strong>
                      Targeted Advertising, Marketing Measurements
                    </strong>
                    : Pixel tags may be used to market our services to you,
                    measure the success of our marketing campaigns, and compile
                    statistics about Site usage and response rates. In addition,
                    we may use the information we have collected from you to
                    enable us to display targeted third-party advertisements on
                    our website. Some advertisements on this website are served
                    by third-party advertisers, ad networks, and ad servers.
                    These third parties may use cookies, alone or in conjunction
                    with web beacons or other tracking technologies, to collect
                    information about you.
                  </li>
                </ul>
                <p className="text-gray-700 mb-4">
                  Some of these tracking technologies may track your activities
                  across time and services for purposes of associating the
                  different devices you use, and delivering relevant ads and/or
                  other content to you (
                  <strong>&quot;Interest-based Advertising&quot;</strong>).
                </p>
                <p className="text-gray-700 mb-4">
                  Third party technologies we have implemented on our Websites
                  and through our Services include the following:
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                  <li>
                    <strong>Meta (Facebook) Pixel</strong>: We use the Meta
                    (formerly Facebook) Pixel to collect information about how
                    users interact with our site. This helps us measure the
                    effectiveness of our advertising and deliver more relevant
                    ads on Meta platforms (such as Facebook and Instagram). Meta
                    may use cookies and similar technologies to collect
                    information such as your IP address, browser type, pages
                    visited, and actions taken on our site. This data may be
                    used by Meta in accordance with its Privacy Policy. For more
                    information related to your choices related to data shared
                    with Meta, please see Your Choices below.
                  </li>
                  <li>
                    <strong>Facebook Custom Audiences</strong>: We use
                    Meta&apos;s Facebook Custom Audiences service to deliver
                    targeted advertisements on Facebook and other Meta
                    platforms. To create these audiences, we may share hashed
                    identifiers such as your email address or phone number with
                    Facebook. Information may also be used in conjunction with
                    Facebook Pixel (discussed above). This data is used by
                    Facebook to match you to its users and show you ads that are
                    more relevant to your interests, as well as to measure the
                    effectiveness of our advertising campaigns. For more
                    information related to your choices related to data shared
                    with Meta, please see Your Choices below.
                  </li>
                </ul>
                <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                  <li>
                    <strong>Site Analytics</strong>: We use analytics services,
                    such as Google Analytics, to help us understand how users
                    access and use the Sites through the use and sharing of
                    cookies. Google Analytics may collect information regarding
                    the use of other websites, apps, and online resources. You
                    can learn about Google&apos;s practices by going to{" "}
                    <a
                      href="http://www.google.com/policies/privacy/partners/"
                      className="text-blue-500 underline"
                    >
                      www.google.com/policies/privacy/partners/
                    </a>
                    .
                  </li>
                </ul>
                <p className="text-gray-700 mb-6">
                  For information about your choices related to automatic data
                  collection technologies and your ability to opt out of certain
                  sharing of information, please see Your Choices below.
                </p>

                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  5. How Do We Use Your Information?
                </h2>
                <p className="text-gray-700 mb-4">
                  We use your information for a variety of purposes, including
                  to:
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                  <li>
                    <strong className="underline">
                      Provide our Websites to You
                    </strong>
                    . We use your information to provide our Websites to you,
                    including to: (1) facilitate your access and use of our
                    Websites; (2) process your feedback; (3) send you
                    notifications relating to information you request or sign-up
                    to receive; (4) answer your Communications; and (6) perform
                    other related business functions.
                  </li>
                  <li>
                    <strong className="underline">Communicate with You</strong>.
                    We use your information to engage in Communications with
                    you, such as to respond to your requests, inquiries, issues,
                    feedback, and to provide customer service.
                  </li>
                  <li>
                    <strong className="underline">Market and Advertise</strong>.
                    We use your information for marketing and advertising
                    purposes, including sending marketing, advertising, and
                    promotional communications to you by email, text message, or
                    postal mail. We also use your information to show you
                    advertisements and to administer our sweepstakes and other
                    contests.
                  </li>
                  <li>
                    <strong className="underline">
                      Conduct Analytics and Personalization
                    </strong>
                    . We use your information to conduct research and analytics,
                    including to improve our Websites. We also use your
                    information to understand your interaction with our
                    Websites, advertisements, and our Communications with you.
                    We also use your information to personalize your experience,
                    to save you time when you visit our Websites, to better
                    understand your needs, and to provide personalized
                    recommendations for our Websites.
                  </li>
                  <li>
                    <strong className="underline">
                      Security and Fraud Prevention
                    </strong>
                    . We use your information to detect, investigate, prevent,
                    or take action regarding possible malicious, deceptive,
                    fraudulent, or illegal activity, including fraudulent
                    transactions. We also use your information to enforce our
                    terms and procedures, prevent against security incidents,
                    and prevent the harm to other users of our Websites.
                  </li>
                  <li>
                    <strong className="underline">Legal Obligations</strong>. We
                    use your information to comply with our legal and regulatory
                    obligations, to establish and exercise our rights, and to
                    defend against legal claims.
                  </li>
                  <li>
                    <strong className="underline">Business Functions</strong>.
                    We use your information to support our core business
                    functions, including to maintain records related to business
                    management, loss prevention, collecting amounts owed, and
                    identifying and repairing errors or problems in the
                    Websites.
                  </li>
                </ul>

                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  6. How Do We Disclose Your Information?
                </h2>
                <p className="text-gray-700 mb-4">
                  We may disclose or share your information with affiliated and
                  non-affiliated third-parties, including in the following
                  scenarios:
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                  <li>
                    <strong className="underline">With your Consent</strong>. We
                    may disclose or share your information with your consent,
                    which may be obtained in writing; online, through
                    &quot;click-through&quot; agreements; when you accept the
                    terms of use on our Websites; orally, either in person or on
                    the phone; or by other means.
                  </li>
                  <li>
                    <strong className="underline">
                      In a Business Transfer
                    </strong>
                    . We may disclose or share your information as part of a
                    corporate business transaction, such as a merger or
                    acquisition, joint venture, corporate reorganization,
                    financing, or sale of company assets, or in the unlikely
                    event of insolvency, bankruptcy, or receivership, in which
                    such information could be transferred to third parties as a
                    business asset in the transaction.
                  </li>
                  <li>
                    <strong className="underline">To Service Providers</strong>.
                    We may disclose or share your information with certain
                    non-affiliated third parties to facilitate your access and
                    use of our Websites and to provide us with certain business
                    functions, including but not limited to sharing your
                    information with brand partners, internet service providers,
                    advertising networks, data analytics providers, governmental
                    entities, operating systems and platforms, social media
                    networks, and other service providers who provide us a
                    service (e.g., customer service, auditing, marketing,
                    debugging to identify and repair errors that impair existing
                    intended functionality on our Websites, and/or protecting
                    against malicious, deceptive, fraudulent, or illegal
                    activity).
                  </li>
                  <li>
                    <strong className="underline">To Franchisees</strong>. We
                    may disclose limited information to applicable franchisees.
                    Franchisees are independent companies that obtain a license
                    from us run a branded establishment, and we work with our
                    Franchisees to ensure your experience with Cap&apos;t Loui
                    meets the standards we strive to have associated with our
                    brand. We may share limited information, such contact
                    details, with specific franchisees to help them improve
                    customer service and personalize your experiences.
                  </li>
                  <li>
                    <strong className="underline">
                      For Legal Process And Protection
                    </strong>
                    . We may disclose or share your information to satisfy any
                    law, regulation, legal process, governmental request, or
                    where we have a good faith belief that access, use,
                    preservation or disclosure of such information is reasonably
                    necessary to: (1) enforce or apply our agreements; (2)
                    protect our interests, property, or safety of others; (3) in
                    connection with claims, disputes, or litigation; and (4) to
                    protect our Websites.
                  </li>
                </ul>

                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  7. How Do We Protect Your Information?
                </h2>
                <p className="text-gray-700 mb-6">
                  Although no system can guarantee the complete security of your
                  information, we take all commercially reasonable steps to
                  ensure your information is protected in alignment with all
                  applicable laws and regulations, as appropriate to the
                  sensitivity of your information.
                </p>

                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  8. How Long Do We Keep Your Information?
                </h2>
                <p className="text-gray-700 mb-6">
                  We keep your information for as long as is necessary in
                  accordance with the purpose for which it was collected, our
                  business needs, and our legal and regulatory obligations. If
                  we dispose of your information, we will do so in a way that is
                  secure and appropriate to nature of the information subject to
                  disposal.
                </p>

                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  9. Links To Third Party Sites
                </h2>
                <p className="text-gray-700 mb-6">
                  Our Websites may contain links to third party websites and
                  services. Please note that these links are provided for your
                  convenience and information, and the websites and services may
                  operate independently from us and have their own privacy
                  policies or notices, which we strongly suggest you review.
                </p>
                <p className="text-gray-700 mb-6">
                  In particular, we utilize ChowNow&apos;s online ordering
                  platform to facilitate your purchase of our products like our
                  seasoning. When you interact with ChowNow&apos;s services
                  through our Websites, you will be redirected to ChowNow&apos;s
                  platform and will provide information directly to ChowNow.
                  Please be aware that ChowNow operates independently from us
                  and maintains its own privacy practices. Any information you
                  provide to ChowNow, including during the ordering or payment
                  process, will be subject to ChowNow&apos;s privacy policy and
                  terms of use. We encourage you to review ChowNow&apos;s
                  privacy policy to understand how your information may be
                  collected, used and shared by ChowNow. ChowNow may share
                  limited information back with us about your purchase as
                  necessary for us to fulfill your order and provide necessary
                  support, where applicable.
                </p>

                <h2
                  id="your-choices"
                  className="text-2xl font-semibold text-gray-900 mb-4"
                >
                  10. Your Choices
                </h2>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  1. Communications
                </h3>
                <p className="text-gray-700 mb-4">
                  The following is information about how to opt out of receiving
                  certain communications from us, depending on means of
                  delivery:
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                  <li>
                    <strong>E-mails</strong>. You can opt-out of receiving
                    promotional emails from us at any time by following the
                    instructions as provided in emails to click on the
                    unsubscribe link, or emailing us at the email address set
                    out as set out in the{" "}
                    <a href="#contact-us" className="text-blue-500 underline">
                      Contact Us
                    </a>{" "}
                    section below with the word UNSUBSCRIBE in the subject field
                    of the email. Please note that you cannot opt-out of
                    non-promotional emails, such as those about your account,
                    transactions, servicing, or our ongoing business relations.
                  </li>
                  <li>
                    <strong>Phone & SMS Text Messaging</strong>. You can opt-out
                    of receiving text messages or calls to your phone number at
                    any time by (i) for text messages, texting &quot;STOP&quot;
                    in response to any text message you receive from us or
                    contacting us as set out in the{" "}
                    <a href="#contact-us" className="text-blue-500 underline">
                      Contact Us
                    </a>{" "}
                    section below and specifying you want to opt-out of text
                    messages; and (ii) for calls, requesting opt-out during any
                    call you receive from us or contacting us as set out in the{" "}
                    <a href="#contact-us" className="text-blue-500 underline">
                      Contact Us
                    </a>{" "}
                    section below and specifying you want to opt-out of calls.
                  </li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  2. Cookies and Tracking Technologies
                </h3>
                <p className="text-gray-700 mb-4">
                  The following disclosures relate to your choices in connection
                  with cookies and other tracking technologies:
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                  <li>
                    <strong>Do Not Track</strong>. Your browser settings may
                    allow you to automatically transmit a &quot;Do Not
                    Track&quot; signal to online services you visit. We do not
                    currently monitor or take action with respect to &quot;Do
                    Not Track&quot; signals. For more information on &quot;Do
                    Not Track,&quot; visit{" "}
                    <a
                      href="http://www.allaboutdnt.com"
                      className="text-blue-500 underline"
                    >
                      http://www.allaboutdnt.com
                    </a>
                    .
                  </li>
                  <li>
                    <strong>Cookies and Pixels</strong>. Most browsers accept
                    cookies by default. You can instruct your browser, by
                    changing its settings, to decline or delete cookies. If you
                    use multiple browsers on your device, you will need to
                    instruct each browser separately. Your ability to limit
                    cookies is subject to your browser settings and limitations.
                    Below are links to instructions for managing cookies on
                    commonly used browsers:
                  </li>
                </ul>
                <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2 ml-8">
                  <li>
                    Google Chrome:{" "}
                    <a
                      href="https://support.google.com/chrome/answer/95647"
                      className="text-blue-500 underline"
                    >
                      https://support.google.com/chrome/answer/95647
                    </a>
                  </li>
                  <li>
                    Microsoft Edge:{" "}
                    <a
                      href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09"
                      className="text-blue-500 underline"
                    >
                      https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09
                    </a>
                  </li>
                  <li>
                    Mozilla Firefox:{" "}
                    <a
                      href="https://support.mozilla.org/en-US/kb/clear-cookies-and-site-data-firefox"
                      className="text-blue-500 underline"
                    >
                      https://support.mozilla.org/en-US/kb/clear-cookies-and-site-data-firefox
                    </a>
                  </li>
                  <li>
                    Safari (macOS):{" "}
                    <a
                      href="https://support.apple.com/en-us/H+T201265"
                      className="text-blue-500 underline"
                    >
                      https://support.apple.com/en-us/H+T201265
                    </a>
                  </li>
                </ul>
                <p className="text-gray-700 mb-6">
                  Please be aware that if you disable or remove tracking
                  technologies, some parts of the Service may not function
                  correctly. If you disable or refuse cookies, some parts of
                  this website may then be inaccessible or not function
                  properly.
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                  <li>
                    <strong>
                      Mobile Application and Location Technologies
                    </strong>
                    . You can stop all collection of information via our mobile
                    application by uninstalling the mobile application. You can
                    also reset your device Ad Id at any time through your device
                    settings, which is designed to allow you to limit the use of
                    information collected about you. You can stop all collection
                    of precise location data through the mobile application by
                    uninstalling the application or withdrawing your consent
                    through your device settings.
                  </li>
                </ul>
                <p className="text-gray-700 mb-6">
                  Please be aware that if you disable or remove tracking
                  technologies some parts of the Service may not function
                  correctly.
                </p>

                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  3. Analytics and Interest-Based Advertising
                </h3>
                <p className="text-gray-700 mb-6">
                  Google provides tools to allow you to opt out of the use of
                  certain information collected by Google Analytics at{" "}
                  <a
                    href="https://tools.google.com/dlpage/gaoptout"
                    className="text-blue-500 underline"
                  >
                    https://tools.google.com/dlpage/gaoptout
                  </a>{" "}
                  and by Google Analytics for Display Advertising or the Google
                  Display Network at{" "}
                  <a
                    href="https://www.google.com/settings/ads/onweb/"
                    className="text-blue-500 underline"
                  >
                    https://www.google.com/settings/ads/onweb/
                  </a>
                  .
                </p>
                <p className="text-gray-700 mb-6">
                  The companies we work with to provide you with targeted ads
                  are required by us to give you the choice to opt out of
                  receiving targeted ads. Most of these companies are
                  participants of the Digital Advertising Alliance (&quot;
                  <strong>DAA</strong>&quot;) and/or the Network Advertising
                  Initiative (&quot;
                  <strong>NAI</strong>&quot;). To learn more about the targeted
                  ads provided by these companies, and how to opt out of
                  receiving certain targeted ads from them, please visit: (i)
                  for website targeted ads from DAA participants,{" "}
                  <a
                    href="https://www.aboutads.info/choices"
                    className="text-blue-500 underline"
                  >
                    https://www.aboutads.info/choices
                  </a>
                  ; (ii) for app targeted ads from DAA participants,{" "}
                  <a
                    href="https://www.aboutads.info/appchoices"
                    className="text-blue-500 underline"
                  >
                    https://www.aboutads.info/appchoices
                  </a>
                  ; and (iii) for targeted ads from NAI participants,{" "}
                  <a
                    href="https://www.networkadvertising.org/choices/"
                    className="text-blue-500 underline"
                  >
                    https://www.networkadvertising.org/choices/
                  </a>
                  .
                </p>
                <p className="text-gray-700 mb-6">
                  Facebook Pixel and Ads: You can opt-out of the collection and
                  use of your information by Meta for ad targeting by visiting
                  the Digital Advertising Alliance&apos;s opt-out page or the
                  Network Advertising Initiative&apos;s opt-out page as
                  referenced above. You can also manage your ad preferences
                  within your Facebook account settings.
                </p>
                <p className="text-gray-700 mb-6">
                  Opting out only means that the selected participants should no
                  longer deliver certain targeted ads to you, but does not mean
                  you will no longer receive any targeted content and/or ads
                  (e.g., in connection with the participants&apos; other
                  customers or from other technology services).
                </p>

                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  11. Children
                </h2>
                <p className="text-gray-700 mb-6">
                  Our Websites and Products are not intended for children under
                  the age of 13. This includes any links to other websites that
                  we provide for our convenience. We don&apos;t knowingly
                  collect the information of children under 13 for any reason.
                </p>

                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  12. Changes to Our Privacy Policy
                </h2>
                <p className="text-gray-700 mb-6">
                  We may change this Policy from time to time. Any and all
                  changes will be reflected on this page, and where appropriate
                  provided in person or by another electronic method. The
                  effective date will be stated at the top of this Policy. You
                  should regularly check this page for any changes to this
                  Policy.
                </p>

                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  13. Accessibility
                </h2>
                <p className="text-gray-700 mb-6">
                  If you are having difficulty viewing or navigating the content
                  on our Websites, or if any content, feature, or functionality
                  that you believe is not fully accessible to people with
                  disabilities, please contact us as provided in{" "}
                  <a href="#contact-us" className="text-blue-500 underline">
                    Contact Us
                  </a>{" "}
                  below. Please include &quot;Disabled Access&quot; in the
                  subject line and provide a description of the specific feature
                  you feel is not fully accessible or a suggestion for
                  improvement. We take your feedback seriously and will consider
                  it as we evaluate ways to accommodate all of our customers and
                  our overall accessibility policies.
                </p>

                <h2
                  id="contact-us"
                  className="text-2xl font-semibold text-gray-900 mb-4"
                >
                  Contact Us
                </h2>
                <p className="text-gray-700 mb-6">
                  If you have any comments or questions, please contact us
                  through the following methods:
                </p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-700 mb-2">
                    <strong>Physical Address</strong>: 73 Dewey St, Garfield, NJ
                    07026
                  </p>
                  <p className="text-gray-700">
                    <strong>Email</strong>:{" "}
                    <a
                      href="mailto:privacy@captloui.com"
                      className="text-blue-500 underline"
                    >
                      privacy@captloui.com
                    </a>
                  </p>
                </div>

                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  14. CALIFORNIA&apos;S &quot;SHINE THE LIGHT&quot; LAW
                </h2>
                <p className="text-gray-700 mb-6">
                  If you are a California resident, you have the right to
                  request information from us once per calendar year regarding
                  the customer information we share with third parties for the
                  third parties&apos; direct marketing purposes. To request this
                  information, please send an email to{" "}
                  <a
                    href="mailto:privacy@captloui.com"
                    className="text-blue-500 underline"
                  >
                    privacy@captloui.com
                  </a>{" "}
                  with &apos;Request for California Privacy Information&apos; in
                  the subject line and in the body of your message. We will
                  provide the requested information to you via an email
                  response.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
