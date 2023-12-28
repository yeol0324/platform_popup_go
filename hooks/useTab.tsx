'use client';
import { useState } from 'react';
export type Tab = { tab: string; content?: string | JSX.Element | (() => JSX.Element); icon?: string };

export const useTab = (initialTab: number, allTabs: Tab[]) => {
  const [index, setIndex] = useState<number>(initialTab);

  //   if (!allTabs || !Array.isArray(allTabs)) return;
  return {
    currentIndex: index,
    changeTabIndex: setIndex,
    currentTab: allTabs[index],
  };
};
