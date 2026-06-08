import clsx from "clsx";

export default function Navbar() {
  return (
    <nav className={clsx('flex', 'items-center', 'justify-between', 'px-8', 'py-5', 'border-b', 'border-gray-800', 'bg-black', 'text-white')}>
      
      {/* Logo */}
      <div>
        <h1 className={clsx('text-3xl', 'font-extrabold', 'tracking-tight')}>
          Life Drift
        </h1>
        <p className={clsx('text-sm', 'text-gray-400')}>
          Align actions with goals
        </p>
      </div>

      {/* Nav Links */}
      <div className={clsx('hidden', 'md:flex', 'items-center', 'gap-10', 'text-sm', 'font-medium')}>
        <a
          href="#"
          className={clsx('hover:text-gray-300', 'transition')}
        >
          Features
        </a>

        <a
          href="#"
          className={clsx('hover:text-gray-300', 'transition')}
        >
          How It Works
        </a>

        <a
          href="#"
          className={clsx('hover:text-gray-300', 'transition')}
        >
          Dashboard
        </a>
      </div>

      {/* CTA Button */}
      <button className={clsx('bg-white', 'text-black', 'px-5', 'py-2', 'rounded-xl', 'font-semibold', 'hover:scale-105', 'transition')}>
        Get Started
      </button>
    </nav>
  );
}