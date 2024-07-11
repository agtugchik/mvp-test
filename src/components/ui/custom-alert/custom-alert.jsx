import AppContext from "@context";
import { Alert } from "antd";
import { useContext } from "react";

const firstLetterToUppercase = (word) => word[0].toUpperCase() + word.slice(1);

export const CustomAlert = () => {
  const { resetMessage, contextValues } = useContext(AppContext);

  setTimeout(() => resetMessage(), 3000);

  return (
    <>
      {contextValues.isActiveAlert && (
        <Alert
          style={{ marginTop: "10px" }}
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
  );
};
