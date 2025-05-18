
import React, { useState, useEffect } from 'react';
import { 
  ZoomIn, 
  ZoomOut, 
  Sun, 
  Moon, 
  Type, 
  MousePointer, 
  RotateCcw,
  Underline
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { toast } from '@/hooks/use-toast';

const AccessibilityWidget = () => {
  const [fontSize, setFontSize] = useState(100);
  const [highContrast, setHighContrast] = useState(false);
  const [cursor, setCursor] = useState(false);
  const [underlineLinks, setUnderlineLinks] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // Apply accessibility settings
  useEffect(() => {
    // Font size
    document.documentElement.style.fontSize = `${fontSize}%`;
    
    // High contrast
    if (highContrast) {
      document.documentElement.classList.add('high-contrast');
    } else {
      document.documentElement.classList.remove('high-contrast');
    }

    // Large cursor
    if (cursor) {
      document.body.classList.add('large-cursor');
    } else {
      document.body.classList.remove('large-cursor');
    }

    // Underline links
    if (underlineLinks) {
      document.body.classList.add('underline-links');
    } else {
      document.body.classList.remove('underline-links');
    }
  }, [fontSize, highContrast, cursor, underlineLinks]);

  // Reset all settings
  const resetSettings = () => {
    setFontSize(100);
    setHighContrast(false);
    setCursor(false);
    setUnderlineLinks(false);
    toast({
      title: "Settings Reset",
      description: "All accessibility settings have been reset to default.",
    });
  };

  // Increase font size
  const increaseFontSize = () => {
    if (fontSize < 200) {
      setFontSize(prevSize => prevSize + 10);
    }
  };

  // Decrease font size
  const decreaseFontSize = () => {
    if (fontSize > 70) {
      setFontSize(prevSize => prevSize - 10);
    }
  };

  return (
    <div className="relative">
      {/* Accessibility button */}
      <Button
        variant="outline"
        className="fixed bottom-6 right-6 z-50 rounded-full p-4 shadow-lg"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Accessibility Options"
        aria-expanded={isOpen}
        aria-controls="accessibility-panel"
      >
        <span className="sr-only">Accessibility Options</span>
        <span aria-hidden="true" className="text-primary text-xl">A</span>
      </Button>

      {/* Accessibility panel */}
      {isOpen && (
        <div 
          id="accessibility-panel"
          className="fixed bottom-24 right-6 z-50 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-5 w-[280px]"
          role="dialog"
          aria-label="Accessibility Controls"
        >
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold">Accessibility Options</h3>
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => setIsOpen(false)}
              aria-label="Close accessibility panel"
            >
              ✕
            </Button>
          </div>
          
          <Separator className="my-3" />
          
          <div className="space-y-4">
            {/* Text Size */}
            <div>
              <h4 className="text-sm font-medium mb-2">Text Size ({fontSize}%)</h4>
              <div className="flex gap-2">
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={decreaseFontSize}
                  disabled={fontSize <= 70}
                  aria-label="Decrease text size"
                >
                  <ZoomOut size={16} />
                </Button>
                <div className="flex-grow bg-gray-100 dark:bg-gray-700 rounded-md overflow-hidden">
                  <div 
                    className="bg-primary h-full" 
                    style={{ width: `${(fontSize - 70) / 1.3}%` }} 
                    aria-hidden="true"
                  />
                </div>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={increaseFontSize}
                  disabled={fontSize >= 200}
                  aria-label="Increase text size"
                >
                  <ZoomIn size={16} />
                </Button>
              </div>
            </div>
            
            {/* High Contrast */}
            <div>
              <Button 
                variant={highContrast ? "default" : "outline"} 
                className="w-full justify-start"
                onClick={() => setHighContrast(!highContrast)}
                aria-pressed={highContrast}
              >
                {highContrast ? <Moon size={16} /> : <Sun size={16} />}
                <span className="ml-2">High Contrast</span>
              </Button>
            </div>
            
            {/* Large Cursor */}
            <div>
              <Button 
                variant={cursor ? "default" : "outline"} 
                className="w-full justify-start"
                onClick={() => setCursor(!cursor)}
                aria-pressed={cursor}
              >
                <MousePointer size={16} />
                <span className="ml-2">Large Cursor</span>
              </Button>
            </div>
            
            {/* Underline Links */}
            <div>
              <Button 
                variant={underlineLinks ? "default" : "outline"} 
                className="w-full justify-start"
                onClick={() => setUnderlineLinks(!underlineLinks)}
                aria-pressed={underlineLinks}
              >
                <Underline size={16} />
                <span className="ml-2">Underline Links</span>
              </Button>
            </div>
            
            {/* Reset Button */}
            <div>
              <Button 
                variant="secondary" 
                className="w-full justify-start"
                onClick={resetSettings}
                aria-label="Reset all accessibility settings"
              >
                <RotateCcw size={16} />
                <span className="ml-2">Reset All Settings</span>
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AccessibilityWidget;
