import { useState, useEffect, useRef } from "react";
import reactLogo from "@/assets/react.svg";
import wxtLogo from "/wxt.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [classStyle, setClassStyle] = useState<String>("");

  /* useEffect(() => {
    textareaRef.current?.focus();
  }, []); */


  useEffect(() => {
    const timer = setTimeout(() => {
      console.log("Focus fired");
      setClassStyle("focused");
    }, 1000);

    textareaRef.current?.addEventListener("click", () => {
      console.log("Click fired");
      setClassStyle("");
    });
  }, []);

  const handleFocus = () => {
    textareaRef.current?.focus();
  };

  return (
    <>
      <textarea
        ref={textareaRef}
        className={`card ${classStyle}`}
        style={{
          width: "100%",
          height: "200px",
          padding: "12px",
          margin: "20px 0",
        }}
        placeholder="Start typing..."
      />
      <button onClick={handleFocus}>Focus Textarea</button>
    </>
  );
}

export default App;
