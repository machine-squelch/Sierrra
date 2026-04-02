import {
  AcademicCapIcon,
  MapPinIcon,
  ClockIcon,
} from "@heroicons/react/24/outline";
import { ReviewCard } from "@/components/ui/ReviewCard";
import { reviews } from "@/lib/reviews";

const trustPoints = [
  {
    icon: <AcademicCapIcon className="w-8 h-8" />,
    title: "Expert Techs",
    description:
      "ASE-level expertise with decades of hands-on RV and heavy-truck repair experience.",
  },
  {
    icon: <MapPinIcon className="w-8 h-8" />,
    title: "Local Sonora Shop",
    description:
      "Family-owned and rooted in the Sierra Nevada foothills since the 1950s. We're your neighbors.",
  },
  {
    icon: <ClockIcon className="w-8 h-8" />,
    title: "Quick Turnaround",
    description:
      "We know you want to get back on the road. Efficient diagnostics and repair scheduling.",
  },
];

export function TrustSection() {
  return (
    <section id="about" className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4">
        {/* Trust icons */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {trustPoints.map((point) => (
            <div key={point.title} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-50 text-[#007bff] mb-4">
                {point.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {point.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed max-w-xs mx-auto">
                {point.description}
              </p>
            </div>
          ))}
        </div>

        {/* Family-owned callout */}
        <div className="bg-gray-50 rounded-2xl p-8 md:p-12 mb-16">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Family-Owned. Locally Trusted. Built on Experience.
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Sierra Heavy Duty started with a family that&apos;s been in the heavy
              truck and tractor business since the 1950s, and in the RV industry
              since the early 1960s. When we opened our doors in Sonora, we
              brought that same old-school work ethic — fix it right, charge
              fair, and treat every customer the way we&apos;d want to be treated.
              That&apos;s still how we operate today.
            </p>
          </div>
        </div>

        {/* Reviews — architect for future Google Places API integration */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-3">
            What Our Customers Say
          </h2>
          <p className="text-center text-gray-600 mb-8">
            4.6 stars across 93+ reviews
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map((review) => (
              <ReviewCard key={review.author} review={review} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
