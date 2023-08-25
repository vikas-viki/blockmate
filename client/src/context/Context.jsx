/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const Context = createContext();

const State = ({ children }) => {
  const _messages = [
    {
      sender: "0x32d1dBf8019011c07061782DEB04181e430AcBF0",
      msg: "Hey, WhatsApp",
      timestamp: "1691487033",
    },
    {
      sender: "0xEBA97E01DaF90479C55782EE9F58C11c5B892825",
      msg: "Whatsapp! Whats Going onn?",
      timestamp: "1691487033",
    },
    {
      sender: "0x32d1dBf8019011c07061782DEB04181e430AcBF0",
      msg: "Exploring EVM!",
      timestamp: "1691487033",
    },
    {
      sender: "0xEBA97E01DaF90479C55782EE9F58C11c5B892825",
      msg: "Cool🔥!",
      timestamp: "1691487033",
    },
  ];
  const [messages, setMessages] = useState(_messages);

  function setSubmit(event, _msg) {
    if (event.keyCode === 13) {
      setMessages([
        ...messages,
        {
          sender: "0x32d1dBf8019011c07061782DEB04181e430AcBF0",
          msg: _msg,
          timestamp: "1691487033",
        },
      ]);
    }
  }
  return <Context.Provider value={{ setSubmit, messages, setMessages }}>{children}</Context.Provider>;
};

export default State;
