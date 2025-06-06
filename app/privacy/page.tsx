import Link from "next/link";

export default function PrivacyPage() {
  return (
    <div className="max-w-2xl mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
      <p className="text-sm text-gray-500 mb-6">Last Updated: June 15, 2024</p>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">Our Commitment to Privacy</h2>
        <p className="mb-4">At Fake Data Generator, we take your privacy seriously. Our core philosophy is built around data privacy and security. This Privacy Policy explains how we handle (or rather, don't handle) your information when you use our service.</p>
      </section>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">Information Collection</h2>
        <p className="mb-4"><strong>We do not collect any personal data.</strong> Fake Data Generator is designed to operate entirely within your browser. All data generation and processing happens locally on your device, and no data is transmitted to our servers or any third parties.</p>
        <p className="mb-4">Specifically, we do not collect:</p>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>Personal identification information</li>
          <li>Usage data or analytics</li>
          <li>Browser information</li>
          <li>IP addresses</li>
          <li>The data you generate using our tool</li>
          <li>Your templates or configurations</li>
        </ul>
      </section>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">Cookies and Tracking</h2>
        <p className="mb-4">We do not use cookies, web beacons, tracking pixels, or any other tracking technologies. Your usage of this tool is completely anonymous.</p>
        <p className="mb-4">The only data stored is any configuration or templates you choose to save, which are stored locally in your browser's localStorage and never transmitted to us.</p>
      </section>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">Third-Party Services</h2>
        <p className="mb-4">Our website is hosted on standard web hosting infrastructure. While the hosting provider may collect standard server logs (such as IP addresses and basic request information), we do not have access to this data and do not use it for any purpose.</p>
        <p className="mb-4">We do not integrate with any third-party analytics services, advertising networks, or social media platforms that would allow tracking of your activities.</p>
      </section>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">Data Security</h2>
        <p className="mb-4">Since we don't collect any data, there's no risk of your data being compromised on our end. However, we still implement standard security measures for our website, including HTTPS encryption for all connections.</p>
        <p className="mb-4">Remember that the data you generate using our tool remains on your device. We recommend handling any generated data according to your organization's data security policies, especially if it's used in conjunction with real data in your systems.</p>
      </section>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">Children's Privacy</h2>
        <p className="mb-4">Our service is not directed to children under the age of 13, and we do not knowingly collect personal information from children. Since we don't collect any personal information at all, this is not a concern in practice.</p>
      </section>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">Changes to This Privacy Policy</h2>
        <p className="mb-4">We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date at the top.</p>
        <p className="mb-4">We encourage you to review this Privacy Policy periodically for any changes.</p>
      </section>
      
      <section>
        <h2 className="text-2xl font-semibold mb-3">Contact Us</h2>
        <p className="mb-4">If you have any questions about our privacy practices or this policy, please contact us through our <a href="https://github.com/0x98c9/fakemint" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">GitHub repository</a> or visit our <Link href="/about" className="text-blue-600 underline">About page</Link> for more contact options.</p>
      </section>
    </div>
  );
}