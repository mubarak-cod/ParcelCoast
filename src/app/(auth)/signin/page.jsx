"use client";
import React from "react";

import styles from "./SignIn.module.css";

export default function LoginPage() {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.logo}>Parcel Coast</div>

        <h1 className={styles.title}>Welcome Back</h1>
        <p className={styles.subtitle}>
          Use your email or phone number to sign in
        </p>

        <form className={styles.form}>
          <input
            type="text"
            placeholder="Email or Mobile Number"
            className={styles.input}
            required
          />

          <button type="submit" className={styles.primaryBtn}>
            Continue
          </button>
        </form>

        <p className={styles.terms}>
          By continuing, you agree to our <span>Terms & Conditions</span> and{" "}
          <span>Privacy Policy</span>.
        </p>

        <div className={styles.divider}>
          <span>OR</span>
        </div>

        <button className={`${styles.socialBtn} ${styles.facebook}`}>
          Continue with Facebook
        </button>

        <button className={`${styles.socialBtn} ${styles.google}`}>
          Continue with Google
        </button>

        <p className={styles.help}>
          Need help? <span>Contact support</span>
        </p>

        <div className={styles.brand}>
          MYAPP<span>+</span>
        </div>
      </div>
    </div>
  );
}

