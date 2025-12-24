"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send } from "lucide-react";
import Image from "next/image";
import styles from "./ParcelChat.module.css";

export default function ParcelChat() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      {/* CHAT ICON */}
      {/* CHAT ICON */}
      <motion.div
        initial={{ scale: 1 }}
        animate={{
          rotate: [0, -4, 4, -3, 3, -2, 0],
          y: [0, -2, 2, -1, 1, 0],
        }}
        transition={{
          duration: 2.8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className={styles.chatIcon}
        onClick={() => setOpen(true)}
      > 
        <div className={styles.avatarWrapper}>
          <Image
            src="https://res.cloudinary.com/dmtfdnuap/image/upload/v1766429344/929c7667-bef0-413d-8714-dde8b2f5d0c2.png"
            alt="Parcel Coast AI"
            width={56}
            height={56}
          />
        </div>

        {!open && (
          <motion.span
            initial={{ x: 10, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className={styles.chatLabel}
          >
            Chat with Chinedu AI
          </motion.span>
        )}
      </motion.div>

      {/* CHAT BOX */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ scale: 0.4, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.4, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className={styles.chatBox}
          >
            {/* HEADER */}
            <div className={styles.header}>
              <div className={styles.headerInfo}>
                <Image
                  src="https://res.cloudinary.com/dmtfdnuap/image/upload/v1766429344/929c7667-bef0-413d-8714-dde8b2f5d0c2.png"
                  alt="Parcel Coast"
                  width={36}
                  height={36}
                />
                <div>
                  <h4>Parcel Coast</h4>
                  <span>AI Sales Assistant</span>
                </div>
              </div>

              <button onClick={() => setOpen(false)}>
                <X size={18} />
              </button>
            </div>

            {/* BODY */}
            <div className={styles.body}>
              <div className={styles.aiMessage}>
                👋 Hi! I’m chinedu, your Parcel Coast sales assistant. I can
                help you track orders, discover products, and recommend the best
                deals.
              </div>
            </div>

            {/* INPUT */}
            <div className={styles.inputArea}>
              <input placeholder="Ask me anything…" />
              <button>
                <Send size={18} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
