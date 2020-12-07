import React, { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "#️⃣": "Number Sign",
  "*️⃣": "Asterisk",
  "0️⃣": "Zero",
  "1️⃣": "One",
  "2️⃣": "Two",
  "3️⃣": "Three",
  "4️⃣": "Four",
  "5️⃣": "Five",
  "6️⃣": "Six",
  "7️⃣": "Seven",
  "8️⃣": "Eight",
  "9️⃣": "Nine",
  "🔟": "Ten",
  "🕛": "Twelve O’Clock",
  "🕧": "Twelve-Thirty",
  "🕐": "One O’Clock",
  "🕜": "One-Thirty",
  "🕑": "Two O’Clock",
  "🕝": "Two-Thirty",
  "🕒": "Three O’Clock",
  "🕞": "Three-Thirty",
  "🕓": "Four O’Clock",
  "🕟": "Four-Thirty",
  "🕔": "Five O’Clock",
  "🕠": "Five-Thirty",
  "🕕": "Six O’Clock",
  "🕡": "Six-Thirty",
  "🕖": "Seven O’Clock",
  "🕢": "Seven-Thirty",
  "🕗": "Eight O’Clock",
  "🕣": "Eight-Thirty",
  "🕘": "Nine O’Clock",
  "🕤": "Nine-Thirty",
  "🕙": "Ten O’Clock",
  "🕥": "Ten-Thirty",
  "🕚": "Eleven O’Clock",
  "🕦": "Eleven-Thirty"
};

var emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function emojiInputHandler(event) {
    var userInput = event.target.value;

    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "OOPS!! We do not have this in our databse!";
    }
    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }
  return (
    <div className="App">
      <h1>
        <span
          style={{
            backgroundColor: "cyan",
            borderRadius: "1rem",
            padding: "0.2rem"
          }}
        >
          Study Numbers and Timings with Emojis 🤓📚
        </span>
      </h1>

      <input
        onChange={emojiInputHandler}
        placeholder="type the emoji you want to know about"
        style={{ width: "40%" }}
      />

      <h2>
        <span style={{ color: "orange" }}>{meaning}</span>
      </h2>

      <h3>
        <span
          style={{
            backgroundColor: "black",
            borderRadius: "1rem",
            padding: "0.5rem",
            color: "white",
            width: "80%"
          }}
        >
          CLick the Emoji below to know about it
        </span>
      </h3>

      {emojisWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "4rem", padding: "0.5rem", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
      <div>
        <h3>
          <span
            style={{
              backgroundColor: "yellow",
              padding: "1rem",
              border: "0.5rem",
              borderRadius: "1rem"
            }}
          >
            A Fun Game for kids to Learn and Play. Share it with your friends
            and family..
          </span>
        </h3>
      </div>
    </div>
  );
}
