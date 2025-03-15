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

export const App = () => {
  const [currentDivText, setCurrentTabText] = useState('Some text 1');
  const [currentTItle, setCurrentTitle] = useState('Tab 1');

  return (
    <div className="section">
      <h1 className="title">{`Selected tab is ${currentTItle}`}</h1>

      <div data-cy="TabsComponent">
        <div className="tabs is-boxed">
          <ul>
            {tabs.map(tab => {
              return (
                <li
                  className={cn('', {
                    'is-active': currentDivText === tab.content,
                  })}
                  data-cy="Tab"
                  key={tab.id}
                >
                  <a
                    onClick={e => {
                      e.preventDefault();
                      setCurrentTabText(tab.content);
                      setCurrentTitle(tab.title);
                    }}
                    href={tab.id}
                    data-cy="TabLink"
                  >
                    {tab.title}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="block" data-cy="TabContent">
          {currentDivText}
        </div>
      </div>
    </div>
  );
};
