export interface FaqItem {
  question: string;
  answer: string;
}

/** Buyer-facing FAQ — rendered on the page and mirrored in FAQPage JSON-LD. */
export const FAQS: FaqItem[] = [
  {
    question: 'What is icraaz.com and why is it valuable?',
    answer:
      'icraaz.com is an exact-match .com domain combining "ICRA" (Infection Control Risk Assessment) with "AZ" (Arizona). It is short, descriptive, and instantly credible for B2B buyers in healthcare construction — the kind of name a hospital, general contractor, or training provider can build a category-leading brand on.',
  },
  {
    question: 'How much does icraaz.com cost?',
    answer:
      'The asking price is $14,997 USD. That price is a starting point for a serious conversation — qualified buyers can submit an offer and we will respond with a clear yes, no, or counter.',
  },
  {
    question: 'How do I buy the domain?',
    answer:
      'Three simple steps: (1) submit a confidential inquiry with your offer and intended use, (2) we agree on terms and you receive an Escrow.com transaction, (3) Escrow.com holds your funds and coordinates the registrar transfer — the domain is released to you once the transfer is confirmed.',
  },
  {
    question: 'How long does the transfer take?',
    answer:
      'Most .com transfers complete within 1 to 3 business days once the escrow transaction is funded and the auth code is issued. Transfers to or from GoDaddy, Namecheap, Cloudflare Registrar, and other major registrars are typically same-day or next-day.',
  },
  {
    question: 'Is the transaction protected?',
    answer:
      'Yes. Every sale is closed through Escrow.com, a licensed and regulated escrow provider used for domain transactions worldwide. Your payment stays in escrow until the domain has been transferred to your account — neither party is exposed.',
  },
  {
    question: 'What payment methods are accepted?',
    answer:
      'Wire transfer, ACH, and Escrow.com-supported methods are all available. Structured payment arrangements can be discussed on qualifying offers — mention your preferred terms in your inquiry.',
  },
  {
    question: 'What exactly am I buying?',
    answer:
      'The domain name icraaz.com with clean title, plus this landing page as a starting point. There is no hosting contract or registrar lock to inherit — the name transfers to the registrar account of your choice.',
  },
  {
    question: 'Can I get financing or partner on the acquisition?',
    answer:
      'Serious acquisition structures — including installment terms, joint ventures, or portfolio deals — are open to discussion. Tell us about your situation in the inquiry form and we will respond within 24 hours.',
  },
];
