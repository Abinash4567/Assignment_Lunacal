'use client';

import { useState } from 'react';

export default function NavBar() {
    const [activeTab, setActiveTab] = useState('About Me');

    const tabs = [
        { name: 'About Me', id: 'about' },
        { name: 'Experiences', id: 'experiences' },
        { name: 'Recommended', id: 'recommended' },
    ];

    return (
            <div className="grid grid-flow-col justify-stretch bg-[#131313] p-2 rounded-2xl gap-x-4">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.name)}
                        className={`px-4 py-2 rounded-xl font-semibold transition basis-1/4
                                    ${activeTab === tab.name ? 'bg-[#28292e]' : 'bg-transparent'} 
                                    ${activeTab === tab.name ? 'text-white' : 'text-[#94999c]'}
                                    ${activeTab === tab.name ? 'shadow-[0_2px_30px_30px_rgba(0,0,0,0.5)]' : 'text-[#94999c]'}  
                                    hover:bg-gray-600 hover:text-white h-10`}
                    >
                        {tab.name}
                    </button>
                ))}
            </div>
    );
}
