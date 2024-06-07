'use client';

import * as React from 'react';
import Image from 'next/image';

import {
  ArrowRight,
  ArrowUpRight,
  GanttChart,
  MailPlus,
  MapPin,
  Zap,
  Ellipsis,
} from 'lucide-react';

import { Dashboard } from '@/components/dashboard';
import { Button } from '@/components/ui/button';
import { Textarea, TextareaRef } from '@/components/ui/textarea';
import Description from '@/components/campaign-info';
import Messages from '@/components/campaign-messages';

export default function Campaign() {
  const [messages, setMessages] = React.useState<string[]>([]);
  const [currentMessage, setCurrentMessage] = React.useState('');

  const textareaRef = React.useRef<TextareaRef>(null);

  const handleTextareaChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    setCurrentMessage(event.target.value);
  };

  const handleCustom = () => {
    if (currentMessage.trim()) {
      setMessages((prevMessages) => [...prevMessages, currentMessage]);
      setCurrentMessage('');
      if (textareaRef.current) {
        textareaRef.current.resetHeight();
      }
    }
  };

  return (
    <Dashboard>
      <header className="flex h-10 items-center gap-4 py-2 border-b-[0.5px] px-4">
        <div className="flex w-full justify-between items-center">
          <div className="flex items-center gap-x-3">
            <div className="p-1 rounded bg-[#EDF6FF] border-[0.5px] border-[#B7D9F8]">
              <GanttChart size={12} color="#006ADC" />
            </div>
            <Zap color="#006ADC" size={12} />
            <div className="text-base">Account Executive Agent</div>
            <div className="text-base text-[#006ADC]">/ Teach the Agent</div>
          </div>
          <div className="flex gap-x-3 items-center">
            <Button variant="ghost" size="sm">
              <Ellipsis size={16} color="#6F6F6F" />
            </Button>{' '}
            <Button variant="custom" size="sm" className="gap-x-1.5">
              Continue
              <ArrowRight size={12} />
            </Button>
          </div>
        </div>
      </header>
      <main className="flex flex-1 flex-col gap-4 lg:gap-6 p-4">
        <div className="relative w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]">
          <Description />
          <Messages
            messages={messages}
            currentMessage={currentMessage}
            handleTextareaChange={handleTextareaChange}
            handleCustom={handleCustom}
            textareaRef={textareaRef}
          />
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-[1px] bg-gray-300"></div>
        </div>
      </main>
    </Dashboard>
  );
}
