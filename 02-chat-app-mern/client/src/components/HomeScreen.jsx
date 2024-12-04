import React, { useEffect, useState } from 'react';
import { Search, LogOut } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import LogoutButton from './LogoutButton';
import ChatBox from './ChatBox';
import UsersList from './UsersList';

const HomeScreen = () => {
  
  const selectedChatUser = useSelector((state)=> state.user?.selectedChatUser)
  
  const currentUser = useSelector((state) => state.User?.loggedInUser);

  return (
    <div className="flex h-screen bg-base-200">
      {/* Left Panel - Users List */}
      <div className="w-1/3 border-r border-base-300 bg-base-100 flex flex-col">
        {/* Header with user profile and logout button */}
        <div className="p-4 border-b border-base-300 bg-green-200 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="avatar online">
              <div className="w-10 rounded-full">
                <img src={currentUser.profilePic} />
              </div>
            </div>
            <h2 className="font-semibold">{currentUser.userName}</h2>
          </div>
       
             {/* logout button */}

             <LogoutButton/>
        </div>

        {/* userList */}

        <UsersList/>

        
      </div>

      {/* Right Panel - Chat or Welcome Screen */}
      <div className="flex-1 flex flex-col bg-base-100">
        {selectedChatUser ? (
          <>
            {/* Chat View */}
           <ChatBox/>
          </>
        ) : (
          /* Welcome Screen */
          <div className="flex flex-col items-center justify-center h-full text-center">
            {/* Profile Image */}
            <img 
              src={currentUser.profilePic} 
              alt={`${currentUser.userName}'s profile`} 
              className="w-32 h-32 rounded-full mb-4 object-cover shadow-lg" 
            />
        
            {/* Welcome Message */}
            <h1 className="text-2xl font-bold mb-2">
              Welcome, {currentUser.userName}!
            </h1>
            
            <p className="text-sm text-base-content/70">
              Select a chat to start a conversation
            </p>
          </div>
        )
        }
      </div>
    </div>
  );
};

export default HomeScreen;
