import React, { useState } from 'react'
import { Search } from 'lucide-react'

function UsersList() {

   const [searchValue , setSearchValue] = useState(null)


  return (
    <>
    
     {/* Search Bar */}
     <div className="p-4 border-b border-base-300">
          <div className="form-control">
            <div className="flex items-center gap-2">
              <input
                type="text"
                placeholder="Search chats..."
                className="input input-bordered flex-grow"
                value={searchValue}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button className="btn btn-square flex items-center justify-center">
                <Search className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Users List */}
        <div className="overflow-y-auto flex-1">
          {filteredUsers.map((user) => (
            <div
              key={user.id}
              onClick={() => setSelectedChat(user)}
              className={`flex items-center gap-4 p-4 hover:bg-base-200 cursor-pointer border-b border-base-200 ${
                selectedChat?.id === user.id ? 'bg-base-200' : ''
              }`}
            >
              <div className={`avatar ${user.status === 'online' ? 'online' : 'offline'}`}>
                <div className="w-12 rounded-full">
                  <img src={user.avatar} alt={user.name} />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="font-medium">{user.name}</h3>
                <p className="text-sm text-base-content/70">{user.lastMessage}</p>
              </div>
              <div className="text-xs text-base-content/70">
                <p>{user.time}</p>
                {user.unread > 0 && (
                  <div className="badge badge-primary badge-sm">{user.unread}</div>
                )}
              </div>
            </div>
          ))}
        </div>
    
    
    </>
  )
}

export default UsersList