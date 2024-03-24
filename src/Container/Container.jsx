import { useState } from "react";
import Textarea from "./Textarea";
import Stats from "./Stats";
export default function Container() {
  const [text, setText] = useState("");
  const numberofCharacters = text.length;
  let numberOfWords = text.split(/\s+/).filter((word) => word !== "").length;
  return (
    <main className="container">
      <Textarea text={text} setText={setText} />
      <Stats
        numberofCharacters={numberofCharacters}
        numberofWords={numberOfWords}
      />
    </main>
  );
}
