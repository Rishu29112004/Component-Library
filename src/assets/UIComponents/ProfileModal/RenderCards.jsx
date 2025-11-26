import React, { useState } from 'react'
import Modal from './Modal'

const RenderCards = ({ data }) => {
    const [selectedData, setSelectedData] = useState(null)

    const handleCLick = (data) => {
        setSelectedData(data)
    }

    const handleCLose = () => {
        setSelectedData(null)
    }
    return (    
            data.map((item, index) => (
                <div key={index} className='flex flex-col gap-2 bg-white shadow-md p-6'>
                    <p>{item.title}</p>
                    <p>{item.description}</p>
                    <p>{item.solution}</p>
                    <button onClick={()=>handleCLick(item)} className='bg-green-500 px-4 py-2 rounded-md text-white cursor-pointer'>click me</button>
                    {
                        selectedData && (
                            <Modal data={selectedData} onClose={handleCLose} />
                        )
                    }
                </div>
            ))  

    )
}

export default RenderCards
