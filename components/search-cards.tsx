'use client';

import * as React from 'react';
import { useEffect } from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { useRouter } from 'next/navigation';
import { SearchCardProps } from '@/lib/type';

const SearchCard: React.FC<SearchCardProps> = ({
  title,
  items,
  activeItemIndex,
}) => {
  const router = useRouter();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        e.key === 'Enter' &&
        activeItemIndex >= 0 &&
        activeItemIndex < items.length
      ) {
        router.push('/campaign');
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeItemIndex, items.length, router]);

  return (
    <div className="bg-[#FFF] gap-y-1.5 p-3 rounded-lg border-[0.5px] flex flex-col">
      <div className="text-xs text-[#6F6F6F]">{title}</div>
      <div className="flex flex-col gap-y-3">
        {items.map((item, index) => (
          <Link
            href="/campaign"
            key={index}
            className={`cursor-pointer flex gap-x-1 py-1.5 px-[5px] hover:bg-[#F3F3F3] hover:rounded-lg items-center group ${
              activeItemIndex === index ? 'bg-[#F3F3F3] rounded-lg' : ''
            }`}
          >
            {item.icon}
            <div className="flex gap-x-2.5">
              <div className="text-[#6F6F6F] text-base">{item.name}</div>
              {item.badges.map((badge, badgeIndex) => (
                <div key={badgeIndex}>
                  <Badge variant={badge.variant} icon={badge.icon}>
                    {badge.text}
                  </Badge>
                </div>
              ))}
            </div>
            <ArrowUpRight
              size={16}
              color="#6F6F6F"
              className={`ml-auto transition-opacity duration-300 ${
                activeItemIndex === index
                  ? 'opacity-100'
                  : 'opacity-0 group-hover:opacity-100'
              }`}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SearchCard;
