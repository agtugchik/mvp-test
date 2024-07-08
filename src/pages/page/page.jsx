import styles from "./page.module.scss";

export const Page = ({ className, children }) => (
  <main className={`${styles.page} ${className}`}>{children}</main>
);
