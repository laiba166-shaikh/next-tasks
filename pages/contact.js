import Link from "next/link";
import styles from "../styles/Home.module.css";

const Contact = () => {
  return (
    <div>
      <h1>Contact Page</h1>
      <Link href="/">
        <h2 className={styles.title}>Go to home</h2>
      </Link>
    </div>
  );
};

export default Contact;
