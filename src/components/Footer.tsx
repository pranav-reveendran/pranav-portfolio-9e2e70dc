
import { cn } from "@/lib/utils";
import { LinkedinIcon, MailIcon, PhoneIcon } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-10 border-t border-border">
      <div className="container mx-auto px-6 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <div className="text-lg font-medium">Pranay Raveendran</div>
            <p className="text-sm text-muted-foreground mt-1">
              Data Engineering • ML • Data Science
            </p>
          </div>
          
          <div className="flex space-x-4 mb-4 md:mb-0">
            <a href="mailto:pranav.rveendran@sjsu.edu" className="text-muted-foreground hover:text-primary transition-colors">
              <MailIcon className="w-5 h-5" />
            </a>
            <a href="tel:+16693357762" className="text-muted-foreground hover:text-primary transition-colors">
              <PhoneIcon className="w-5 h-5" />
            </a>
            <a href="https://linkedin.com/in/" className="text-muted-foreground hover:text-primary transition-colors">
              <LinkedinIcon className="w-5 h-5" />
            </a>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <div className="text-sm text-muted-foreground">
              © {currentYear} All rights reserved
            </div>
            <div className="text-xs text-muted-foreground/60 mt-1">
              AWS Certified Data Engineer
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
