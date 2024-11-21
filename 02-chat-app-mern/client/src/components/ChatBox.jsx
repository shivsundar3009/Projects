import React from 'react'

function ChatBox() {
  return (
    <>
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

  <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-base-200">
    {mockMessages.map((message) => (
      <div
        key={message.id}
        className={`chat ${
          message.senderId === currentUser.id ? 'chat-end' : 'chat-start'
        }`}
      >
        <div
          className={`chat-bubble ${
            message.senderId === currentUser.id ? 'chat-bubble-primary' : ''
          }`}
        >
          {message.text}
        </div>
        <div className="chat-footer text-xs text-base-content/70 mt-1">
          {message.timestamp}
        </div>
      </div>
    ))}
  </div>
  </>
  )
}

export default ChatBox