import { Phone } from 'lucide-react';
import Button from '../ui/Button';

export default function CtaSection() {
  return (
    <section className="bg-navy-900 py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="mb-8 md:mb-0">
            <h2 className="text-3xl font-bold text-white mb-4">
              Need an electrician today?
            </h2>
            <p className="text-gray-300 text-lg max-w-xl">
              Whether it's an emergency or a planned project, our team is ready to help. Call us now for a free quote or immediate assistance.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              variant="secondary" 
              size="lg" 
              icon={<Phone size={20} />}
              onClick={() => window.location.href = 'tel:+441234567890'}
            >
              Call Now
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white text-white hover:bg-white hover:text-navy-900"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Request a Quote
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}