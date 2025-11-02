interface SectionHeadingProps {
  children: string;
  className?: string;
}

export default function SectionHeading({ children, className = '' }: SectionHeadingProps) {
  return (
    <h2 className={`font-space text-4xl md:text-5xl lg:text-6xl font-bold mb-12 ${className}`}>
      <span className="text-gradient">{children}</span>
    </h2>
  );
}