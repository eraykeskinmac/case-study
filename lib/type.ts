import React from 'react';

export interface BadgeData {
  variant:
    | 'default'
    | 'secondary'
    | 'destructive'
    | 'outline'
    | 'linkedin'
    | 'mail'
    | 'company';
  text: string;
  icon?: React.ReactNode;
}

export interface ItemData {
  name: string;
  icon?: React.ReactNode;
  badges: BadgeData[];
}

export interface SearchCardProps {
  title: string;
  items: ItemData[];
  activeItemIndex: number;
}
