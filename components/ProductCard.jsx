import { FaCommentDots, FaPhoneAlt, FaHeadset, FaRandom, FaProjectDiagram } from "react-icons/fa";

export default function ProductCard() {
  return (
   <section className="max-w-8xl mx-auto sm:px-6 lg:px-8 py-16 ml-5 mr-5 sm:py-20 lg:ml-25 lg:mr-25">
  <h2 className="text-3xl sm:text-4xl font-bold text-pink-900 mb-10 sm:mb-12 text-center">
    Contact Center Products
  </h2>

  <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
    {/* Use flex-1 and min-w-[200px] to make all 5 cards stay in one row */}
    
    {/* Text-Based */}
    <div className="flex-1 min-w-[200px] max-w-xs bg-white/20 backdrop-blur-lg border-2 border-pink-200 rounded-xl shadow-lg hover:shadow-xl transition p-6 text-center flex flex-col items-center">
      <FaCommentDots className="mx-auto text-pink-600 text-4xl sm:text-5xl mb-4" />
      <h3 className="text-lg sm:text-xl font-semibold text-pink-600 mb-2">Text-Based</h3>
      <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
        Handle customer queries through SMS, live chat, and messaging apps for fast & efficient communication.
      </p>
    </div>

    {/* Inbound */}
    <div className="flex-1 min-w-[200px] max-w-xs bg-white/20 backdrop-blur-lg border-2 border-pink-200 rounded-xl shadow-lg hover:shadow-xl transition p-6 text-center flex flex-col items-center">
      <FaPhoneAlt className="mx-auto text-pink-600 text-4xl sm:text-5xl mb-4" />
      <h3 className="text-lg sm:text-xl font-semibold text-pink-600 mb-2">Inbound</h3>
      <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
        Manage incoming calls with IVR, intelligent routing, and priority-based support to enhance customer experience.
      </p>
    </div>

    {/* Outbound */}
    <div className="flex-1 min-w-[200px] max-w-xs bg-white/20 backdrop-blur-lg border-2 border-pink-200 rounded-xl shadow-lg hover:shadow-xl transition p-6 text-center flex flex-col items-center">
      <FaHeadset className="mx-auto text-pink-600 text-4xl sm:text-5xl mb-4" />
      <h3 className="text-lg sm:text-xl font-semibold text-pink-600 mb-2">Outbound</h3>
      <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
        Boost sales and customer engagement with predictive dialers, automated follow-ups, and outbound campaigns.
      </p>
    </div>

    {/* Blended */}
    <div className="flex-1 min-w-[200px] max-w-xs bg-white/20 backdrop-blur-lg border-2 border-pink-200 rounded-xl shadow-lg hover:shadow-xl transition p-6 text-center flex flex-col items-center">
      <FaRandom className="mx-auto text-pink-600 text-4xl sm:text-5xl mb-4" />
      <h3 className="text-lg sm:text-xl font-semibold text-pink-600 mb-2">Blended</h3>
      <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
        Combine inbound & outbound calling in one platform for maximum flexibility and efficiency.
      </p>
    </div>

    {/* Omnichannel */}
    <div className="flex-1 min-w-[200px] max-w-xs bg-white/20 backdrop-blur-lg border-2 border-pink-200 rounded-xl shadow-lg hover:shadow-xl transition p-6 text-center flex flex-col items-center">
      <FaProjectDiagram className="mx-auto text-pink-600 text-4xl sm:text-5xl mb-4" />
      <h3 className="text-lg sm:text-xl font-semibold text-pink-600 mb-2">Omnichannel</h3>
      <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
        Deliver seamless customer service across voice, chat, email, and social media from one unified dashboard.
      </p>
    </div>
  </div>
</section>


  );
}
