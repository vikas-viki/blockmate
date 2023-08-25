import { useEffect, useState, useRef, useContext } from "react";
import emojiPicker from "../assets/emoji-picker.png";
import linker from "../assets/link.png";
import { FleekSdk, ApplicationAccessTokenService } from "@fleekxyz/sdk";
import Linker from "../components/Linker";
import { Context } from "../context/Context";
import EmojiPicker from "../components/EmojiPicker";
import Messages from "../components/Messages";
import Input from "../components/Input";

const applicationService = new ApplicationAccessTokenService({
  clientId: "client_eBOerNH7c4mmuiMx0mnH",
});

const fleekSdk = new FleekSdk({ accessTokenService: applicationService });

const connection = "0xEBA97E01DaF90479C55782EE9F58C11c5B892825";
const user = "0x32d1dBf8019011c07061782DEB04181e430AcBF0";

const HomePage = () => {
  const { messages } = useContext(Context);
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
    setLink(false);
    setOpenE(true);
  };

  async function submit() {
    const result = await fleekSdk.ipns().publishRecord({
      id: "clfmcbagx0000mg081ytm65cp",
      hash: "QmRG4xcsmoZuXqKuPz3uVBgvo3GZ6k1kLZWhmvzuKtDr9s",
    });

    console.log(result);
  }

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
        <button onClick={submit}>submit1</button>
        <Messages messages={messages} user={user} />
        {link == true && <Linker linkPicker={linkPicker} />}
        {openE == true && (
          <EmojiPicker
            emojiPickerRef={emojiPickerRef}
            setMessage={setMessage}
          />
        )}
        <Input
          openE={openE}
          openEmoji={openEmoji}
          emojiPicker={emojiPicker}
          emojiPickerImageRef={emojiPickerImageRef}
          message={message}
          setMessage={setMessage}
          setOpenE={setOpenE}
          setLink={setLink}
          linker={linker}
        />
      </div>
    </div>
  );
};

export default HomePage;
