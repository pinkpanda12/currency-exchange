import React from 'react';
import { cn } from "@/lib/utils";

interface FooterProps {
  className?: string;
}

const Footer: React.FC<FooterProps> = ({ className }) => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className={cn("py-12 bg-slate-800 text-white", className)}>
      <div className="container max-w-6xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-10 w-10 rounded-full bg-blue-600 flex items-center justify-center">
                <span className="text-white font-bold text-lg">₹</span>
              </div>
              <div className="font-bold text-xl">
                <span className="text-blue-400">Rupee</span>
                <span className="text-white">Exchange</span>
              </div>
            </div>
            <p className="text-slate-300 mb-4 max-w-md">
              Your trusted partner for exchanging old Indian currency notes safely and legally. 
              We ensure complete compliance with all government regulations.
            </p>
            <div className="text-sm text-slate-400">
              <p>Licensed Currency Exchange Service</p>
              <p>Registration No: CE/2020/001234</p>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-white mb-4">Quick Links</h3>
            <div className="space-y-3">
              <button 
                onClick={() => scrollToSection('trust-indicators')} 
                className="block text-slate-300 hover:text-blue-400 transition-colors text-left"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('request-form')} 
                className="block text-slate-300 hover:text-blue-400 transition-colors text-left"
              >
                Exchange Process
              </button>
              <button 
                onClick={() => scrollToSection('testimonials')} 
                className="block text-slate-300 hover:text-blue-400 transition-colors text-left"
              >
                Customer Reviews
              </button>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-white mb-4">Contact Info</h3>
            <div className="space-y-3 text-slate-300">
              <div className="flex items-start gap-2">
                <span className="mt-0.5">📧</span>
                <p className="text-sm">support@rupeeexchange.in</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="mt-0.5">📞</span>
                <p className="text-sm">+91 76430 25458<br />+91 90386 93652</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="mt-0.5">🕒</span>
                <p className="text-sm">Mon-Sat: 9 AM - 6 PM</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="mt-0.5">📍</span>
                <p className="text-sm">
                  Shop No.11, Rizvi House 34.,<br />
                  Hill Rd., Bandra West,<br />
                  Mumbai, Maharashtra
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-700">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-slate-400">
              © {new Date().getFullYear()} RupeeExchange. All rights reserved.
            </p>
            <div className="flex gap-6 text-xs text-slate-400">
              <a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-blue-400 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-blue-400 transition-colors">Disclaimer</a>
            </div>
          </div>
          
          <div className="mt-4 text-xs text-slate-500 text-center">
            <p>
              Disclaimer: We facilitate legal exchange of old Indian currency notes through authorized channels. 
              We are not affiliated with any government entity. All transactions are subject to RBI guidelines.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;