import { Metadata } from "next";
import { accessibilitySchema } from "@/utils/jsonLdSchemas";

export const metadata: Metadata = {
  title: "Accessibility Statement - Cap&apos;t Loui",
  description:
    "Learn about our commitment to website accessibility for all users",
};

export default function AccessibilityPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(accessibilitySchema),
        }}
      />

      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-primary mb-4 uppercase">
                Accessibility Statement
              </h1>
              <p className="text-xl text-gray-600 mb-4">
                We are committed to ensuring our website is accessible to all
                users, including those with disabilities.
              </p>
              <div className="flex justify-center items-center gap-4 text-sm text-gray-500">
                <span>Last Updated: {new Date().toLocaleDateString()}</span>
                <span>Version: 1.0</span>
              </div>
            </div>

            <div className="text-black px-8">
              <div className="prose prose-lg max-w-none markdown-content">
                <p>
                  Cap&apos;t Loui LLC is committed to making our website&apos;s
                  content accessible and user friendly to everyone. If you are
                  having difficulty viewing or navigating the content on this
                  website, or notice any content, feature, or functionality that
                  you believe is not fully accessible to people with
                  disabilities, please call our Customer Service team at (phone
                  number) or email our team at{" "}
                  <a
                    href="mailto:accessibility@captloui.com"
                    className="text-blue-500 underline"
                  >
                    accessibility@captloui.com
                  </a>{" "}
                  with &quot;Disabled Access&quot; in the subject line and
                  provide a description of the specific feature you feel is not
                  fully accessible or a suggestion for improvement.
                </p>

                <p>
                  We take your feedback seriously and will consider it as we
                  evaluate ways to accommodate all of our customers and our
                  overall accessibility policies. Additionally, while we do not
                  control such vendors, we strongly encourage vendors of
                  third-party digital content to provide content that is
                  accessible and user friendly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
