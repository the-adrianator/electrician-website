import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import ContactForm from '../ui/ContactForm';

export default function ContactSection() {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="Contact Us" 
          subtitle="Get in touch with our team for a free quote or to discuss your electrical needs."
          center={true}
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mt-12">
          <div className="lg:col-span-2">
            <div className="bg-navy-900 text-white rounded-lg shadow-md p-6 h-full">
              <h3 className="text-2xl font-semibold mb-6">Get In Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <Phone className="text-yellow-400 mr-4 flex-shrink-0 mt-1" size={20} />
                  <div>
                    <p className="font-medium">Phone</p>
                    <a href="tel:+441234567890" className="text-gray-300 hover:text-yellow-400 transition-colors">
                      01234 567 890
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="text-yellow-400 mr-4 flex-shrink-0 mt-1" size={20} />
                  <div>
                    <p className="font-medium">Email</p>
                    <a href="mailto:info@aygaelectrical.co.uk" className="text-gray-300 hover:text-yellow-400 transition-colors">
                      info@aygaelectrical.co.uk
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MapPin className="text-yellow-400 mr-4 flex-shrink-0 mt-1" size={20} />
                  <div>
                    <p className="font-medium">Address</p>
                    <address className="text-gray-300 not-italic">
                      123 Electrical Avenue<br />
                      Manchester<br />
                      M1 1AA
                    </address>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock className="text-yellow-400 mr-4 flex-shrink-0 mt-1" size={20} />
                  <div>
                    <p className="font-medium">Hours</p>
                    <p className="text-gray-300">Mon-Fri: 8am - 6pm</p>
                    <p className="text-gray-300">Emergency callout: 24/7</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 pt-6 border-t border-gray-700">
                <h4 className="font-medium mb-2">Service Areas</h4>
                <p className="text-gray-300">
                  Manchester, Salford, Stockport, Bolton, Bury, Oldham, Rochdale, and surrounding areas.
                </p>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-3">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}