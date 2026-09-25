const nodes = [
  { id: 'n1', x: 80, y: 90 },
  { id: 'n2', x: 180, y: 140 },
  { id: 'n3', x: 260, y: 70 },
  { id: 'n4', x: 355, y: 165 },
  { id: 'n5', x: 500, y: 85 },
  { id: 'n6', x: 620, y: 160 },
  { id: 'n7', x: 780, y: 95 },
  { id: 'n8', x: 890, y: 150 },
  { id: 'n9', x: 1030, y: 90 },
  { id: 'n10', x: 1100, y: 220 },
  { id: 'n11', x: 980, y: 300 },
  { id: 'n12', x: 730, y: 310 },
  { id: 'n13', x: 420, y: 310 },
  { id: 'n14', x: 180, y: 250 },
]

const links = [
  { id: 'l1', d: 'M 80 90 C 200 40, 300 40, 355 165' },
  { id: 'l2', d: 'M 180 140 C 300 120, 420 120, 500 85' },
  { id: 'l3', d: 'M 260 70 C 360 30, 480 25, 620 160' },
  { id: 'l4', d: 'M 355 165 C 470 195, 560 195, 620 160' },
  { id: 'l5', d: 'M 500 85 C 570 140, 680 140, 780 95' },
  { id: 'l6', d: 'M 620 160 C 710 220, 820 220, 890 150' },
  { id: 'l7', d: 'M 780 95 C 860 120, 930 150, 1030 90' },
  { id: 'l8', d: 'M 890 150 C 960 200, 1020 210, 1100 220' },
  { id: 'l9', d: 'M 1100 220 C 1010 240, 930 260, 980 300' },
  { id: 'l10', d: 'M 980 300 C 920 320, 820 330, 730 310' },
  { id: 'l11', d: 'M 730 310 C 620 330, 510 330, 420 310' },
  { id: 'l12', d: 'M 420 310 C 330 330, 220 310, 180 250' },
  { id: 'l13', d: 'M 180 250 C 150 205, 120 165, 80 90' },
  { id: 'l14', d: 'M 500 85 C 510 170, 510 220, 620 160' },
  { id: 'l15', d: 'M 620 160 C 570 230, 500 270, 420 310' },
  { id: 'l16', d: 'M 620 160 C 700 200, 840 215, 980 300' },
]

const packets = [
  { id: 'p1', path: 'l1', duration: 11, delay: 0 },
  { id: 'p2', path: 'l2', duration: 13, delay: 1.2 },
  { id: 'p3', path: 'l4', duration: 16, delay: 2.8 },
  { id: 'p4', path: 'l5', duration: 12, delay: 0.9 },
  { id: 'p5', path: 'l6', duration: 15, delay: 3.4 },
  { id: 'p6', path: 'l8', duration: 17, delay: 2.1 },
  { id: 'p7', path: 'l9', duration: 14, delay: 1.8 },
  { id: 'p8', path: 'l10', duration: 12, delay: 3 },
  { id: 'p9', path: 'l12', duration: 16, delay: 4.6 },
  { id: 'p10', path: 'l13', duration: 13, delay: 2.5 },
  { id: 'p11', path: 'l14', duration: 15, delay: 4.2 },
  { id: 'p12', path: 'l16', duration: 18, delay: 5.5 },
  { id: 'p13', path: 'l3', duration: 14, delay: 6.3 },
  { id: 'p14', path: 'l7', duration: 17, delay: 7.1 },
  { id: 'p15', path: 'l11', duration: 15, delay: 5.9 },
  { id: 'p16', path: 'l15', duration: 16, delay: 6.7 },
]

export default function DataFlowAnimation() {
  return (
    <div className="data-flow-animation" aria-hidden="true">
      <svg viewBox="0 0 1200 420" preserveAspectRatio="xMidYMid slice">
        <defs>
          <radialGradient id="data-flow-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
          </radialGradient>
        </defs>

        {links.map((link) => (
          <path
            key={link.id}
            className="data-flow-link"
            d={link.d}
            strokeWidth={1.15}
            vectorEffect="non-scaling-stroke"
          />
        ))}

        <g className="data-flow-nodes-wrap">
          {nodes.map((node) => (
            <g key={node.id}>
              <circle
                className="data-flow-node-glow"
                cx={node.x}
                cy={node.y}
                r={10}
                fill="url(#data-flow-glow)"
                opacity={0.18}
              />
              <circle className="data-flow-node" cx={node.x} cy={node.y} r={2.2} />
            </g>
          ))}
        </g>

        <g className="data-flow-packets">
          {packets.map((packet) => (
            <circle
              key={packet.id}
              className="data-flow-packet"
              r={packet.id.endsWith('1') || packet.id.endsWith('8') || packet.id.endsWith('6') ? 3.5 : 2.8}
            >
              <animateMotion
                dur={`${packet.duration}s`}
                begin={`${packet.delay}s`}
                repeatCount="indefinite"
                rotate="auto"
              >
                <mpath href={`#${packet.path}`} />
              </animateMotion>
            </circle>
          ))}
        </g>

        <path
          id="l1"
          d="M 80 90 C 200 40, 300 40, 355 165"
          className="data-flow-packet-path"
        />
        <path
          id="l3"
          d="M 260 70 C 360 30, 480 25, 620 160"
          className="data-flow-packet-path"
        />
        <path
          id="l2"
          d="M 180 140 C 300 120, 420 120, 500 85"
          className="data-flow-packet-path"
        />
        <path
          id="l4"
          d="M 355 165 C 470 195, 560 195, 620 160"
          className="data-flow-packet-path"
        />
        <path
          id="l5"
          d="M 500 85 C 570 140, 680 140, 780 95"
          className="data-flow-packet-path"
        />
        <path
          id="l6"
          d="M 620 160 C 710 220, 820 220, 890 150"
          className="data-flow-packet-path"
        />
        <path
          id="l7"
          d="M 780 95 C 860 120, 930 150, 1030 90"
          className="data-flow-packet-path"
        />
        <path
          id="l8"
          d="M 890 150 C 960 200, 1020 210, 1100 220"
          className="data-flow-packet-path"
        />
        <path
          id="l9"
          d="M 1100 220 C 1010 240, 930 260, 980 300"
          className="data-flow-packet-path"
        />
        <path
          id="l10"
          d="M 980 300 C 920 320, 820 330, 730 310"
          className="data-flow-packet-path"
        />
        <path
          id="l11"
          d="M 730 310 C 620 330, 510 330, 420 310"
          className="data-flow-packet-path"
        />
        <path
          id="l12"
          d="M 420 310 C 330 330, 220 310, 180 250"
          className="data-flow-packet-path"
        />
        <path
          id="l13"
          d="M 180 250 C 150 205, 120 165, 80 90"
          className="data-flow-packet-path"
        />
        <path
          id="l14"
          d="M 500 85 C 510 170, 510 220, 620 160"
          className="data-flow-packet-path"
        />
        <path
          id="l15"
          d="M 620 160 C 570 230, 500 270, 420 310"
          className="data-flow-packet-path"
        />
        <path
          id="l16"
          d="M 620 160 C 700 200, 840 215, 980 300"
          className="data-flow-packet-path"
        />
      </svg>
    </div>
  )
}
