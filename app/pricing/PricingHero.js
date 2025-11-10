
export default function PricingHero() {
  return (
    <section className="relative w-full h-[60vh] sm:h-[70vh]">
  <video
    autoPlay
    loop
    muted
    playsInline
    className="absolute inset-0 w-full h-full object-cover"
  >
    <source src="/videos/pricing.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>

  <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4 sm:px-6 bg-black/40">
    <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-3 sm:mb-4">
      Tegsoft Pricing Plans
    </h1>
    <p className="text-base sm:text-lg md:text-xl mb-5 max-w-2xl">
      Choose the best plan to scale your contact center operations.
    </p>
    <button className="px-6 sm:px-8 py-2 sm:py-3 bg-pink-600 hover:bg-pink-700 rounded-full font-semibold transition">
      Get Started
    </button>
  </div>
</section>

  );
}
