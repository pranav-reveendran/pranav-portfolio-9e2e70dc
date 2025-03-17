
import { cn } from "@/lib/utils";

export function Hero() {
  return (
    <section id="home" className="min-h-screen pt-24 pb-16 flex items-center relative overflow-hidden">
      {/* Background subtle grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none"></div>
      
      {/* Background gradient effect */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-primary/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 md:px-8 relative z-10">
        <div className="max-w-3xl mx-auto md:mx-0">
          {/* Caption/Badge */}
          <div className="inline-block opacity-0 animate-fade-in-delayed mb-4">
            <div className="bg-accent text-accent-foreground text-xs font-medium py-1 px-3 rounded-full">
              Data Engineer • ML Specialist • Distributed Systems
            </div>
          </div>
          
          {/* Main headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-balance opacity-0 animate-fade-in leading-tight">
            Turning complex data <br className="hidden md:block" />
            <span className="text-primary">into valuable insights</span>
          </h1>
          
          {/* Description */}
          <p className="mt-6 text-lg text-muted-foreground text-balance max-w-2xl opacity-0 animate-fade-in-delayed-2">
            I design, build, and optimize high-performance systems that transform raw data into actionable intelligence, powering the future of data-driven decision making.
          </p>
          
          {/* CTA buttons */}
          <div className="mt-8 flex flex-wrap gap-4 opacity-0 animate-fade-in-delayed-3">
            <a 
              href="#projects" 
              className={cn(
                "bg-primary text-primary-foreground px-6 py-3 rounded-md font-medium", 
                "hover:scale-[1.03] active:scale-[0.97] transition-all shadow-sm"
              )}
            >
              View Projects
            </a>
            <a 
              href="#contact" 
              className={cn(
                "bg-secondary text-secondary-foreground px-6 py-3 rounded-md font-medium",
                "hover:scale-[1.03] active:scale-[0.97] transition-all"
              )}
            >
              Contact Me
            </a>
          </div>
        </div>
        
        {/* Stats/Quick facts */}
        <div className="mt-16 md:mt-24 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {[
            { value: "5+", label: "Years Experience" },
            { value: "20+", label: "Projects Delivered" },
            { value: "15+", label: "Tech Stack" },
            { value: "3", label: "Industry Sectors" }
          ].map((stat, index) => (
            <div 
              key={index}
              className={cn(
                "bg-card/70 backdrop-blur-sm border border-border/50 rounded-lg p-6 text-center",
                "opacity-0 animate-fade-in-delayed-3"
              )}
              style={{ animationDelay: `${(index * 0.1) + 0.8}s` }}
            >
              <div className="text-3xl font-bold text-primary">{stat.value}</div>
              <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Decorative element */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center opacity-50">
        <span className="text-xs text-muted-foreground mb-2">Scroll to explore</span>
        <div className="w-5 h-10 rounded-full border border-border flex justify-center pt-2">
          <div className="w-1 h-2 bg-muted-foreground rounded-full animate-bounce"></div>
        </div>
      </div>
    </section>
  );
}
