import { useState } from "react";

function AlertButton({ text, message }) {
  const [paragraphText, setParagraphText] = useState("data bisa diganti");

  const handleClick = () => {
    if (paragraphText === message) {
      setParagraphText("data bisa diganti lagi");
    } else {
      setParagraphText(message);
    }
  };

  return (
    <div>
      <button onClick={handleClick}>{text}</button>
      <p id="text">{paragraphText}</p>
    </div>
  );
}

export default AlertButton;
