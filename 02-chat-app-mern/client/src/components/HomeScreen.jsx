import React, { useEffect, useState } from 'react';
import { Search, LogOut } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import LogoutButton from './LogoutButton';
import ChatBox from './ChatBox';
import UsersList from './UsersList';

const HomeScreen = () => {
  
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
         < ChatBox />
      </div>
    </div>
  );
};

export default HomeScreen;
