const faqs = [
  {
    question: "What types of RVs do you service?",
    answer:
      "We work on all types — Class A, B, and C motorhomes, fifth wheels, travel trailers, toy haulers, and pop-ups. Gas, diesel, or towable — we've got you covered.",
  },
  {
    question: "Do you offer mobile RV repair?",
    answer:
      "Yes. We offer emergency mobile service for breakdowns and situations where your RV can't make it to our shop. Call (209) 532-7994 for availability.",
  },
  {
    question: "Do you handle insurance claims?",
    answer:
      "Absolutely. We work directly with insurance companies on collision and storm damage claims. We also handle extended warranty repairs.",
  },
  {
    question: "How long does a typical repair take?",
    answer:
      "It depends on the job. Routine maintenance is usually same-day. Larger repairs like collision work or restorations vary — we'll give you an honest timeline upfront.",
  },
  {
    question: "Do you sell RV parts and accessories?",
    answer:
      "Yes. We have a full parts showroom with a large inventory of RV and truck parts, accessories, hitches, solar equipment, and more.",
  },
];

export { faqs };

export function FAQ() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-10">
          Frequently Asked Questions
        </h2>
        <dl className="space-y-6">
          {faqs.map((faq) => (
            <div
              key={faq.question}
              className="bg-white rounded-lg border border-gray-200 p-6"
            >
              <dt className="text-base font-semibold text-gray-900 mb-2">
                {faq.question}
              </dt>
              <dd className="text-gray-600 text-sm leading-relaxed">
                {faq.answer}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
