import clsx from "clsx";
import FeatureCard from "./FeatureCard";

export default function Features() {
  return (
    <section className={clsx('bg-black', 'text-white', 'px-6', 'py-24')}>

      <div className={clsx('max-w-7xl', 'mx-auto')}>

        {/* Heading */}
        <div className={clsx('text-center', 'mb-20')}>

          <p className={clsx('text-sm', 'uppercase', 'tracking-widest', 'text-gray-500', 'mb-4')}>
            Features
          </p>

          <h1 className={clsx('text-4xl', 'md:text-6xl', 'font-black')}>
            Understand Your Real Life
          </h1>

          <p className={clsx('text-gray-400', 'mt-6', 'max-w-2xl', 'mx-auto', 'text-lg')}>
            Life Drift continuously analyzes patterns,
            habits, and decisions to detect when your
            actions stop matching your goals.
          </p>

        </div>

        {/* Feature Grid */}
        <div className={clsx('grid', 'grid-cols-1', 'md:grid-cols-2', 'lg:grid-cols-3', 'gap-8')}>

          <FeatureCard
            title="Behavior Tracking"
            description="Monitor real daily actions instead of relying only on motivation or memory."
          />

          <FeatureCard
            title="Drift Detection"
            description="Identify when your routines slowly move away from your long-term intentions."
          />

          <FeatureCard
            title="AI Insights"
            description="Receive intelligent observations about hidden behavioral patterns."
          />

          <FeatureCard
            title="Goal Alignment"
            description="Compare your claimed goals against your actual behavior."
          />

          <FeatureCard
            title="Personal Analytics"
            description="Visualize trends in productivity, focus, and consistency."
          />

          <FeatureCard
            title="Smart Interventions"
            description="Get timely nudges before small drifts become major life detours."
          />

        </div>

      </div>

    </section>
  );
}