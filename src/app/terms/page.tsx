import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Terms & Conditions — Americas Food Court",
  description:
    "Read the Terms & Conditions governing your access to and use of the Americas Food Court website.",
};

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main className="container-page mx-auto flex flex-1 flex-col pt-40 pb-16 sm:pt-44 sm:pb-24">
        <div className="mx-auto w-full max-w-3xl">
          <h1 className="text-brand-navy text-3xl font-bold sm:text-4xl">
            Website Terms &amp; Conditions
          </h1>
          <p className="mt-2 text-sm text-gray-500">
            Effective Date: [Insert Date]
          </p>

          <div className="mt-8 flex flex-col gap-8 text-gray-700">
            <p>
              Welcome to America&apos;s Food Court (&quot;America&apos;s Food
              Court,&quot; &quot;we,&quot; &quot;our,&quot; or &quot;us&quot;).
              These Terms &amp; Conditions (&quot;Terms&quot;) govern your
              access to and use of the America&apos;s Food Court website (the
              &quot;Website&quot;). By accessing or using this Website, you
              agree to be bound by these Terms. If you do not agree to these
              Terms, please discontinue use of the Website.
            </p>

            <Section number="1" title="Website Use">
              <p>
                This Website is intended to provide information regarding
                America&apos;s Food Court, its restaurant concepts, licensing
                opportunities, partnerships, products, services, and related
                information.
              </p>
              <p className="mt-3">
                You agree to use this Website only for lawful purposes and in
                a manner that does not infringe upon the rights of others or
                restrict or inhibit their use of the Website.
              </p>
              <p className="mt-3">You may not:</p>
              <List
                items={[
                  "Use the Website for any unlawful purpose.",
                  "Attempt to gain unauthorized access to any portion of the Website or its servers.",
                  "Introduce malicious software, viruses, or harmful code.",
                  "Interfere with the security or functionality of the Website.",
                  "Copy, reproduce, distribute, or commercially exploit Website content without prior written permission.",
                ]}
              />
            </Section>

            <Section number="2" title="Intellectual Property">
              <p>
                All content appearing on this Website, including but not
                limited to:
              </p>
              <List
                items={[
                  "Logos",
                  "Trademarks",
                  "Brand names",
                  "Restaurant concepts",
                  "Recipes",
                  "Product names",
                  "Menu descriptions",
                  "Photography",
                  "Videos",
                  "Graphics",
                  "Marketing materials",
                  "Website design",
                  "Layout",
                  "Text",
                  "Documents",
                  "Downloadable materials",
                ]}
              />
              <p className="mt-3">
                are the property of America&apos;s Food Court or its
                licensors and are protected by United States and
                international copyright, trademark, and intellectual property
                laws.
              </p>
              <p className="mt-3">
                No content may be copied, modified, reproduced, republished,
                transmitted, displayed, or distributed without prior written
                authorization.
              </p>
            </Section>

            <Section number="3" title="Trademarks">
              <p>
                America&apos;s Food Court®, One More Slice®, Dog It Up®,
                Chick Chick Eats®, Sweet Works®, Tu Manera®, and all
                associated logos, names, slogans, graphics, and proprietary
                branding are trademarks or service marks owned by
                America&apos;s Food Court or its affiliated companies.
              </p>
              <p className="mt-3">
                Unauthorized use of any trademark is strictly prohibited.
              </p>
            </Section>

            <Section number="4" title="Informational Purposes Only">
              <p>
                The information provided on this Website is intended for
                general informational purposes only.
              </p>
              <p className="mt-3">
                Although we strive to ensure accuracy, America&apos;s Food
                Court makes no representations or warranties regarding the
                completeness, reliability, or accuracy of the information
                presented.
              </p>
              <p className="mt-3">
                Product offerings, equipment, pricing, menu items,
                specifications, and services may change without notice.
              </p>
            </Section>

            <Section number="5" title="Licensing & Partnership Information">
              <p>
                Information regarding licensing opportunities, partnerships,
                restaurant development, or related business opportunities is
                provided solely for informational purposes.
              </p>
              <p className="mt-3">
                Submission of an inquiry or request for information does not
                create any contractual relationship between you and
                America&apos;s Food Court.
              </p>
              <p className="mt-3">
                America&apos;s Food Court reserves the right to approve,
                reject, or discontinue discussions with any prospective
                partner or applicant at its sole discretion.
              </p>
              <p className="mt-3">
                Nothing contained on this Website constitutes an offer to
                sell a franchise or license where prohibited by applicable
                law.
              </p>
              <p className="mt-3">
                Where applicable, franchise offerings are made only through
                the appropriate disclosure documents and in compliance with
                federal and state laws.
              </p>
            </Section>

            <Section number="6" title="User Submissions">
              <p>Any information submitted through this Website, including:</p>
              <List
                items={[
                  "Contact forms",
                  "Partnership inquiries",
                  "Licensing requests",
                  "Business proposals",
                  "Comments",
                  "Feedback",
                ]}
              />
              <p className="mt-3">
                may be used by America&apos;s Food Court to respond to your
                request or evaluate potential business opportunities.
              </p>
              <p className="mt-3">
                Except for information protected under our Privacy Policy,
                submissions will not be treated as confidential or
                proprietary.
              </p>
            </Section>

            <Section number="7" title="Third-Party Links">
              <p>
                This Website may contain links to third-party websites for
                your convenience.
              </p>
              <p className="mt-3">
                America&apos;s Food Court does not control or endorse
                third-party websites and is not responsible for their
                content, policies, products, or services.
              </p>
              <p className="mt-3">
                Accessing third-party websites is at your own risk.
              </p>
            </Section>

            <Section number="8" title="Disclaimer of Warranties">
              <p>
                This Website and all content are provided on an &quot;AS
                IS&quot; and &quot;AS AVAILABLE&quot; basis.
              </p>
              <p className="mt-3">
                America&apos;s Food Court expressly disclaims all warranties
                of any kind, whether express or implied, including but not
                limited to:
              </p>
              <List
                items={[
                  "Merchantability",
                  "Fitness for a particular purpose",
                  "Non-infringement",
                  "Accuracy",
                  "Availability",
                  "Reliability",
                ]}
              />
              <p className="mt-3">
                We do not warrant that the Website will be uninterrupted,
                secure, or error-free.
              </p>
            </Section>

            <Section number="9" title="Limitation of Liability">
              <p>
                To the fullest extent permitted by law, America&apos;s Food
                Court, its affiliates, officers, directors, employees,
                licensors, suppliers, and partners shall not be liable for
                any direct, indirect, incidental, consequential, special,
                exemplary, or punitive damages arising from:
              </p>
              <List
                items={[
                  "Use of this Website",
                  "Inability to use this Website",
                  "Website interruptions",
                  "Errors or omissions",
                  "Third-party content",
                  "Unauthorized access to data",
                  "Loss of business or profits",
                ]}
              />
              <p className="mt-3">
                Your sole remedy for dissatisfaction with the Website is to
                discontinue its use.
              </p>
            </Section>

            <Section number="10" title="Indemnification">
              <p>
                You agree to defend, indemnify, and hold harmless
                America&apos;s Food Court, its affiliates, officers,
                employees, licensors, and agents from any claims, damages,
                liabilities, costs, or expenses arising from:
              </p>
              <List
                items={[
                  "Your use of the Website",
                  "Your violation of these Terms",
                  "Your infringement of any intellectual property or legal rights of another party",
                ]}
              />
            </Section>

            <Section number="11" title="Privacy">
              <p>
                Your use of this Website is also governed by our{" "}
                <a href="/privacy" className="text-brand-navy underline">
                  Privacy Policy
                </a>
                , which is incorporated into these Terms by reference.
              </p>
            </Section>

            <Section number="12" title="Governing Law">
              <p>
                These Terms shall be governed by and construed in accordance
                with the laws of the State of Illinois, without regard to its
                conflict of law principles.
              </p>
              <p className="mt-3">
                Any legal action arising under these Terms shall be brought
                exclusively in the state or federal courts located within
                Illinois.
              </p>
            </Section>

            <Section number="13" title="Changes to These Terms">
              <p>
                America&apos;s Food Court reserves the right to modify these
                Terms at any time.
              </p>
              <p className="mt-3">
                Updated versions will be posted on this Website with a
                revised Effective Date.
              </p>
              <p className="mt-3">
                Continued use of the Website constitutes acceptance of any
                revisions.
              </p>
            </Section>

            <Section number="14" title="Contact Information">
              <p>
                If you have questions regarding these Terms &amp; Conditions,
                please contact:
              </p>
              <p className="mt-3 font-medium text-brand-navy">
                America&apos;s Food Court
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
              <p>
                Email:{" "}
                <a
                  href="mailto:legal@americasfoodcourt.com"
                  className="text-brand-navy underline"
                >
                  legal@americasfoodcourt.com
                </a>
              </p>
            </Section>

            <section className="border-t border-gray-200 pt-6">
              <h2 className="text-brand-navy text-xl font-bold sm:text-2xl">
                Copyright Notice
              </h2>
              <p className="mt-3 text-sm text-gray-500">
                © America&apos;s Food Court. All Rights Reserved.
              </p>
              <p className="mt-1 text-sm text-gray-500">
                All rights reserved. No portion of this Website or its
                contents may be copied, reproduced, distributed, or used
                without the prior written consent of America&apos;s Food
                Court.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

function Section({
  number,
  title,
  children,
}: {
  number: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h2 className="text-brand-navy text-xl font-bold sm:text-2xl">
        {number}. {title}
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
