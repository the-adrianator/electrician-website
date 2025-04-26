import { useState } from 'react';
import { 
  Zap, 
  Lightbulb, 
  Power, 
  BatteryCharging, 
  FileCheck, 
  SmartphoneCharging,
  Waves,
  ShieldCheck
} from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import ServiceCard from '../ui/ServiceCard';
import Button from '../ui/Button';

export default function ServicesSection() {
  const services = [
    {
      id: 1,
      title: 'Emergency Repairs',
      description: 'Fast response to electrical emergencies with a 24/7 call-out service. No overtime charges.',
      icon: Zap
    },
    {
      id: 2,
      title: 'Lighting Installations',
      description: 'Modern, energy-efficient lighting solutions for homes and businesses.',
      icon: Lightbulb
    },
    {
      id: 3,
      title: 'Fuse Board Upgrades',
      description: 'Upgrade to modern consumer units for improved safety and reliability.',
      icon: Power
    },
    {
      id: 4,
      title: 'EV Charger Installations',
      description: 'Certified installation of home and commercial EV charging points.',
      icon: BatteryCharging
    },
    {
      id: 5,
      title: 'EICR Certificates',
      description: 'Landlord electrical safety certificates and homebuyer electrical reports.',
      icon: FileCheck
    },
    {
      id: 6,
      title: 'Smart Home Wiring',
      description: 'Future-proof your home with custom smart home electrical installations.',
      icon: SmartphoneCharging
    },
    {
      id: 7,
      title: 'Surge Protection',
      description: 'Protect valuable electronics from damaging power surges and lightning strikes.',
      icon: Waves
    },
    {
      id: 8,
      title: 'Electrical Safety Checks',
      description: 'Comprehensive electrical safety inspections for peace of mind.',
      icon: ShieldCheck
    }
  ];

  const [visibleServices, setVisibleServices] = useState(6);
  const showAllServices = () => setVisibleServices(services.length);
  
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="Our Services" 
          subtitle="From emergency repairs to complete electrical installations, our qualified electricians provide a comprehensive range of services."
          center={true}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.slice(0, visibleServices).map((service) => (
            <ServiceCard 
              key={service.id}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>
        
        {visibleServices < services.length && (
          <div className="mt-12 text-center">
            <Button variant="outline" onClick={showAllServices}>
              View All Services
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}