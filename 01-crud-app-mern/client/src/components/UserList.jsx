import React, { useState, useEffect } from 'react';
import UserModal from './UserModal';

const UserList = ({ users }) => {
    const [selectedUser, setSelectedUser] = useState(null);

    const handleEdit = (user) => {
        setSelectedUser(user);
    };

    return (
        <div className="min-h-screen bg-gradient-to-r from-teal-400 to-blue-500 flex flex-col items-center p-8">
            <h1 className="text-3xl text-white font-bold mb-6">User List</h1>
            <div className="w-full max-w-4xl bg-white p-6 rounded-lg shadow-lg">
                <table className="w-full table-auto">
                    <thead>
                        <tr>
                            <th className="text-left py-2 text-gray-700">Name</th>
                            <th className="text-left py-2 text-gray-700">Age</th>
                            <th className="text-left py-2 text-gray-700">City</th>
                            <th className="text-left py-2 text-gray-700">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map(user => (
                            <tr key={user._id} className="border-t border-gray-200">
                                <td className="py-2">{user.name}</td>
                                <td className="py-2">{user.age}</td>
                                <td className="py-2">{user.city}</td>
                                <td className="py-2">
                                    <button
                                        className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 transition duration-200"
                                        onClick={() => handleEdit(user)}
                                    >
                                        Edit
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Render User Modal if selectedUser is not null */}
            {selectedUser && (
                <UserModal user={selectedUser} onClose={() => setSelectedUser(null)} />
            )}
        </div>
    );
};

export default UserList;
