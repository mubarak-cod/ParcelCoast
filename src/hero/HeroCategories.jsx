import Link from "next/link";
import styles from "./HeroCategories.module.css";
import { categories } from "../data/categories";

export default function HeroCategories() {
  return (
    <aside className={styles.categories}>
      <ul className={styles.list}>
        {categories.map((cat) => (
          <li key={cat.id} className={styles.item}>
            <Link href={cat.href} className={styles.link}>
              <span className={styles.icon}>
                <cat.icon size={16} />
              </span>
              <span className={styles.label}>{cat.label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
