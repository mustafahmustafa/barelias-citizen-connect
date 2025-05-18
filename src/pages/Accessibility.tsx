
import React from 'react';
import { Users } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

const Accessibility = () => {
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
                The Municipality of Bar Elias is committed to ensuring digital accessibility for people with disabilities. 
                We are continually improving the user experience for everyone and applying the relevant accessibility standards.
              </p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4 flex items-center">
                <Users className="mr-2 h-6 w-6 text-primary" />
                Our Commitment
              </h2>
              <Separator className="my-4" />
              <div className="ml-8">
                <p>
                  We strive to ensure that our website complies with best practices and standards as defined by
                  the Web Content Accessibility Guidelines (WCAG) 2.1, Level AA. These guidelines explain how to
                  make web content more accessible for people with disabilities and more user-friendly for everyone.
                </p>
                <p className="mt-4">
                  The guidelines have three levels of accessibility: A, AA, and AAA. We've chosen Level AA as our target.
                </p>
              </div>

              <h2 className="text-2xl font-semibold mt-8 mb-4 flex items-center">
                <Users className="mr-2 h-6 w-6 text-primary" />
                Measures Taken
              </h2>
              <Separator className="my-4" />
              <div className="ml-8">
                <p>We've taken the following measures to ensure accessibility:</p>
                <ul className="list-disc ml-6 mt-2 space-y-2">
                  <li>Include alt text for all images</li>
                  <li>Provide appropriate contrast ratios for text and background colors</li>
                  <li>Ensure keyboard navigation throughout the website</li>
                  <li>Use ARIA attributes when appropriate</li>
                  <li>Structure content using proper heading levels</li>
                  <li>Make forms accessible with proper labels and error messages</li>
                  <li>Ensure responsive design for various devices and screen sizes</li>
                </ul>
              </div>

              <h2 className="text-2xl font-semibold mt-8 mb-4 flex items-center">
                <Users className="mr-2 h-6 w-6 text-primary" />
                Accessibility Features
              </h2>
              <Separator className="my-4" />
              <div className="ml-8">
                <p>Our website includes the following accessibility features:</p>
                <ul className="list-disc ml-6 mt-2 space-y-2">
                  <li>Semantic HTML</li>
                  <li>Alternative text for images</li>
                  <li>ARIA landmarks to identify regions of a page</li>
                  <li>Keyboard accessible navigation</li>
                  <li>Clear focus indicators</li>
                  <li>Sufficient color contrast</li>
                  <li>Resizable text</li>
                </ul>
              </div>

              <h2 className="text-2xl font-semibold mt-8 mb-4 flex items-center">
                <Users className="mr-2 h-6 w-6 text-primary" />
                Feedback
              </h2>
              <Separator className="my-4" />
              <div className="ml-8">
                <p>
                  We welcome your feedback on the accessibility of the Municipality of Bar Elias website.
                  If you encounter accessibility barriers on our website, please let us know:
                </p>
                <div className="mt-4">
                  <p>Email: <a href="mailto:accessibility@barelias-municipality.gov.lb" className="text-primary hover:underline">accessibility@barelias-municipality.gov.lb</a></p>
                  <p>Phone: +961 (0)8 123 456</p>
                </div>
                <p className="mt-4">
                  We try to respond to feedback within 3 business days.
                </p>
              </div>

              <h2 className="text-2xl font-semibold mt-8 mb-4 flex items-center">
                <Users className="mr-2 h-6 w-6 text-primary" />
                Limitations
              </h2>
              <Separator className="my-4" />
              <div className="ml-8">
                <p>
                  Despite our best efforts to ensure the accessibility of our website, there may be some limitations.
                  Below is a description of known limitations, and we are working to resolve them:
                </p>
                <ul className="list-disc ml-6 mt-2 space-y-2">
                  <li>Some older PDF documents may not be fully accessible. We are working to convert these to accessible formats.</li>
                  <li>Some embedded third-party content may not be fully accessible. We are working with vendors to improve accessibility.</li>
                </ul>
              </div>

              <h2 className="text-2xl font-semibold mt-8 mb-4 flex items-center">
                <Users className="mr-2 h-6 w-6 text-primary" />
                Assessment
              </h2>
              <Separator className="my-4" />
              <div className="ml-8">
                <p>
                  The Municipality of Bar Elias has assessed the accessibility of this website by the following methods:
                </p>
                <ul className="list-disc ml-6 mt-2 space-y-2">
                  <li>Self-evaluation using automated testing tools</li>
                  <li>Manual testing with screen readers and keyboard navigation</li>
                  <li>User testing with people who have disabilities</li>
                </ul>
              </div>

              <h2 className="text-2xl font-semibold mt-8 mb-4 flex items-center">
                <Users className="mr-2 h-6 w-6 text-primary" />
                Contact Information
              </h2>
              <Separator className="my-4" />
              <div className="ml-8">
                <p>For more information about our accessibility efforts, please contact:</p>
                <div className="mt-4">
                  <p>Accessibility Team</p>
                  <p>Municipality of Bar Elias</p>
                  <p>Email: <a href="mailto:accessibility@barelias-municipality.gov.lb" className="text-primary hover:underline">accessibility@barelias-municipality.gov.lb</a></p>
                  <p>Phone: +961 (0)8 123 456</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Accessibility;
