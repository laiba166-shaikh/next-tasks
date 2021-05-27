import Link from "next/link";
import styles from "../styles/Home.module.css";

const About = () => {
  return (
    <div>
      <h1>About Page</h1>
      <Link href="/">
        <h2 className={styles.title}>Go to home</h2>
      </Link>
    </div>
  );
};

export default About;
