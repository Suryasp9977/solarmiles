const PATHS = {
  sun: <><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" /></>,
  bolt: <path d="M13 2 4 14h7l-1 8 9-12h-7z" />,
  leaf: <><path d="M11 20A7 7 0 0 1 4 13c0-5 4-9 16-9 0 12-4 16-9 16z" /><path d="M4 20 14 10" /></>,
  home: <><path d="M3 11 12 3l9 8" /><path d="M5 10v10h14V10" /></>,
  users: <><circle cx="9" cy="8" r="3.5" /><path d="M2.5 20c.8-3.3 3.3-5 6.5-5s5.7 1.7 6.5 5" /><circle cx="17" cy="9" r="2.5" /><path d="M17 14.5c2.2.3 3.8 1.8 4.5 4.5" /></>,
  pin: <><path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21z" /><circle cx="12" cy="9.5" r="2.5" /></>,
  roof: <><path d="M3 12 12 4l9 8" /><path d="M5 10.5V20h14v-9.5" /></>,
  area: <><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18M9 3v18" /></>,
  building: <><rect x="4" y="3" width="16" height="18" rx="1" /><path d="M9 7h2M13 7h2M9 11h2M13 11h2M9 15h2M13 15h2" /></>,
  check: <path d="m5 12 4.5 4.5L19 7" />,
  phone: <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z" />,
  arrow: <><path d="M5 12h14M13 6l6 6-6 6" /></>,
  arrowLeft: <path d="M19 12H5M11 6l-6 6 6 6" />,
  pencil: <><path d="M12 20h9" /><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z" /></>,
  panel: <><rect x="3" y="5" width="18" height="12" rx="1" /><path d="M9 5v12M15 5v12M3 11h18M8 21h8M12 17v4" /></>,
  inverter: <><rect x="5" y="3" width="14" height="18" rx="2" /><circle cx="12" cy="9" r="2.5" /><path d="M9 15h6M9 18h3" /></>,
  mount: <><path d="M3 18h18" /><path d="M5 18l4-10h6l4 10" /><path d="M9 8l3 10 3-10" /></>,
  trend: <path d="M3 17l6-6 4 4 8-8M14 7h7v7" />,
  bars: <><path d="M4 20V11M10 20V5M16 20v-6M22 20H2" /></>,
  tower: <><path d="M12 3 6 21M12 3l6 18M8.5 9h7M7 15h10M12 3v18" /></>,
  flow: <><circle cx="5" cy="6" r="2" /><circle cx="19" cy="18" r="2" /><path d="M7 6h6a4 4 0 0 1 0 8h-2a4 4 0 0 0 0 8h6" /></>,
  award: <><circle cx="12" cy="9" r="6" /><path d="m9 14-2 7 5-3 5 3-2-7" /></>,
  care: <path d="M12 21s-8-4.5-8-10.5A4.5 4.5 0 0 1 12 7.6a4.5 4.5 0 0 1 8 2.9C20 16.5 12 21 12 21z" />,
  clock: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>,
  tag: <><path d="M3 12V4h8l10 10-8 8z" /><circle cx="7.5" cy="7.5" r="1.2" /></>,
  shield: <><path d="M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6z" /><path d="m9 12 2 2 4-4" /></>,
  cube: <><path d="M12 3 21 7.5v9L12 21l-9-4.5v-9z" /><path d="M3 7.5 12 12l9-4.5M12 12v9" /></>,
  expand: <path d="M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5" />,
  chevronDown: <path d="m6 9 6 6 6-6" />,
  chevronLeft: <path d="m15 6-6 6 6 6" />,
  chevronRight: <path d="m9 6 6 6-6 6" />,
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  close: <path d="M6 6l12 12M18 6 6 18" />,
  book: <><path d="M4 4h10a4 4 0 0 1 4 4v12H8a4 4 0 0 1-4-4z" /><path d="M4 16a4 4 0 0 1 4-4h10" /></>,
}

// Renders a named line icon. The ₹ glyph is drawn as text so it matches the mockup exactly.
export default function Icon({ name, size = 22, className = '', strokeWidth = 1.8 }) {
  if (name === 'rupee') {
    return (
      <svg viewBox="0 0 24 24" width={size} height={size} className={className} aria-hidden="true" focusable="false">
        <text x="12" y="18" textAnchor="middle" fontSize="19" fontWeight="700" fill="currentColor" fontFamily="Inter, system-ui, sans-serif">₹</text>
      </svg>
    )
  }
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {PATHS[name] ?? null}
    </svg>
  )
}
