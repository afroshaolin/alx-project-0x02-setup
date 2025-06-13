import Link from "next/link";
import styles from "./Header.module.css";

const Header: React.FC = () => (
  <header className={styles.header}>
    <nav>
      <ul className={styles.navList}>
        <li>
          <Link href="/home">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/posts">Post</Link>
        </li>
        <li>
          <Link href="/users">Users</Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;