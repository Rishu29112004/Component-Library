import React from 'react'

const Modal = ({ data, onClose }) => {
    return (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center">
            <div className="bg-white p-5 rounded-lg shadow-lg w-80">
                <h2 className="text-xl font-bold mb-2">{data.title}</h2>
                <p className="text-gray-700 mb-4">{data.description}</p>
                <p className="text-gray-500">{data.solution}</p>

                <button
                    onClick={onClose}
                    className="mt-4 bg-red-500 px-4 py-2 rounded-md text-white"
                >
                    Close
                </button>
            </div>
        </div>
    )
}

export default Modal
