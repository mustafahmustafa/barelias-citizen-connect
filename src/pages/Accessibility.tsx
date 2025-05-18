
import React from 'react';
import { Accessibility, Mail, Phone } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

const AccessibilityPage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-primary text-white py-20">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold mb-4">Accessibility Statement</h1>
            <p className="text-xl opacity-90">
              Our commitment to digital inclusion
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
                The Municipality of Bar Elias is committed to ensuring that our website is accessible to everyone, including people with disabilities. 
                We strive to adhere to international best practices and Lebanese accessibility laws to provide an inclusive online experience.
              </p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4 flex items-center">
                <Accessibility className="mr-2 h-6 w-6 text-primary" aria-hidden="true" />
                1. Commitment to Accessibility
              </h2>
              <Separator className="my-4" />
              <div className="ml-8">
                <ul className="list-disc ml-6 space-y-2">
                  <li>We aim for full compliance with <strong>WCAG 2.1 Level AA</strong> standards, published by the World Wide Web Consortium (W3C).</li>
                  <li>We uphold the principles of <strong>Perceivable, Operable, Understandable,</strong> and <strong>Robust</strong> content for all users.</li>
                  <li>Our accessibility efforts are guided by:
                    <ul className="list-disc ml-6 mt-2 space-y-1">
                      <li><strong>Lebanese Law No. 220 of 2000</strong> on the Rights of Persons with Disabilities.</li>
                      <li>The <strong>UN Convention on the Rights of Persons with Disabilities</strong>, ratified by Lebanon in 2007.</li>
                    </ul>
                  </li>
                </ul>
              </div>

              <h2 className="text-2xl font-semibold mt-8 mb-4 flex items-center">
                <Accessibility className="mr-2 h-6 w-6 text-primary" aria-hidden="true" />
                2. Measures to Support Accessibility
              </h2>
              <Separator className="my-4" />
              <div className="ml-8">
                <p>To make our website as accessible as possible, we:</p>
                <ul className="list-disc ml-6 mt-2 space-y-2">
                  <li>Use <strong>semantic HTML</strong> elements (e.g., <code>&lt;header&gt;</code>, <code>&lt;nav&gt;</code>, <code>&lt;main&gt;</code>, <code>&lt;footer&gt;</code>) for logical structure.</li>
                  <li>Provide <strong>alternative text</strong> for all images, icons, and non-text content.</li>
                  <li>Ensure <strong>keyboard navigation</strong> is available throughout the site (no "keyboard traps").</li>
                  <li>Maintain <strong>sufficient color contrast</strong> for text and interactive elements.</li>
                  <li>Include <strong>captions and transcripts</strong> for all multimedia content.</li>
                  <li>Design forms with <strong>clear labels</strong>, instructions, and error messages.</li>
                  <li>Structure headings (<code>&lt;h1&gt;</code>–<code>&lt;h6&gt;</code>) hierarchically for ease of navigation with screen readers.</li>
                  <li>Implement <strong>ARIA attributes</strong> only when necessary to convey additional semantics.</li>
                  <li>Test regularly with automated tools (e.g., Axe, Lighthouse) and manual checks using screen readers (NVDA, VoiceOver).</li>
                </ul>
              </div>

              <h2 className="text-2xl font-semibold mt-8 mb-4 flex items-center">
                <Accessibility className="mr-2 h-6 w-6 text-primary" aria-hidden="true" />
                3. Known Limitations & Workarounds
              </h2>
              <Separator className="my-4" />
              <div className="ml-8">
                <p>While we continuously improve accessibility, you may encounter issues such as:</p>
                <ul className="list-disc ml-6 mt-2 space-y-2">
                  <li><strong>PDF documents</strong> that are not fully tagged for assistive technologies.</li>
                  <li>Interactive maps or charts that may not expose all data to screen readers.</li>
                </ul>
                <p className="mt-4"><strong>Workaround:</strong></p>
                <p>If you experience difficulty accessing any content, please contact us (see Section 6 below) and we will provide the information in an alternative, accessible format—such as plain text, high-contrast PDF, or audio recording—within 3 business days.</p>
              </div>

              <h2 className="text-2xl font-semibold mt-8 mb-4 flex items-center">
                <Accessibility className="mr-2 h-6 w-6 text-primary" aria-hidden="true" />
                4. Compatibility with Browsers & Assistive Technologies
              </h2>
              <Separator className="my-4" />
              <div className="ml-8">
                <p>Our site is tested and verified to work with:</p>
                <p className="mt-4"><strong>Browsers:</strong></p>
                <ul className="list-disc ml-6 mt-2 space-y-1">
                  <li>Google Chrome (latest)</li>
                  <li>Mozilla Firefox (latest)</li>
                  <li>Microsoft Edge (latest)</li>
                  <li>Safari (latest)</li>
                </ul>
                <p className="mt-4"><strong>Assistive Technologies:</strong></p>
                <ul className="list-disc ml-6 mt-2 space-y-1">
                  <li>NVDA (Windows)</li>
                  <li>VoiceOver (macOS, iOS)</li>
                  <li>TalkBack (Android)</li>
                </ul>
                <p className="mt-4">For the best experience, please keep your browser and assistive software up to date.</p>
              </div>

              <h2 className="text-2xl font-semibold mt-8 mb-4 flex items-center">
                <Accessibility className="mr-2 h-6 w-6 text-primary" aria-hidden="true" />
                5. Ongoing Accessibility Efforts
              </h2>
              <Separator className="my-4" />
              <div className="ml-8">
                <ul className="list-disc ml-6 mt-2 space-y-2">
                  <li>We conduct <strong>quarterly audits</strong> to measure conformance and identify areas for improvement.</li>
                  <li>Our development team receives <strong>annual training</strong> on accessible design and coding practices.</li>
                  <li>We integrate accessibility into our <strong>design system</strong>, ensuring new features meet standards from day one.</li>
                </ul>
              </div>

              <h2 className="text-2xl font-semibold mt-8 mb-4 flex items-center">
                <Mail className="mr-2 h-6 w-6 text-primary" aria-hidden="true" />
                6. Feedback & Contact Information
              </h2>
              <Separator className="my-4" />
              <div className="ml-8">
                <p>Your feedback helps us improve. If you encounter any barriers or have suggestions, please let us know:</p>
                <div className="bg-gray-50 p-4 rounded-md my-4 border-l-4 border-primary">
                  <p className="font-semibold">Accessibility Coordinator</p>
                  <p>Municipality of Bar Elias</p>
                  <p>Email: <a href="mailto:accessibility@barelias.gov.lb" className="text-primary hover:underline">accessibility@barelias.gov.lb</a></p>
                  <p>Phone: <a href="tel:+961-6-xxxxxxx" className="text-primary hover:underline">+961-6-xxxxxxx</a></p>
                  <p>Office Hours: Monday–Friday, 8:00 AM–4:00 PM (Lebanese Time)</p>
                </div>
                <p>Please specify:</p>
                <ol className="list-decimal ml-6 mt-2 space-y-1">
                  <li>The web page URL or description of where the issue occurred.</li>
                  <li>The nature of the accessibility problem (e.g., missing alt text, keyboard issue).</li>
                  <li>Your preferred format for receiving the information.</li>
                </ol>
                <p className="mt-4">We aim to acknowledge all inquiries within 2 business days and resolve issues promptly.</p>
              </div>

              <h2 className="text-2xl font-semibold mt-8 mb-4 flex items-center">
                <Accessibility className="mr-2 h-6 w-6 text-primary" aria-hidden="true" />
                7. Review & Updates
              </h2>
              <Separator className="my-4" />
              <div className="ml-8">
                <p>This statement is reviewed annually or upon significant site changes. The "Last updated" date above reflects our most recent review.</p>
                <p className="mt-4">Thank you for helping us make the Municipality of Bar Elias website accessible to all!</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AccessibilityPage;
