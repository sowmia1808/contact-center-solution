import { FiPhoneCall } from "react-icons/fi";

export default function AnimatedVoiceIcon() {
  return (
    <div className="relative w-16 h-16 flex items-center justify-center">
      {/* Outer pulse */}
      <div className="absolute w-16 h-16 bg-pink-200 rounded-full opacity-50 animate-ping"></div>
      <div className="absolute w-12 h-12 bg-pink-300 rounded-full opacity-75 animate-ping delay-200"></div>

      {/* Main icon */}
      <FiPhoneCall className="relative w-8 h-8 text-pink-500" />
    </div>
  );
}
