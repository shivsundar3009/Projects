import React, { useState } from 'react';

const UserModal = ({ user, onClose }) => {
    const [name, setName] = useState(user.name);
    const [age, setAge] = useState(user.age);
    const [city, setCity] = useState(user.city);

    const handleUpdate = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`http://localhost:5000/api/users/updateUser/${user._id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, age, city }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || `Error updating user: ${response.status}`);
            }

            onClose();
        } catch (error) {
            console.error("Error updating user:", error.message);
            alert(error.message);
        }
    };

    const handleDelete = async () => {
        if (window.confirm("Are you sure you want to delete this user?")) {
            try {
                const response = await fetch(`http://localhost:5000/api/users/deleteUser/${user._id}`, {
                    method: 'DELETE',
                });

                if (!response.ok) {
                    const data = await response.json();
                    throw new Error(data.message || `Error deleting user: ${response.status}`);
                }

                onClose();
            } catch (error) {
                console.error("Error deleting user:", error.message);
                alert(error.message);
            }
        }
    };

    return (
        <div className="fixed inset-0 bg-gradient-to-r from-blue-400 to-purple-600 bg-opacity-90 flex justify-center items-center">
            <div className="relative bg-white rounded-lg shadow-lg w-1/2 max-w-lg p-8">
                {/* Close button */}
                <button
                    className="absolute top-3 right-3 text-gray-400 hover:text-gray-600"
                    onClick={onClose}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                <h2 className="text-2xl font-semibold text-gray-800 mb-6">Edit User</h2>

                {/* Form */}
                <form onSubmit={handleUpdate}>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium mb-2">Name:</label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium mb-2">Age:</label>
                        <input
                            type="number"
                            value={age}
                            onChange={(e) => setAge(e.target.value)}
                            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium mb-2">City:</label>
                        <input
                            type="text"
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white font-medium py-2 rounded-md hover:bg-blue-600 transition duration-200"
                    >
                        Update User
                    </button>
                </form>

                <button
                    onClick={handleDelete}
                    className="w-full bg-red-500 text-white font-medium py-2 rounded-md hover:bg-red-600 transition duration-200 mt-4"
                >
                    Delete User
                </button>
            </div>
        </div>
    );
};

export default UserModal;
