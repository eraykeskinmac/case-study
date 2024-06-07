'use client';

import * as React from 'react';
import Image from 'next/image';

import { CornerDownLeft } from 'lucide-react';

import { cn } from '@/lib/utils';

import { Button } from './button';

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  showButton?: boolean;
  showAvatar?: boolean;
}

export interface TextareaRef {
  resetHeight: () => void;
}

const Textarea = React.forwardRef<TextareaRef, TextareaProps>(
  ({ className, showButton = false, showAvatar = false, ...props }, ref) => {
    const textareaRef = React.useRef<HTMLTextAreaElement>(null);

    const handleInput = () => {
      if (textareaRef.current) {
        textareaRef.current.style.height = 'auto';
        textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
      }
    };

    React.useEffect(() => {
      if (textareaRef.current) {
        handleInput();
      }
    }, []);

    React.useImperativeHandle(ref, () => ({
      resetHeight: () => {
        if (textareaRef.current) {
          textareaRef.current.style.height = 'auto';
        }
      },
    }));

    return (
      <div className="relative w-full flex items-start gap-x-2">
        {showAvatar && (
          <div className="pt-2">
            <Image
              src="/avatar2.jpeg"
              alt="Avatar"
              width={18}
              height={18}
              className="rounded-full"
            />
          </div>
        )}
        <div className="relative w-full">
          <textarea
            className={cn(
              'flex min-h-[114px] w-full rounded-md border border-input bg-white px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#006ADC] focus-visible:border-[#006ADC] disabled:cursor-not-allowed disabled:opacity-50 resize-none',
              className,
            )}
            ref={textareaRef}
            onInput={handleInput}
            {...props}
          />
          {showButton && (
            <Button
              variant="custom"
              size="icon"
              className="absolute right-2 bottom-2 p-0"
            >
              <CornerDownLeft size={14} color="#fff" />
            </Button>
          )}
        </div>
      </div>
    );
  },
);

Textarea.displayName = 'Textarea';

export { Textarea };
