import { FunctionComponent, useState, MutableRefObject } from "react";
import Keyboard from "react-simple-keyboard";

import "react-simple-keyboard/build/css/index.css";

interface IProps {
  onChange: any;
  //@ts-ignore
  keyboardRef: MutableRefObject<Keyboard>;
}

const VirtualKeyboard: FunctionComponent<IProps> = ({
  onChange,
  keyboardRef,
}) => {
  const [layoutName, setLayoutName] = useState("default");

  const onKeyPress = (button: string) => {
    if (button === "{shift}" || button === "{lock}") {
      setLayoutName(layoutName === "default" ? "shift" : "default");
    }
  };

  return (
    <Keyboard
      keyboardRef={(r) => (keyboardRef.current = r)}
      layoutName={layoutName}
      layout={{
        default: ["1 2 3", "4 5 6", "7 8 9", "+ 0 {bksp}"],
      }}
      display={{
        "{bksp}": "<",
        "{enter}": "enter",
        "{shift}": "shift",
        "{s}": "shift",
        "{tab}": "tab",
        "{lock}": "caps",
        "{accept}": "Submit",
        "{space}": " ",
        "{//}": " ",
      }}
      onChange={onChange}
      onKeyPress={onKeyPress}
    />
  );
};

export default VirtualKeyboard;
