import { useNavigate } from "react-router-dom";
import styles from "./logo.module.scss";
import { routes } from "../../../constants/routes";
import useResize from "@hooks/use-resize";

export const Logo = () => {
  const navigate = useNavigate();
  const [width] = useResize();

  const onClickHandler = () => navigate(routes.HOME);

  return (
    <h1 onClick={onClickHandler} className={styles.logo}>
      <div className={styles.word}>{width > 479 ? "Mortal" : "M"}</div>
      <div className={styles.word}>{width > 479 ? "Kombat" : "K"}</div>
    </h1>
  );
};
