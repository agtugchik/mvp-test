import AppContext from "@context";
import { Alert } from "antd";

const firstLetterToUppercase = (word) => word[0].toUpperCase() + word.slice(1);

export const CustomAlert = () => (
  <AppContext.Consumer>
    {({ contextValues, resetMessage }) => (
      <>
        {contextValues.isActiveAlert && (
          <Alert
            message={`Thank you, your choice is ${
              contextValues.event[contextValues.userChoice] || "tie"
            } with coefficient ${
              contextValues.userChoice === "tieTeam"
                ? contextValues.event.tie
                : contextValues.event[
                    `win${firstLetterToUppercase(contextValues.userChoice)}`
                  ]
            }`}
            type="success"
            closable={true}
            onClose={resetMessage}
          />
        )}
      </>
    )}
  </AppContext.Consumer>
);
