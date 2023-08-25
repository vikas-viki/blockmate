/* eslint-disable react/prop-types */
import { useContext } from "react";
import { Context } from "../context/Context";

const Input = ({
  openE,
  openEmoji,
  emojiPicker,
  emojiPickerImageRef,
  message,
  setMessage,
  setOpenE,
  setLink,
  linker,
}) => {
  const { setSubmit } = useContext(Context);

  return (
    <div
      className={`w-[90%]  ${
        openE === true ? "relative" : "h-[65px]"
      } justify-center self-center  mb-[18px] p-[5px] border-[1px] rounded-[3.5rem] border-black shadow-xl bg-gray-200`}
    >
      <div className="flex w-full h-full items-center p-[10px] bg-white rounded-[3.5rem]">
        <span className="relative pl-[7px] cursor-pointer" onClick={openEmoji}>
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
          onKeyDown={(event) => {
            setSubmit(event, message);
            if (event.keyCode === 13) {
              setMessage("");
            }
          }}
          onChange={(e) => {
            console.log(e);
            setMessage(e.target.value);
          }}
        ></input>

        <span
          className="relative pr-[7px] pl-[7px] cursor-pointer"
          onClick={() => {
            setOpenE(false);
            setLink((prev) => !prev);
          }}
        >
          <img src={linker} alt="🔗" width={26} />
        </span>
      </div>
    </div>
  );
};

export default Input;
