import React from 'react';
import { ExternalLink } from 'lucide-react';

export const FloatingSiteButton: React.FC = () => {
  return (
    <aside
      aria-label="사이트 바로가기 플로팅 버튼"
      className="fixed bottom-5 right-4 sm:bottom-6 sm:right-6 z-40 flex items-center print:hidden"
    >
      <a
        href="https://reelkings.kr"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="사이트 바로가기 (새 창으로 reelkings.kr 열기)"
        className="group relative inline-flex items-center gap-2 px-4 py-3 sm:px-5 sm:py-3.5 rounded-full bg-gradient-to-r from-[#FFB82E] via-[#FFD269] to-[#FFA800] hover:from-[#FFA800] hover:via-[#FFDF85] hover:to-[#FF9E00] text-[#0A1612] font-black text-sm sm:text-base tracking-tight shadow-xl shadow-amber-950/30 hover:shadow-2xl hover:shadow-amber-500/40 border-2 border-amber-100/90 hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
      >
        {/* Glow ambient background ring */}
        <span
          className="absolute -inset-1 rounded-full bg-gradient-to-r from-amber-400 to-yellow-300 opacity-60 blur-xs group-hover:opacity-100 transition duration-500 -z-10 animate-pulse"
          aria-hidden="true"
        />

        {/* Live Indicator Beacon */}
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#103B2C] opacity-75" />
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#103B2C]" />
        </span>

        {/* Button Text */}
        <span className="font-black text-[#0A1612] drop-shadow-xs whitespace-nowrap">
          사이트 바로가기
        </span>

        {/* External Link Icon */}
        <ExternalLink
          className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-[#0A1612] stroke-[2.8] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0"
          aria-hidden="true"
        />
      </a>
    </aside>
  );
};
