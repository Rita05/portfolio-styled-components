import React, { useState } from 'react';
import { NavContent, NavTab, NavTabItem, NavTabPanel, NavTabsContainer } from './NavTabs.styled';
import { tabs } from './NavTabsData';
import { Experience, ExperienceContentProps } from './ExperienceTab';
import { Education, EducationContentProps } from './EducationTab';
import { Button } from '../../../../components/Button';
import { theme } from '../../../../styles/Theme';

export interface Tab<T> {
  id: string;
  name: string;
  content: T[];
}

const NavTabs = () => {
  const [activeTab, setActiveTab] = useState('1');
  const [showMore, setShowMore] = useState(false);

  const renderNavContent = (tab: Tab<any>) => {
    switch (tab.name) {
      case 'Experience':
        return <Experience content={tab.content as ExperienceContentProps[]} />;
      case 'Education':
        return <Education content={tab.content as EducationContentProps[]} />;
      default:
        return tab.content;
    }
  }

  const activeTabContent = tabs.find(tab => tab.id === activeTab)?.content || [];

  return (
    <NavTabsContainer>
      <NavTab>
        {tabs.map(tab => (
          <NavTabItem
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            isActive={activeTab === tab.id}
          >
            {tab.name}
          </NavTabItem>
        ))}
      </NavTab>
      <NavTabPanel>
        {tabs.map(tab => (
          activeTab === tab.id && (
            <NavContent
              key={tab.id}
              isShowMore={showMore}
            >
              {renderNavContent(tab)}
            </NavContent>
          )
        ))}
      </NavTabPanel>
      {activeTabContent.length > 3 &&
        <Button
          bgColor={`${theme.colors.primary}`}
          borderRadius={'18px'}
          onClick={() => setShowMore(prev => !prev)}
        >
          {showMore ? 'Hide' : 'Show more'}
        </Button>
      }
    </NavTabsContainer>
  )
}

export default NavTabs;
