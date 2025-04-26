import SectionHeading from '../ui/SectionHeading';
import { Award, Shield, Clock, CheckCircle } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <SectionHeading 
              title="About AYGA Electrical" 
              subtitle="Powering Your Life Safely Since 2010"
            />
            <p className="text-gray-600 mb-6">
              AYGA Electrical LTD is a trusted team of certified electricians providing top-quality 
              electrical services to homes and businesses throughout the region. With over a decade of 
              experience, we've built our reputation on reliability, expertise, and outstanding customer care.
            </p>
            <p className="text-gray-600 mb-8">
              As NICEIC registered contractors, all our work complies with the latest regulations and 
              safety standards. We take pride in our workmanship and provide clear, upfront pricing 
              with no hidden costs.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-start">
                <Award className="text-yellow-400 mr-3 flex-shrink-0 mt-1" size={20} />
                <div>
                  <h3 className="font-semibold text-navy-900">Certified Team</h3>
                  <p className="text-sm text-gray-600">NICEIC registered with continuous training</p>
                </div>
              </div>
              <div className="flex items-start">
                <Shield className="text-yellow-400 mr-3 flex-shrink-0 mt-1" size={20} />
                <div>
                  <h3 className="font-semibold text-navy-900">Fully Insured</h3>
                  <p className="text-sm text-gray-600">£5M public liability insurance for your peace of mind</p>
                </div>
              </div>
              <div className="flex items-start">
                <Clock className="text-yellow-400 mr-3 flex-shrink-0 mt-1" size={20} />
                <div>
                  <h3 className="font-semibold text-navy-900">24/7 Availability</h3>
                  <p className="text-sm text-gray-600">Round-the-clock emergency service</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="text-yellow-400 mr-3 flex-shrink-0 mt-1" size={20} />
                <div>
                  <h3 className="font-semibold text-navy-900">Satisfaction Guarantee</h3>
                  <p className="text-sm text-gray-600">We don't leave until you're 100% satisfied</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="rounded-lg overflow-hidden shadow-xl">
            <img 
              src="https://images.pexels.com/photos/8961438/pexels-photo-8961438.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750" 
              alt="AYGA Electrical Team" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}