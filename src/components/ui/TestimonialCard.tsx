import { Star } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  location: string;
  text: string;
  rating: number;
  date: string;
}

export default function TestimonialCard({ name, location, text, rating, date }: TestimonialCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100 hover:shadow-lg transition-shadow duration-300">
      <div className="flex items-center mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={16}
            className={`mr-1 ${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
          />
        ))}
      </div>
      <p className="text-gray-700 mb-4 italic">"{text}"</p>
      <div className="flex justify-between items-center">
        <div>
          <p className="font-semibold text-navy-900">{name}</p>
          <p className="text-sm text-gray-500">{location}</p>
        </div>
        <p className="text-xs text-gray-400">{date}</p>
      </div>
    </div>
  );
}