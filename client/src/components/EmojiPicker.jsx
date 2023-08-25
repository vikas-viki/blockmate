import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";

// eslint-disable-next-line react/prop-types
const EmojiPicker = ({emojiPickerRef, setMessage}) => {
  return (
    <div
            className={`w-max h-[0px]`} // Add identifier to emoji picker div
            ref={emojiPickerRef}
          >
            <div className="relative top-[-440px]">
              <Picker
                data={data}
                onEmojiSelect={(e) => {
                  setMessage((prev) => (prev += e.native));
                }}
                previewPosition="none"
              />
            </div>
          </div>
  )
}

export default EmojiPicker