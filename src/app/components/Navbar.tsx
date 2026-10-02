"use client";

import Link from "next/link";
import styles from "./Navbar.module.css";
import { motion } from "framer-motion";
import { Globe } from "lucide-react";

export default function Navbar() {
  return (
    <motion.nav 
      className={styles.navbar}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <Link href="/" className={styles.logo}>
        <Globe size={28} color="var(--primary)" />
        Renisma
      </Link>
      
      <ul className={styles.navLinks}>
        <li><Link href="#it" className={styles.navLink}>IT</Link></li>
        <li><Link href="#content" className={styles.navLink}>Studio</Link></li>
        <li><Link href="#logistics" className={styles.navLink}>LogiTech</Link></li>
        <li><Link href="#global" className={styles.navLink}>Global</Link></li>
      </ul>
      
      <button className={styles.contactBtn}>Contact Us</button>
    </motion.nav>
  );
}
