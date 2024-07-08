import { useParams } from "react-router-dom";
import { Page } from "@pages/page";

export const EventPage = () => {
  const { id } = useParams();

  return <Page>{id}</Page>;
};
