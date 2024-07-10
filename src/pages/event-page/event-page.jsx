import { useNavigate, useParams } from "react-router-dom";
import { Page } from "@pages/page";
import { Button, Form, Radio } from "antd";
import { events } from "@constants/events";
import moment from "moment";
import { useContext, useState } from "react";
import { routes } from "../../constants/routes";
import AppContext from "@context";

export const EventPage = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const { id } = useParams();
  const { setMessage } = useContext(AppContext);
  const [submitDisable, setSubmitDisabled] = useState(true);
  const event = events.find((event) => event.id === Number(id));

  const radioOnCHangeHandler = () => setSubmitDisabled(false);

  const onSubmitHandler = () => {
    navigate(routes.HOME);
  };

  return (
    <Page>
      <Form
        form={form}
        onFinish={() => {
          onSubmitHandler();
          setMessage(event, form.getFieldValue("radio-group"));
        }}
      >
        <h2>
          {event.firstTeam} vs {event.secondTeam}
        </h2>
        <h2>Round {event?.id}</h2>
        <h3>{moment(event.date).format("MMM Do YYYY")}</h3>
        <Form.Item name="radio-group" label="Coefficient">
          <Radio.Group onChange={radioOnCHangeHandler}>
            <Radio value="firstTeam">
              {event.firstTeam}: {event.winFirstTeam}
            </Radio>
            <Radio value="tieTeam">Tie: {event.tie}</Radio>
            <Radio value="secondTeam">
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
