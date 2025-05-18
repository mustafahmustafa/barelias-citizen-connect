
import React from 'react';
import { FileText } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

const Terms = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-primary text-white py-20">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold mb-4">Terms of Use</h1>
            <p className="text-xl opacity-90">
              Guidelines for using the Municipality of Bar Elias website
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
                Welcome to the official website of the Municipality of Bar Elias. By accessing and using this website,
                you agree to be bound by these Terms of Use, all applicable laws and regulations,
                and agree that you are responsible for compliance with any applicable local laws.
              </p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4 flex items-center">
                <FileText className="mr-2 h-6 w-6 text-primary" />
                1. Site Access
              </h2>
              <Separator className="my-4" />
              <div className="ml-8">
                <p>The Municipality of Bar Elias grants you permission to access and use the website for legitimate personal and informational purposes only. This permission may be revoked at any time without notice.</p>
              </div>

              <h2 className="text-2xl font-semibold mt-8 mb-4 flex items-center">
                <FileText className="mr-2 h-6 w-6 text-primary" />
                2. Intellectual Property
              </h2>
              <Separator className="my-4" />
              <div className="ml-8">
                <p>All content on this website, including text, graphics, logos, button icons, images, audio clips, and software, is the property of the Municipality of Bar Elias and is protected by Lebanese and international copyright laws.</p>
              </div>

              <h2 className="text-2xl font-semibold mt-8 mb-4 flex items-center">
                <FileText className="mr-2 h-6 w-6 text-primary" />
                3. Prohibited Activities
              </h2>
              <Separator className="my-4" />
              <div className="ml-8">
                <p>Users of this website shall not:</p>
                <ul className="list-disc ml-6 mt-2 space-y-2">
                  <li>Use the website in any way that violates any applicable law or regulation</li>
                  <li>Attempt to gain unauthorized access to any portion of the website</li>
                  <li>Reproduce, duplicate, copy, sell, or exploit any portion of the website</li>
                  <li>Upload any harmful content or files containing viruses</li>
                  <li>Interfere with the proper functioning of the website</li>
                </ul>
              </div>

              <h2 className="text-2xl font-semibold mt-8 mb-4 flex items-center">
                <FileText className="mr-2 h-6 w-6 text-primary" />
                4. Disclaimer
              </h2>
              <Separator className="my-4" />
              <div className="ml-8">
                <p>The materials on the Municipality of Bar Elias website are provided "as is." The Municipality makes no warranties, expressed or implied, and hereby disclaims all warranties, including without limitation implied warranties of merchantability or fitness for a particular purpose. The Municipality does not warrant that this website will be uninterrupted or error-free.</p>
              </div>

              <h2 className="text-2xl font-semibold mt-8 mb-4 flex items-center">
                <FileText className="mr-2 h-6 w-6 text-primary" />
                5. External Links
              </h2>
              <Separator className="my-4" />
              <div className="ml-8">
                <p>This website may contain links to other websites. These links are provided for convenience only. The Municipality does not endorse or make any representations about such third-party websites and is not responsible for their content.</p>
              </div>

              <h2 className="text-2xl font-semibold mt-8 mb-4 flex items-center">
                <FileText className="mr-2 h-6 w-6 text-primary" />
                6. Changes to Terms
              </h2>
              <Separator className="my-4" />
              <div className="ml-8">
                <p>The Municipality of Bar Elias reserves the right to revise these Terms of Use at any time without notice. By using this website, you agree to be bound by the current version of these Terms of Use.</p>
              </div>

              <h2 className="text-2xl font-semibold mt-8 mb-4 flex items-center">
                <FileText className="mr-2 h-6 w-6 text-primary" />
                7. Governing Law
              </h2>
              <Separator className="my-4" />
              <div className="ml-8">
                <p>Any claim relating to the Municipality of Bar Elias website shall be governed by the laws of Lebanon without regard to its conflict of law provisions.</p>
              </div>

              <h2 className="text-2xl font-semibold mt-8 mb-4 flex items-center">
                <FileText className="mr-2 h-6 w-6 text-primary" />
                Contact Information
              </h2>
              <Separator className="my-4" />
              <div className="ml-8">
                <p>If you have any questions about these Terms of Use, please contact us at:</p>
                <div className="mt-4">
                  <p>Municipality of Bar Elias</p>
                  <p>Email: <a href="mailto:info@barelias-municipality.gov.lb" className="text-primary hover:underline">info@barelias-municipality.gov.lb</a></p>
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

export default Terms;
