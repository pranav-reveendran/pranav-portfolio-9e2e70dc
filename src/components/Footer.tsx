
import { cn } from "@/lib/utils";

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-10 border-t border-border">
      <div className="container mx-auto px-6 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <div className="text-lg font-medium">Portfolio</div>
            <p className="text-sm text-muted-foreground mt-1">
              Data Engineering • ML • AI Systems
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <div className="text-sm text-muted-foreground">
              © {currentYear} All rights reserved
            </div>
            <div className="text-xs text-muted-foreground/60 mt-1">
              Built with precision and care
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
