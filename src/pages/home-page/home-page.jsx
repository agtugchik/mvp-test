import { EventList } from "@components/event-list";
import { Page } from "../page";
import { CustomAlert } from "@components/ui/custom-alert/custom-alert";
import styles from "./home-page.module.scss";

export const HomePage = () => (
  <Page className={styles.homePage}>
    <CustomAlert />
    <EventList />
  </Page>
);
