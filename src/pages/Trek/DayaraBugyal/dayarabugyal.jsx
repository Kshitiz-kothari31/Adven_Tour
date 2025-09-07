import Form from '../../../components/form/Form'
import SpecialSection from '../points';
import ScrollDownButton from '../button';
import TrekPage from "../TrekPage";

function DayaraBugyal() {
  return (
    <main className='josefin-sans' >
      {/* Hero sectoin */}
      <section className="relative w-full h-[93vh] overflow-hidden font-josefin">
        {/* 🌄 Background Image */}
        <img
          src="https://cdn.jsdelivr.net/gh/Kshitiz-kothari31/Adven_Tour_img-videos@main/Images/Treks/kedarkatha%20trek/landscape/kedarkantha_img12.webp"
          alt="Dayara Bugyal Trek"
          className="absolute top-0 left-0 w-full h-full object-cover z-10 animate-bgZoom"
        />

        {/* 🌘 Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-black/80 z-30 animate-fadeIn" />

        {/* 🧭 Text Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center z-40 text-white text-center px-4 animate-fadeInUp">
          <h1 className="text-4xl md:text-6xl font-bold font-kalnia drop-shadow-xl leading-tight mb-6 animate-fadeInUp">
            Dayara Bugyal Trek
          </h1>

          <button
            className="mt-6 px-6 py-3 bg-green-700 hover:bg-green-800 text-white rounded-lg backdrop-blur-md border border-white/20 shadow-md transition-transform duration-300 hover:scale-105"
            onClick={() =>
              window.open(
                "https://wa.me/919876543210?text=Hi%20I%20am%20interested%20in%20booking%20a%20tour",
                "_blank"
              )
            }
          >
            Book Now
          </button>

          <p className="text-base md:text-lg mt-6 max-w-2xl text-white/90 animate-fadeInUp">
            Discover epic trails, expert tips, and inspiring stories to fuel your next mountain adventure.
          </p>
          <p className="text-base md:text-lg mt-2 max-w-2xl text-white/90 animate-fadeInUp delay-200">
            Whether you're a beginner or a pro, we help you reach new heights with confidence.
          </p>
        </div>

        {/* 🌊 Bottom Wave SVG */}
        <div className="absolute -bottom-[1px] left-0 w-full overflow-hidden leading-[0] z-50 animate-fadeInUp">
          <svg
            className="block w-full h-[100px] pointer-events-none"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
          >
            <path
              fill="#FDFAF6"
              d="M0,224 C360,100 1080,340 1440,160 L1440,320 L0,320 Z"
            />
          </svg>
        </div>

        {/* Keyframes */}
        <style>{`
          @keyframes bgZoom {
            0% { transform: scale(1.1); }
            100% { transform: scale(1); }
          }
          .animate-bgZoom { animation: bgZoom 1.6s ease-in-out forwards; }

          @keyframes fadeIn {
            0% { opacity: 0; }
            100% { opacity: 1; }
          }
          .animate-fadeIn { animation: fadeIn 1.2s ease-out forwards; }

          @keyframes fadeInUp {
            0% { opacity: 0; transform: translateY(50px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          .animate-fadeInUp { animation: fadeInUp 1.2s ease-out forwards; }
          .animate-fadeInUp.delay-200 { animation-delay: 0.2s; }
        `}</style>
      </section>

      {/* drop button  */}
        <ScrollDownButton />

      {/* 2nd section */}
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

        {/* 🔁 Tailwind CSS Animation */}
        <style>
          {`
            @keyframes fadeUp {
              0% { opacity: 0; transform: translateY(30px); }
              100% { opacity: 1; transform: translateY(0); }
            }
            .animate-fadeUp {
              animation: fadeUp 1s ease-out forwards;
            }
          `}
        </style>
      </section>

      {/* 3rd section */}
      <TrekPage/>


      {/* 5th section */}
        <SpecialSection/>

      {/* 6th section */}
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

            {/* 🔁 Tailwind CSS Animations */}
            <style>
              {`
                @keyframes fadeInScale {
                  0% { opacity: 0; transform: scale(0.9); }
                  100% { opacity: 1; transform: scale(1); }
                }
                .animate-fadeInScale {
                  animation: fadeInScale 0.6s ease-out forwards;
                }
              `}
            </style>
          </div>
        </section>
        <Form
        boxClass="bg-[#DBFCE7]"
        headingClass="text-[#00786F]"
        buttonClass="bg-[#00786F] hover:bg-[#00786F]"
        focusClass="focus:outline-[#00786F]"
      />
    </main>
  );
}

export default DayaraBugyal;
