
import { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";
import { 
  Mail as MailIcon, 
  Phone as PhoneIcon, 
  Linkedin as LinkedinIcon, 
  Github as GithubIcon, 
  Twitter as TwitterIcon,
  Send as SendIcon
} from "lucide-react";

export function ContactSection() {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const formRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsFormVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    
    if (formRef.current) {
      observer.observe(formRef.current);
    }
    
    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log("Form submitted");
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-secondary/50 relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:20px_20px]"></div>
      </div>
      
      <div className="container mx-auto px-6 md:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-center lg:space-x-16">
          {/* Contact info */}
          <div className="lg:w-2/5 mb-12 lg:mb-0">
            <div className="inline-block mb-3">
              <span className="text-sm text-primary font-medium">Get in Touch</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">Let's Work Together</h2>
            <p className="text-muted-foreground text-lg mb-8">
              I'm open to discussing new projects, collaborations, or opportunities to contribute my expertise in data engineering and machine learning.
            </p>
            
            <div className="space-y-5">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-primary/10 rounded-md flex items-center justify-center text-primary mr-4">
                  <MailIcon className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground mb-1">Email</div>
                  <a href="mailto:pranav.reveendran@sjsu.edu" className="font-medium hover:text-primary transition-colors">
                    pranav.reveendran@sjsu.edu
                  </a>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-10 h-10 bg-primary/10 rounded-md flex items-center justify-center text-primary mr-4">
                  <PhoneIcon className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground mb-1">Phone</div>
                  <a href="tel:+16603357762" className="font-medium hover:text-primary transition-colors">
                    +1 (660) 335-7762
                  </a>
                </div>
              </div>
            </div>
            
            {/* Social links */}
            <div className="mt-10">
              <div className="mb-3 text-sm text-muted-foreground">Connect with me</div>
              <div className="flex space-x-4">
                {[
                  { icon: LinkedinIcon, href: "#", label: "LinkedIn" },
                  { icon: GithubIcon, href: "#", label: "GitHub" },
                  { icon: TwitterIcon, href: "#", label: "Twitter" }
                ].map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      aria-label={social.label}
                      className="w-10 h-10 bg-background border border-border rounded-full flex items-center justify-center text-foreground hover:text-primary hover:border-primary transition-colors"
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
          
          {/* Contact form */}
          <div 
            ref={formRef}
            className={cn(
              "lg:w-3/5 bg-card border border-border rounded-lg p-6 md:p-8",
              "transition-all duration-700 ease-out",
              isFormVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            )}
          >
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Your name"
                    className="w-full bg-secondary border border-border rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Your email"
                    className="w-full bg-secondary border border-border rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                    required
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  placeholder="How can I help you?"
                  className="w-full bg-secondary border border-border rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                  required
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="Your message"
                  className="w-full bg-secondary border border-border rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all resize-none"
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="inline-flex items-center bg-primary text-primary-foreground px-6 py-3 rounded-md font-medium hover:scale-[1.03] active:scale-[0.97] transition-all"
              >
                <span>Send Message</span>
                <SendIcon className="ml-2 w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
