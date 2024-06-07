'use client';

import * as React from 'react';
import { MailPlus } from 'lucide-react';
import { Textarea, TextareaRef } from '@/components/ui/textarea';

interface MessagesProps {
  messages: string[];
  currentMessage: string;
  handleTextareaChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  handleCustom: () => void;
  textareaRef: React.RefObject<TextareaRef>;
}

const CampaignMessages: React.FC<MessagesProps> = ({
  messages,
  currentMessage,
  handleTextareaChange,
  handleCustom,
  textareaRef,
}) => {
  return (
    <div className="pl-4">
      <div className="flex flex-col gap-y-2.5">
        <div className="flex items-center gap-x-1.5">
          <MailPlus size={12} color="#006ADC" />
          <div className="text-sm text-[#6F6F6F]">
            Example output for test lead
          </div>
        </div>
        <div className="flex justify-end bg-[#FFF] gap-y-1.5 p-3 rounded-lg border-[0.5px]">
          <div className="text-left text-sm">
            Dear Ville, As the Executive Distributor at EC21, I believe our new
            Sanlo Webshop solution could be a great fit to help drive more
            revenue and improve margins for your gaming business. Sanlo's
            plug-and-play webshop allows you to connect directly with players,
            boosting their lifetime value. And our suite of monetization tools,
            from payments to financing, can unlock new revenue streams. I'd
            welcome the chance to discuss how Sanlo could benefit EC21. Are you
            available for a quick call this week to explore the possibilities?
            Best regards, Mert Deveci GodmodeHQ
          </div>
        </div>
        {messages.map((message, index) => (
          <div
            key={index}
            className="flex justify-end bg-[#FFF] gap-y-1.5 p-3 rounded-lg border-[0.5px]"
          >
            <div className="text-left text-sm">{message}</div>
          </div>
        ))}
        <Textarea
          showButton={true}
          showAvatar={true}
          placeholder="Instruct your comments to the agent e.g. “Make it more casual”"
          value={currentMessage}
          onChange={handleTextareaChange}
          onKeyDown={(e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
              e.preventDefault();
              handleCustom();
            }
          }}
          ref={textareaRef}
        />
      </div>
    </div>
  );
};

export default CampaignMessages;
