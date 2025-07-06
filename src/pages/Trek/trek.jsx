// INFO: Images imports
import heroImg from "../../assets/images/TrekMain/heroImage.png";
import Trek1 from "../../assets/images/TrekMain/DayaraBuyalTrek.jpg"
import downArrow from "../../assets/downArrow.png";
import styles from "./trek.module.css";

function Trek() {
  return (
    <div className={styles.main}>
      <div className={styles.firstSection}>
        <div className={styles.content}>
          <h1>Conquer New Heights One Peak at a Time</h1>
          <p>
            Discover epic trails, expert tips, and inspiring stories to fuel
            your next mountain adventure. Whether you're a beginner or a pro, we
            help ou reach new heights with confidence.
          </p>
          <button className={styles.moreBtn}>More</button>
        </div>
        <img className={styles.heroImg} src={heroImg} alt="This is an image!" />
      </div>

      <div className={styles.downBtnDiv}>
        <img src={downArrow} alt="this is an image!" />
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
          <p><b>Cost: ₹7,999 /-</b></p>
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
          <p><b>Cost: ₹8,999 /-</b></p>
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
          <p><b>Cost: ₹14,999 /-</b></p>
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
          <p><b>Cost: ₹2,500 /-</b></p>
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
          <p><b>Cost: ₹5,999 /-</b></p>
        </div>
        <button className={styles.details}>More Details</button>
      </div>
    </div>
  );
}

export default Trek;
