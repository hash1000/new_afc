import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy — Americas Food Court",
  description:
    "Learn how Americas Food Court collects, uses, discloses, and safeguards your personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar />
      <main className="container-page mx-auto flex flex-1 flex-col pt-40 pb-16 sm:pt-44 sm:pb-24">
        <div className="mx-auto w-full max-w-3xl">
          <h1 className="text-brand-navy text-3xl font-bold sm:text-4xl">
            Privacy Policy
          </h1>
          <p className="mt-2 text-sm text-gray-500">
            Effective Date: [Insert Date]
          </p>

          <div className="mt-8 flex flex-col gap-8 text-gray-700">
            <p>
              Welcome to America&apos;s Food Court (&quot;America&apos;s Food
              Court,&quot; &quot;we,&quot; &quot;our,&quot; or &quot;us&quot;).
              We value your privacy and are committed to protecting the
              personal information you share with us through our website,
              marketing materials, and other communications.
            </p>
            <p>
              This Privacy Policy explains how we collect, use, disclose, and
              safeguard your information when you visit our website.
            </p>

            <Section title="Information We Collect">
              <p>
                We may collect the following information when you interact
                with our website:
              </p>
              <h3 className="text-brand-navy mt-4 mb-2 font-semibold">
                Personal Information
              </h3>
              <List
                items={[
                  "Name",
                  "Email Address",
                  "Phone Number",
                  "Company Name",
                  "Business Address",
                  "Investment Interest",
                  "Franchise or Licensing Inquiry Information",
                  "Any information voluntarily submitted through contact forms",
                ]}
              />
              <h3 className="text-brand-navy mt-4 mb-2 font-semibold">
                Automatically Collected Information
              </h3>
              <p>When you visit our website, we may automatically collect:</p>
              <List
                items={[
                  "IP Address",
                  "Browser Type",
                  "Device Information",
                  "Operating System",
                  "Referring Website",
                  "Pages Visited",
                  "Time on Site",
                  "Cookies and Analytics Data",
                ]}
              />
            </Section>

            <Section title="How We Use Your Information">
              <p>We use your information to:</p>
              <List
                items={[
                  "Respond to inquiries",
                  "Provide requested information",
                  "Evaluate franchise, licensing, and partnership opportunities",
                  "Process requests for information",
                  "Improve our website",
                  "Improve customer experience",
                  "Send newsletters and marketing communications (when you opt in)",
                  "Analyze website traffic and performance",
                  "Protect against fraud and unauthorized activity",
                  "Comply with legal obligations",
                ]}
              />
            </Section>

            <Section title="Cookies">
              <p>
                Our website may use cookies and similar technologies to
                improve user experience and analyze website traffic.
              </p>
              <p className="mt-3">Cookies may be used to:</p>
              <List
                items={[
                  "Remember user preferences",
                  "Improve website functionality",
                  "Analyze visitor behavior",
                  "Deliver relevant advertising",
                ]}
              />
              <p className="mt-3">
                You may disable cookies through your browser settings;
                however, some portions of the website may not function
                properly.
              </p>
            </Section>

            <Section title="How We Share Information">
              <p>We do not sell your personal information.</p>
              <p className="mt-3">We may share information with:</p>
              <List
                items={[
                  "Service providers who assist in operating our business",
                  "Marketing platforms",
                  "Website hosting providers",
                  "Analytics providers",
                  "Legal authorities when required by law",
                  "Successor entities in the event of a merger, acquisition, or sale of assets",
                ]}
              />
            </Section>

            <Section title="Data Security">
              <p>
                We maintain commercially reasonable administrative,
                technical, and physical safeguards designed to protect your
                personal information.
              </p>
              <p className="mt-3">
                While we strive to protect your information, no method of
                electronic transmission or storage is completely secure, and
                we cannot guarantee absolute security.
              </p>
            </Section>

            <Section title="Third-Party Links">
              <p>Our website may contain links to third-party websites.</p>
              <p className="mt-3">
                We are not responsible for the privacy practices or content of
                those websites.
              </p>
              <p className="mt-3">
                We encourage users to review the privacy policies of any
                third-party sites they visit.
              </p>
            </Section>

            <Section title="Your Choices">
              <p>You may:</p>
              <List
                items={[
                  "Request access to your personal information",
                  "Request correction of inaccurate information",
                  "Request deletion of your information (subject to legal requirements)",
                  "Opt out of marketing communications at any time using the unsubscribe link or by contacting us directly",
                ]}
              />
            </Section>

            <Section title="Children's Privacy">
              <p>
                Our website is not directed toward individuals under the age
                of 13.
              </p>
              <p className="mt-3">
                We do not knowingly collect personal information from
                children under 13.
              </p>
              <p className="mt-3">
                If we become aware that such information has been collected,
                we will promptly delete it.
              </p>
            </Section>

            <Section title="California Privacy Rights">
              <p>
                California residents may have additional rights under
                applicable privacy laws, including the California Consumer
                Privacy Act (CCPA), as amended.
              </p>
              <p className="mt-3">
                Eligible California residents may request:
              </p>
              <List
                items={[
                  "Access to personal information collected",
                  "Correction of inaccurate information",
                  "Deletion of personal information",
                  "Information regarding categories of data collected and disclosed",
                ]}
              />
              <p className="mt-3">
                Requests may be submitted using the contact information below.
              </p>
            </Section>

            <Section title="Changes to This Policy">
              <p>We may update this Privacy Policy from time to time.</p>
              <p className="mt-3">
                Changes become effective immediately upon posting the revised
                policy on this website.
              </p>
              <p className="mt-3">
                We encourage users to review this policy periodically.
              </p>
            </Section>

            <Section title="Contact Us">
              <p>
                If you have questions regarding this Privacy Policy or your
                personal information, please contact:
              </p>
              <p className="mt-3 font-medium text-brand-navy">
                America&apos;s Food Court
              </p>
              <p>
                Email:{" "}
                <a
                  href="mailto:privacy@americasfoodcourt.com"
                  className="text-brand-navy underline"
                >
                  privacy@americasfoodcourt.com
                </a>
              </p>
              <p>
                Website:{" "}
                <a
                  href="https://www.americasfoodcourt.com"
                  className="text-brand-navy underline"
                >
                  www.americasfoodcourt.com
                </a>
              </p>
            </Section>

            <p className="border-t border-gray-200 pt-6 text-sm text-gray-500">
              © America&apos;s Food Court. All Rights Reserved.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h2 className="text-brand-navy text-xl font-bold sm:text-2xl">
        {title}
      </h2>
      <div className="mt-3">{children}</div>
    </section>
  );
}

function List({ items }: { items: string[] }) {
  return (
    <ul className="list-disc space-y-1.5 pl-5">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}
