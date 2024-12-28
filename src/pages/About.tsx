import React, { useCallback, useEffect, useState } from 'react';
import AboutEducation from '../components/About-Education';
import AboutWork from '../components/About-Work';
import Footer from '../components/Footer';
import styles from '../css/About.module.scss'
import Tabs, { TabOption } from '../components/Tabs';
import { useLocation, useNavigate } from 'react-router-dom';


const tabItems: TabOption[] = [
  { id: 'education', label: 'Education' },
  { id: 'work', label: 'Professional Experiences' },
  { id: 'project', label: 'Projects' },
];

const About: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const urlTabParam = queryParams.get('tab');

  const [currentTab, setCurrentTab] = useState<string>(
    urlTabParam && tabItems.some((t) => t.id === urlTabParam)
      ? urlTabParam
      : tabItems[0].id
  );

  const handleTabChange = (newTabId: string) => {
    setCurrentTab(newTabId);
    const newParams = new URLSearchParams(location.search);
    newParams.set('tab', newTabId);
    navigate({
      pathname: location.pathname,
      search: `?${newParams.toString()}`,
    });
  };

  return (
    <div className={styles.aboutContainer}>
      <div className={styles.tabsContainer}>
        <Tabs 
          tabs={tabItems} 
          activeTab={currentTab} 
          onChange={handleTabChange} 
        />
      </div>
        {currentTab === 'education' && <AboutEducation />}
        {currentTab === 'work' && <AboutWork />}
        {currentTab === 'project' && <AboutWork />}
      <Footer />
    </div>
  );
};

export default About;
