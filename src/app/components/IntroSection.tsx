"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./IntroSection.module.css";

gsap.registerPlugin(ScrollTrigger);

export default function IntroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (!textRef.current || !sectionRef.current) return;

    const words = textRef.current.innerText.split(" ");
    textRef.current.innerHTML = "";
    
    words.forEach(word => {
      const span = document.createElement("span");
      span.innerText = word + " ";
      span.className = styles.word;
      textRef.current?.appendChild(span);
    });

    const spans = textRef.current.querySelectorAll("span");

    gsap.fromTo(spans, 
      { color: "rgba(255,255,255,0.1)" }, 
      {
        color: "rgba(255,255,255,1)",
        stagger: 0.1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top center",
          end: "bottom center",
          scrub: true,
        }
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} className={styles.introSection}>
      <div className={`glass-panel ${styles.introCard}`}>
        <h2 ref={textRef} className={styles.introText}>
          Renisma Global Pvt Ltd is a diversified global enterprise delivering excellence in Logistics, Information Technology, Digital Transformation, Content Creation, VFX and Animation with operations across multiple countries.
        </h2>
      </div>
    </section>
  );
}
