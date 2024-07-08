import { Navigate, Route, Routes } from "react-router-dom";
import { EventPage } from "../../pages/event-page";
import { HomePage } from "../../pages/home-page/home-page";
import routes from "../../constants/routes";

export const Router = () => (
  <Routes>
    <Route path={routes.HOME} element={<HomePage />} />
    <Route path={routes.EVENT} element={<EventPage />} />
    <Route path={routes.ELSE} element={<Navigate to={routes.HOME} />} />
  </Routes>
);
