import {
  INSTAGRAM_MAX_CHARACTERS,
  FACEBOOK_MAX_CHARACTERS,
} from "../constants";
export default function Stats({ numberofCharacters, numberofWords }) {
  return (
    <section className="stats">
      <Stat number={numberofWords} heading="WORDS" />
      <Stat number={numberofCharacters} heading="CHARACTERS" />
      <Stat
        number={INSTAGRAM_MAX_CHARACTERS - numberofCharacters}
        heading="INSTAGRAM"
      />
      <Stat
        number={FACEBOOK_MAX_CHARACTERS - numberofCharacters}
        heading="FACEBOOK"
      />
    </section>
  );
}
function Stat({ number, heading }) {
  return (
    <section className="stat">
      <span
        className={`stat__number ${number < 0 ? "stat__number--limit" : ""}`}
      >
        {number}
      </span>
      <h2 className="second-heading">{heading}</h2>
    </section>
  );
}
