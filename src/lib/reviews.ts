export type Review = {
  author: string;
  rating: number;
  text: string;
  date: string;
  source: "google" | "yelp" | "facebook";
};

// Placeholder reviews based on real review summaries.
// Replace with live Google Places API integration when ready.
export const reviews: Review[] = [
  {
    author: "Mike T.",
    rating: 5,
    text: "Professional, knowledgeable, and friendly. They diagnosed an electrical issue on our fifth-wheel that two other shops couldn't figure out. Fair pricing and they had us back on the road in two days.",
    date: "2025-11-15",
    source: "google",
  },
  {
    author: "Linda R.",
    rating: 5,
    text: "We brought our older Class A in for a full roof replacement and some interior appliance work. They treated us like family and kept us updated every step of the way. Highly recommend.",
    date: "2025-09-22",
    source: "google",
  },
  {
    author: "Dave & Karen S.",
    rating: 5,
    text: "Sierra Heavy Duty handled our insurance claim after a tree fell on our travel trailer. They worked directly with our insurance, did beautiful body work, and we got it back looking better than before.",
    date: "2025-08-10",
    source: "google",
  },
];
