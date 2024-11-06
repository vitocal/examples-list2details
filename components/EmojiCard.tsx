import React, { useRef } from 'react'
import { EmojiItem } from '../data'

import cn from 'classnames'

export type EmojiClick = (EmojiItem, origin: HTMLElement) => void
export interface EmojiCardProps extends React.PropsWithChildren {
    emoji: EmojiItem; onItemClick: EmojiClick
};
export default function EmojiCard({ emoji, onItemClick }: EmojiCardProps) {
    const styles = ["flex flex-row items-center gap-4 cursor-pointer"];
    const ref = useRef<HTMLElement | null>(null);
    const onClick = (ev) => {
        if (ref.current) {
            onItemClick(emoji, ref.current);
        }
    };

    return (
        <div
            className={cn("emoji_card", ...styles)}
            key={emoji.name}
            onClick={onClick}
            /** @ts-ignore */
            ref={ref}>
            <div className="img text-4xl w-10 h-10 rounded-full flex items-center justify-center ">{emoji.icon}</div>
            <div className="name">{emoji.name}</div>
        </div>
    );
}