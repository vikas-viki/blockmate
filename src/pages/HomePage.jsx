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
];

const connection = "0xEBA97E01DaF90479C55782EE9F58C11c5B892825";

const user = "0x32d1dBf8019011c07061782DEB04181e430AcBF0";

const HomePage = () => {
  return (
    <div className="flex font-roboto justify-center  w-full h-full">
      <div className="w-[600px] h-full flex flex-col gap-[10px] p-[15px] border-r-2 border-l-2 border-black shadow-xl bg-indigo-500">
        <div
          className={`font-poppins h-max cursor-pointer sticky shadow-2xl flex w-full p-[20px] justify-center items-center border-[1px] rounded-[10px] border-black`}
        >
          <span>{connection}</span>
        </div>
        {messages.map((el, i) => (
          <div
            key={i}
            className={`flex ${
              user === el.sender ? "justify-end" : "justify-start"
            }   `}
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
        <div className="w-full h-[55px] p-[5px] border-[1px] self-end rounded-[3.5rem] border-black shadow-xl bg-gray-200">
          <input
            type="text"
            className="w-full h-full pl-[15px] outline-none border-none  rounded-[3.5rem]"
            placeholder="Send message..."
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
