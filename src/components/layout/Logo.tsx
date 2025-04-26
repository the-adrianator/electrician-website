import { Zap } from 'lucide-react';

export default function Logo() {
  return (
    <div className="flex items-center">
      <Zap size={32} className="text-yellow-400" />
      <div className="ml-2">
        <span className="text-white font-bold text-xl leading-none block">AYGA</span>
        <span className="text-yellow-400 text-sm font-medium leading-none block">ELECTRICAL LTD</span>
      </div>
    </div>
  );
}