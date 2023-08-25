/* eslint-disable react/prop-types */


const Messages = ({messages, user}) => {
  return (
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
  )
}

export default Messages