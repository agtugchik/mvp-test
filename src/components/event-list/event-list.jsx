import { List } from "antd";
import { events } from "@constants/events";
import { useNavigate } from "react-router-dom";
import moment from "moment";
import styles from "./event-list.module.scss";

export const EventList = () => {
  const navigate = useNavigate();

  const eventOnCLickHandler = (id) => navigate(`/event/${id}`);

  const actualEvents = () =>
    events.filter(
      (event) => moment(event.date).diff(moment(), "milliseconds") > 0
    );

  const isToday = (event) => moment(event.date).isSame(moment(), "day");

  return (
    <List
      className={styles.eventList}
      dataSource={actualEvents()}
      renderItem={(event) => (
        <List.Item
          className={styles.listItem}
          key={event.id}
          onClick={() => eventOnCLickHandler(event.id)}
          extra={<img className={styles.img} src={event.logoSrc} />}
        >
          <List.Item.Meta
            title={
              <div>
                <h2>
                  <span className={styles.team}>{event.firstTeam}</span> vs{" "}
                  <span className={styles.team}>{event.secondTeam}</span>
                </h2>
                <h3>Round {event.id}</h3>
                {isToday(event) ? (
                  <h3 className={styles.today}>Today</h3>
                ) : (
                  <h3 className={styles.soon}>Coming soon...</h3>
                )}
              </div>
            }
          />
        </List.Item>
      )}
    />
  );
};
