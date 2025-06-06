import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="max-w-2xl mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-6">About Fake Data Generator</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">Our Mission</h2>
        <p className="mb-4">Fake Data Generator is a powerful tool designed to help developers, testers, and data scientists quickly generate realistic fake data for their projects. Our mission is to make data generation simple, flexible, and privacy-friendly while ensuring the highest quality of synthetic data.</p>
        <p className="mb-4">We understand the challenges of working with data in development environments. Whether you're building a prototype, testing an application, or training machine learning models, having access to realistic but non-sensitive data is crucial. That's where we come in.</p>
      </section>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">Key Features</h2>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li><span className="font-medium">Diverse Data Types:</span> Generate everything from basic personal information to complex structured data.</li>
          <li><span className="font-medium">Customizable Templates:</span> Create and save your own data generation templates for repeated use.</li>
          <li><span className="font-medium">Privacy-First Approach:</span> All data is generated locally in your browser - nothing is sent to our servers.</li>
          <li><span className="font-medium">Multiple Export Formats:</span> Export your generated data in JSON, CSV, SQL, and other popular formats.</li>
          <li><span className="font-medium">Realistic Data:</span> Our algorithms create believable, contextually appropriate fake data.</li>
        </ul>
      </section>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">Our Technology</h2>
        <p className="mb-4">This project is open source and built with modern web technologies including Next.js, React, and TypeScript. We prioritize performance and user experience, ensuring that even large datasets can be generated quickly and efficiently.</p>
        <p className="mb-4">Our data generation algorithms are carefully designed to create realistic, contextually appropriate data while ensuring no real personal information is ever used or exposed.</p>
      </section>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">Community & Contributions</h2>
        <p className="mb-4">We welcome feedback and contributions from the community. Whether you're reporting a bug, suggesting a feature, or contributing code, your input helps make Fake Data Generator better for everyone.</p>
        <p className="mb-4">Visit our <a href="https://github.com/0x98c9/fakemint" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">GitHub repository</a> to get involved or to learn more about the project's development.</p>
      </section>
      
      <section>
        <h2 className="text-2xl font-semibold mb-3">Contact Us</h2>
        <p className="mb-4">Have questions, suggestions, or feedback? We'd love to hear from you! Reach out to us through our <a href="https://twitter.com/0x98c9" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Twitter</a> or open an issue on our GitHub repository.</p>
        <p>For privacy concerns, please review our <Link href="/privacy" className="text-blue-600 underline">Privacy Policy</Link>.</p>
      </section>
    </div>
  );
}