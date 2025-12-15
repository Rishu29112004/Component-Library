
import React, { useState } from 'react'
import Home from './Home'
import Shop from './Shop'
import Profile from './Profile'
import Cart from './Cart'
import { ArrowLeft, ArrowRight } from 'lucide-react'

const MainTab = () => {

    const tabs=["home","shop","cart","profile"]
    const [activeTab, setActiveTab] = useState("home")

    const handleNext=()=>{
        const currentIndex=tabs.indexOf(activeTab)
        setActiveTab(tabs[(currentIndex+1) % tabs.length])
    }

     const handlePrev=()=>{
        const currentIndex=tabs.indexOf(activeTab)
        setActiveTab(tabs[(currentIndex-1 +tabs.length) % tabs.length])
    }
    return (
        <div className='min-h-screen bg-gray-700'>
            <div className='h-[68px] bg-gray-400 flex items-center justify-center gap-10'>
                <p onClick={() => setActiveTab("home")} className={`${activeTab == "home" ? "text-blue-800" : "text-black"} font-mono font-bold text-2xl cursor-pointer hover:text-blue-800 underline`}>Home</p>
                <p onClick={() => setActiveTab("shop")} className={`${activeTab == "shop" ? "text-blue-800" : "text-black"} font-mono font-bold text-2xl cursor-pointer hover:text-blue-800 underline`}>Shop</p>
                <p onClick={() => setActiveTab("cart")} className={`${activeTab == "cart" ? "text-blue-800" : "text-black"} font-mono font-bold text-2xl cursor-pointer hover:text-blue-800 underline`}>Cart</p>
                <p onClick={() => setActiveTab("profile")} className={`${activeTab == "profile" ? "text-blue-800" : "text-black"} font-mono font-bold text-2xl cursor-pointer hover:text-blue-800 underline`}>Profile</p>
            </div>
            <div className='flex items-center justify-around'>
                <button onClick={handlePrev}><ArrowLeft className='hover:text-blue-800 border h-7 w-7 rounded-full border-black' /></button>
                <div>
                    {activeTab === "home" && <Home />}
                    {activeTab === "shop" && <Shop />}
                    {activeTab === "cart" && <Cart />}
                    {activeTab === "profile" && <Profile />}
                </div>
                <button onClick={handleNext}><ArrowRight className='hover:text-blue-800 border h-7 w-7 rounded-full border-black' /></button>
            </div>
        </div>
    )
}

export default MainTab
