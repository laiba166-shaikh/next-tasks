import styles from "../styles/Home.module.css";
import Link from "next/link";

const Navbar = ({ children }) => {
  return (
    <div>
      <div className={styles.navbar}>
        <Link href="/">
          <h2 className={styles.title}>Home </h2>
        </Link>
        <Link href="/about?hotelName=Marmara">
          <h2 className={styles.title}>About </h2>
        </Link>
        <Link href="/contact">
          <h2 className={styles.title}>Contact </h2>
        </Link>
        <Link href="/products">
          <h2 className={styles.title}>Products </h2>
        </Link>
      </div>
      {children}
    </div>
  );
};

export default Navbar;
