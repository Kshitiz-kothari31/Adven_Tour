import { useCallback, lazy, Suspense } from 'react';
import ScrollDownButton from "../button";
import TrekPage from "../TrekPage";
import Form from "../../../components/form/Form";
import SpecialSection from '../points';

// Lazy load non-critical components
const LazyTrekPage = lazy(() => import("../TrekPage"));
const LazySpecialSection = lazy(() => import('../points'));
const LazyForm = lazy(() => import("../../../components/form/Form"));

function GomukhTrek() {
  // Memoized scroll handler
  const handleScroll = useCallback(() => {
    const target = document.getElementById("target-section");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <main className='josefin-sans'>
      {/* Hero section */}
      <section className="relative josefin-sans w-full h-[90vh] overflow-hidden font-josefin text-white snap-start">
        {/* Background Image with optimization */}
        <img
          src="https://cdn.jsdelivr.net/gh/Kshitiz-kothari31/Adven_Tour_img-videos@main/Images/Treks/Gomukh%20Tapovan/landscape/gomukhTapovan_img01.webp"
          alt="Gaumukh Tapovan Trek - Beautiful Himalayan landscape with snow-capped mountains"
          className="absolute w-full h-full object-cover z-10 animate-bgZoom"
          loading="eager"
          decoding="async"
          fetchpriority="high"
        />
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50 z-20" />
        
        {/* Text Content */}
        <div className="relative z-30 flex flex-col items-center justify-center h-full px-6 text-center animate-fadeInUp">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight font-kalnia tracking-wider drop-shadow-lg animate-fadeInUp delay-200">
            Into the Gaumukh Tapovan
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-xl text-white/90 animate-fadeInUp delay-400">
            Trek deep into nature's heart. Let the trails test your spirit.
          </p>
          <button
            onClick={handleScroll}
            className="mt-8 px-6 py-3 cursor-pointer rounded-xl bg-orange-600 hover:bg-orange-700 transition-all shadow-md border border-white/10 transform-gpu hover:scale-105 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50"
            aria-label="Start the journey to Gaumukh Tapovan"
          >
            Start the Journey
          </button>
        </div>
        
        {/* Mountain silhouette */}
        <div
          className="absolute bottom-0 left-0 w-full h-28 bg-no-repeat bg-bottom bg-cover z-30 opacity-60"
          style={{
            backgroundImage:
              "url('https://raw.githubusercontent.com/ajaymarathe/mountain-silhouettes/main/mountain-3.svg')",
          }}
          aria-hidden="true"
        />
        
        {/* Bottom gradient */}
        <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-black to-transparent z-20" />
        
        {/* Optimized CSS animations */}
        <style jsx>{`
          @keyframes bgZoom {
            0% { transform: scale(1); }
            100% { transform: scale(1.1); }
          }
          .animate-bgZoom { animation: bgZoom 20s linear infinite; }
          @keyframes fadeInUp {
            0% { opacity: 0; transform: translateY(80px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          .animate-fadeInUp { animation: fadeInUp 1.2s ease-out forwards; }
          .animate-fadeInUp.delay-200 { animation-delay: 0.2s; }
          .animate-fadeInUp.delay-400 { animation-delay: 0.4s; }
        `}</style>
      </section>

      {/* Scroll button */}
      <ScrollDownButton />
      
      {/* Second section */}
      <section
        id="target-section"
        className="bg-[#fdfaf6] py-6 px-4 md:px-8 xl:px-20 md:mt-15 font-josefin opacity-0 animate-fadeUp"
      >
        <div className="text-center max-w-5xl mx-auto px-4">
          <p className="text-base md:text-lg lg:text-xl text-gray-800 leading-relaxed">
            Discover epic trails, expert tips, and inspiring stories to fuel your next
            mountain adventure. Whether you're a beginner or a pro, we help you reach
            new heights with confidence. Discover epic trails, expert tips, and
            inspiring stories to fuel your next mountain adventure. Whether you're a
            beginner or a pro, we help you reach new heights with confidence.
          </p>
        </div>
        
        <style jsx>{`
          @keyframes fadeUp {
            0% { opacity: 0; transform: translateY(30px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          .animate-fadeUp {
            animation: fadeUp 1s ease-out forwards;
          }
        `}</style>
      </section>
      
      {/* Third section with lazy loading */}
      <Suspense fallback={<div className="h-40 flex items-center justify-center">Loading trek details...</div>}>
        <LazyTrekPage />
      </Suspense>
      
      {/* Fourth section with lazy loading */}
      <Suspense fallback={<div className="h-40 flex items-center justify-center">Loading special features...</div>}>
        <LazySpecialSection />
      </Suspense>
      
      {/* Fifth section */}
      <section className="flex justify-center items-center mt-5 md:mt-[40px]">
        <div className="bg-[#E4EFE7] rounded-[40px] flex flex-col justify-center items-center text-center font-[Josefin_Sans] font-normal px-5 py-5 md:px-10 md:py-8 w-[clamp(250px,50vw,1000px)] h-[clamp(200px,57vw,270px)] opacity-0 animate-fadeInScale">
          <h3 className="underline font-bold mb-4 text-lg md:text-2xl">
            Best Time to Visit
          </h3>
          <p className="text-xs md:text-base lg:text-xl">
            Spring (Mar–Apr): Rhododendron blooms <br />
            Summer (May–Jun): Lush green meadows <br />
            Autumn (Sep–Nov): Clear skies, golden hues <br />
            Winter (Dec–Feb): Snow-covered wonderland
          </p>
          
          <style jsx>{`
            @keyframes fadeInScale {
              0% { opacity: 0; transform: scale(0.9); }
              100% { opacity: 1; transform: scale(1); }
            }
            .animate-fadeInScale {
              animation: fadeInScale 0.6s ease-out forwards;
            }
          `}</style>
        </div>
      </section>

      {/* Form section with lazy loading */}
      <Suspense fallback={<div className="h-40 flex items-center justify-center">Loading booking form...</div>}>
        <LazyForm
          boxClass="bg-[#DBFCE7]"
          headingClass="text-[#00786F]"
          buttonClass="bg-[#00786F] hover:bg-[#00786F]"
          focusClass="focus:outline-[#00786F]"
        />
      </Suspense>
    </main>
  );
}

export default GomukhTrek;