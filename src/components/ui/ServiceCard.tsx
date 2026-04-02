import Link from "next/link";

type ServiceCardProps = {
  title: string;
  description: string;
  href: string;
  icon?: React.ReactNode;
};

export function ServiceCard({ title, description, href, icon }: ServiceCardProps) {
  return (
    <Link
      href={href}
      className="group block bg-white rounded-xl shadow-md hover:shadow-xl transition-all p-8 border border-gray-100"
    >
      {icon && (
        <div className="text-secondary mb-4 text-4xl">{icon}</div>
      )}
      <h3 className="text-xl font-bold text-dark mb-3 group-hover:text-primary transition-colors">
        {title}
      </h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
      <span className="inline-block mt-4 text-primary font-semibold group-hover:translate-x-1 transition-transform">
        Learn More &rarr;
      </span>
    </Link>
  );
}
