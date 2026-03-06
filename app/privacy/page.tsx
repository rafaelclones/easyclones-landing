"use client";

import Link from "next/link";

const BRAND = "#FF4201";
const DARK = "#0A0A0A";
const GRAY = "#6B7280";

export default function PrivacyPolicy() {
  return (
    <div style={{ background: "white", minHeight: "100vh" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400&family=Instrument+Serif:ital@0;1&display=swap');
        * { margin: 0; padding: 0; box-sizing: border-box; }
        html { scroll-behavior: smooth; }
      `}</style>

      {/* Nav */}
      <nav style={{
        borderBottom: "1px solid #E5E7EB",
        padding: "0 max(24px, calc((100% - 900px)/2))",
        background: "white",
      }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: 72 }}>
          <Link href="/" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
            <svg width={32} height={32} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="100" height="100" rx="18" fill={BRAND} />
              <path d="M28 75L46 28C47 25 49.5 23 52 23C54.5 23 57 25 58 28L67 53L52 46L42 73C41 76 38 78 35 78C32 78 29.5 77 28 75Z" fill="white" />
              <path d="M57 50L73 78C74 80 72 82 69.5 81C67.5 80.5 66 78.5 65 76.5L54 54L57 50Z" fill="white" />
              <circle cx="73" cy="73" r="5.5" fill="white" />
            </svg>
            <span style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: 18, color: DARK }}>Easy Clones</span>
          </Link>
          <Link href="/" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: BRAND, textDecoration: "none", fontWeight: 600 }}>
            ← Back to Home
          </Link>
        </div>
      </nav>

      {/* Content */}
      <main style={{ padding: "64px max(24px, calc((100% - 780px)/2)) 100px" }}>
        <h1 style={{
          fontFamily: "'Instrument Serif', Georgia, serif",
          fontSize: "clamp(32px, 5vw, 48px)",
          fontWeight: 400,
          color: DARK,
          marginBottom: 8,
          letterSpacing: "-1px",
        }}>
          Privacy Policy
        </h1>
        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: GRAY, marginBottom: 48 }}>
          Last Updated: March 6, 2026
        </p>

        <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 16, color: "#374151", lineHeight: 1.85 }}>

          <Section title="1. Introduction">
            Easy Clones (&ldquo;Company,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) is committed to protecting the privacy and personal data of our clients, their representatives, and visitors to our website. This Privacy Policy describes how we collect, use, disclose, and safeguard your information when you visit our website, engage our services, or otherwise interact with us. By accessing or using our services, you agree to the terms of this Privacy Policy. If you do not agree, please do not use our services.
          </Section>

          <Section title="2. Information We Collect">
            <strong>2.1 Information You Provide Directly</strong>
            <br /><br />
            We may collect the following categories of personal information when you fill out forms, apply for our services, or communicate with us: name, email address, phone number, company name and website, social media handles, billing and payment information, and any other information you voluntarily provide in discovery calls, emails, or chat.
            <br /><br />
            <strong>2.2 Biometric and Likeness Data</strong>
            <br /><br />
            To create AI clones, we collect and process biometric and likeness data, including but not limited to: photographs, video recordings, and audio/voice recordings of the individual to be cloned. This data is collected exclusively with the written consent of the individual whose likeness is being reproduced, in compliance with applicable state and federal laws including but not limited to California AB 2602, Tennessee&apos;s ELVIS Act, Arkansas HB 1071, and New York Senate Bill 7676B.
            <br /><br />
            <strong>2.3 Automatically Collected Information</strong>
            <br /><br />
            When you visit our website, we may automatically collect certain information including: IP address, browser type and version, device type, operating system, pages visited and time spent, referring URL, and cookies and similar tracking technologies.
          </Section>

          <Section title="3. How We Use Your Information">
            We use the information we collect for the following purposes: to provide, operate, and maintain our AI clone creation services; to process and fulfill service orders; to train AI models solely for the purpose of creating your authorized clone; to communicate with you regarding your account, orders, and support requests; to send marketing communications (only with your consent); to improve our website and services; to comply with legal obligations; and to protect against fraud, unauthorized activity, and misuse.
          </Section>

          <Section title="4. Biometric Data Handling">
            We understand the sensitive nature of biometric data and apply the following safeguards:
            <br /><br />
            <strong>Consent:</strong> We only collect biometric data (voice, likeness, video) with explicit, written consent from the individual being cloned. Consent forms specify the scope, purpose, permitted channels, languages, formats, and duration of use.
            <br /><br />
            <strong>Purpose Limitation:</strong> Biometric data is used solely for the purpose of creating the authorized AI clone as described in the service agreement. We do not sell, license, or otherwise transfer biometric data to third parties for their own purposes.
            <br /><br />
            <strong>Retention:</strong> Biometric training data (raw photos, video, audio) is retained only for the duration necessary to complete the clone creation and any agreed-upon revision period. After the project is delivered and the revision window closes, raw biometric training data is deleted within 90 days unless the client requests ongoing storage for future updates.
            <br /><br />
            <strong>Security:</strong> Biometric data is stored using industry-standard encryption (AES-256 at rest, TLS 1.3 in transit) on access-controlled servers. Access is limited to authorized team members directly involved in clone production.
            <br /><br />
            <strong>Revocation:</strong> The individual whose likeness has been cloned may revoke consent at any time by contacting us in writing. Upon revocation, we will cease using the clone and delete all associated biometric data within 30 days, subject to any contractual obligations.
          </Section>

          <Section title="5. Disclosure of Your Information">
            We may share your information with the following parties:
            <br /><br />
            <strong>Service Providers:</strong> Third-party vendors who assist in AI model training, cloud hosting, payment processing, and email delivery. These providers are contractually bound to protect your data and use it only for the purposes we specify.
            <br /><br />
            <strong>Legal Compliance:</strong> We may disclose information if required by law, regulation, legal process, or governmental request, or to protect the rights, property, or safety of Easy Clones, our clients, or the public.
            <br /><br />
            <strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of the transaction. You will be notified of any such change.
            <br /><br />
            We do not sell personal information to third parties. We do not share biometric data with any third party except as strictly necessary to provide our services.
          </Section>

          <Section title="6. Cookies and Tracking Technologies">
            Our website uses cookies and similar technologies to enhance your browsing experience, analyze site traffic, and understand where our visitors come from. You may control the use of cookies through your browser settings. Disabling cookies may affect the functionality of certain parts of our website.
          </Section>

          <Section title="7. Your Rights">
            Depending on your jurisdiction, you may have the following rights regarding your personal information:
            <br /><br />
            <strong>Access:</strong> Request a copy of the personal information we hold about you.
            <br /><br />
            <strong>Correction:</strong> Request correction of inaccurate or incomplete data.
            <br /><br />
            <strong>Deletion:</strong> Request deletion of your personal information, subject to legal retention requirements.
            <br /><br />
            <strong>Opt-Out:</strong> Opt out of marketing communications at any time.
            <br /><br />
            <strong>Data Portability:</strong> Request your data in a commonly used, machine-readable format.
            <br /><br />
            <strong>Biometric Data Revocation:</strong> Revoke consent for use of your biometric data at any time.
            <br /><br />
            To exercise any of these rights, please contact us at privacy@easyclones.pro.
          </Section>

          <Section title="8. Data Security">
            We implement administrative, technical, and physical safeguards to protect your personal information, including encrypted data storage, secure file transfer protocols, access controls and role-based permissions, regular security audits, and employee training on data handling procedures. No method of transmission or storage is 100% secure. While we strive to protect your data, we cannot guarantee absolute security.
          </Section>

          <Section title="9. Children&apos;s Privacy">
            Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from minors. We do not create AI clones of minors under any circumstances. If we learn that we have collected information from a minor, we will delete it promptly.
          </Section>

          <Section title="10. International Data Transfers">
            If you are accessing our services from outside the United States, please be aware that your information may be transferred to, stored, and processed in the United States. By using our services, you consent to such transfer and processing.
          </Section>

          <Section title="11. Third-Party Links">
            Our website may contain links to third-party websites. We are not responsible for the privacy practices of those websites. We encourage you to read the privacy policies of any linked sites you visit.
          </Section>

          <Section title="12. Changes to This Policy">
            We may update this Privacy Policy from time to time. When we do, we will update the &ldquo;Last Updated&rdquo; date at the top of this page. We encourage you to review this policy periodically to stay informed about how we are protecting your information.
          </Section>

          <Section title="13. Contact Us">
            If you have questions about this Privacy Policy or wish to exercise your rights, please contact us at:
            <br /><br />
            Easy Clones<br />
            Email: privacy@easyclones.pro<br />
            Website: easyclones.pro
          </Section>

        </div>
      </main>

      {/* Footer */}
      <footer style={{ padding: "32px max(24px, calc((100% - 900px)/2))", background: "#050505" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16 }}>
          <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: "#6B7280" }}>© 2026 Easy Clones. All rights reserved.</span>
          <div style={{ display: "flex", gap: 24 }}>
            <Link href="/privacy" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: "#6B7280", textDecoration: "none" }}>Privacy Policy</Link>
            <Link href="/terms" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: "#6B7280", textDecoration: "none" }}>Terms & Conditions</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: 40 }}>
      <h2 style={{
        fontFamily: "'DM Sans', sans-serif",
        fontSize: 20,
        fontWeight: 700,
        color: DARK,
        marginBottom: 16,
      }}>
        {title}
      </h2>
      <div>{children}</div>
    </div>
  );
}
