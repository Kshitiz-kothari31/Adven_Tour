import { style } from "framer-motion/client";
import dropdownImg from "../../../assets/downArrow.png";
import img from "../../../assets/images/TrekMain/DayaraBuyalTrek.jpg";
import img2 from "../../../assets/images/TrekMain/img2.svg";
import styles from "./gomukhTrek.module.css";

function GomukhTrek() {
  return (
    <main>
      <section className={styles.firstSection}>
        <div className={styles.firstSectionContent}>
          <div className={styles.heroPageContent}>
            <h1>Kedar Katha Trek</h1>
            <p>
              Discover epic trails, expert tips, and inspiring stories to fuel
              your next mountain adventure Whether you're a beginner or a pro,
              we help you reach new heights with confidence.
            </p>
            <button>Book Now</button>
          </div>
          <div className={styles.img}>
            <svg>
              <defs>
                <clipPath id="clip-shape" clipPathUnits="userSpaceOnUse">
                  <path d="M877.45 447.105C894.932 535.797 856.481 629.319 786.004 696.212C716.607 762.08 614.043 783.983 512.83 793.183C310.77 811.55 299.269 798.674 210.312 748.542C105.65 689.56 26.7613 580.557 7.26953 472.477C-13.8808 355.199 17.7354 261.165 105.835 169.223C196.519 74.5833 328.901 -18.23 466.232 4.03469C596.473 25.1499 572.27 96.7734 676.27 243.773C798.77 352.773 861.344 365.394 877.45 447.105Z" />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
      </section>
      <div className={styles.bottomParagraph}>
        <p>
          Discover epic trails, expert tips, and inspiring stories to fuel your
          next mountain adventure Whether you're a beginner or a pro, we help
          you reach new heights with confidence.Discover epic trails, expert
          tips, and inspiring stories to fuel your next mountain adventure
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

      <section className={styles.storySection}>
        <h2>
          The Dayara Bugyal trek isn’t just a walk through meadows and
          mountains; it’s a journey steeped in mythology, folklore, and quiet
          reverence.
        </h2>
        <p>
          <b>Sages and Seekers: </b> According to local lore, Dayara Bugyal was
          once a sacred retreat for ancient sages. They meditated in these
          serene meadows, believing the high-altitude silence brought them
          closer to enlightenment.
        </p>
        <hr />
        <p>
          <b>Lord Shiva’s Blessing: </b> Some legends say that Lord Shiva
          himself wandered through these lands. The peaceful energy and
          spiritual aura are said to be remnants of his presence.
        </p>
        <hr />
        <p>
          <b>The Pandavas’ Path: </b> The Mahabharata weaves its way into the
          story too. It’s believed that the Pandavas, during their exile, passed
          through Dayara Bugyal and performed rituals here. That mystical
          energy? Locals say it still lingers in the air.
        </p>
      </section>

      <section className={styles.daysSection}>
        <div className={styles.dayBox}>
          <h2>Day x to y on the trek</h2>
          <p>
            According to local lore, Dayara Bugyal was once a sacred retreat for
            ancient sages. They meditated in these serene meadows, believing the
            high-altitude silence brought them closer to enlightenment.{" "}
          </p>
          <div className={styles.imgWithDetail}>
            <div className={styles.imgBox}>
              <div className={styles.firstimg}></div>
              <div className={styles.secondimg}></div>
            </div>
            <p>
              According to local lore, Dayara Bugyal was once a sacred retreat
              for ancient sages.
            </p>
          </div>
        </div>
        <div className={styles.dayBox}>
          <h2>Day a to b on the trek</h2>
          <p>
            According to local lore, Dayara Bugyal was once a sacred retreat for
            ancient sages. They meditated in these serene meadows, believing the
            high-altitude silence brought them closer to enlightenment.{" "}
          </p>
          <div className={styles.imgWithDetail}>
            <div className={styles.imgBox}>
              <img className={style.firstimg} src={img2} />
            </div>
            <p>
              According to local lore, Dayara Bugyal was once a sacred retreat
              for ancient sages.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.checklistSection}>
        <div className={styles.box}>
          <p>
            {" "}
            Here’s a checklist of essentials to make sure you’re safe,
            comfortable, and ready to soak in those Himalayan views:
          </p>
          <div className={styles.downloadDiv}>
            <p>Download</p>
            <button>Checklist</button>
          </div>
        </div>
      </section>

      <section className={styles.specialSection}>
        <div className={styles.content}>
          <h2>What Makes It Special</h2>
          <ul>
            <li>
              <b>Meadows (Bugyals):</b> Vast alpine grasslands that feel almost
              surreal{" "}
            </li>
            <li>
              <b>Forests:</b> Walk through pine, oak, maple, and rhododendron
              groves
            </li>
            <li>
              <b>Panoramic Views:</b> Bandarpoonch, Kala Nag, Srikanth, and
              Draupadi Ka Danda peaks
            </li>
            <li>
              <b>All-Season Beauty:</b> Snow in winter, wildflowers in summer,
              golden grass in autumn
            </li>
            <li>
              <b>Peaceful Trails:</b> Unlike more crowded treks, Dayara offers
              solitude and serenity, making it ideal for reflection and
              reconnection with nature.
            </li>
            <li>
              <b>Cultural Charm:</b> The base villages like Raithal and Barsu
              offer a glimpse into Garhwali traditions, warm hospitality, and
              even unique festivals like Butter Holi.
            </li>
          </ul>
        </div>
      </section>

      <section className={styles.VisitingTimeSection}>
        <div className={styles.visitingCard}>
          <h3>Best Time to Visit</h3>
          <p>
            Spring (Mar–Apr): Rhododendron blooms <br />
            Summer (May–Jun): Lush green <br />
            meadows Autumn (Sep–Nov): Clear skies, golden hues <br />
            Winter (Dec–Feb): Snow-covered wonderland
          </p>
        </div>
      </section>
    </main>
  );
}

export default GomukhTrek;
