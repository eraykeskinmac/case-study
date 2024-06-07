'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

import { PlusIcon } from '@radix-ui/react-icons';
import { Search, Users } from 'lucide-react';

import { Dashboard } from '@/components/dashboard';
import SearchCard from '@/components/search-cards';
import SearchBar from '@/components/search-bar';
import { Button } from '@/components/ui/button';
import searchData from '@/lib/data';

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeItemIndex, setActiveItemIndex] = useState(0);

  const filteredData = searchData
    .map((section) => ({
      title: section.title,
      items: section.items.filter(
        (item) =>
          item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.badges.some((badge) =>
            badge.text.toLowerCase().includes(searchQuery.toLowerCase()),
          ),
      ),
    }))
    .filter((section) => section.items.length > 0);

  const totalItems = filteredData.reduce(
    (acc, section) => acc + section.items.length,
    0,
  );

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      setActiveItemIndex((prevIndex) =>
        prevIndex < totalItems - 1 ? prevIndex + 1 : prevIndex,
      );
    } else if (e.key === 'ArrowUp') {
      setActiveItemIndex((prevIndex) =>
        prevIndex > 0 ? prevIndex - 1 : prevIndex,
      );
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [totalItems]);

  const getActiveItem = () => {
    let currentIndex = activeItemIndex;
    for (const section of filteredData) {
      if (currentIndex < section.items.length) {
        return { sectionTitle: section.title, itemIndex: currentIndex };
      }
      currentIndex -= section.items.length;
    }
    return null;
  };

  const activeItem = getActiveItem();

  return (
    <Dashboard>
      <header className="flex h-10 items-center gap-4 py-2 border-b-[0.5px] bg-muted/40 px-4">
        <div className="flex w-full justify-between items-center">
          <div className="flex items-center gap-x-3">
            <Users
              color="#6F6F6F"
              className="p-1 bg-[#F3F3F3] rounded border-[0.5px]"
            />
            <div className="text-base">
              Product managers in tech located in Milano
            </div>
          </div>
          <div className="flex gap-x-3">
            <Button variant="ghost">Add People</Button>
            <Button variant="ghost">Edit search</Button>
            <Button variant="ghost">Share</Button>
            <Image src="/backup.svg" width={16} height={16} alt="" />
            <Image src="/points.svg" width={16} height={16} alt="" />
          </div>
        </div>
      </header>
      <main className="flex flex-1 flex-col gap-4 lg:gap-6 p-4 max-w-[763px] mx-auto">
        <div className="bg-[#F8F8F8] p-4 rounded-lg shadow-custom border-[0.5px]">
          <div className="flex flex-col w-full gap-y-2">
            <SearchBar
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
            />

            <div className="my-3 border-t rounded-lg border-[#E2E2E2]"></div>

            <div className="flex flex-col gap-y-3">
              {filteredData.map((section, cardIndex) => (
                <SearchCard
                  key={cardIndex}
                  title={section.title}
                  items={section.items}
                  activeItemIndex={
                    activeItem && activeItem.sectionTitle === section.title
                      ? activeItem.itemIndex
                      : -1
                  }
                />
              ))}
            </div>
            <div className="flex justify-end items-center gap-x-3">
              <div className="flex gap-x-1.5">
                <Image src="/align.svg" width={14} height={14} alt="" />
                <div className="text-sm text-[#6F6F6F]">Go to agents</div>
              </div>
              <div className="flex gap-x-1.5">
                <Image src="/folder.svg" width={14} height={14} alt="" />
                <div className="text-sm text-[#6F6F6F]">Search new leads</div>
              </div>
              <div className="flex gap-x-1.5">
                <Image src="/analytics.svg" width={14} height={14} alt="" />
                <div className="text-sm text-[#6F6F6F]">Analytics</div>
              </div>
              <Button variant="custom" className="gap-x-1.5">
                <PlusIcon />
                New message
              </Button>
            </div>
          </div>
        </div>
        {/* <DataTable /> */}
      </main>
    </Dashboard>
  );
}
