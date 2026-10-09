// Decorative background: faint tracks with glowing pulses travelling along
// them, like messages flowing through a queue.
const TRACKS = [
    { d: 'M-10 60 C 90 40, 180 90, 410 55',   duration: 6,   delay: 0   },
    { d: 'M-10 130 C 120 160, 260 100, 410 140', duration: 8,  delay: 1.5 },
    { d: 'M-10 210 C 100 190, 280 240, 410 205', duration: 7,  delay: 0.8 },
    { d: 'M-10 290 C 140 320, 240 260, 410 300', duration: 9,  delay: 2.2 },
    { d: 'M-10 365 C 110 345, 300 385, 410 360', duration: 6.5, delay: 3  },
    { d: 'M60 -10 C 80 120, 40 260, 90 410',   duration: 10,  delay: 1   },
    { d: 'M330 -10 C 300 140, 360 260, 320 410', duration: 11, delay: 4   },
];

const NODES = [[90, 52], [260, 108], [180, 222], [300, 280], [70, 330], [345, 150], [130, 140]];

function EventStream() {
    return (
        <svg className="event-stream" viewBox="0 0 400 400" preserveAspectRatio="none" aria-hidden="true">
            {TRACKS.map((t) => (
                <g key={t.d}>
                    <path className="track" d={t.d} vectorEffect="non-scaling-stroke" />
                    <path
                        className       = "pulse"
                        d               = {t.d}
                        pathLength      = "100"
                        vectorEffect    = "non-scaling-stroke"
                        style           = {{ animationDuration: `${t.duration}s`, animationDelay: `${t.delay}s` }}
                    />
                </g>
            ))}
            {NODES.map(([cx, cy], i) => (
                <circle key={i} className="node" cx={cx} cy={cy} r="2.2" style={{ animationDelay: `${i * 0.45}s` }} />
            ))}
        </svg>
    );
}

export default EventStream;
