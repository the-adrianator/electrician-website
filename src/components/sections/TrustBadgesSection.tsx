import { ShieldCheck, Award, ThumbsUp, Clock } from 'lucide-react';

export default function TrustBadgesSection() {
  const badges = [
    {
      id: 1,
      icon: ShieldCheck,
      title: 'NICEIC Registered',
      description: 'All work complies with current regulations'
    },
    {
      id: 2,
      icon: Award,
      title: 'Qualified Electricians',
      description: 'Fully trained and certified team'
    },
    {
      id: 3,
      icon: ThumbsUp,
      title: '5-Star Service',
      description: 'Consistently top-rated by customers'
    },
    {
      id: 4,
      icon: Clock,
      title: 'Fast Response',
      description: 'Reliable service when you need it most'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {badges.map((badge) => (
            <div key={badge.id} className="flex flex-col items-center text-center">
              <div className="bg-navy-900/10 p-4 rounded-full mb-4">
                <badge.icon size={32} className="text-navy-900" />
              </div>
              <h3 className="text-lg font-semibold text-navy-900 mb-2">{badge.title}</h3>
              <p className="text-gray-600">{badge.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}