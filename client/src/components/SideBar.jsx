const connections = [
  { address: "0x32d1dBf8019011c07061782DEB04181e430AcBF0" },
  { address: "0xEBA97E01DaF90479C55782EE9F58C11c5B892825" },
  { address: "0x32d1dBf8019011c07061782DEB04181e430AcBF0" },
  { address: "0xEBA97E01DaF90479C55782EE9F58C11c5B892825" },
];

const SideBar = () => {
  return (
    <aside className="flex flex-col justify-left gap-[15px] items-center w-[30%] border-r-2 border-black h-full pt-0 p-[20px]">
      <span className="font-poppins font-bold text-[0.9rem] p-[10px]">
        Connections
      </span>
      {connections.map((el, i) => (
        <div
          key={i}
          className={`font-poppins cursor-pointer flex w-full p-[20px] justify-center items-center border-[1px] rounded-[10px] border-black`}
        >
          <span>{el.address.slice(0, 20) + " ... " + el.address.slice(-8)}</span>
        </div>
      ))}
    </aside>
  );
};

export default SideBar;
