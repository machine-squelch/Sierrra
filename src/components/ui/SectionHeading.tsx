type SectionHeadingProps = {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
};

export function SectionHeading({
  title,
  subtitle,
  centered = true,
  light = false,
}: SectionHeadingProps) {
  return (
    <div className={centered ? "text-center" : ""}>
      <h2
        className={`text-3xl md:text-4xl font-bold mb-4 ${
          light ? "text-white" : "text-dark"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`text-lg max-w-2xl ${centered ? "mx-auto" : ""} ${
            light ? "text-gray-300" : "text-gray-600"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
