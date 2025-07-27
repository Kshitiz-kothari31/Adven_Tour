import dropdownImg from "../../assets/downArrow.png";
import video1 from "../../assets/videos/bungeejumping/IMG_7232.MOV";
import video2 from "../../assets/videos/bungeejumping/IMG_7233.MOV";
import React, { useRef, useState } from "react";
import playIcon from "../../assets/icons8-play-50.png";

import styles from "./bungeeJumping.module.css";

function VideoCard({ videoSrc, title, description }) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const handleCardClick = () => {
    if (videoRef.current && isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div className={styles.videoCard} onClick={handleCardClick}>
      <video
        ref={videoRef}
        src={videoSrc}
        muted
        playsInline
        className={styles.video}
      />
      {!isPlaying && (
        <button
          className={styles.playButton}
          onClick={(e) => {
            e.stopPropagation(); // prevent card click
            handlePlay();
          }}
        >
          <img src={playIcon} alt="Play" />
        </button>
      )}
      <div className={styles.overlayContent}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

function BungeeJumping() {
  return (
    <main>
      <section className={styles.firstSection}>
        <div className={styles.bgImg}>
          <p>
            Discover epic trails, expert tips, and inspiring stories to fuel
            your next mountain adventure. Whether you're a beginner or a pro, we
            help you reach new heights with confidence.
          </p>
        </div>
      </section>

      <div className={styles.dropdownArrow}>
        <img loading="lazy" src={dropdownImg} />
      </div>

      <section className={styles.secondSection}>
        <h2>Come Join Us for Experience the Falling Adventure</h2>
        <p>
          Discover epic trails, expert tips, and inspiring stories to fuel your
          next mountain adventure. Whether you're a beginner or a pro, we help
          you reach new heights with confidence.
        </p>
      </section>

      <div className={styles.divider}></div>

      <section className={styles.thirdSection}>
        <div className={styles.top}>
          <h2>RishiKesh</h2>
          <p>pro, we help you reach new heights with confidence.</p>
        </div>
        <div className={styles.bottom}>
          <div className={styles.card}>
            <div className={styles.img1}>
              <svg>
                <defs>
                  <clipPath id="clip-shape" clipPathUnits="objectBoundingBox">
                    <path
                      d="M0.1328 0.0100 L0.8821 0.0425 C0.9217 0.0443 0.9556 0.0948 0.9586 0.1597
                      L0.9934 0.8517 C0.9967 0.9259 0.9601 0.9885 0.9143 0.9885
                      H0.0839 C0.0371 0.9885 0.0006 0.9232 0.0055 0.8479
                      L0.0290 0.4883 L0.0290 0.4882 L0.0523 0.1244
                      C0.0566 0.0581 0.0917 0.0083 0.1328 0.0100 Z"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div className={styles.Divcontent}>
              <div className={styles.leftContent}>
                <h3>
                  {" "}
                  <b>Thrill Factory</b>
                </h3>
                <p>
                  <b>Height:</b> 53 meter's <br />
                  <b>Cost:</b> ₹3000 /-
                </p>
              </div>
              <button>Book</button>
            </div>
          </div>

          <div className={styles.hrLine}></div>

          <div className={styles.card}>
            <div className={styles.img2}>
              <svg>
                <defs>
                  <clipPath id="clip-shape2" clipPathUnits="objectBoundingBox">
                    <path
                      d="
                       M0.0928 0.0102
                       L0.8771 0.0343
                       C0.9215 0.0357 0.9571 0.0904 0.9616 0.1609
                       L0.9966 0.8512
                       C1.0007 0.9314 0.9601 1 0.9105 1
                       H0.1128
                       C0.0666 1 0.0286 0.9422 0.0265 0.8687
                       L0.0153 0.4842
                       V0.4841
                       L0.0049 0.1548
                       C0.0024 0.0751 0.0428 0.0087 0.0928 0.0102
                       Z"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div className={styles.Divcontent}>
              <div className={styles.leftContent}>
                <h3>
                  <b>Splash Dice</b>
                </h3>
                <p>
                  <b>Height:</b> 53 meter's <br />
                  <b>Cost:</b> ₹3000 /-
                </p>
              </div>
              <button>Book</button>
            </div>
          </div>

          <div className={styles.hrLine}></div>

          <div className={styles.card}>
            <div className={styles.img3}>
              <svg>
                <defs>
                  <clipPath id="clip-shape" clipPathUnits="objectBoundingBox">
                    <path
                      d="M0.1328 0.0100 L0.8821 0.0425 C0.9217 0.0443 0.9556 0.0948 0.9586 0.1597
                      L0.9934 0.8517 C0.9967 0.9259 0.9601 0.9885 0.9143 0.9885
                      H0.0839 C0.0371 0.9885 0.0006 0.9232 0.0055 0.8479
                      L0.0290 0.4883 L0.0290 0.4882 L0.0523 0.1244
                      C0.0566 0.0581 0.0917 0.0083 0.1328 0.0100 Z"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div className={styles.Divcontent}>
              <div className={styles.leftContent}>
                <h3>
                  {" "}
                  <b>Himalayan Bungee</b>
                </h3>
                <p>
                  <b>Height:</b> 117 meter's <br />
                  <b>Cost:</b> ₹4,600 /-
                </p>
              </div>
              <button>Book</button>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.fouthSection}>
        <div className={styles.topHeading}>
          <h2>Lorem Epsum</h2>
          <p>
            Discover epic trails, expert tips, and inspiring stories to fuel
            your next mountain adventure. Whether you're a beginner or a pro, we
            help you reach new heights with confidence.
          </p>
        </div>
        <div className={styles.mainDiv}>
          <VideoCard
            videoSrc={video1}
            title="Lorem"
            description="We help you reach new heights with confidence."
          />
          <VideoCard
            videoSrc={video1}
            title="Lorem"
            description="We help you reach new heights with confidence."
          />
          <VideoCard
            videoSrc={video2}
            title="Lorem"
            description="We help you reach new heights with confidence."
          />
          <VideoCard
            videoSrc={video2}
            title="Lorem"
            description="We help you reach new heights with confidence."
          />
        </div>
      </section>
    </main>
  );
}

export default BungeeJumping;
