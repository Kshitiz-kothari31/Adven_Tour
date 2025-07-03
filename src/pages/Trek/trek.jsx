// INFO: Images imports
import heroImg from '../../assets/images/TrekMain/heroImage.png'
import styles from './trek.module.css'

function Trek(){
    return(
      <main className={styles.main}>
        <div className={styles.firstSection}>
            <div className={styles.content}>
                <h1>Conquer New Heights One Peak at a Time</h1>
                <p>Discover epic trails, expert tips, and inspiring stories to fuel your next mountain adventure. Whether you're a beginner or a pro, we help ou reach new heights with confidence.</p>
                <button className={styles.moreBtn}>More</button>
            </div>
            <img className={styles.heroImg} src={heroImg} alt="This is an image!" />
        </div>
      </main>
    );
}

export default Trek