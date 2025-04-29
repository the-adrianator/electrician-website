import { useState } from "react";
import { Phone, AlertTriangle, X } from "lucide-react";

export default function EmergencyBanner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-yellow-400 text-navy-900 py-2 fixed top-0 w-full z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <AlertTriangle size={18} className="mr-2" />
            <span className="font-semibold text-sm mr-2">
              24/7 Emergency Callouts — No Overtime Charges!
            </span>
          </div>
          <div className="flex items-center">
            <a
              href="tel:+447526016590"
              className="flex items-center hover:underline font-bold"
            >
              <Phone size={16} className="mr-1" />
              <span>07526 016590</span>
            </a>
            <button
              onClick={() => setIsVisible(false)}
              className="ml-4 p-1 hover:bg-yellow-500 rounded-full"
              aria-label="Close emergency banner"
            >
              <X size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
