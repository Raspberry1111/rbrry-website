"use client"

import { Dispatch, SetStateAction, useEffect, useState } from "react";

const letters = "abcdefghijklmnopqrstuvwxyz".split("");


function scrambleOne(text: string): string {
	const index = Math.floor(Math.random() * text.length);
	return text.slice(0, index) + letters[Math.floor(Math.random() * letters.length)] + text.slice(index + 1);
}

function unscrambleOne(text: string, endingText: string): string {
	for (let i = 0; i < text.length; i++) {
		if (text.charAt(i) != endingText.charAt(i)) {
			return text.slice(0, i) + endingText.charAt(i) + text.slice(i + 1);
		}
	}
	return text;
}


export default function Scrambler({ text, setText, endingText, minIterations }: { text: string, setText: Dispatch<SetStateAction<string>>, endingText: string, minIterations: number | undefined }) {
	const [iteration, setIteration] = useState(0);

	useEffect(() => {
		if (text == endingText) {
			return;
		}

		const interval = setInterval(() => {
			if (text.length < endingText.length) {
				setText(scrambleOne(text));
				setText(text + letters[Math.floor(Math.random() * letters.length)]);
				setIteration(iteration + 1);
			} else if (minIterations && (iteration + text.length) < minIterations) {
				setText(scrambleOne(text));
				setIteration(iteration + 1);
			} else {
				setText(unscrambleOne(text, endingText));
			}
		}, 50);

		return () => clearInterval(interval);
	}, [text, iteration])

	return (
		<>{text}</>
	);
}