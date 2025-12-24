"use client";

import { useState } from "react";
import styles from "./Navbar.module.css";
import { navItems } from "./navData";
import { Search, User, ShoppingCart } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { MdKeyboardArrowDown } from "react-icons/md";

export default function Navbar() {
  const [active, setActive] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [accountOpen, setAccountOpen] = useState(false);
  const [openSection, setOpenSection] = useState(null);


  return (
    <>
      <header className={styles.navbar}>
        {/* ================= TOP NAV ================= */}
        <div className={styles.container}>
          {/* Logo */}
          <div className={styles.logo}>
            <button
              className={styles.menuBtn}
              onClick={() => setMenuOpen(true)}
            >
              ☰
            </button>
            <span>Connect</span>
          </div>

          {/* DESKTOP SEARCH */}
          <div className={`${styles.searchBox} ${styles.desktopSearch}`}>
            <input placeholder="Search products…" />
            <span className={styles.searchIcon}>
              <Search size={18} />
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className={styles.desktopNav}>
            {navItems.map((item) => (
              <div
                key={item.label}
                className={styles.navItem}
                onMouseEnter={() => setActive(item.label)}
                onMouseLeave={() => setActive(null)}
              >
                <button className={styles.navButton}>
                  {item.label}
                  {item.links?.length > 0 && <MdKeyboardArrowDown />}
                </button>

                <AnimatePresence>
                  {active === item.label && item.links?.length > 0 && (
                    <motion.div
                      className={styles.dropdown}
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{
                        type: "spring",
                        stiffness: 500,
                        damping: 25,
                      }}
                    >
                      {item.links.map((link) => {
                        const Icon = link.icon;
                        return (
                          <div key={link.name} className={styles.dropdownItem}>
                            {Icon && <Icon className={styles.dropdownIcon} />}
                            <div>
                              <p>{link.name}</p>
                              <span>{link.desc}</span>
                            </div>
                          </div>
                        );
                      })}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>

          {/* Actions */}
          <div className={styles.actions}>
            {/* Account */}
            <div className={styles.accountWrapper}>
              <button
                className={styles.accountBtn}
                onMouseEnter={() => setAccountOpen(true)}
                onMouseLeave={() => setAccountOpen(false)}
              >
                <User size={18} /> <MdKeyboardArrowDown />
              </button>

              <AnimatePresence>
                {accountOpen && (
                  <motion.div
                    className={styles.accountDropdown}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                  >
                    <p>My Orders</p>
                    <p>Saved Items</p>
                    <p>Payment Methods</p>
                    <p>Shipping Addresses</p>
                    <p>Settings</p>
                    <p>Help Center</p>
                    <p className={styles.signIn}>Sign In</p>
                    <p className={styles.signOut}>Sign Out</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Cart */}
            <div className={styles.cartWrapper}>
              <ShoppingCart size={22} className={styles.cartIcon} />
              <span className={styles.cartBadge}>3</span>
            </div>
          </div>
        </div>

        {/* ================= MOBILE SEARCH (768px ↓) ================= */}
        <div className={styles.mobileSearchRow}>
          <div className={styles.searchBoxx}>
            <input placeholder="Search products…" />
            <span className={styles.searchIcon}>
              <Search size={18} />
            </span>
          </div>
        </div>
      </header>

      {/* ================= DRAWER ================= */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              className={styles.overlay}
              onClick={() => setMenuOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.75 }}
              exit={{ opacity: 0 }}
            />

            <motion.div
              className={styles.drawer}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", stiffness: 260, damping: 28 }}
            >
              {/* Grab handle */}
              <div className={styles.drawerHandle} />

              {/* Drawer Search */}
              {/* <div className={styles.drawerSearchWrapper}>
                <Search size={18} />
                <input
                  className={styles.drawerSearch}
                  placeholder="Search products…"
                />
              </div> */}

              {/* Navigation */}
              <div className={styles.drawerNav}>
                {navItems.map((item) => {
  const isOpen = openSection === item.label;

  return (
    <div key={item.label} className={styles.drawerSection}>
      <button
        className={styles.drawerHeader}
        onClick={() =>
          setOpenSection(isOpen ? null : item.label)
        }
      >
        <span>{item.label}</span>
        <MdKeyboardArrowDown
          className={`${styles.drawerArrow} ${
            isOpen ? styles.rotate : ""
          }`}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={styles.drawerLinks}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            {item.links.map((link) => {
              const Icon = link.icon;
              return (
                <div key={link.name} className={styles.drawerLinkItem}>
                  {Icon && <Icon size={16} />}
                  <span>{link.name}</span>
                </div>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
})}

              </div>
<div className={styles.drawerSection}>
  <button
    className={styles.drawerHeader}
    onClick={() =>
      setOpenSection(
        openSection === "account" ? null : "account"
      )
    }
  >
    <span>My Account</span>
    <MdKeyboardArrowDown
      className={`${styles.drawerArrow} ${
        openSection === "account" ? styles.rotate : ""
      }`}
    />
  </button>

  <AnimatePresence>
    {openSection === "account" && (
      <motion.div
        className={styles.drawerLinks}
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: "auto", opacity: 1 }}
        exit={{ height: 0, opacity: 0 }}
      >
        <p>My Orders</p>
        <p>Saved Items</p>
        <p>Payment Methods</p>
        <p>Shipping Addresses</p>
        <p>Settings</p>
        <p>Help Center</p>
        <p className={styles.signIn}>Sign In</p>
      </motion.div>
    )}
  </AnimatePresence>
</div>

              {/* Account */}
              {/* <div className={styles.drawerAccount}>
                <p>My Orders</p>
                <p>Saved Items</p>
                <p>Payment Methods</p>
                <p>Shipping Addresses</p>
                <p>Settings</p>
                <p>Help Center</p>

                <button className={styles.drawerSignIn}>Sign In</button>
              </div> */}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
