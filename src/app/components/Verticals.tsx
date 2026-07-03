"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import styles from "./Verticals.module.css";
import { Plane, Server, Camera, Shield, Box, Code } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function Verticals() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Parallax effect for cards
    const cards = gsap.utils.toArray<HTMLElement>(`.${styles.card}`);
    cards.forEach((card, i) => {
      gsap.fromTo(card,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            end: "top 30%",
            scrub: true,
          }
        }
      );
    });
  }, []);

  return (
    <div className={styles.verticalsContainer} ref={containerRef} id="logistics">
      
      {/* 1. Logistics */}
      <section className={styles.verticalSection}>
        <div className={styles.contentLeft}>
          <h2 className={styles.sectionTitle}>Global <span className="text-gradient-primary">Logistics</span></h2>
          <p className={styles.sectionDesc}>
            International Freight • Air Cargo • Sea Freight • Supply Chain • Warehousing
          </p>
          <div className={styles.iconGrid}>
            <div className={styles.iconBox}><Plane size={32} /></div>
            <div className={styles.iconBox}><Box size={32} /></div>
          </div>
        </div>
        <div className={styles.contentRight}>
          <div className={`glass-panel ${styles.card}`}>
            <h3>Intelligent Routing</h3>
            <p>Our global network is powered by real-time analytics, ensuring the fastest delivery from warehouse to destination.</p>
          </div>
        </div>
      </section>

      {/* 2. IT */}
      <section className={`${styles.verticalSection} ${styles.reverse}`} id="it">
        <div className={styles.contentLeft}>
          <h2 className={styles.sectionTitle}>Information <span className="text-gradient-primary">Technology</span></h2>
          <p className={styles.sectionDesc}>
            AI Solutions • Cloud Infrastructure • Cyber Security • Enterprise Solutions
          </p>
          <div className={styles.iconGrid}>
            <div className={styles.iconBox}><Server size={32} /></div>
            <div className={styles.iconBox}><Shield size={32} /></div>
            <div className={styles.iconBox}><Code size={32} /></div>
          </div>
        </div>
        <div className={styles.contentRight}>
          <div className={`glass-panel ${styles.card}`}>
            <h3>Next-Gen Infrastructure</h3>
            <p>Building secure, scalable, and AI-driven platforms that empower global enterprises to lead their industries.</p>
          </div>
        </div>
      </section>

      {/* 3. Content Studio */}
      <section className={styles.verticalSection} id="content">
        <div className={styles.contentLeft}>
          <h2 className={styles.sectionTitle}>Content <span className="text-gradient-primary">Studio & VFX</span></h2>
          <p className={styles.sectionDesc}>
            3D Animation • CGI • Visual Effects • Corporate Films • Motion Graphics
          </p>
          <div className={styles.iconGrid}>
            <div className={styles.iconBox}><Camera size={32} /></div>
          </div>
        </div>
        <div className={styles.contentRight}>
          <div className={`glass-panel ${styles.card}`}>
            <h3>Cinematic Brilliance</h3>
            <p>Award-winning visual effects and character animation that bring your brand's vision to life on the global stage.</p>
          </div>
        </div>
      </section>

    </div>
  );
}
