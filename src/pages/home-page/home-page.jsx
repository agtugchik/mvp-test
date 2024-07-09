import { EventList } from "@components/event-list";
import { Page } from "../page";
import { CustomAlert } from "@components/ui/custom-alert/custom-alert";

export const HomePage = () => (
  <Page>
    <CustomAlert />
    <EventList />
  </Page>
);
