// eslint-disable-next-line react/prop-types
const Linker = ({ linkPicker }) => {
  return (
    <div className="w-max h-[0px] relative top-[-130px] " ref={linkPicker}>
      <div className="relative flex flex-wrap gap-[10px] w-[132px] p-[10px] rounded-[10px] bg-cyan-200 left-[390px]  border-[1px] border-sky-300 ">
        <div className="w-[50px] h-[50px] border-[1px] rounded-[10px] border-black"></div>
        <div className="w-[50px] h-[50px] border-[1px] rounded-[10px] border-black"></div>
        <div className="w-[50px] h-[50px] border-[1px] rounded-[10px] border-black"></div>
      </div>
    </div>
  );
};

export default Linker;
