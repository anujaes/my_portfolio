// Renders a string from the JSON, turning **text** into bold.
function RichText({ text }) {
    return text.split(/(\*\*[^*]+\*\*)/).map((part, i) =>
        part.startsWith('**') ? <b key={i}>{part.slice(2, -2)}</b> : part
    );
}

export default RichText;
