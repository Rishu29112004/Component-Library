import React, { useState } from "react";
import DemoUi from "./DemoUi";
import Button from "../Button/Button";

const PopupModal = () => {
    const [showModal, setShowModal] = useState(false);

    return (
        <div className="min-h-screen w-full bg-green-200 flex items-center justify-center">
            <div className="flex flex-col gap-3 items-center justify-center">
                <p className="font-mono text-2xl font-bold">Click to open modal</p>
                <Button
                    onClick={() => setShowModal(true)}
                    className="bg-blue-500 text-white font-bold rounded-md"
                    buttonName="Open Modal"
                />
            </div>

            {/* Modal Section */}
            {showModal && (
                <div className="fixed inset-0 bg-black/75 bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white p-6 rounded-lg shadow-lg relative">
                        {/* Close Button */}
                        <button
                            onClick={() => setShowModal(false)}
                            className="absolute top-1 right-1 font-bold"
                        >
                            ✖
                        </button>

                        <DemoUi />
                    </div>
                </div>
            )}
        </div>
    );
};

export default PopupModal;
