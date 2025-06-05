import React from 'react';
import { Section, GradientText } from '@/components/common';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ShieldCheck, RotateCcw, Building } from 'lucide-react';

const LegalSection = () => {
  return (
    <Section id="legal" className="bg-gray-800/70" aria-labelledby="legal-heading">
      <h2 id="legal-heading" className="text-3xl md:text-4xl font-bold text-center mb-12"><GradientText>Important Information</GradientText></h2>
      <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10">
        <Card className="bg-slate-800/40 border-purple-500/30 shadow-purple-500/10" aria-labelledby="privacy-policy-heading">
          <CardHeader>
            <div className="flex items-center mb-3">
              <ShieldCheck aria-hidden="true" className="w-7 h-7 md:w-8 md:h-8 mr-3 text-purple-400" />
              <CardTitle id="privacy-policy-heading" className="text-2xl md:text-3xl text-purple-400">Privacy Policy</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="text-gray-300 space-y-3 text-sm md:text-base lg:text-lg">
            <p>Your trust is important to us. We believe in a positive-sum approach: your privacy benefits you and helps us build a better experience for everyone.</p>
            <ul className="list-disc list-inside space-y-2 pl-4 marker:text-purple-400">
              <li><strong>Information We Collect:</strong> We only collect information essential for your participation in Stormfest (e.g., ticket purchases, event updates). This may include your name, email, and contact details.</li>
              <li><strong>How We Use It:</strong> Your information is used to manage your event access, provide updates, and improve Stormfest. We aim to create value for you, not just extract it.</li>
              <li><strong>Sharing:</strong> We do not sell your personal data. We may share it with trusted partners only when necessary for event operations (e.g., payment processors), and always with your well-being in mind.</li>
              <li><strong>Your Rights:</strong> You have the right to access and request correction of your information. We are committed to transparency.</li>
              <li><strong>Data Security:</strong> We take reasonable measures to protect your information, fostering a secure environment for our community.</li>
              <li><strong>MSME Compliance:</strong> This policy is designed to be straightforward and compliant with applicable Indian laws for Micro, Small, and Medium Enterprises. We believe in fair and clear practices.</li>
            </ul>
            <p className="mt-4 text-xs md:text-sm text-gray-400">By participating in Stormfest, you agree to this simple and fair approach to privacy.</p>
          </CardContent>
        </Card>

        <Card className="bg-slate-800/40 border-pink-500/30 shadow-pink-500/10" aria-labelledby="refund-policy-heading">
          <CardHeader>
            <div className="flex items-center mb-3">
              <RotateCcw aria-hidden="true" className="w-7 h-7 md:w-8 md:h-8 mr-3 text-pink-400" />
              <CardTitle id="refund-policy-heading" className="text-2xl md:text-3xl text-pink-400">Refund Policy</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="text-gray-300 space-y-3 text-sm md:text-base lg:text-lg">
            <p>We aim for fairness and transparency in all our interactions, including refunds.</p>
            <ul className="list-disc list-inside space-y-2 pl-4 marker:text-pink-400">
              <li><strong>General Policy:</strong> Tickets are generally non-refundable. This helps us plan and deliver the best possible Stormfest experience for all attendees.</li>
              <li><strong>Event Cancellation:</strong> If Stormfest is cancelled by us for unforeseen circumstances, a full refund will be offered for the ticket price. This is our commitment to you.</li>
              <li><strong>Event Postponement:</strong> If Stormfest is postponed, your ticket will be valid for the new dates. If you cannot attend the new dates, we will review refund requests on a case-by-case basis, aiming for a mutually agreeable solution.</li>
              <li><strong>Exceptional Circumstances:</strong> We understand life happens. For exceptional personal circumstances, please contact our support team. While not guaranteed, we will consider requests with empathy.</li>
              <li><strong>Processing:</strong> Approved refunds will be processed within a reasonable timeframe, typically 15-30 working days, back to the original payment method.</li>
              <li><strong>MSME Consideration:</strong> As an MSME, we strive for policies that are sustainable and fair to both our attendees and our operational needs.</li>
            </ul>
            <p className="mt-4 text-xs md:text-sm text-gray-400">Please review terms at the time of purchase. For any queries, contact our support.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mt-10 md:mt-12 text-center" aria-labelledby="msme-info-heading">
        <Card className="inline-block bg-slate-800/50 border-teal-500/30 shadow-teal-500/10 p-4 md:p-6 max-w-lg">
          <CardHeader className="!p-0 items-center">
            <div className="flex items-center mb-2">
              <Building aria-hidden="true" className="w-6 h-6 md:w-7 md:h-7 mr-3 text-teal-400" />
              <CardTitle id="msme-info-heading" className="text-xl md:text-2xl text-teal-400">MSME Information</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="!p-0 text-gray-300 space-y-1 text-sm md:text-md">
            <p>Stormcrew is proud to be a Micro, Small, and Medium Enterprise (MSME) registered in India.</p>
            <p>We are committed to contributing to the vibrant cultural and economic landscape.</p>
            <p className="text-xs md:text-sm text-gray-400">(Further MSME details like Udyam Registration Number can be displayed here if required)</p>
          </CardContent>
        </Card>
      </div>
    </Section>
  );
};

export default LegalSection;