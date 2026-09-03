import Image from 'next/image';

export default function WelcomeSection() {
  return (
    <section className="pt-6 sm:pt-10 pb-16 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Emblem Column */}
          <div className="lg:col-span-4 flex justify-center">
            <div className="relative w-72 h-72 sm:w-80 sm:h-80">
              <Image
                src="/images/logo/silver_jubilee_logo.png"
                alt="KSSFCL Silver Jubilee 2026 Emblem"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

          {/* Text Content Column */}
          <div className="lg:col-span-8 space-y-4">
            <span className="text-xs font-semibold tracking-widest text-slate-500 uppercase">
              WELCOME TO
            </span>
            
            <h2 className="text-2xl sm:text-3xl font-bold text-[#D4A017] leading-tight">
              KARNATAKA STATE SOUHARDA FEDERAL CO-OPERATIVE LTD.
            </h2>
            
            <p className="text-base sm:text-lg italic font-semibold text-red-700">
              Apex body of New Generation Souharda Cooperatives..
            </p>

            <div className="space-y-3 text-slate-700 text-sm sm:text-base leading-relaxed pt-2">
              <p>
                A democratically elected self-regulatory organization, such as those established under 
                the Karnataka Souharda Sahakari Act, 1997, plays a vital role in the cooperative sector. 
                These organizations are designed to empower members through collective decision-making, 
                ensuring that the voices of all stakeholders are heard and considered in governance.
              </p>
              <p>
                KSSFCL is an organization that serves as the top-tier entity for various cooperative 
                societies operating within Karnataka. It acts as the overarching authority that provides...
              </p>
            </div>

            {/* "Let Us Explore" Pill Button */}
            <div className="pt-4 flex justify-end">
              <button 
                className="inline-flex items-center justify-center gap-2 px-6 py-2.5 
                           rounded-full bg-white text-[#2B52BA] font-medium text-base 
                           border-2 border-[#FBD268] hover:bg-amber-50 hover:border-amber-400 
                           transition-all duration-200 shadow-sm group cursor-pointer"
              >
                <span>Let Us Explore</span>
                <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">
                  &rarr;
                </span>
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}