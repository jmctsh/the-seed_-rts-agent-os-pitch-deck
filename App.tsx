
import React, { useState, useEffect, useCallback } from 'react';
import { SlideData } from './types';
import SlideRenderer from './components/SlideRenderer';
import { slides } from './slides';
import { 
  ChevronLeft, 
  ChevronRight, 
  BookOpen,
  Maximize,
  Minimize
} from 'lucide-react';

const App: React.FC = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [direction, setDirection] = useState<'forward' | 'backward'>('forward');
  const [showNotes, setShowNotes] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [timer, setTimer] = useState(420); // 7 minutes in seconds
  const [isTimerActive, setIsTimerActive] = useState(false);

  const currentSlide = slides[currentSlideIndex];

  // Fullscreen toggle handler
  const toggleFullscreen = useCallback(() => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().then(() => {
        setIsFullscreen(true);
      }).catch(err => {
        console.error(`Error attempting to enable fullscreen: ${err.message}`);
      });
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().then(() => {
          setIsFullscreen(false);
        });
      }
    }
  }, []);

  // Listen for fullscreen change events (e.g. user presses Esc)
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  // Navigation handlers
  const nextSlide = useCallback(() => {
    setDirection('forward');
    setCurrentSlideIndex((prev) => Math.min(prev + 1, slides.length - 1));
  }, []);

  const prevSlide = useCallback(() => {
    setDirection('backward');
    setCurrentSlideIndex((prev) => Math.max(prev - 1, 0));
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  return (
    <div className="relative h-screen w-screen bg-[#050505] text-white flex overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-yellow-500/10 blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/10 blur-[120px]" />
      </div>

      {/* Sidebar for Notes */}
      {showNotes && (
        <div className="w-80 bg-zinc-900 border-r border-zinc-800 p-6 flex flex-col custom-scrollbar overflow-y-auto z-20">
          <h3 className="font-tech text-yellow-400 text-sm mb-4 flex items-center gap-2 sticky top-0 bg-zinc-900 py-2">
            <BookOpen size={16} /> SPEAKER NOTES
          </h3>
          <div className="space-y-4">
            {currentSlide.speakerNotes.map((note, i) => (
              <p key={i} className="text-xs text-zinc-300 leading-relaxed border-l border-zinc-700 pl-3">
                {note}
              </p>
            ))}
          </div>
        </div>
      )}

      {/* Main Slide Content */}
      <main className="flex-grow flex flex-col relative h-full overflow-hidden">
        {/* Fixed Slide Area */}
        <div className="flex-grow overflow-hidden relative">
          <SlideRenderer 
            key={currentSlide.id} 
            slide={currentSlide} 
            direction={direction}
            slideNumber={currentSlideIndex + 1}
            totalSlides={slides.length}
          />
        </div>

        {/* Footer Navigation */}
        <footer className="shrink-0 h-16 border-t border-zinc-800 flex items-center px-8 bg-zinc-900/80 backdrop-blur-md z-10 gap-8">
          <div className="flex-grow h-1 bg-zinc-800 rounded-full">
            <div 
              className="h-full bg-yellow-500 rounded-full transition-all duration-300" 
              style={{ width: `${((currentSlideIndex + 1) / slides.length) * 100}%` }}
            />
          </div>

          <div className="flex items-center gap-4 shrink-0">
            <button 
              onClick={toggleFullscreen}
              className="p-2 rounded-lg bg-transparent text-zinc-400 border border-zinc-700 hover:border-zinc-500 hover:text-zinc-200 transition-all"
              title={isFullscreen ? "Exit Fullscreen" : "Enter Fullscreen"}
            >
              {isFullscreen ? <Minimize size={18} /> : <Maximize size={18} />}
            </button>

            <button 
              onClick={() => setShowNotes(!showNotes)} 
              className={`p-2 rounded-lg border transition-all ${showNotes ? 'bg-yellow-500 text-black border-yellow-500' : 'bg-transparent text-zinc-400 border-zinc-700 hover:border-zinc-500'}`}
              title="Toggle Notes"
            >
              <BookOpen size={18} />
            </button>
            <div className="flex gap-2">
              <button 
                onClick={prevSlide} 
                disabled={currentSlideIndex === 0}
                className="p-2 bg-zinc-800 hover:bg-zinc-700 disabled:opacity-30 rounded-full border border-zinc-700"
              >
                <ChevronLeft size={20} />
              </button>
              <button 
                onClick={nextSlide} 
                disabled={currentSlideIndex === slides.length - 1}
                className="p-2 bg-yellow-500 text-black hover:bg-yellow-400 disabled:opacity-30 rounded-full border border-yellow-400 shadow-md glow-gold"
              >
                <ChevronRight size={20} />
              </button>
            </div>
            <span className="text-[10px] font-tech text-zinc-500 ml-2">
              {currentSlideIndex + 1} / {slides.length}
            </span>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default App;
