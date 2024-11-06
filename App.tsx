import React, { useState, useRef } from "react";
import { flushSync } from "react-dom";

import { emojis, EmojiItem } from "./data";
import Chrome from "./components/Chrome";
import List from './components/List';
import Details from "./components/Details/Details";

export default function App() {
  const [nav, setNav] = useState("/list");
  const [emoji, setEmoji] = useState<EmojiItem | null>(null);

  const onEmojiClick = (emoji: EmojiItem, origin: HTMLElement) => {
    const img = origin.querySelector('.img') as HTMLElement;
    const name = origin.querySelector('.name') as HTMLElement;
    img.style.viewTransitionName = "emoji-img"
    name.style.viewTransitionName = "emoji-name"

    document.startViewTransition(() => {
      flushSync(() => {
        setNav(`/details/${emoji.name}`);
        setEmoji(() => emoji);
      });
    });
  };

  const onClickBack = (ev) => {
    document.startViewTransition(() => {
      flushSync(() => {
        setNav("/list");
        setEmoji(null);
      });
    });
  }

  return (
    <Chrome onClickBack={onClickBack}>
      {nav === "/list" &&
        <List emojis={emojis} onItemClick={onEmojiClick} />}
      {/\/details\/.*?/.test(nav) && <Details emoji={emoji} />}
    </Chrome>
  );
}
