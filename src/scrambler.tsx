"use client";

import { Dispatch, SetStateAction, useEffect, useState } from "react";

const letters = "abcdefghijklmnopqrstuvwxyz".split("");

function randomLetter(): string {
	return letters[Math.floor(Math.random() * letters.length)];
}

function scrambleOne(text: string): string {
	const index = Math.floor(Math.random() * text.length);
	return text.slice(0, index) + randomLetter() + text.slice(index + 1);
}

function unscrambleOne(text: string, endingText: string): string {
	for (let i = 0; i < text.length; i++) {
		if (text.charAt(i) !== endingText.charAt(i)) {
			return text.slice(0, i) + endingText.charAt(i) + text.slice(i + 1);
		}
	}
	return text;
}


export default function Scrambler({ text, setText, endingText, minIterations }: { text: string, setText: Dispatch<SetStateAction<string>>, endingText: string, minIterations: number | undefined }) {
	const [iteration, setIteration] = useState(0);

	useEffect(() => {
		if (text === endingText) {
			return;
		}

		const interval = setInterval(() => {
			if (text.length < endingText.length) {
				setText(text => scrambleOne(text));
				setText(text => text + randomLetter());
				setIteration(iteration => iteration + 1);
			} else if (minIterations && (iteration + text.length) < minIterations) {
				setText(text => scrambleOne(text));
				setIteration(iteration => iteration + 1);
			} else {
				setText(text => unscrambleOne(text, endingText));
			}
		}, 50);

		return () => clearInterval(interval);
	}, [text, iteration, endingText, minIterations, setText]);

	return (
		<>{text}</>
	);
}