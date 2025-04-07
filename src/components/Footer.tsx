
import { cn } from "@/lib/utils";
import { LinkedinIcon, MailIcon, PhoneIcon } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-10 border-t border-[#1e3756] bg-[#0e1525] transition-colors duration-500">
      <div className="container mx-auto px-6 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <div className="text-lg font-medium text-white">Pranav Reveendran</div>
            <p className="text-sm text-[#a2adc9] mt-1">
              Data Engineering • ML • Data Science
            </p>
          </div>
          
          <div className="flex space-x-4 mb-4 md:mb-0">
            <a href="mailto:pranav.reveendran@sjsu.edu" className="text-[#a2adc9] hover:text-[#4d9de0] transition-colors">
              <MailIcon className="w-5 h-5" />
            </a>
            <a href="tel:+16603357762" className="text-[#a2adc9] hover:text-[#4d9de0] transition-colors">
              <PhoneIcon className="w-5 h-5" />
            </a>
            <a href="https://linkedin.com/in/pranavreveendran" className="text-[#a2adc9] hover:text-[#4d9de0] transition-colors">
              <LinkedinIcon className="w-5 h-5" />
            </a>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <div className="text-sm text-[#a2adc9]">
              © {currentYear} All rights reserved
            </div>
            <div className="text-xs text-[#a2adc9]/60 mt-1">
              AWS Certified Data Engineer
            </div>
          </div>
        </div>
        
        {/* LinkedIn Badge */}
        <div className="mt-8 flex justify-center">
          <div className="badge-base LI-profile-badge" data-locale="en_US" data-size="large" data-theme="dark" data-type="HORIZONTAL" data-vanity="pranavreveendran" data-version="v1">
            <a className="badge-base__link LI-simple-link" href="https://www.linkedin.com/in/pranavreveendran?trk=profile-badge">Pranav Reveendran</a>
          </div>
        </div>
        
        {/* LinkedIn Badge Script */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const s = document.createElement('script');
                s.type = 'text/javascript';
                s.async = true;
                s.src = 'https://platform.linkedin.com/badges/js/profile.js';
                const x = document.getElementsByTagName('script')[0];
                x.parentNode.insertBefore(s, x);
              })();
            `
          }}
        />
      </div>
    </footer>
  );
}
