import React, { useState } from 'react';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import cn from 'classnames';

import './App.scss';

export const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const App = ({ onTabSelected }) => {
  const [currentTabId, setCurrentTabId] = useState(tabs[0].id);
  const [currentTabText, setCurrentTabText] = useState(tabs[0].content);

  const handleTabClick = tab => {
    if (currentTabId === tab.id) return;

    setCurrentTabId(tab.id);
    setCurrentTabText(tab.content);

    if (onTabSelected) {
      onTabSelected(tab.id);
    }
  };

  return (
    <div className="section">
      <h1 className="title">{`Selected tab is ${tabs.find(tab => tab.id === currentTabId)?.title}`}</h1>

      <div data-cy="TabsComponent">
        <div className="tabs is-boxed">
          <ul>
            {tabs.map(tab => (
              <li
                className={cn('', {
                  'is-active': currentTabId === tab.id,
                })}
                data-cy="Tab"
                key={tab.id}
              >
                <a
                  onClick={e => {
                    e.preventDefault();
                    handleTabClick(tab);
                  }}
                  href={`#${tab.id}`}
                  data-cy="TabLink"
                >
                  {tab.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="block" data-cy="TabContent">
          {currentTabText}
        </div>
      </div>
    </div>
  );
};
