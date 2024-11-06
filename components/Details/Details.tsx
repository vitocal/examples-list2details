import React from 'react'
import cn from 'classnames'

import { EmojiItem } from '../../data'
import styles from './styles.module.css';

export type DetailsProps = { emoji: EmojiItem | null }
export default function Details({ emoji }: DetailsProps) {
    if (!emoji) {
        return <></>
    }

    return <>
        <div className="details">
            <div className={cn("header flex flex-row items-center p-2", styles.header)} style={{ backgroundColor: emoji.bg }}>
                <div className="img text-8xl" style={{ viewTransitionName: "emoji-img" }}>{emoji.icon}</div>
                <h1 className="text-2xl" style={{ viewTransitionName: "emoji-name" }}>{emoji.name}</h1>
            </div>
            <div className="content p-2">
                <p>{emoji.details}</p>
                <p>Id excepteur eu in ea exercitation. Aute ex voluptate adipisicing Lorem laborum adipisicing consequat exercitation reprehenderit cupidatat minim magna minim. Dolor cillum voluptate Lorem incididunt labore Lorem dolore exercitation sunt deserunt dolore officia minim.</p>
            </div>
        </div>
        <style>

        </style>
    </>
}