import { List } from "antd";
import { events } from "@constants/events";
import { useNavigate } from "react-router-dom";
import moment from "moment";

export const EventList = () => {
  const navigate = useNavigate();

  const eventOnCLickHandler = (id) => navigate(`/event/${id}`);

  const actualEvents = () =>
    events.filter(
      (event) => moment(event.date).diff(moment(), "milliseconds") > 0
    );

  return (
    <List
      dataSource={actualEvents()}
      renderItem={(event) => (
        <List.Item
          key={event.id}
          onClick={() => eventOnCLickHandler(event.id)}
          extra={<img src={event.logoSrc} />}
        >
          <List.Item.Meta
            title={
              <div>
                <h2>
                  {event.firstTeam} vs {event.secondTeam}
                </h2>
                <h3>Round {event.id}</h3>
                {moment(event.date).isSame(moment(), "day") ? (
                  <h3>Today</h3>
                ) : (
                  <h3>Coming soon...</h3>
                )}
              </div>
            }
          />
        </List.Item>
      )}
    />
  );
};
