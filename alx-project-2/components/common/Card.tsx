import { type CardProps } from "@/interfaces";
import styles from "./Card.module.css";

const Card: React.FC<CardProps> = ({ title, content }) => (
  <div className={styles.card}>
    <h2 className={styles.title}>{title}</h2>
    <div>{content}</div>
  </div>
);

export default Card;