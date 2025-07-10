import dropdownImg from "../../../assets/downArrow.png";
import img from "../../../assets/images/TrekMain/DayaraBuyalTrek.jpg";
import styles from "./dayarabugyal.module.css";

function DayaraBugyal() {
  return (
    <>
      <section className={styles.firstSection}>
        <h1>Dayara Buyal Trek</h1>
        <button>Book Now</button>
        <p>
          Discover epic trails, expert tips, and inspiring stories to fuel your
          next mountain adventure.
        </p>
      </section>
      <div className={styles.blackText_heroSection}>
        <p>
          Whether you're a beginner or a pro, we help you reach new heights with
          confidence.
        </p>
      </div>

      <div className={styles.dropdownArrow}>
        <img src={dropdownImg} />
      </div>

      <section className={styles.secondSection}>
        <h2>Come Join Us for the Ultimate Climbing Adventure</h2>
        <p>
          Discover epic trails, expert tips, and inspiring stories to fuel your
          next mountain adventure. Whether you're a beginner or a pro, we help
          you reach new heights with confidence.
        </p>
      </section>

      <section className={styles.detailsSection}>
        <img src={img} />
        <div className={styles.details}>
          <h2>Dayara Buyal Trek</h2>
          <p>
            {" "}
            <b>Location :</b> Uttarkashi district, Uttarakhand <br />
            <b>Altitude :</b> ~12,000 ft (3,658 m) <br />
            <b>Duration :</b> 4 to 6 days <br />
            <b>Difficulty :</b> Easy to Moderate <br />
            <b>Base Camp :</b> Raithal or Natin village <br />
            <b>Trek Distance :</b> ~21–24 km round trip
          </p>
        </div>
      </section>
    </>
  );
}

export default DayaraBugyal;
