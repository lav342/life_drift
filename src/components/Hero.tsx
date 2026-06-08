import clsx from "clsx";

export default function Hero() {
  return (
    <section className={clsx('relative', 'min-h-screen', 'overflow-hidden', 'bg-black', 'text-white', 'flex', 'items-center', 'justify-center', 'px-6')}>

      {/* Background Glow Effects */}
      <div className={clsx('absolute', 'top-[-150px]', 'left-[-100px]', 'w-[400px]', 'h-[400px]', 'bg-purple-500/20', 'blur-3xl', 'rounded-full')} />

      <div className={clsx('absolute', 'bottom-[-200px]', 'right-[-100px]', 'w-[500px]', 'h-[500px]', 'bg-cyan-500/20', 'blur-3xl', 'rounded-full')} />

      {/* Grid Overlay */}
      <div className={clsx('absolute', 'inset-0', 'bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)]', 'bg-[size:60px_60px]')} />

      {/* Main Content */}
      <div className={clsx('relative', 'z-10', 'max-w-6xl', 'text-center')}>

        {/* Tag */}
        <div className={clsx('inline-flex', 'items-center', 'gap-2', 'border', 'border-gray-800', 'bg-gray-900/70', 'px-4', 'py-2', 'rounded-full', 'mb-8', 'backdrop-blur-md')}>
          <span className={clsx('w-2', 'h-2', 'bg-green-400', 'rounded-full', 'animate-pulse')} />
          <p className={clsx('text-sm', 'text-gray-300', 'tracking-wide')}>
            AI-Powered Behavioral Intelligence
          </p>
        </div>

        {/* Headline */}
        <h1 className={clsx('text-5xl', 'md:text-7xl', 'lg:text-8xl', 'font-black', 'leading-[1.05]', 'tracking-tight')}>
          Detect The Gap <br />

          <span className={clsx('bg-gradient-to-r', 'from-white', 'via-gray-300', 'to-gray-500', 'text-transparent', 'bg-clip-text')}>
            Between Goals
          </span>

          <br />

          And Reality.
        </h1>

        {/* Description */}
        <p className={clsx('mt-8', 'text-lg', 'md:text-xl', 'text-gray-400', 'max-w-3xl', 'mx-auto', 'leading-relaxed')}>
          Life Drift observes patterns in your behavior,
          compares them against your claimed intentions,
          and reveals when your life quietly starts drifting
          away from what truly matters.
        </p>

        {/* Buttons */}
        <div className={clsx('flex', 'flex-col', 'sm:flex-row', 'items-center', 'justify-center', 'gap-5', 'mt-12')}>

          <button className={clsx('bg-white', 'text-black', 'px-8', 'py-4', 'rounded-2xl', 'font-semibold', 'text-lg', 'hover:scale-105', 'hover:shadow-2xl', 'transition', 'duration-300')}>
            Start Tracking
          </button>

          <button className={clsx('border', 'border-gray-700', 'bg-gray-900/50', 'backdrop-blur-md', 'px-8', 'py-4', 'rounded-2xl', 'font-semibold', 'text-lg', 'hover:bg-gray-800', 'transition', 'duration-300')}>
            Watch Demo
          </button>

        </div>

        {/* Stats */}
        <div className={clsx('grid', 'grid-cols-1', 'md:grid-cols-3', 'gap-8', 'mt-24')}>

          <div className={clsx('border', 'border-gray-800', 'bg-gray-900/40', 'backdrop-blur-md', 'p-8', 'rounded-3xl')}>
            <h2 className={clsx('text-4xl', 'font-bold')}>92%</h2>
            <p className={clsx('text-gray-400', 'mt-2')}>
              Better self-awareness after 30 days
            </p>
          </div>

          <div className={clsx('border', 'border-gray-800', 'bg-gray-900/40', 'backdrop-blur-md', 'p-8', 'rounded-3xl')}>
            <h2 className={clsx('text-4xl', 'font-bold')}>24/7</h2>
            <p className={clsx('text-gray-400', 'mt-2')}>
              Passive behavioral tracking
            </p>
          </div>

          <div className={clsx('border', 'border-gray-800', 'bg-gray-900/40', 'backdrop-blur-md', 'p-8', 'rounded-3xl')}>
            <h2 className={clsx('text-4xl', 'font-bold')}>∞</h2>
            <p className={clsx('text-gray-400', 'mt-2')}>
              Insights into your real habits
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}