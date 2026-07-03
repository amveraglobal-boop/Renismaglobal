"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./Process.module.css";
import { MessageSquare, Calendar, Activity, CheckCircle, Headphones } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  { title: "Consultation", icon: MessageSquare },
  { title: "Planning", icon: Calendar },
  { title: "Execution", icon: Activity },
  { title: "Delivery", icon: CheckCircle },
  { title: "Support", icon: Headphones },
];

export default function Process() {
  const containerRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !lineRef.current) return;

    gsap.fromTo(lineRef.current,
      { height: "0%" },
      {
        height: "100%",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top center",
          end: "bottom center",
          scrub: true,
        }
      }
    );
  }, []);

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Our <span className="text-gradient-primary">Process</span></h2>
      
      <div className={styles.timelineContainer} ref={containerRef}>
        <div className={styles.lineBackground}></div>
        <div className={styles.lineFill} ref={lineRef}></div>
        
        {steps.map((step, i) => (
          <div key={i} className={styles.step}>
            <div className={`glass-panel ${styles.iconBox}`}>
              <step.icon size={24} className={styles.icon} />
            </div>
            <h3 className={styles.stepTitle}>{step.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
