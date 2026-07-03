"use client";

import styles from "./FooterContact.module.css";
import { Send } from "lucide-react";

export default function FooterContact() {
  return (
    <>
      <section className={styles.contactSection}>
        <div className={`glass-panel ${styles.contactFormContainer}`}>
          <h2 className={styles.title}>Let's Build <span className="text-gradient-primary">Together</span></h2>
          <p className={styles.subtitle}>Get in touch to discover how we can transform your business.</p>
          
          <form className={styles.form}>
            <div className={styles.inputGroup}>
              <input type="text" placeholder="Name" className={styles.input} required />
              <input type="email" placeholder="Email" className={styles.input} required />
            </div>
            <textarea placeholder="Message" className={styles.textarea} rows={4} required></textarea>
            <button type="submit" className={styles.submitBtn}>
              Send Message <Send size={18} />
            </button>
          </form>
        </div>
      </section>

      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.footerLeft}>
            <h3 className={styles.logo}>Renisma Global</h3>
            <p className={styles.copyright}>&copy; {new Date().getFullYear()} Renisma Global Pvt Ltd. All rights reserved.</p>
          </div>
          <div className={styles.socialLinks}>
            <a href="#" className={styles.socialIcon}>Twitter</a>
            <a href="#" className={styles.socialIcon}>LinkedIn</a>
            <a href="#" className={styles.socialIcon}>Instagram</a>
            <a href="#" className={styles.socialIcon}>GitHub</a>
          </div>
        </div>
      </footer>
    </>
  );
}
