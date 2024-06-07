import Link from 'next/link';

import { PlusIcon } from '@radix-ui/react-icons';
import { AudioLines, FolderSearch, GanttChart } from 'lucide-react';

import { Button } from './ui/button';

const SearchFooter = () => (
  <div className="flex justify-end items-center gap-x-1">
    <Button variant="ghost" size="sm" className="flex gap-x-1.5 items-center">
      <GanttChart size={14} color="#6F6F6F" />
      <div className="text-sm text-[#6F6F6F]">Go to agents</div>
    </Button>
    <Button variant="ghost" size="sm" className="flex gap-x-1.5 items-center">
      <FolderSearch size={14} color="#6F6F6F" />
      <div className="text-sm text-[#6F6F6F]">Search new leads</div>
    </Button>
    <Button variant="ghost" size="sm" className="flex gap-x-1.5 items-center">
      <AudioLines size={14} color="#6F6F6F" />
      <div className="text-sm text-[#6F6F6F]">Analytics</div>
    </Button>
    <Button variant="custom" className="gap-x-1.5" asChild>
      <Link href="/campaign">
        <PlusIcon />
        New message
      </Link>
    </Button>
  </div>
);

export default SearchFooter;
