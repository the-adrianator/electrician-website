interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  center?: boolean;
}

export default function SectionHeading({
  title,
  subtitle,
  center = false,
}: SectionHeadingProps) {
  return (
    <div className={`mb-12 ${center ? "text-center" : ""}`}>
      <h2 className="text-3xl md:text-4xl font-bold text-navy-900">{title}</h2>
      {subtitle && (
        <p
          className={`mt-4 text-gray-600 text-lg max-w-3xl ${
            center ? "mx-auto" : ""
          }`}
        >
          {subtitle}
        </p>
      )}
      <div
        className={`h-1 w-24 bg-yellow-400 mt-4 ${center ? "mx-auto" : ""}`}
      ></div>
    </div>
  );
}
