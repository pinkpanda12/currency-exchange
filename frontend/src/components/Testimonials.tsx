
import React from 'react';
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";

interface TestimonialsProps {
  className?: string;
}

const Testimonials: React.FC<TestimonialsProps> = ({ className }) => {
  const testimonials = [
    {
      id: 1,
      name: "Rajesh Kumar",
      location: "Delhi",
      quote: "I was worried about my old currency notes, but the team made the exchange process incredibly smooth. Highly recommended!",
      avatar: "RK"
    },
    {
      id: 2,
      name: "Priya Sharma",
      location: "Mumbai",
      quote: "Very professional service. They helped me exchange my old notes within days, saving me a lot of time and hassle.",
      avatar: "PS"
    },
    {
      id: 3,
      name: "Sunil Patel",
      location: "Ahmedabad",
      quote: "Trustworthy and efficient! I was skeptical at first but they proved to be legitimate. Thank you for your help.",
      avatar: "SP"
    }
  ];

  return (
    <section id="testimonials" className={cn("py-16 md:py-20 gradient-bg", className)}>
      <div className="container max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-india-dark">What Our Customers Say</h2>
          <p className="mt-3 text-xl text-gray-600">
            Hear from people who have successfully exchanged their old currency notes with us
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="border-0 shadow-md">
              <CardContent className="pt-6">
                <div className="mb-4">
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full bg-india-blue text-white flex items-center justify-center font-medium">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <p className="font-medium text-india-dark">{testimonial.name}</p>
                      <p className="text-sm text-gray-500">{testimonial.location}</p>
                    </div>
                  </div>
                </div>
                <blockquote className="text-gray-600 italic">"{testimonial.quote}"</blockquote>
                <div className="mt-4 flex">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="h-5 w-5 text-yellow-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                      />
                    </svg>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
