import { StarIcon } from "@heroicons/react/24/solid";
import { resolveGoogleReviewUrl } from "@/lib/site";

type Variant = "footer" | "contact" | "trust";

const styles: Record<Variant, string> = {
  footer:
    "inline-flex items-center gap-2 text-sm font-semibold text-[#007bff] hover:text-blue-400 transition-colors",
  contact:
    "inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#007bff] px-4 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-600 transition-colors",
  trust:
    "inline-flex items-center justify-center gap-2 rounded-lg bg-[#007bff] px-6 py-3 text-sm font-semibold text-white shadow-md hover:bg-blue-600 transition-colors",
};

export function GoogleReviewCta({ variant }: { variant: Variant }) {
  const href = resolveGoogleReviewUrl();
  if (!href) return null;

  const link = (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={styles[variant]}
      aria-label="Leave a review on Google"
    >
      <StarIcon className="h-5 w-5 shrink-0" aria-hidden />
      Leave a Google review
    </a>
  );

  if (variant === "trust") {
    return <div className="mt-10 flex justify-center">{link}</div>;
  }

  return link;
}
