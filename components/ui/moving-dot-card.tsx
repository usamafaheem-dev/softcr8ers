import React, { useState, useEffect } from 'react';

export default function DotCard({ target = 777000, duration = 2000 }: { target?: number; duration?: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = target;
    const range = end - start;
    if (range <= 0) return;
    const increment = Math.ceil(end / (duration / 50));
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        start = end;
        clearInterval(timer);
      }
      setCount(start);
    }, 50);
    return () => clearInterval(timer);
  }, [target, duration]);

  const display = count < 1000 ? count : `${Math.floor(count / 1000)}k`;

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center overflow-hidden">
      {/* The Moving Dot */}
      <div className="absolute w-[8px] h-[8px] bg-[#a855f7] rounded-full blur-[2px] z-20 animate-[moveDot_4s_linear_infinite]" />
      
      <div className="relative z-10 flex flex-col items-center">
        <div className="text-2xl md:text-5xl font-medium text-slate-950">{display}</div>
        <div className="text-[9px] md:text-[11px] font-black tracking-[0.3em] text-slate-400 uppercase mt-2">Views</div>
      </div>

      {/* Decorative Lines from the original component style */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-slate-100/50" />
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-slate-100/50" />
      <div className="absolute top-0 left-0 h-full w-[1px] bg-slate-100/50" />
      <div className="absolute top-0 right-0 h-full w-[1px] bg-slate-100/50" />
    </div>
  );
}
