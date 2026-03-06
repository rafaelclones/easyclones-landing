"use client";

import Link from "next/link";

const BRAND = "#FF4201";
const DARK = "#0A0A0A";
const GRAY = "#6B7280";

export default function TermsAndConditions() {
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
          Terms &amp; Conditions
        </h1>
        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: GRAY, marginBottom: 48 }}>
          Last Updated: March 6, 2026
        </p>

        <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 16, color: "#374151", lineHeight: 1.85 }}>

          <Section title="1. Acceptance of Terms">
            By accessing or using the website, services, or products offered by Easy Clones (&ldquo;Company,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;), you (&ldquo;Client,&rdquo; &ldquo;you,&rdquo; or &ldquo;your&rdquo;) agree to be bound by these Terms and Conditions. If you are entering into this agreement on behalf of a business or organization, you represent that you have the authority to bind that entity. If you do not agree to these terms, you may not use our services.
          </Section>

          <Section title="2. Description of Services">
            Easy Clones provides done-for-you AI clone creation services. This includes, but is not limited to: AI-generated digital replicas of a person&apos;s voice, face, and likeness; video content production using AI-generated avatars; multi-language clone localization; and related consulting and content strategy services. We do not provide self-service tools. All clones are built by our team based on assets and direction provided by the Client.
          </Section>

          <Section title="3. Consent and Likeness Rights">
            <strong>3.1 Written Consent Required</strong>
            <br /><br />
            We will only create an AI clone of an individual who has provided explicit, written consent. Before any production begins, the individual whose likeness will be cloned (the &ldquo;Subject&rdquo;) must sign our Likeness Consent and Release Agreement, which specifies: the scope and purpose of the clone; the channels, formats, and languages in which the clone may be used; the duration of authorized use; approval rights over scripts, content, and final renders; revocation and takedown procedures; and data handling, storage, and deletion terms.
            <br /><br />
            <strong>3.2 Client Representations</strong>
            <br /><br />
            By engaging our services, you represent and warrant that: you have obtained or will obtain all necessary consents and permissions from any individual whose likeness, voice, or image will be used; you have the legal authority to commission the creation of the clone; the clone will not be used for any unlawful, fraudulent, deceptive, defamatory, or harmful purpose; you will not use the clone to impersonate any individual for the purpose of fraud, scam, or deception; and you will comply with all applicable laws, including but not limited to California AB 2602, California AB 1836, Tennessee&apos;s ELVIS Act, Arkansas HB 1071, New York Senate Bill 7676B, the FTC Act, and the TAKE IT DOWN Act.
            <br /><br />
            <strong>3.3 Prohibited Uses</strong>
            <br /><br />
            You agree that you will NOT use any clone created by Easy Clones for: impersonation, fraud, or deception; non-consensual intimate imagery or deepfake pornography; political misinformation, election interference, or propaganda; harassment, defamation, hate speech, or threats; any content that violates the rights of any third party; unauthorized commercial use beyond the scope specified in the Consent Agreement; or any purpose that violates applicable local, state, federal, or international law.
            <br /><br />
            Violation of any prohibited use will result in immediate termination of services, deletion of all clone assets, and may result in legal action.
          </Section>

          <Section title="4. Intellectual Property">
            <strong>4.1 Ownership of Final Deliverables</strong>
            <br /><br />
            Upon full payment, the Client receives ownership of the final clone deliverables (rendered video files, audio files, and associated content) as specified in the service agreement. The Client does not receive ownership of or access to the underlying AI models, training processes, proprietary tools, or production techniques used by Easy Clones.
            <br /><br />
            <strong>4.2 Company IP</strong>
            <br /><br />
            All proprietary technology, workflows, training methodologies, software, tools, and processes developed or used by Easy Clones remain the exclusive intellectual property of Easy Clones. Nothing in these Terms grants the Client any rights to our underlying technology.
            <br /><br />
            <strong>4.3 Portfolio and Case Study Rights</strong>
            <br /><br />
            Unless otherwise agreed in writing, Easy Clones reserves the right to use anonymized or non-confidential examples of completed work in our portfolio, marketing materials, and case studies. If you prefer to keep your project confidential, please notify us in writing before project commencement.
          </Section>

          <Section title="5. Payment Terms">
            <strong>5.1 Fees:</strong> All service fees are outlined in the individual service agreement or invoice provided to the Client. Unless otherwise stated, all prices are in U.S. dollars.
            <br /><br />
            <strong>5.2 Payment Schedule:</strong> Payment terms are specified in the service agreement. Typical terms include a non-refundable deposit upon project commencement and final payment upon delivery.
            <br /><br />
            <strong>5.3 Late Payments:</strong> Invoices not paid within 15 days of the due date may incur a late fee of 1.5% per month on the outstanding balance.
            <br /><br />
            <strong>5.4 Refund Policy:</strong> Due to the custom nature of our services, deposits are non-refundable. If the Client is unsatisfied with the delivered work, we offer revision rounds as specified in the service agreement. Refunds for final payments are evaluated on a case-by-case basis at the sole discretion of Easy Clones.
          </Section>

          <Section title="6. Revisions and Delivery">
            Each service package includes a defined number of revision rounds as specified in the service agreement. Additional revisions beyond the included rounds may be subject to additional fees. Delivery timelines are estimates and may vary based on asset quality, Client responsiveness, and project complexity. Delays caused by the Client (such as late asset delivery or slow feedback) may extend the delivery timeline without penalty to Easy Clones.
          </Section>

          <Section title="7. Disclaimers">
            <strong>7.1 AI Content Disclaimer</strong>
            <br /><br />
            All content produced by Easy Clones is generated using artificial intelligence. While we strive for the highest quality and realism, AI-generated content may contain imperfections, artifacts, or inconsistencies. We make no guarantee that AI clones will be indistinguishable from real human footage in every context.
            <br /><br />
            <strong>7.2 No Legal, Medical, or Financial Advice</strong>
            <br /><br />
            AI clones created by Easy Clones must not be used to dispense legal, medical, financial, or other professional advice unless the Client has independently verified the content with qualified professionals. Easy Clones is not responsible for any reliance on content delivered through AI clones.
            <br /><br />
            <strong>7.3 Results Not Guaranteed</strong>
            <br /><br />
            While we showcase real client results and testimonials, we do not guarantee any specific business outcomes, revenue results, or performance metrics from the use of AI clones. Individual results will vary.
            <br /><br />
            <strong>7.4 AI Disclosure</strong>
            <br /><br />
            The Client is responsible for disclosing the use of AI-generated content in accordance with applicable laws and platform policies. This may include labeling AI content on social media platforms, in advertising, and in consumer-facing communications. Easy Clones is not liable for the Client&apos;s failure to disclose.
          </Section>

          <Section title="8. Limitation of Liability">
            To the maximum extent permitted by applicable law, Easy Clones shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of revenue, profits, business, goodwill, or data, arising out of or in connection with the use or inability to use our services. Our total aggregate liability for any claim arising from or related to these Terms or our services shall not exceed the total amount paid by the Client to Easy Clones for the specific project giving rise to the claim.
          </Section>

          <Section title="9. Indemnification">
            You agree to indemnify, defend, and hold harmless Easy Clones, its officers, directors, employees, agents, and affiliates from and against any and all claims, liabilities, damages, losses, costs, and expenses (including reasonable attorneys&apos; fees) arising from or related to: your breach of these Terms; your misuse of any AI clone or content we produce; your failure to obtain proper consent for the use of any individual&apos;s likeness; your violation of any applicable law, regulation, or third-party right; and any third-party claim resulting from your use of the clone.
          </Section>

          <Section title="10. Termination">
            Either party may terminate the service agreement with 30 days&apos; written notice. Easy Clones reserves the right to immediately terminate services without notice if the Client violates any of these Terms, engages in prohibited uses, or fails to make payment. Upon termination: all outstanding fees become immediately due; Easy Clones will delete all biometric training data within 30 days; and final deliverables already paid for will be provided to the Client.
          </Section>

          <Section title="11. DMCA and Takedown Procedures">
            Easy Clones respects intellectual property rights. If you believe that any content created using our services infringes on your rights, please contact us at legal@easyclones.pro with a detailed description of the alleged infringement. We will investigate and take appropriate action, which may include removal of the content and termination of the offending Client&apos;s account.
          </Section>

          <Section title="12. Governing Law and Dispute Resolution">
            These Terms shall be governed by and construed in accordance with the laws of the State of Delaware, without regard to its conflict of law principles. Any dispute arising out of or relating to these Terms shall be resolved through binding arbitration administered by the American Arbitration Association (AAA) in accordance with its Commercial Arbitration Rules. The arbitration shall take place in Delaware. Each party shall bear its own costs and attorneys&apos; fees unless the arbitrator determines otherwise. Nothing in this section prevents either party from seeking injunctive or equitable relief in a court of competent jurisdiction.
          </Section>

          <Section title="13. Severability">
            If any provision of these Terms is held to be invalid, illegal, or unenforceable, the remaining provisions shall continue in full force and effect.
          </Section>

          <Section title="14. Entire Agreement">
            These Terms, together with any service agreement, Likeness Consent and Release Agreement, and invoices, constitute the entire agreement between the Client and Easy Clones with respect to the subject matter hereof and supersede all prior or contemporaneous communications, whether written or oral.
          </Section>

          <Section title="15. Changes to These Terms">
            We reserve the right to modify these Terms at any time. Changes will be posted on this page with an updated &ldquo;Last Updated&rdquo; date. Continued use of our services after changes are posted constitutes acceptance of the modified Terms.
          </Section>

          <Section title="16. Contact Us">
            If you have questions about these Terms and Conditions, please contact us at:
            <br /><br />
            Easy Clones<br />
            Email: legal@easyclones.pro<br />
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
