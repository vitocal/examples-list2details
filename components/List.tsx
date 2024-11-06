import React from 'react'

import { EmojiItem } from '../data'
import EmojiCard, { EmojiClick } from './EmojiCard'

export type ListProps = { emojis: EmojiItem[], onItemClick: EmojiClick }
export default function List({ emojis, onItemClick }: ListProps) {
    return (
        <div className="list p-2 flex flex-col gap-2">
            {emojis.map((emoji) => (
                <EmojiCard emoji={emoji} onItemClick={onItemClick} key={emoji.name} />
            ))}
        </div>
    );
}
