import { useParams } from "react-router-dom";
import { Page } from "../page";

export const EventPage = () => {
  const { id } = useParams();

  return <Page>{id}</Page>;
};
