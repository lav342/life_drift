import clsx from "clsx";
type FeatureCardProps = {
  title: string;
  description: string;
};

export default function FeatureCard({
  title,
  description,
}: FeatureCardProps) {
  return (
    <div className={clsx('border', 'border-gray-800', 'bg-gray-900/50', 'p-8', 'rounded-3xl', 'hover:border-gray-600', 'transition', 'duration-300')}>

      <h2 className={clsx('text-2xl', 'font-bold', 'mb-4')}>
        {title}
      </h2>

      <p className={clsx('text-gray-400', 'leading-relaxed')}>
        {description}
      </p>

    </div>
  );
}