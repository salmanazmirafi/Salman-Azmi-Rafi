import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";

type Props = {};

function Hero({}: Props) {
  const [text, comntent] = useTypewriter({
    words: [
      "Hi I'm Salman Azmi Rafi",
      "I'm Web Design And Developer",
      "But Loves To Could",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div>
      <p>{text}</p>
      <Cursor cursorColor="#F7ABBA" />
    </div>
  );
}

export default Hero;
