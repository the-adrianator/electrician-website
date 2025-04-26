import { DivideIcon as LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
}

export default function ServiceCard({ title, description, icon: Icon }: ServiceCardProps) {
  return (
    <div className="bg-white shadow-md hover:shadow-lg rounded-lg p-6 transition-all duration-300 border-t-4 border-yellow-400">
      <div className="inline-flex items-center justify-center bg-navy-900/10 p-3 rounded-full mb-5">
        <Icon size={28} className="text-navy-900" />
      </div>
      <h3 className="text-xl font-semibold mb-3 text-navy-900">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}