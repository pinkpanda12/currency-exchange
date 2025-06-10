
import React from 'react';
import { cn } from "@/lib/utils";
import { Shield, BadgeCheck, Clock, Phone } from "lucide-react";

interface TrustIndicatorsProps {
  className?: string;
}

const TrustIndicators: React.FC<TrustIndicatorsProps> = ({ className }) => {
  return (
    <section id="trust-indicators" className={cn("py-16 md:py-20 bg-slate-50", className)}>
      <div className="container max-w-6xl mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Why Choose Our Service?
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            We provide safe, legal, and efficient currency exchange services across India
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 text-center group hover:shadow-md transition-shadow">
            <div className="h-16 w-16 rounded-full bg-green-100 flex items-center justify-center mb-4 mx-auto group-hover:bg-green-200 transition-colors">
              <Shield className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-slate-800 mb-2">Secure Process</h3>
            <p className="text-slate-600">Government-approved and fully secure exchange procedures</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 text-center group hover:shadow-md transition-shadow">
            <div className="h-16 w-16 rounded-full bg-blue-100 flex items-center justify-center mb-4 mx-auto group-hover:bg-blue-200 transition-colors">
              <BadgeCheck className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-slate-800 mb-2">Verified Partners</h3>
            <p className="text-slate-600">Work with RBI-authorized financial institutions only</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 text-center group hover:shadow-md transition-shadow">
            <div className="h-16 w-16 rounded-full bg-teal-100 flex items-center justify-center mb-4 mx-auto group-hover:bg-teal-200 transition-colors">
              <Clock className="h-8 w-8 text-teal-600" />
            </div>
            <h3 className="text-xl font-semibold text-slate-800 mb-2">Quick Service</h3>
            <p className="text-slate-600">Fast processing within 24-48 hours of verification</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 text-center group hover:shadow-md transition-shadow">
            <div className="h-16 w-16 rounded-full bg-purple-100 flex items-center justify-center mb-4 mx-auto group-hover:bg-purple-200 transition-colors">
              <Phone className="h-8 w-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold text-slate-800 mb-2">24/7 Support</h3>
            <p className="text-slate-600">Round-the-clock customer support for all queries</p>
          </div>
        </div>
        
        <div className="mt-12 bg-blue-50 border border-blue-200 rounded-xl p-6">
          <div className="text-center">
            <h3 className="text-xl font-semibold text-blue-800 mb-2">Legal Compliance Notice</h3>
            <p className="text-blue-700">
              All exchanges are conducted in full compliance with RBI guidelines and regulations. 
              We maintain complete transparency and legal documentation for every transaction.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustIndicators;
