import { useEffect, useState }  from 'react';
import { TERMINAL_TYPING }      from '../constants/animation';

const { charDelay, lineDelay, startDelay } = TERMINAL_TYPING;

// Types out each line's output one after another once `start` is true.
// Returns how many characters of each output are visible.
export function useTypedLines(lines, start, instant = false) {
    const [typed, setTyped] = useState(() => lines.map(() => 0));

    useEffect(() => {
        if (!start) return;
        if (instant) {
            setTyped(lines.map((l) => l.output.length));
            return;
        }
        let line = 0;
        let char = 0;
        let timer;
        const step = () => {
            if (line >= lines.length) return;
            char += 1;
            // capture the values now: React runs the updater later, after line/char may change
            const currentLine = line;
            const currentChar = char;
            setTyped((prev) => prev.map((n, i) => (i === currentLine ? currentChar : n)));
            if (char < lines[line].output.length) {
                timer = setTimeout(step, charDelay);
            } else {
                line += 1;
                char = 0;
                timer = setTimeout(step, lineDelay);
            }
        };
        timer = setTimeout(step, startDelay);
        return () => clearTimeout(timer);
    }, [lines, start, instant]);

    return typed;
}
