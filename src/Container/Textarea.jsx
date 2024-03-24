import { useState, useEffect, useRef } from "react";
import Warning from "../Warning/Warning";

export default function Textarea({ text, setText }) {
  const [showWarning, setShowarning] = useState(false);
  const [warningText, setWarningText] = useState("");
  const timeoutRef = useRef(null);

  const handleChange = (e) => {
    let newText = e.target.value;
    if (newText.includes("<script>")) {
      setShowarning(true);
      setWarningText("<script> tag not allowed");
      newText = newText.split("<script>").join("");
    } else if (newText.includes("@")) {
      setShowarning(true);
      setWarningText("@ symbol not allowed");
      newText = newText.split("@").join("");
    }
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      setShowarning(false);
    }, 1000);
    setText(newText);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <div className="textarea">
      <textarea
        value={text}
        onChange={handleChange}
        placeholder="Enter your text here"
        spellCheck="false"
      />
      {showWarning ? <Warning warningText={warningText} /> : null}
    </div>
  );
}
