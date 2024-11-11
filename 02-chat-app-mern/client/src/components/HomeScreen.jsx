import React, { useState } from 'react';
import { Search , ArrowBigRight } from 'lucide-react';

const ChatHome = () => {
  const [selectedChat, setSelectedChat] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const profile = `https://unsplash.com/photos/a-man-standing-next-to-a-brown-horse-c_hMKkyVIo8`
  
  // Mock logged-in user
  const currentUser = {
    id: 1,
    name: "J Doe",
    avatar: `https://plus.unsplash.com/premium_photo-1727894728393-3869871407a4?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
    status: "online"
  };

  // Mock users data
  const users = [
    { id: 2, name: "Alice Smith", lastMessage: "Hey, how are you?", time: "12:30 PM", unread: 2, avatar: "https://images.unsplash.com/photo-1721332150382-d4114ee27eff?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", status: "online" },
    { id: 3, name: "Bob Johnson", lastMessage: "See you tomorrow!", time: "11:45 AM", unread: 0, avatar: "https://images.unsplash.com/photo-1730973915515-e79273d90b7c?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", status: "offline" },
    { id: 4, name: "Emma Davis", lastMessage: "Thanks for your help!", time: "Yesterday", unread: 1, avatar: "https://images.unsplash.com/photo-1730292423126-077dd3750a46?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", status: "online" },
    { id: 5, name: "Michael Wilson", lastMessage: "The meeting is at 3 PM", time: "Yesterday", unread: 0, avatar: "https://plus.unsplash.com/premium_photo-1676517029946-324a31862744?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", status: "offline" },
  ];

  // Mock chat messages
  const mockMessages = [
    { id: 1, senderId: 1, text: "Hi there!", timestamp: "12:01 PM" },
    { id: 2, senderId: 2, text: "Hello! How are you?", timestamp: "12:02 PM" },
    { id: 3, senderId: 1, text: "I'm doing great, thanks! How about you?", timestamp: "12:03 PM" },
    { id: 4, senderId: 2, text: "Pretty good! Just working on some projects.", timestamp: "12:04 PM" },
    { id: 5, senderId: 1, text: "That's awesome! What kind of projects?", timestamp: "12:05 PM" },
  ];

  // Filter users based on search query
  const filteredUsers = users.filter(user => 
    user.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex h-screen bg-base-200">
      {/* Left Panel - Users List */}
      <div className="w-1/3 border-r border-base-300 bg-base-100 flex flex-col ">
        {/* Header with user profile */}
        <div className="p-4 border-b border-base-300 bg-green-200">
          <div className="flex items-center gap-3">
            <div className="avatar online">
              <div className="w-10 rounded-full">
                <img src={currentUser.avatar} alt={currentUser.name} />
              </div>
            </div>
            <h2 className="font-semibold">{currentUser.name}</h2>
          </div>
        </div>

        {/* Search Bar */}
        

<div className="p-4 border-b border-base-300">
  <div className="form-control">
    <div className="flex items-center gap-2">
      <input
        type="text"
        placeholder="Search chats..."
        className="input input-bordered flex-grow"
        value={searchQuery}
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
          {filteredUsers.map(user => (
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
      </div>

      {/* Right Panel - Chat or Welcome Screen */}
      <div className="flex-1 flex flex-col bg-base-100">
        {selectedChat ? (
          // Chat View
          <>
            {/* Chat Header */}
            <div className="p-4 border-b border-base-300 flex items-center gap-4">
              <div className={`avatar ${selectedChat.status === 'online' ? 'online' : 'offline'}`}>
                <div className="w-10 rounded-full">
                  <img src={selectedChat.avatar} alt={selectedChat.name} />
                </div>
              </div>
              <div>
                <h2 className="font-semibold">{selectedChat.name}</h2>
                <p className="text-sm text-base-content/70">
                  {selectedChat.status === 'online' ? 'Online' : 'Offline'}
                </p>
              </div>
            </div>

            {/* Chat Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-base-200">
              {mockMessages.map(message => (
                <div
                  key={message.id}
                  className={`chat ${
                    message.senderId === currentUser.id ? 'chat-end' : 'chat-start'
                  }`}
                >
                  <div className={`chat-bubble ${
                    message.senderId === currentUser.id ? 'chat-bubble-primary' : ''
                  }`}>
                    {message.text}
                  </div>
                  <div className="chat-footer opacity-50 text-xs">
                    {message.timestamp}
                  </div>
                </div>
              ))}
            </div>

            {/* Message Input */}
            <div className="p-4 border-t border-base-300">
              <div className="input-group flex gap-3">
                <input
                  type="text"
                  placeholder="Type a message..."
                  className="input input-bordered w-full"
                />
                <button className="btn btn-primary">
                <ArrowBigRight />

                </button>
              </div>
            </div>
          </>
        ) : (
          // Welcome Screen
          <div className="flex-1 flex flex-col items-center justify-center p-8 bg-base-200">
            <div className="avatar">
              <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src={currentUser.avatar} alt={currentUser.name} />
              </div>
            </div>
            <h1 className="text-3xl font-bold mt-4 mb-2">Welcome, {currentUser.name}!</h1>
            <p className="text-base-content/70 text-center max-w-md">
              Select a chat from the left panel to start messaging. Stay connected with your friends and family!
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatHome;