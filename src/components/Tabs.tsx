import React, { useRef, useEffect, useState } from 'react';
import styles from '../css/Tabs.module.scss';

export interface TabOption {
  id: string;
  label: string;
}

interface TabsProps {
  tabs: TabOption[];
  activeTab: string;
  onChange: (newTabId: string) => void;
}

const Tabs: React.FC<TabsProps> = ({ tabs, activeTab, onChange }) => {
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const [highlight, setHighlight] = useState({ left: 0, width: 0 });

  useEffect(() => {
    const activeIndex = tabs.findIndex((t) => t.id === activeTab);
    if (activeIndex !== -1) {
      const btn = tabRefs.current[activeIndex];
      if (btn) {
        setHighlight({
          left: btn.offsetLeft,
          width: btn.clientWidth,
        });
      }
    }
  }, [activeTab, tabs]);

  return (
    <div className={styles.tabsContainer}>
      {tabs.map((tab, index) => (
        <button
          key={tab.id}
          ref={(el) => (tabRefs.current[index] = el)}
          className={
            activeTab === tab.id 
              ? `${styles.tabButton} ${styles.activeTab}`
              : styles.tabButton
          }
          onClick={() => onChange(tab.id)}
        >
          {tab.label}
        </button>
      ))}
      <div
        className={styles.highlightBar}
        style={{
          transform: `translateX(${highlight.left}px)`,
          width: `${highlight.width}px`,
        }}
      />
    </div>
  );
};

export default Tabs;
