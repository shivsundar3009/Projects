import React, { useEffect, useState } from 'react';
import UserList from './components/UserList';
import UserModal from './components/UserModal';
import CreateUserModal from './components/CreateUserModal';

const App = () => {
    const [users, setUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);
    const [isUserModalOpen, setUserModalOpen] = useState(false);
    const [isCreateUserModalOpen, setCreateUserModalOpen] = useState(false);

    // Fetch users from the server
    const fetchUsers = async () => {
        try {
            const response = await fetch('http://localhost:5000/api/users/getUsers');
            const data = await response.json();
            setUsers(data);
        } catch (error) {
            console.error("Error fetching users:", error);
        }
    };

    // Fetch users on component mount
    useEffect(() => {
        fetchUsers();
    }, []);

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-semibold mb-4">User Management</h1>
            <button 
                onClick={() => setCreateUserModalOpen(true)} 
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 mb-4"
            >
                Create New User
            </button>

            <UserList 
                users={users} 
                onEdit={(user) => { 
                    setSelectedUser(user); 
                    setUserModalOpen(true); 
                }} 
            />

            {isUserModalOpen && (
                <UserModal 
                    user={selectedUser} 
                    onClose={() => { 
                        setUserModalOpen(false); 
                        setSelectedUser(null); 
                        fetchUsers(); 
                    }} 
                />
            )}

            {isCreateUserModalOpen && (
                <CreateUserModal 
                    onClose={() => { 
                        setCreateUserModalOpen(false); 
                        fetchUsers(); 
                    }} 
                />
            )}
        </div>
    );
};

export default App;
