import Link from "next/link";

interface PageHeroProps {
  title: string;
  breadcrumbs: { label: string; href?: string }[];
}

export default function PageHero({ title, breadcrumbs }: PageHeroProps) {
  return (
    <section className="relative w-full min-h-[400px] pt-[150px] pb-12 bg-[#0E0E0E] flex flex-col justify-center items-center text-center overflow-visible">
      
      {/* Background with texture effect placeholder */}
      <div className="absolute inset-0 bg-[#0a0a0a]">
        {/* Subtle dot pattern texture */}
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#333_1px,transparent_1px)] [background-size:16px_16px]"></div>
      </div>
      
      <div className="relative z-10 px-4">
        <h1 className="text-white text-4xl md:text-5xl font-bold uppercase tracking-wide mb-6">
          {title}
        </h1>

        <nav className="flex items-center justify-center flex-wrap gap-2 text-sm font-medium">
          {breadcrumbs.map((crumb, index) => {
            const isLast = index === breadcrumbs.length - 1;
            
            return (
              <div key={index} className="flex items-center gap-2">
                {crumb.href && !isLast ? (
                  <Link 
                    href={crumb.href} 
                    className="text-[var(--color-primary)] hover:text-white transition-colors uppercase tracking-widest text-xs font-semibold"
                  >
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-[#999] uppercase tracking-widest text-xs font-semibold">
                    {crumb.label}
                  </span>
                )}

                {!isLast && <span className="text-[#666]">/</span>}
              </div>
            );
          })}
        </nav>
      </div>

    </section>
  );
}
