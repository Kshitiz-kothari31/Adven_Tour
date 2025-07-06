// INFO: Images imports
import heroImg from "../../assets/images/TrekMain/heroImage.png";
import Trek1 from "../../assets/images/TrekMain/DayaraBuyalTrek.jpg";
import downArrowImage from "../../assets/downArrow.png";
import leftBtn from "../../assets/leftArrow.png";
import rightBtn from "../../assets/rightArrow.png";
import GuideImg1 from "../../assets/images/guidesImage/1.jpg"
import GuideImg2 from "../../assets/images/guidesImage/2.jpg"
import GuideImg3 from "../../assets/images/guidesImage/3.jpg"
import GuideImg4 from "../../assets/images/guidesImage/4.jpg"
import styles from "./trek.module.css";

// INFO: GSAP imports
import gsap from 'gsap'
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger);

function Trek() {
  const downArrow = useRef()

  useGSAP(() => {
    const heroAnimation = gsap.utils.toArray(".heroAnimate");

    gsap.from(heroAnimation, {
      y: 30,
      opacity: 0,
      duration: 1,
      delay: 0.5,
      stagger: 0.6,
    });

    gsap.from(downArrow.current, {
        opacity: 0,
        y: 30,
        duration: 0.5,
        delay: 0.5,
        ease: "bounce.out",
        scrollTrigger: {
          trigger: downArrow.current,
          start: "top bottom",
          end: "top 70%",
          scroller: "body",
          once: true
        }
    })

    gsap.from(".heroImg", {
      opacity: 0,
      duration: 1,
      delay: 0.5
    })

  });

  return (
    <div className={styles.main}>
      <div className={styles.firstSection}>
        <div className={styles.content}>
          <h1 className="heroAnimate">Conquer New Heights One Peak at a Time</h1>
          <p className="heroAnimate">
            Discover epic trails, expert tips, and inspiring stories to fuel
            your next mountain adventure. Whether you're a beginner or a pro, we
            help ou reach new heights with confidence.
          </p>
          <button className={`heroAnimate ${styles.moreBtn}`}>More</button>
        </div>
        <img className={` heroImg ${styles.heroImg}`} src={heroImg} alt="This is an image!" />
      </div>

      <div ref={downArrow} className={styles.downBtnDiv}>
        <img src={downArrowImage} alt="this is an image!" />
      </div>

      <div className={styles.secondSection}>
        <h2>Come Join Us For the Ultimate Treking Adventure.</h2>
        <p>
          Discover epic trails, expert tips, and inspiring stories to fuel your
          next moutain adventure. Whether you're a beginner or a pro, we help
          you reach new heights with confidence.
        </p>
      </div>

      <div className={styles.Trek1}>
        <div className={styles.images}>
          <img className={styles.img1} src={Trek1} alt="This is an image!" />
          <img className={styles.img2} src={Trek1} alt="This is an image!" />
        </div>
        <div className={styles.leftContent}>
          <h3>Dayara Buyal Trek</h3>
          <p>
            Discover epic trails, expert tips, and inspiring stories to fuel
            your next moutain adventure.
          </p>
          <p>
            <b>Cost: ₹7,999 /-</b>
          </p>
        </div>
        <button className={styles.details}>More Details</button>
      </div>

      <div className={styles.Trek2}>
        <div className={styles.images}>
          <img className={styles.img3} src={Trek1} alt="This is an image!" />
          <img className={styles.img4} src={Trek1} alt="This is an image!" />
        </div>
        <div className={styles.leftContent}>
          <h3>Kedar Katha Trek</h3>
          <p>
            Discover epic trails, expert tips, and inspiring stories to fuel
            your next moutain adventure.
          </p>
          <p>
            <b>Cost: ₹8,999 /-</b>
          </p>
        </div>
        <button className={styles.details2}>More Details</button>
      </div>

      <div className={styles.Trek1}>
        <div className={styles.images}>
          <img className={styles.img5} src={Trek1} alt="This is an image!" />
          <img className={styles.img6} src={Trek1} alt="This is an image!" />
        </div>
        <div className={styles.leftContent}>
          <h3>Gomukh Tapovan Trek</h3>
          <p>
            Discover epic trails, expert tips, and inspiring stories to fuel
          </p>
          <p>
            <b>Cost: ₹14,999 /-</b>
          </p>
        </div>
        <button className={styles.details}>More Details</button>
      </div>

      <div className={styles.Trek2}>
        <div className={styles.images}>
          <img className={styles.img7} src={Trek1} alt="This is an image!" />
          <img className={styles.img8} src={Trek1} alt="This is an image!" />
        </div>
        <div className={styles.leftContent}>
          <h3>Hidden Waterfall Trek</h3>
          <p>
            Discover epic trails, expert tips, and inspiring stories to fuel
          </p>
          <p>
            <b>Cost: ₹2,500 /-</b>
          </p>
        </div>
        <button className={styles.details2}>More Details</button>
      </div>

      <div className={styles.Trek1}>
        <div className={styles.images}>
          <img className={styles.img9} src={Trek1} alt="This is an image!" />
          <img className={styles.img10} src={Trek1} alt="This is an image!" />
        </div>
        <div className={styles.leftContent}>
          <h3>Tungnath Trek</h3>
          <p>
            Discover epic trails, expert tips, and inspiring stories to fuel
            your next moutain adventure.
          </p>
          <p>
            <b>Cost: ₹5,999 /-</b>
          </p>
        </div>
        <button className={styles.details}>More Details</button>
      </div>

      <div className={styles.ImageSection}>
        <h2>Your Guides Your Travel Partners</h2>
        <div className={styles.slidingImages}>
          <img className={styles.leftBtn} src={leftBtn} />
          <div className={styles.slideImages}>
            <img className={styles.GuideImg1} src={GuideImg1} />
            <img className={styles.GuideImg2} src={GuideImg2} />
            <img className={styles.GuideImg3} src={GuideImg3} />
            <img className={styles.GuideImg4} src={GuideImg4} />
          </div>
          <img className={styles.rightBtn} src={rightBtn}/>
        </div>
        <p>Our expert guides are the heart of every journey we offer—passionate storytellers, seasoned explorers, and friendly companions rolled into one. With deep local knowledge and a genuine love for discovery, they turn every trip into a rich, immersive experience. Whether you're navigating ancient trails, bustling cities, or remote landscapes, our guides ensure you see the unseen and feel the spirit of every place you visit.</p>
        <button>About Guides</button>
      </div>
    </div>
  );
}

export default Trek;
