import { Clock, Tag } from 'lucide-react';

interface BlogCardProps {
  title: string;
  excerpt: string;
  image: string;
  date: string;
  readTime: string;
  category: string;
}

export default function BlogCard({ title, excerpt, image, date, readTime, category }: BlogCardProps) {
  return (
    <article className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-yellow-400 text-navy-900 text-sm font-medium px-3 py-1 rounded-full">
            {category}
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex items-center text-sm text-gray-500 mb-3">
          <span>{date}</span>
          <span className="mx-2">•</span>
          <div className="flex items-center">
            <Clock size={14} className="mr-1" />
            {readTime}
          </div>
        </div>
        
        <h3 className="text-xl font-semibold text-navy-900 mb-2 hover:text-yellow-400 transition-colors duration-200">
          <a href="#">{title}</a>
        </h3>
        
        <p className="text-gray-600 mb-4">{excerpt}</p>
        
        <a 
          href="#" 
          className="inline-flex items-center text-navy-900 font-medium hover:text-yellow-400 transition-colors duration-200"
        >
          Read More →
        </a>
      </div>
    </article>
  );
}