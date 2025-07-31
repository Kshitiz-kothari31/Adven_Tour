import Marquee from "react-fast-marquee";
import styles from "./stays.module.css";

import strokeImg from "../../assets/images/stays/stroke.svg";
import ellipse49 from "../../assets/images/stays/Ellipse49.svg";
import ArrowImg from "../../assets/images/stays/Arrow15.svg";
import arrow from "../../assets/rightArrow.png";

import video1 from "../../assets/videos/bungeejumping/IMG_7232.MOV";

import React, { useRef, useEffect } from "react";

function Stays() {
  const videoRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        const video = videoRef.current;

        if (!video) return;

        if (entry.isIntersecting) {
          video.play().catch((err) => {
            // Some browsers block autoplay unless it's muted
            console.error("Autoplay failed:", err);
          });
        } else {
          video.pause();
        }
      },
      { threshold: 0.5 } // 50% of video visible
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  return (
    <main className={styles.main}>
      <section className={styles.heroSection}>
        <div className={styles.heroDiv}>
          <div className={styles.heroContent}>
            <h1>Lorem Epsum</h1>
            <p>Lorem Epsum</p>
            <button className={styles.bookNowBtn}>Book Now</button>
          </div>

          <div className={styles.cards}>
            <div className={styles.card}>
              <img src="#" />
              <h4>Lorem</h4>
              <p>lorem</p>
            </div>
            <div className={styles.card}>
              <img src="#" />
              <h4>Lorem</h4>
              <p>lorem</p>
            </div>
            <div className={styles.card}>
              <img src="#" />
              <h4>Lorem</h4>
              <p>lorem</p>
            </div>
            <div className={styles.card}>
              <img src="#" />
              <h4>Lorem</h4>
              <p>lorem</p>
            </div>
          </div>
        </div>
      </section>

      <Marquee
        gradient={false}
        speed={50}
        pauseOnHover={true}
        className={styles.marqueeContainer}
      >
        <span className={styles.marqueeItem}>Node js</span>
        <span className={styles.marqueeItem}>React</span>
        <span className={styles.marqueeItem}>Express</span>
        <span className={styles.marqueeItem}>MongoDB</span>
        <span className={styles.marqueeItem}>JavaScript</span>
        <span className={styles.marqueeItem}>TypeScript</span>
      </Marquee>

      <section className={styles.campSection}>
        <div className={styles.card1}>
          <svg width="0" height="0" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <clipPath id="figmaClip" clipPathUnits="objectBoundingBox">
                <path
                  d="
        M 0.8941 0.5336
        C 0.8941 0.7759 0.8386 1.0000 0.6236 1.0000
        C 0.4087 1.0000 0.1218 0.7891 0.1033 0.4545
        C 0.0000 0.0973 0.5701 0.0000 0.7851 0.0000
        C 1.0000 0.0000 0.8941 0.2912 0.8941 0.5336
        Z"
                />
              </clipPath>
            </defs>
          </svg>

          <div className={styles.cardImages}>
            <div className={styles.mainImg}></div>
            <img src={strokeImg} className={styles.stroke_Img} />
            <img src={ellipse49} alt="second_img" className={styles.secImg} />
            <button className={styles.arrowBtn}>
              <img src={arrow} alt="arrow_button_img" />
            </button>
          </div>

          <div className={styles.cardContent}>
            <h2>Coller Cottage</h2>
            <p>lorem Epsum</p>
            <p>
              <b>Cost: ₹1,500 /-</b>
            </p>
            <button>Book Now</button>
          </div>

          <img src={ArrowImg} alt="arrow_img" className={styles.arrow_img} />
        </div>
        <div className={styles.card2}>
          <svg width="0" height="0" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <clipPath id="figmaClip" clipPathUnits="objectBoundingBox">
                <path
                  d="
        M 0.8941 0.5336
        C 0.8941 0.7759 0.8386 1.0000 0.6236 1.0000
        C 0.4087 1.0000 0.1218 0.7891 0.1033 0.4545
        C 0.0000 0.0973 0.5701 0.0000 0.7851 0.0000
        C 1.0000 0.0000 0.8941 0.2912 0.8941 0.5336
        Z"
                />
              </clipPath>
            </defs>
          </svg>

          <div className={styles.cardContent}>
            <h2>Luxry Camps with Cottage and Attach Washrooom</h2>
            <p>lorem Epsum</p>
            <p>
              <b>Cost: ₹1,500 /-</b>
            </p>
            <button>Book Now</button>
          </div>

          <div className={styles.Images}>
            <div className={styles.mainImg}></div>
            <img src={strokeImg} className={styles.stroke_Img} />
            <img src={ellipse49} alt="second_img" className={styles.secImg} />
            <button className={styles.arrowBtn}>
              <img src={arrow} alt="arrow_button_img" />
            </button>
          </div>

          <img src={ArrowImg} alt="arrow_img" className={styles.arrow_img} />
        </div>
        <div className={styles.card1}>
          <svg width="0" height="0" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <clipPath id="figmaClip" clipPathUnits="objectBoundingBox">
                <path
                  d="
        M 0.8941 0.5336
        C 0.8941 0.7759 0.8386 1.0000 0.6236 1.0000
        C 0.4087 1.0000 0.1218 0.7891 0.1033 0.4545
        C 0.0000 0.0973 0.5701 0.0000 0.7851 0.0000
        C 1.0000 0.0000 0.8941 0.2912 0.8941 0.5336
        Z"
                />
              </clipPath>
            </defs>
          </svg>

          <div className={styles.cardImages}>
            <div className={styles.mainImg}></div>
            <img src={strokeImg} className={styles.stroke_Img} />
            <img src={ellipse49} alt="second_img" className={styles.secImg} />
            <button className={styles.arrowBtn}>
              <img src={arrow} alt="arrow_button_img" />
            </button>
          </div>

          <div className={styles.cardContent}>
            <h2>A.C Cottage</h2>
            <p>lorem Epsum</p>
            <p>Cost: ₹1,500 /-</p>
            <button>Book Now</button>
          </div>

          <img src={ArrowImg} alt="arrow_img" className={styles.arrow_img} />
        </div>
      </section>

      <section className={styles.camp_video}>
        <h2>Lorem Epsum</h2>
        <p>
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </p>
        <video
          ref={videoRef}
          src={video1}
          muted
          loop
          playsInline
          className={styles.video}
        ></video>
      </section>
    </main>
  );
}

export default Stays;
