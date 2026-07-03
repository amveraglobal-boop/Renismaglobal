"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import styles from "./StatsAndFeatures.module.css";
import { Globe2, Rocket, Star, Clock, ShieldCheck, Zap } from "lucide-react";

const Counter = ({ from = 0, to, duration = 2, suffix = "" }: { from?: number, to: number, duration?: number, suffix?: string }) => {
  const [count, setCount] = useState(from);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      let startTime: number | null = null;
      const step = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
        setCount(Math.floor(progress * (to - from) + from));
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    }
  }, [isInView, from, to, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
};

const features = [
  { icon: Globe2, title: "Global Reach", desc: "Operations across multiple continents ensuring seamless delivery." },
  { icon: Rocket, title: "Innovation First", desc: "Pioneering the latest in AI and automation technologies." },
  { icon: Star, title: "Creative Excellence", desc: "Award-winning content creation and VFX studios." },
  { icon: Zap, title: "Fast Delivery", desc: "Optimized logistics routes for unmatched speed." },
  { icon: ShieldCheck, title: "Trusted Partnerships", desc: "Reliable enterprise solutions for global businesses." },
  { icon: Clock, title: "24×7 Support", desc: "Round-the-clock assistance and monitoring." },
];

export default function StatsAndFeatures() {
  return (
    <div className={styles.container}>
      {/* Stats Section */}
      <section className={styles.statsSection}>
        <div className={styles.statBox}>
          <h2 className={`text-gradient-primary ${styles.statNumber}`}>
            <Counter to={100} suffix="+" />
          </h2>
          <p className={styles.statLabel}>Projects Delivered</p>
        </div>
        <div className={styles.statBox}>
          <h2 className={`text-gradient-primary ${styles.statNumber}`}>
            <Counter to={20} suffix="+" />
          </h2>
          <p className={styles.statLabel}>Global Clients</p>
        </div>
        <div className={styles.statBox}>
          <h2 className={`text-gradient-primary ${styles.statNumber}`}>
            <Counter to={5} suffix="+" />
          </h2>
          <p className={styles.statLabel}>Countries</p>
        </div>
        <div className={styles.statBox}>
          <h2 className={`text-gradient-primary ${styles.statNumber}`}>
            <Counter to={3} />
          </h2>
          <p className={styles.statLabel}>Business Verticals</p>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className={styles.featuresSection}>
        <h2 className={styles.sectionTitle}>Why Choose Renisma</h2>
        <div className={styles.grid}>
          {features.map((feature, i) => (
            <motion.div 
              key={i} 
              className={`glass-panel ${styles.featureCard}`}
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className={styles.iconWrapper}>
                <feature.icon size={28} />
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
