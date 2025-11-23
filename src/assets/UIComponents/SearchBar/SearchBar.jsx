import React, { useState } from 'react'
import { students } from '../../../DataSet/DataSet'
// import Button from '../Button/Button'
const SearchBar = () => {

    const [searchInput, setSearchInput] = useState("")
    const [showSuggestion, setShowSuggestion] = useState([])

    const handleSearch = (e) => {
        const value = e.target.value
        setSearchInput(value)

        if(value.trim()===""){
            setShowSuggestion([])
            return
        }
        // filter logic
        const filtered = students.filter((stu) =>
            stu.name.toLowerCase().includes(value.toLowerCase())
        );

        setShowSuggestion(filtered);

    }


    return (
        <div className='min-h-screen w-full flex p-5'>
            <div className=' flex flex-col'>
                <div className='flex gap-3'>
                    <div>
                        <input
                            value={searchInput}
                            onChange={handleSearch}
                            className=' px-2 py-1 rounded-full border border-gray-500'
                            placeholder='search here...'
                        />
                    </div>

                    <div>
                        <button onClick={() => alert(searchInput)} className='font-mono py-1 text-white bg-blue-500 border px-2 rounded-md'>Click</button>
                    </div>
                </div>
                <div className='pl-5 border border-t-0 rounded-md'>
                    {showSuggestion.length > 0 && (
                        <ul>
                            {showSuggestion.map((s) => (
                                <li className='text-blue-500' key={s.id}>{s.name}</li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </div>
    )
}

export default SearchBar
