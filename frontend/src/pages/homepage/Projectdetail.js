import React, { useState } from 'react'
import Navbar from '../../compnents/Navbar'
import { Avatar, Divider } from '@mui/material';
import Overview from '../../compnents/Overview';
import Taskinproject from '../../compnents/Taskinproject';
import Sidebars from '../../compnents/Sidebars';
import { useParams } from 'react-router-dom';
// import Sidebars from '../../compnents/Sidebars';
const Projectdetail = () => {
  const { projectId } = useParams();

  // Your existing data and state setup
  const totalMembers = [
    'url_to_member_1_avatar',
    'url_to_member_2_avatar',
    'url_to_member_3_avatar',
  ];

  const getAvatarColor = (index) => {
    const colors = ['#3498db', '#e74c3c', '#2ecc71', '#f39c12'];
    return colors[index % colors.length];
  };

  const [activeTab, setActiveTab] = useState('overview');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="flex flex-col h-screen">
      <Navbar pageTitle={`Project ${projectId}`} />
      <div className="flex flex-1 overflow-hidden">
        <Sidebars />
        <div className="flex-1 flex flex-col overflow-hidden p-4">
          <div className="flex justify-between items-center mb-4">
            <div className="font-semibold font-serif text-xl">Project-Name</div>
            <div className="flex items-center">
              {totalMembers.map((member, index) => (
                <Avatar
                  key={index}
                  src={member}
                  alt={`Member ${index + 1}`}
                  sx={{
                    ml: index > 0 ? '-12px' : '0',
                    zIndex: index + 1,
                    position: 'relative',
                    backgroundColor: getAvatarColor(index),
                    border: '2px solid white',
                  }}
                />
              ))}
            </div>
          </div>
          <div className="flex mb-4">
            {['overview', 'task', 'setting'].map((tab) => (
              <div
                key={tab}
                className={`mr-4 cursor-pointer ${
                  activeTab === tab ? 'text-blue-500 font-semibold' : ''
                }`}
                onClick={() => handleTabChange(tab)}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </div>
            ))}
          </div>
          <Divider className="mb-4" />
          <div className="flex-1 overflow-y-auto">
            {activeTab === 'overview' && <Overview />}
            {activeTab === 'task' && <Taskinproject />}
            {activeTab === 'setting' && <div>Setting Content</div>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projectdetail;