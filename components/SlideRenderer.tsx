
import React from 'react';
import { SlideData } from '../types';

interface SlideRendererProps {
  slide: SlideData;
  direction: 'forward' | 'backward';
}

const SlideRenderer: React.FC<SlideRendererProps> = ({ slide, direction }) => {
  return (
    <div className={`w-full h-full flex flex-col items-center justify-center px-6 md:px-12 py-4 overflow-hidden ${direction === 'forward' ? 'slide-enter-forward' : 'slide-enter-backward'}`}>
      <div className="max-w-6xl w-full h-full flex flex-col justify-center">
        {/* Header Section - Compact */}
        <div className="mb-4 border-l-4 border-yellow-400 pl-4 shrink-0">
          <span className="text-yellow-400 font-tech text-[10px] tracking-widest uppercase opacity-80 mb-1 block">
            {slide.section} / Slide {slide.id}
          </span>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-tech font-bold text-white mb-1 uppercase leading-tight">
            {slide.title}
          </h1>
          {slide.subtitle && (
            <p className="text-xs md:text-sm text-gray-400 font-light italic">
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
