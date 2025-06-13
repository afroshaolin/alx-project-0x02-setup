/**
 * Header component that renders the main navigation bar for the application.
 *
 * This component uses Next.js `Link` for client-side navigation and applies
 * styles from the associated CSS module. The navigation includes links to
 * Home, About, Post, and Users pages.
 *
 * @component
 * @returns {JSX.Element} The rendered header with navigation links.
 */
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

// Ensure you export the Header component
export default Header;