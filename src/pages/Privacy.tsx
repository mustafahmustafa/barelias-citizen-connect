
import React from 'react';
import { Mail, Shield } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

const Privacy = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-primary text-white py-20">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-xl opacity-90">
              How the Municipality of Bar Elias collects, uses, and protects your personal information
            </p>
            <p className="text-sm mt-4">Last updated: May 18, 2025</p>
          </div>
        </div>
      </section>
      
      {/* Content Section */}
      <section className="py-12">
        <div className="container-custom max-w-4xl">
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="prose max-w-none">
              <p className="text-lg mb-6">
                This Privacy Policy describes how the Municipality of Bar Elias ("we," "us," or "the Municipality") 
                collects, uses, discloses, and protects personal data submitted through our website (the "Site") 
                in accordance with Lebanese Law No. 81 of May 3, 2018 on the Protection of Personal Data (the "PDPL") 
                and other applicable Lebanese regulations governing municipal data.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4 flex items-center">
                <Shield className="mr-2 h-6 w-6 text-primary" />
                1. Data Controller
              </h2>
              <Separator className="my-4" />
              <div className="ml-8">
                <p>The Municipality of Bar Elias</p>
                <p>Address: Municipality Building, Main Street, Bar Elias, Bekaa Valley, Lebanon</p>
                <p>Email: <a href="mailto:privacy@barelias.gov.lb" className="text-primary hover:underline">privacy@barelias.gov.lb</a></p>
                <p>Phone: +961-6-xxxxxxx</p>
              </div>

              <h2 className="text-2xl font-semibold mt-8 mb-4 flex items-center">
                <Shield className="mr-2 h-6 w-6 text-primary" />
                2. Scope & Applicability
              </h2>
              <Separator className="my-4" />
              <div className="ml-8">
                <p>This Policy applies to all personal data you provide when you:</p>
                <ul className="list-disc ml-6 mt-2 space-y-2">
                  <li>Fill out contact forms (e.g., "Contact Us," "Report a Problem")</li>
                  <li>Sign up for newsletters, events, polls, or surveys</li>
                  <li>Interact with online services (e.g., service requests, appointment booking)</li>
                  <li>Visit pages that collect analytics via cookies and similar technologies</li>
                </ul>
              </div>

              <h2 className="text-2xl font-semibold mt-8 mb-4 flex items-center">
                <Shield className="mr-2 h-6 w-6 text-primary" />
                3. Definitions
              </h2>
              <Separator className="my-4" />
              <div className="ml-8">
                <ul className="list-disc ml-6 space-y-2">
                  <li><strong>"Personal Data"</strong> means any information relating to an identified or identifiable natural person, as defined under Article 2 of the PDPL.</li>
                  <li><strong>"Processing"</strong> means any operation performed on personal data, including collection, recording, storage, use, disclosure, or erasure.</li>
                </ul>
              </div>

              <h2 className="text-2xl font-semibold mt-8 mb-4 flex items-center">
                <Shield className="mr-2 h-6 w-6 text-primary" />
                4. Lawful Basis for Processing
              </h2>
              <Separator className="my-4" />
              <div className="ml-8">
                <p>Under the PDPL, we process your personal data only when at least one of the following applies:</p>
                <ul className="list-disc ml-6 mt-2 space-y-2">
                  <li><strong>Consent:</strong> You have explicitly consented to the processing for one or more specified purposes.</li>
                  <li><strong>Legal Obligation:</strong> Processing is necessary for compliance with a legal obligation to which the Municipality is subject.</li>
                  <li><strong>Public Interest and Official Authority:</strong> Processing is necessary for the performance of tasks carried out in the public interest or in the exercise of official authority vested in the Municipality.</li>
                </ul>
              </div>

              <h2 className="text-2xl font-semibold mt-8 mb-4 flex items-center">
                <Shield className="mr-2 h-6 w-6 text-primary" />
                5. Categories of Personal Data Collected
              </h2>
              <Separator className="my-4" />
              <div className="ml-8 overflow-x-auto">
                <table className="min-w-full border border-gray-300">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="px-4 py-2 border-b border-r border-gray-300 text-left">Category</th>
                      <th className="px-4 py-2 border-b border-r border-gray-300 text-left">Examples</th>
                      <th className="px-4 py-2 border-b border-gray-300 text-left">Source</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="px-4 py-2 border-b border-r border-gray-300 font-medium">Identification Data</td>
                      <td className="px-4 py-2 border-b border-r border-gray-300">Name, national ID/passport number</td>
                      <td className="px-4 py-2 border-b border-gray-300">You</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border-b border-r border-gray-300 font-medium">Contact Data</td>
                      <td className="px-4 py-2 border-b border-r border-gray-300">Email address, telephone number, postal address</td>
                      <td className="px-4 py-2 border-b border-gray-300">You</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border-b border-r border-gray-300 font-medium">Location Data</td>
                      <td className="px-4 py-2 border-b border-r border-gray-300">Geolocation (when reporting a street issue), map coordinates</td>
                      <td className="px-4 py-2 border-b border-gray-300">You (optional)</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border-b border-r border-gray-300 font-medium">Usage Data</td>
                      <td className="px-4 py-2 border-b border-r border-gray-300">IP address, browser type, pages visited, cookies</td>
                      <td className="px-4 py-2 border-b border-gray-300">Automatically via website analytics</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border-r border-gray-300 font-medium">Multimedia Files</td>
                      <td className="px-4 py-2 border-r border-gray-300">Photos or videos you upload when reporting an issue</td>
                      <td className="px-4 py-2">You</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 className="text-2xl font-semibold mt-8 mb-4 flex items-center">
                <Shield className="mr-2 h-6 w-6 text-primary" />
                6. Purposes of Processing
              </h2>
              <Separator className="my-4" />
              <div className="ml-8">
                <p>We use your personal data to:</p>
                <ol className="list-decimal ml-6 mt-2 space-y-2">
                  <li><strong>Respond to Inquiries & Requests</strong> – Handle "Contact Us" messages, service applications, problem reports.</li>
                  <li><strong>Deliver Services</strong> – Process appointments, issue permits, send notifications.</li>
                  <li><strong>Communicate Updates</strong> – Send newsletters, event invitations, emergency alerts.</li>
                  <li><strong>Conduct Polls & Surveys</strong> – Collect opinions, publish aggregated results.</li>
                  <li><strong>Improve the Website</strong> – Analyze usage patterns for better navigation and performance.</li>
                  <li><strong>Legal & Regulatory Compliance</strong> – Maintain records in accordance with Lebanese municipal regulations.</li>
                </ol>
              </div>

              <h2 className="text-2xl font-semibold mt-8 mb-4 flex items-center">
                <Shield className="mr-2 h-6 w-6 text-primary" />
                7. Disclosure to Third Parties
              </h2>
              <Separator className="my-4" />
              <div className="ml-8">
                <p>We may share your personal data with:</p>
                <ul className="list-disc ml-6 mt-2 space-y-2">
                  <li><strong>Authorized Municipal Departments</strong> – For fulfillment of your requests.</li>
                  <li><strong>Service Providers & Partners</strong> – Under strict confidentiality agreements (e.g., IT hosting, analytics).</li>
                  <li><strong>Legal Authorities</strong> – When required by Lebanese law or judicial order.</li>
                </ul>
                <p className="mt-4">We will never sell or rent your personal data to non-affiliated third parties.</p>
              </div>

              <h2 className="text-2xl font-semibold mt-8 mb-4 flex items-center">
                <Shield className="mr-2 h-6 w-6 text-primary" />
                8. Data Retention
              </h2>
              <Separator className="my-4" />
              <div className="ml-8">
                <p>We retain your personal data only as long as necessary for the purposes outlined above, and in compliance with:</p>
                <ul className="list-disc ml-6 mt-2 space-y-2">
                  <li>PDPL requirements (no longer than 15 years for public records, Article 23 PDPL)</li>
                  <li>Other Lebanese municipal record-keeping laws</li>
                </ul>
                <p className="mt-4">When data is no longer required, we securely delete or anonymize it.</p>
              </div>

              <h2 className="text-2xl font-semibold mt-8 mb-4 flex items-center">
                <Shield className="mr-2 h-6 w-6 text-primary" />
                9. Your Rights under the PDPL
              </h2>
              <Separator className="my-4" />
              <div className="ml-8">
                <p>Under Articles 16–19 of the PDPL, you have the right to:</p>
                <ul className="list-disc ml-6 mt-2 space-y-2">
                  <li><strong>Access</strong> the personal data we hold about you.</li>
                  <li><strong>Rectify</strong> inaccurate or incomplete data.</li>
                  <li><strong>Object</strong> to processing in certain circumstances.</li>
                  <li><strong>Erase</strong> your data (the "right to be forgotten"), subject to legal record-keeping obligations.</li>
                  <li><strong>Withdraw Consent</strong> at any time, without affecting the lawfulness of processing based on consent before its withdrawal.</li>
                </ul>
                <p className="mt-4">To exercise these rights, please contact us at <a href="mailto:privacy@barelias.gov.lb" className="text-primary hover:underline">privacy@barelias.gov.lb</a> or send a written request to the Municipality's data protection officer. We will respond within 30 days, as mandated by law.</p>
              </div>

              <h2 className="text-2xl font-semibold mt-8 mb-4 flex items-center">
                <Shield className="mr-2 h-6 w-6 text-primary" />
                10. Cookies & Tracking Technologies
              </h2>
              <Separator className="my-4" />
              <div className="ml-8">
                <p>Our Site uses cookies and similar technologies to enhance your experience and gather website analytics. You may configure your browser to reject cookies or notify you before accepting them; however, some features of the Site may not function properly without cookies.</p>
              </div>

              <h2 className="text-2xl font-semibold mt-8 mb-4 flex items-center">
                <Shield className="mr-2 h-6 w-6 text-primary" />
                11. Security Measures
              </h2>
              <Separator className="my-4" />
              <div className="ml-8">
                <p>We implement appropriate technical and organizational measures—such as encryption, access controls, and regular security audits—to protect your personal data against unauthorized access, alteration, or destruction.</p>
              </div>

              <h2 className="text-2xl font-semibold mt-8 mb-4 flex items-center">
                <Shield className="mr-2 h-6 w-6 text-primary" />
                12. Children's Privacy
              </h2>
              <Separator className="my-4" />
              <div className="ml-8">
                <p>Our Site is not intended for users under the age of 15. We do not knowingly collect personal data from minors. If you are a parent or guardian and believe your child has provided us with personal data, please contact us, and we will promptly delete it.</p>
              </div>

              <h2 className="text-2xl font-semibold mt-8 mb-4 flex items-center">
                <Shield className="mr-2 h-6 w-6 text-primary" />
                13. Changes to This Policy
              </h2>
              <Separator className="my-4" />
              <div className="ml-8">
                <p>We may update this Policy to reflect changes in legal requirements or our practices. We will post the revised Policy on this page with an updated "Last updated" date.</p>
              </div>

              <h2 className="text-2xl font-semibold mt-8 mb-4 flex items-center">
                <Shield className="mr-2 h-6 w-6 text-primary" />
                14. Governing Law & Jurisdiction
              </h2>
              <Separator className="my-4" />
              <div className="ml-8">
                <p>This Privacy Policy and any disputes arising from it shall be governed exclusively by Lebanese law. Any litigation shall fall within the jurisdiction of the competent courts of Bar Elias, Lebanon.</p>
              </div>

              <h2 className="text-2xl font-semibold mt-8 mb-4 flex items-center">
                <Mail className="mr-2 h-6 w-6 text-primary" />
                Contact Us
              </h2>
              <Separator className="my-4" />
              <div className="ml-8">
                <p>For questions or concerns about this Privacy Policy or our data practices, please contact:</p>
                <div className="mt-4">
                  <p className="font-semibold">Data Protection Officer</p>
                  <p>Municipality of Bar Elias</p>
                  <p>Email: <a href="mailto:privacy@barelias.gov.lb" className="text-primary hover:underline">privacy@barelias.gov.lb</a></p>
                  <p>Phone: +961-6-xxxxxxx</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Privacy;
