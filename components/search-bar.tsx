import { useRef } from 'react';

import { Search } from 'lucide-react';

import useKeyPress from '@/lib/useKeyPress';

import { Input } from './ui/input';

interface SearchBarProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({
  searchQuery,
  setSearchQuery,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useKeyPress('k', () => {
    inputRef.current?.focus();
  });

  return (
    <div className="relative flex-1 w-full">
      <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
      <Input
        ref={inputRef}
        type="search"
        placeholder="Search for anything..."
        className="w-full rounded-lg bg-background pl-8 pr-16"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <div className="absolute right-2.5 top-2.5 flex items-center space-x-1 text-xs text-[#6F6F6F]">
        <kbd className="">⌘</kbd>
        <kbd className="">K</kbd>
      </div>
    </div>
  );
};

export default SearchBar;
