import { Layout } from "antd";
import styles from "./app.module.scss";
import { Router } from "@components/router";

const { Header, Content } = Layout;

export const App = () => (
  <Layout className={styles.app}>
    <Header>header</Header>
    <Layout>
      <Content>
        <Router />
      </Content>
    </Layout>
  </Layout>
);
