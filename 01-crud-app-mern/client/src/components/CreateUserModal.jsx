import React, { useState } from 'react';

const CreateUserModal = ({ onClose }) => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [city, setCity] = useState('');

    const handleCreate = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:5000/api/users/createUser', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, age, city }),
            });

            if (!response.ok) {
                throw new Error(`Error creating user: ${response.status}`);
            }
            onClose();
        } catch (error) {
            console.error("Error creating user:", error);
        }
    };

    return (
        <div className="modal fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="modal-content bg-white rounded-lg shadow-md p-6">
                <span className="close cursor-pointer text-gray-500" onClick={onClose}>&times;</span>
                <h2 className="text-xl font-semibold mb-4">Create New User</h2>
                <form onSubmit={handleCreate}>
                    <div className="mb-4">
                        <label className="block text-gray-700">Name:</label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Age:</label>
                        <input
                            type="number"
                            value={age}
                            onChange={(e) => setAge(e.target.value)}
                            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">City:</label>
                        <input
                            type="text"
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                        />
                    </div>
                    <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
                        Create User
                    </button>
                </form>
            </div>
        </div>
    );
};

export default CreateUserModal;
