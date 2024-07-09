import { useNavigate, useParams } from "react-router-dom";
import { Page } from "@pages/page";
import { Button, Form, Radio } from "antd";
import { events } from "@constants/events";
import moment from "moment";
import { useState } from "react";
import { routes } from "../../constants/routes";

export const EventPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [submitDisable, setSubmitDisabled] = useState(true);
  const event = events.find((event) => event.id === Number(id));

  const radioOnCHangeHandler = () => setSubmitDisabled(false);

  const onSubmitHandler = () => {
    console.log(123);
    navigate(routes.HOME);
  };

  return (
    <Page>
      <Form onFinish={onSubmitHandler}>
        <h2>
          {event.firstTeam} vs {event.secondTeam}
        </h2>
        <h2>Round {event?.id}</h2>
        <h3>{moment(event.date).format("MMM Do YYYY")}</h3>
        <Form.Item name="radio-group" label="Coefficient">
          <Radio.Group onChange={radioOnCHangeHandler}>
            <Radio value="winFirstTeam">
              {event.firstTeam}: {event.winFirstTeam}
            </Radio>
            <Radio value="tie">Tie: {event.tie}</Radio>
            <Radio value="winSecondTeam">
              {event.secondTeam}: {event.winSecondTeam}
            </Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" disabled={submitDisable}>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Page>
  );
};
