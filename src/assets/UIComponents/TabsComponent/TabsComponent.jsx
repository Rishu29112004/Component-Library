import React, { useState } from 'react'
import Tab1 from './Tab1'
import Tab3 from './Tab3'
import Tab2 from './Tab2'

const TabsComponent = () => {

    const [activeTab, setActiveTab] = useState("Mercedes")
    return (
        <div className='min-h-screen w-full flex items-center justify-center bg-gray-300'>
            <div className=' w-[500px] border'>
                <div className='h-15 border flex items-center justify-between'>
                    <button onClick={() => setActiveTab("Mercedes")} className={`font-mono border border-gray-500 text-2xl h-full flex items-center justify-center w-full ${activeTab==="Mercedes"?"bg-orange-500":"bg-orange-300"}`}>Mercedes</button>
                    <button onClick={() => setActiveTab("BMW Z")} className={`font-mono border border-gray-500 text-2xl h-full flex items-center justify-center w-full ${activeTab==="BMW Z"?"bg-orange-500":"bg-orange-300"}`}>BMW Z</button>
                    <button onClick={() => setActiveTab("Porsche 911")} className={`font-mono border border-gray-500 text-2xl h-full flex items-center justify-center w-full ${activeTab==="Porsche 911"?"bg-orange-500":"bg-orange-300"}`}>Porsche 911</button>
                </div>
                <div className='h-[500px] border-2 w-full'>
                    {activeTab === "Mercedes" && <Tab1 />}
                    {activeTab === "BMW Z" && <Tab2 />}
                    {activeTab === "Porsche 911" && <Tab3 />}
                </div>
            </div>
        </div>
    )
}

export default TabsComponent
