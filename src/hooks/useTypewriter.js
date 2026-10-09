import { useEffect, useState } from 'react';
import { TYPEWRITER }          from '../constants/animation';

const { startDelay, typeSpeed, deleteSpeed, pause } = TYPEWRITER;

// Cycles through `phrases`: types each one, pauses, erases it, moves on.
// With `instant`, just shows the first phrase (reduced motion).
export function useTypewriter(phrases, instant = false) {
    const [text, setText] = useState(instant ? phrases[0] : '');

    useEffect(() => {
        if (instant || phrases.length === 0) {
            setText(phrases[0] ?? '');
            return;
        }
        let index = 0;
        let length = 0;
        let deleting = false;
        let timer;

        const tick = () => {
            const phrase = phrases[index];
            length += deleting ? -1 : 1;
            setText(phrase.slice(0, length));

            if (!deleting && length === phrase.length) {
                deleting = true;
                timer = setTimeout(tick, pause);
            } else if (deleting && length === 0) {
                deleting = false;
                index = (index + 1) % phrases.length;
                timer = setTimeout(tick, typeSpeed);
            } else {
                timer = setTimeout(tick, deleting ? deleteSpeed : typeSpeed);
            }
        };

        timer = setTimeout(tick, startDelay);
        return () => clearTimeout(timer);
    }, [phrases, instant]);

    return text;
}
