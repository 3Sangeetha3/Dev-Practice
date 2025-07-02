import React, { useState } from 'react';
import './App.css';

// Sample tab data
const tabs = [
  { id: "home", label: "Home", content: "Welcome to the Home tab!" },
  { id: "profile", label: "Profile", content: "This is your Profile." },
  { id: "settings", label: "Settings", content: "Adjust your Settings here." },
];

function TabSwitcher() {
  const [activeTab, setActiveTab] = useState("home");

  return (
    <div className='tab-switcher'>
      <h1>Tab Switcher Example</h1>
      {/* Buttons */}
      <div className="tab-buttons">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={activeTab === tab.id ? "active" : ""}
            onClick={() => setActiveTab(tab.id)}
            data-testid={`tab-button-${tab.id}`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="tab-content" data-testid="tab-content">
        {/* TODO: Show content of the currently active tab */}
        {tabs.find((tab) => tab.id === activeTab).content}
      </div>
    </div>
  );
}

export default TabSwitcher;
