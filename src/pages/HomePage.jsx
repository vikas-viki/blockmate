import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";
import { useEffect, useState, useRef } from "react";
import emojiPicker from "../assets/emoji-picker.png";
import linker from "../assets/link.png";

const messages = [
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

const connection = "0xEBA97E01DaF90479C55782EE9F58C11c5B892825";
const user = "0x32d1dBf8019011c07061782DEB04181e430AcBF0";

const HomePage = () => {
  const [message, setMessage] = useState("");
  const [openE, setOpenE] = useState(false);
  const emojiPickerRef = useRef();
  const emojiPickerImageRef = useRef();
  const linkPicker = useRef();
  const [link, setLink] = useState(false);

  const closeEmoji = () => {
    setOpenE(false);
  };

  const openEmoji = () => {
    setOpenE(true);
  };

  useEffect(() => {
    const handleDocumentClick = (event) => {
      if (
        emojiPickerRef.current &&
        !emojiPickerRef.current.contains(event.target) &&
        event.target !== emojiPickerImageRef.current
      ) {
        closeEmoji();
      }

    };

    document.addEventListener("click", handleDocumentClick);

    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, []);

  return (
    <div className="flex font-roboto justify-center w-full h-full">
      <div className="w-[600px] h-full flex flex-col gap-[10px] p-[17px] border-r-2 border-l-2 border-black shadow-xl bg-indigo-500">
        <div
          className={`font-poppins h-max cursor-pointer sticky shadow-2xl flex w-full p-[20px] justify-center items-center border-[1px] rounded-[10px] border-black`}
        >
          <span>{connection}</span>
        </div>
        <div className="h-full overflow-scroll messages-box flex flex-col gap-[10px] pt-[10px]">
          {messages.map((el, i) => (
            <div
              key={i}
              className={`flex ${
                user === el.sender ? "justify-end" : "justify-start"
              }`}
            >
              <span
                className={`${
                  user === el.sender ? "bg-lime-300" : "bg-sky-300"
                } p-[5px] pl-2 pr-2 rounded-[8px]`}
              >
                {el.msg}
              </span>
            </div>
          ))}
        </div>
        {link == true && (
          <div className="flex justify-end w-[92%]" ref={linkPicker}>
            <div className="relative flex flex-wrap gap-[10px] w-[132px] p-[10px] rounded-[10px]  border-[1px] border-sky-300 ">
              <div className="w-[50px] h-[50px] border-[1px] rounded-[10px] border-black"></div>
              <div className="w-[50px] h-[50px] border-[1px] rounded-[10px] border-black"></div>
              <div className="w-[50px] h-[50px] border-[1px] rounded-[10px] border-black"></div>
            </div>
          </div>
        )}
        <div
          className={`${
            openE === false ? "hidden" : "justify-end"
          } relative top-[-100px] main-picker-div`} // Add identifier to emoji picker div
          ref={emojiPickerRef}
        >
          <Picker
            data={data}
            onEmojiSelect={(e) => {
              setMessage((prev) => (prev += e.native));
            }}
            previewPosition="none"
          />
        </div>
        <div
          className={`w-[90%]  ${
            openE === true ? "relative top-[-87px]" : "h-[65px]"
          } justify-center self-center  mb-[25px] p-[5px] border-[1px] rounded-[3.5rem] border-black shadow-xl bg-gray-200`}
        >
          <div className="flex w-full h-full items-center p-[10px] bg-white rounded-[3.5rem]">
            <span
              className="relative pl-[7px] cursor-pointer"
              onClick={openEmoji}
            >
              <img
                src={emojiPicker}
                onClick={openEmoji}
                alt="🙂"
                width={28}
                ref={emojiPickerImageRef}
              />
            </span>
            <input
              type="text"
              className="w-full  pl-[15px] outline-none border-none  rounded-[3.5rem] bg-none"
              placeholder="Send message..."
              value={message}
              id="msg-box"
              onChange={(e) => {
                setMessage(e.target.value);
              }}
            ></input>

            <span
              className="relative pr-[7px] pl-[7px] cursor-pointer"
              onClick={() => {
                setLink(prev=> !prev);
              }}
            >
              <img src={linker} alt="🔗" width={26} />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
