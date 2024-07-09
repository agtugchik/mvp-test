import { useState } from "react";
import { Layout } from "antd";
import { Router } from "@components/router";
import styles from "./app.module.scss";
import AppContext from "@context";

const { Header, Content } = Layout;

export const App = () => {
  const [contextValues, setContextValues] = useState({
    isActiveAlert: false,
    event: {},
  });

  const setMessage = (event, userChoice) => {
    setContextValues({ isActiveAlert: true, event, userChoice });
  };

  const resetMessage = () => {
    setContextValues({ isActiveAlert: false, event: {}, userChoice: "" });
  };

  return (
    <AppContext.Provider value={{ contextValues, setMessage, resetMessage }}>
      <Layout className={styles.app}>
        <Header>header</Header>
        <Layout>
          <Content>
            <Router />
          </Content>
        </Layout>
      </Layout>
    </AppContext.Provider>
  );
};
