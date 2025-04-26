import { useState } from 'react';
import SectionHeading from '../ui/SectionHeading';
import TestimonialCard from '../ui/TestimonialCard';
import Button from '../ui/Button';

export default function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      location: "Manchester",
      text: "AYGA Electrical responded to our emergency call within 30 minutes. The electrician was professional, knowledgeable, and fixed our dangerous wiring issue straight away. Highly recommend!",
      rating: 5,
      date: "March 15, 2023"
    },
    {
      id: 2,
      name: "James Wilson",
      location: "Salford",
      text: "Had my fuseboard upgraded by AYGA. Very professional service from quotation to completion. Clean, tidy work and everything explained clearly. Will definitely use again.",
      rating: 5,
      date: "January 22, 2023"
    },
    {
      id: 3,
      name: "David Thompson",
      location: "Stockport",
      text: "The team installed EV chargers at our office car park. The work was completed on time and to budget. Very impressed with the service and aftercare.",
      rating: 5,
      date: "February 8, 2023"
    },
    {
      id: 4,
      name: "Emily Parker",
      location: "Bolton",
      text: "AYGA completed our EICR certificate for our rental property. They were thorough, professional and provided clear documentation. Pricing was competitive too.",
      rating: 4,
      date: "April 3, 2023"
    },
    {
      id: 5,
      name: "Robert Edwards",
      location: "Bury",
      text: "Fantastic work installing new lighting throughout our home. Creative suggestions that really enhanced our space. Clean, efficient work and great value.",
      rating: 5,
      date: "May 17, 2023"
    },
    {
      id: 6,
      name: "Olivia Bennett",
      location: "Oldham",
      text: "Had AYGA install smart home wiring during our renovation. Their expertise was invaluable and the system works perfectly. Great communication throughout.",
      rating: 5,
      date: "June 12, 2023"
    }
  ];

  const [visibleTestimonials, setVisibleTestimonials] = useState(3);
  const showMoreTestimonials = () => setVisibleTestimonials(testimonials.length);
  
  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="Customer Testimonials" 
          subtitle="Don't just take our word for it. See what our customers have to say about our services."
          center={true}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.slice(0, visibleTestimonials).map((testimonial) => (
            <TestimonialCard 
              key={testimonial.id}
              name={testimonial.name}
              location={testimonial.location}
              text={testimonial.text}
              rating={testimonial.rating}
              date={testimonial.date}
            />
          ))}
        </div>
        
        {visibleTestimonials < testimonials.length && (
          <div className="mt-12 text-center">
            <Button variant="outline" onClick={showMoreTestimonials}>
              View More Testimonials
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}