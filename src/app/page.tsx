import Navbar from "./components/Navbar";
import IntroSection from "./components/IntroSection";
import Verticals from "./components/Verticals";
import GlobalPresence from "./components/GlobalPresence";
import StatsAndFeatures from "./components/StatsAndFeatures";
import Process from "./components/Process";
import FooterContact from "./components/FooterContact";
import styles from "./page.module.css";
import GlobalCanvas from "./components/canvas/GlobalCanvas";

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar />
      
      {/* 3D Canvas Context */}
      <GlobalCanvas />

      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <h1 className={styles.headline}>
            Connecting Businesses.<br/>
            <span className="text-gradient-primary">Creating Technology.</span><br/>
            Powering Creativity.
          </h1>
          <p className={styles.subheading}>
            LogiTech &bull; Information Technology &bull; Content Studio &bull; VFX &bull; Animation
          </p>
          <div className={styles.ctaGroup}>
            <button className={`${styles.btn} ${styles.btnPrimary}`}>Explore Services</button>
            <button className={`${styles.btn} ${styles.btnSecondary}`}>Let&apos;s Build Together</button>
          </div>
        </div>
      </section>
      
      <IntroSection />
      <Verticals />
      <GlobalPresence />
      <StatsAndFeatures />
      <Process />
      <FooterContact />
      
    </main>
  );
}
