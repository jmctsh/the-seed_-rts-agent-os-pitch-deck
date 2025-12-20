
import React from 'react';
import { SlideData } from '../types';

interface SlideRendererProps {
  slide: SlideData;
  direction: 'forward' | 'backward';
  slideNumber: number;
  totalSlides: number;
}

const SlideRenderer: React.FC<SlideRendererProps> = ({ slide, direction, slideNumber, totalSlides }) => {
  const isBiggerHeader = slide.id === 6 || slide.id === 8 || slide.id === 11;

  return (
    <div className={`w-full h-full flex flex-col items-center justify-center px-6 md:px-12 py-4 overflow-hidden ${direction === 'forward' ? 'slide-enter-forward' : 'slide-enter-backward'}`}>
      <div className="max-w-6xl w-full h-full flex flex-col justify-center">
        {/* Header Section - Compact */}
        <div className="mb-4 border-l-4 border-yellow-400 pl-4 shrink-0">
          <span className="text-yellow-400 font-tech text-[10px] tracking-widest uppercase opacity-80 mb-1 block">
            {slide.section} / {slideNumber}/{totalSlides}
          </span>
          <h1 className={`${isBiggerHeader ? 'text-3xl md:text-4xl lg:text-5xl' : 'text-2xl md:text-3xl lg:text-4xl'} font-tech font-bold text-white mb-1 uppercase leading-tight`}>
            {slide.title}
          </h1>
          {slide.subtitle && (
            <p className={`${isBiggerHeader ? 'text-sm md:text-base text-zinc-300' : 'text-xs md:text-sm text-gray-400'} font-light italic`}>
              {slide.subtitle}
            </p>
          )}
        </div>

        {/* Content Section */}
        <div className="flex-grow overflow-hidden flex flex-col justify-center">
          {slide.content}
        </div>
      </div>
    </div>
  );
};

export default SlideRenderer;
