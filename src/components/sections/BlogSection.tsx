import { ArrowRight } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";
import BlogCard from "../ui/BlogCard";

export default function BlogSection() {
  const blogPosts = [
    {
      id: 1,
      title: "5 Signs Your Wiring Needs an Upgrade",
      excerpt:
        "Outdated wiring can be dangerous. Learn the key warning signs that indicate it's time to upgrade your electrical system.",
      image:
        "https://images.pexels.com/photos/8005397/pexels-photo-8005397.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
      date: "March 15, 2024",
      readTime: "5 min read",
      category: "Safety",
    },
    {
      id: 2,
      title: "How EV Chargers Boost Home Value",
      excerpt:
        "Installing an EV charging point isn't just convenient - it can significantly increase your property's market value.",
      image: "/images/ev-charging.jpg",
      date: "March 10, 2024",
      readTime: "4 min read",
      category: "EV Charging",
    },
    {
      id: 3,
      title: "Smart Home Lighting: A Complete Guide",
      excerpt:
        "Transform your home with smart lighting solutions. From installation to automation, here's everything you need to know.",
      image: "/images/smart-home.jpg",
      date: "March 5, 2024",
      readTime: "7 min read",
      category: "Smart Home",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Electrical Insights"
          subtitle="Stay informed with our latest articles on electrical safety, innovations, and expert tips."
          center={true}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {blogPosts.map((post) => (
            <BlogCard key={post.id} {...post} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="inline-flex items-center text-navy-900 font-semibold hover:text-yellow-400 transition-colors duration-200">
            View All Articles
            <ArrowRight size={20} className="ml-2" />
          </button>
        </div>
      </div>
    </section>
  );
}
