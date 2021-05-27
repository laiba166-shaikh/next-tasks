import styles from "../styles/Home.module.css";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <Link href="/">
        <h2 className={styles.title}>Home </h2>
      </Link>
      <Link href="/about">
        <h2 className={styles.title}>About </h2>
      </Link>
      <Link href="/contact">
        <h2 className={styles.title}>Contact </h2>
      </Link>
    </div>
  );
};

export default Navbar;
