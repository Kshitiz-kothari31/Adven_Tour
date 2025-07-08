import { motion, useAnimation , AnimatePresence } from 'framer-motion';
import { useEffect , useState } from 'react';
import img1 from '../../assets/images/Home/img1.png'
import img2 from '../../assets/images/Home/img2.png'
import img3 from '../../assets/images/Home/img3.png'
import pic1 from '../../assets/images/Home/download.jpeg'
import pic2 from '../../assets/images/Home/download (5).jpeg' 
import ImageSlider from './imageslider'
import './home.css'

const images = [img1, img2, img3];

    const ImageSliderBox = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [show, setShow] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
        setShow(false); // Start fade out
        setTimeout(() => {
            setCurrentIndex((prev) => (prev + 1) % images.length);
            setShow(true); // Fade in new image
        }, 400); // match fade-out duration
        }, 2500);

        return () => clearInterval(interval);
    }, []);

    return (
        <motion.div
        className="relative w-full md:w-[85%] mx-auto mt-8 px-2 overflow-hidden  rounded-4xl shadow-lg"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: 'easeOut' }}
        >
        {/* Smooth image fade transition */}
        <div className="relative z-10 w-full h-[60vh] rounded-4xl overflow-hidden">
            <AnimatePresence mode="wait">
            {show && (
                <motion.img
                key={currentIndex}
                src={images[currentIndex]}
                alt="Slider Image"
                className="w-full h-full object-cover rounded-4xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                />
            )}
            </AnimatePresence>
        </div>
        </motion.div>
    );
    };
const home = () => {


  return (
    <section className='home'>
        {/* image section at top */}
            <ImageSliderBox  />


        {/* para section */}
        <motion.div
        className="
        py-5 px-4 text-center font-josefin text-gray-800"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{ visible: { transition: { staggerChildren: 0.3 } }, hidden: {} }}
        >
        <motion.div
            className="max-w-4xl mx-auto space-y-4 text-base sm:text-lg md:text-xl leading-relaxed"
        >
            {[`Welcome to `, `We offer exciting outdoor activities like `, `Our experienced team makes sure`].map((text, index) => (
            <motion.p
            key={index}
            variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
            }}
            >
            {index === 0 && (
                <>Welcome to <span className="font-bold">Adventure Pulse</span> – your one-stop destination for fun, thrill, and adventure!</>
            )}
            {index === 1 && (
                <>We offer exciting outdoor activities like <span className="font-bold">rafting in wild rivers</span>, <span className="font-bold">camping under the stars</span>, <span className="font-bold">bungee jumping from great heights</span>, and <span className="font-bold">adventure tours</span> through beautiful forests and hills.</>
            )}
            {index === 2 && (
                <span className="hidden lg:block">
                Our experienced team makes sure every activity is safe and fun for everyone — whether you’re a beginner or an adventure lover. Come with your friends, family, or join solo, and create amazing memories you’ll never forget. Adventure Pulse is here to turn your holiday into an unforgettable adventure!
                </span>
            )}
            </motion.p>

            ))}
        </motion.div>
        </motion.div>

        {/* image and text */}
        <motion.div
  className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 xl:gap-32 items-center mt-32 px-4 md:px-10 xl:px-24"
  initial={{ opacity: 0, y: 80 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 1, ease: 'easeOut' }}
  viewport={{ once: true }}
>
  {/* Text Section */}
    <motion.div
        className="px-2 md:px-6 xl:px-10"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: 'easeOut', delay: 0.3 }}
        viewport={{ once: true }}
    >
        <h2 className="text-center md:text-left text-3xl md:text-4xl font-medium font-josefin text-gray-800 mb-2">
        Adventure Pulse
        </h2>
        <p className="text-center md:text-left text-sm text-gray-600 mb-4">
        Beyond Limits, Into the Wild.
        </p>
        <p className="text-gray-700 leading-relaxed text-[1rem] block md:hidden">
        <span className="font-semibold">Adventure Pulse</span> is one of India’s most loved adventure tour operators,
        specializing in unforgettable experiences designed to thrill and inspire.
        From white-water rafting in roaring rivers to nights spent camping by serene streams.
        </p>
        <p className="text-gray-700 leading-relaxed text-[1rem] hidden md:block">
        <span className="font-semibold">Adventure Pulse</span> is one of India’s most loved adventure tour operators,
        specializing in unforgettable experiences designed to thrill and inspire.
        From white-water rafting in roaring rivers to nights spent camping by serene streams, our adventure itineraries
        are built for explorers like you.
        Whether it’s your dream to leap off a platform with a bungee cord, trek through untouched forests, or navigate
        challenging rapids, our expert team ensures each adventure is safe, seamless, and exhilarating.
        <br /><br />
        Join us in creating memories you’ll never forget. <span className="inline-block text-blue-600">↗</span>
        </p>
    </motion.div>

    {/* Image Section */}
    <motion.div
        className="flex flex-row justify-center items-center gap-4"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: 'easeOut', delay: 0.5 }}
        viewport={{ once: true }}
    >
        <motion.img
        src={pic1}
        alt="Left"
        className="w-[160px] lg:w-[220px] xl:w-[260px] h-auto object-cover rounded-[50%_30%_50%_30%/30%_50%_30%_50%] shadow-lg"
        animate={{ rotate: [0, 1, -1, 0], scale: [1, 1.02, 0.98, 1] }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        />
        <motion.img
        src={pic2}
        alt="Right"
        className="w-[160px] lg:w-[220px] xl:w-[260px] h-auto object-cover rounded-[50%_30%_50%_30%/30%_50%_30%_50%] shadow-lg"
        animate={{ rotate: [0, -1, 1, 0], scale: [1, 0.98, 1.02, 1] }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 0.2 }}
        />
    </motion.div>
        </motion.div>

        {/* image and text */}
        <div className="py-20 px-4 md:px-10 xl:px-24">
            {/* Text Content */}
            <motion.div
            className="max-w-5xl mx-auto text-center text-gray-800 font-josefin space-y-4 text-lg leading-relaxed"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
                visible: { transition: { staggerChildren: 0.3 } },
                hidden: {},
            }}
            >
            <motion.p
                variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
                }}
            >
                Since the 1960s, white-water rafting has grown from a niche pursuit into a global adventure sport. Here, we
                keep that spirit alive – challenging rapids, scenic gorges, and expert-guided expeditions through the heart of
                India’s most thrilling rivers.
            </motion.p>

            <motion.p
                variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
                }}
            >
                Each rafting trip is paired with optional overnight camping by the riverside, bonfires, and open-sky dinners – the
                perfect escape for adventure lovers.
            </motion.p>
            </motion.div>


            {/* Image Grid */}
            <motion.div
        className="mt-10 py-4 grid grid-cols-3 sm:grid-cols-4 gap-3 sm:gap-6 max-w-6xl mx-auto px-2 sm:px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.2 }}
        variants={{
            hidden: {},
            visible: {},
        }}
        >
        {[pic1, pic2, pic1, pic2].map((src, i) => (
            <motion.img
            key={i}
            src={src}
            alt={`Image ${i}`}
            className={`w-full max-w-[120px] sm:max-w-full mx-auto rounded-[16px] shadow-md object-cover aspect-[3/4] ${
                i === 0
                ? "rotate-[-2deg]"
                : i === 1
                ? "rotate-[1.5deg]"
                : i === 2
                ? "rotate-[-1.5deg]"
                : "rotate-[2deg] hidden sm:block"
            }`}
            variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 },
            }}
            whileHover={{
                scale: 1.05,
                rotate: [0, 1.5, -1.5, 1.5, 0],
                transition: { duration: 0.4 },
            }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            />
        ))}
            </motion.div>

        </div>


        {/* cards section */}
        <div className="py-16 px-4 md:px-10 xl:px-24 space-y-12">
        {/* Section 1: Packages */}
        <div>
            <h2 className="text-3xl font-semibold mb-6 text-center md:text-left">Package’s</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
                { src: pic2, label: "Rafting" },
                { src: pic1, label: "Trekking" },
                { src: pic2, label: "Bungee" },
                { src: pic1, label: "Others" },
            ].map((item, index) => (
                <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03 }}
                className="group w-[80%] sm:w-full mx-auto cursor-pointer"
                >
                <div className="flex flex-col items-center">
                    <div className="relative rounded-xl overflow-hidden shadow-md w-full aspect-[4/2.5] sm:aspect-[3/4] bg-gray-100 transition-all duration-500 ease-in-out group-hover:shadow-xl">
                    <motion.img
                        src={item.src}
                        alt={item.label}
                        className="w-full h-full object-cover transition-transform duration-500 ease-in-out"
                        whileHover={{ scale: 1.08 }}
                    />
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-orange-300 text-black px-4 py-1 text-sm rounded-md shadow group-hover:bg-orange-400 transition duration-300"
                    >
                        More
                    </motion.button>
                    </div>
                    <p className="mt-2 font-bold text-lg">{item.label}</p>
                </div>
                </motion.div>
            ))}
            </div>
        </div>

        {/* Section 2: Stays */}
        <div>
            <h2 className="text-3xl font-semibold font-josefin mb-6 text-center md:text-left">Stays</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
                { src: pic2, label: "Rafting" },
                { src: pic1, label: "Trekking" },
                { src: pic1, label: "Bungee" },
            ].map((item, index) => (
                <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03 }}
                className="group w-[80%] sm:w-full mx-auto cursor-pointer"
                >
                <div className="flex flex-col items-center">
                    <div className="relative rounded-xl overflow-hidden shadow-md w-full aspect-[4/2.5] sm:aspect-[3/4] bg-gray-100 transition-all duration-500 ease-in-out group-hover:shadow-xl">
                    <motion.img
                        src={item.src}
                        alt={item.label}
                        className="w-full h-full object-cover transition-transform duration-500 ease-in-out"
                        whileHover={{ scale: 1.08 }}
                    />
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-orange-300 text-black px-4 py-1 text-sm rounded-md shadow group-hover:bg-orange-400 transition duration-300"
                    >
                        More
                    </motion.button>
                    </div>
                    <p className="mt-2 font-bold text-lg">{item.label}</p>
                </div>
                </motion.div>
            ))}
            </div>
        </div>
        </div>



        {/* image slider */}
        <ImageSlider  />

        {/* detail */}
        <div className="bg-[#2F3136] py-16 px-4 mt-10 md:px-10 xl:px-24">
    <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-center text-white font-josefin">
        {/* Card 1 */}
        <div>
        <h3 className="text-base md:text-lg font-semibold underline underline-offset-4 mb-2">
            Business Name
        </h3>
        <p className="text-sm md:text-base leading-snug max-w-xs mx-auto">
            unchanged. It was popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop publish
        </p>
        </div>

        {/* Card 2 */}
        <div>
        <h3 className="text-base md:text-lg font-semibold underline underline-offset-4 mb-2">
            Business Name
        </h3>
        <p className="text-sm md:text-base leading-snug max-w-xs mx-auto">
            unchanged. It was popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop publish
        </p>
        </div>

        {/* Card 3 – only visible on md and up */}
        <div className="hidden md:block">
        <h3 className="text-base md:text-lg font-semibold underline underline-offset-4 mb-2">
            Business Name
        </h3>
        <p className="text-sm md:text-base leading-snug max-w-xs mx-auto">
            unchanged. It was popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop publish
        </p>
        </div>
    </div>
        </div>




    </section>
  )
}

export default home