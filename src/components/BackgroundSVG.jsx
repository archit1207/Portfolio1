const BackgroundSVG = () => (
  <svg
    className="absolute inset-0 -z-20 h-full w-full"
    viewBox="0 0 1440 900"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="warm-line" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#EA580C" stopOpacity="0" />
        <stop offset="50%" stopColor="#EA580C" stopOpacity="0.08" />
        <stop offset="100%" stopColor="#EA580C" stopOpacity="0" />
      </linearGradient>
    </defs>
    
    {/* Clean, horizontal architecture lines */}
    <path d="M-15 200H1440" stroke="url(#warm-line)" strokeWidth="1" />
    <path d="M-15 450H1440" stroke="url(#warm-line)" strokeWidth="0.5" />
    <path d="M-15 700H1440" stroke="url(#warm-line)" strokeWidth="1" />
    
    {/* Soft focus ring */}
    <circle cx="1200" cy="100" r="400" stroke="#EF4444" strokeOpacity="0.03" />
  </svg>
);

export default BackgroundSVG;