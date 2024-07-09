import styles from "./page.module.scss";

export const Page = ({ className, children }) => (
  <div className={`${styles.page} ${className}`}>{children}</div>
);
