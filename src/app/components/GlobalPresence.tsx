"use client";

import { motion } from "framer-motion";
import styles from "./GlobalPresence.module.css";
import { MapPin } from "lucide-react";

const locations = [
  { name: "New Delhi", country: "India", x: "70%", y: "45%" },
  { name: "Mumbai", country: "India", x: "68%", y: "55%" },
  { name: "Brussels", country: "Belgium", x: "50%", y: "30%" },
  { name: "New York", country: "USA", x: "25%", y: "35%" },
  { name: "Toronto", country: "Canada", x: "22%", y: "25%" },
];

export default function GlobalPresence() {
  return (
    <section className={styles.section} id="global">
      <div className={styles.container}>
        <h2 className={styles.title}>Global <span className="text-gradient-primary">Presence</span></h2>
        
        <div className={styles.mapContainer}>
          {/* Stylized Abstract Map Background */}
          <div className={styles.abstractMap}></div>

          {locations.map((loc, i) => (
            <motion.div
              key={i}
              className={styles.pinWrapper}
              style={{ left: loc.x, top: loc.y }}
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, type: "spring" }}
            >
              <div className={styles.pulse}></div>
              <MapPin className={styles.pinIcon} size={24} />
              
              <div className={`glass-panel ${styles.infoCard}`}>
                <h4>{loc.name}</h4>
                <p>{loc.country}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
