import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

function ChatBox() {
  const currentUser = useSelector((state) => state.User?.loggedInUser); // Logged-in user's details
  const selectedChatUser = useSelector((state) => state.User?.selectedChatUser); // Chat partner details
  const [conversation, setConversation] = useState([]); // Holds messages for the chat

  useEffect(() => {
    const getConversation = async () => {
      if (!selectedChatUser?._id) return; // Ensure a user is selected before fetching

      try {
        const res = await axios.post(
          `http://localhost:5000/api/conversation/getMessages/${selectedChatUser._id}`,
          {},
          {
            withCredentials: true, // Include cookies for authentication
          }
        );


        console.log(`Fetched conversation data:`, res.data.conversation.messages);
        setConversation(res.data.conversation.messages || []); // Set messages from the fetched conversation
      } catch (error) {
        console.error(`Error fetching conversation:`, error);
      }
    };

    getConversation();
  }, [selectedChatUser]);

  const sendMessage = async (messageText) => {
    if (!messageText.trim()) return; // Avoid sending empty messages

    try {
      const res = await axios.post(
        `http://localhost:5000/api/message/sendMessage/${selectedChatUser._id}`,
        { message: messageText },
        {
          withCredentials: true, // Include cookies for authentication
        }
      );

      console.log(`Message sent:`, res.data);
      // Add the sent message to the conversation
      setConversation((prev) => [...prev, res.data.message]);
    } catch (error) {
      console.error(`Error sending message:`, error);
    }
  };

  return (
    <div className="flex-1 flex flex-col bg-base-100">
      {selectedChatUser ? (
        <>
          {/* Chat Header */}
          <div className="p-4 border-b border-base-300 flex items-center gap-4 bg-base-100">
            {/* Avatar with Online/Offline Indicator */}
            <div
              className={`avatar ${selectedChatUser.status === "online" ? "online" : "offline"}`}
            >
              <div className="w-10 rounded-full">
                <img src={selectedChatUser.profilePic} alt={selectedChatUser.userName} />
              </div>
            </div>
            {/* Chat User Info */}
            <div>
              <h2 className="font-semibold">{selectedChatUser.userName}</h2>
              <p className="text-sm text-base-content/70">
                {selectedChatUser.status === "online" ? "Online" : "Offline"}
              </p>
              <p className="text-xs text-base-content/70">{selectedChatUser.email}</p>
            </div>
          </div>

          {/* Chat Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-base-200">
            {conversation.map((message) => (
              <div
                key={message._id}
                className={`chat ${
                  message.sendersID === currentUser._id ? "chat-end" : "chat-start"
                }`}
              >
                {/* Chat Bubble */}
                <div
                  className={`chat-bubble ${
                    message.sendersID === currentUser._id
                      ? "chat-bubble-primary"
                      : "chat-bubble-secondary"
                  }`}
                >
                  {message.message}
                </div>
                {/* Message Timestamp */}
                <div className="chat-footer text-xs text-base-content/70 mt-1">
                  {new Date(message.createdAt).toLocaleString()} {/* Format timestamp */}
                </div>
              </div>
            ))}
          </div>

          {/* Chat Input */}
          <div className="p-4 border-t border-base-300 bg-base-100">
            <div className="form-control">
              <div className="input-group">
                <input
                  type="text"
                  placeholder="Type a message..."
                  className="input input-bordered flex-grow"
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      sendMessage(e.target.value);
                      e.target.value = ""; // Clear the input after sending
                    }
                  }}
                />
                <button
                  className="btn btn-primary"
                  onClick={(e) => {
                    const input = e.target.previousSibling; // Get the input element
                    sendMessage(input.value);
                    input.value = ""; // Clear the input after sending
                  }}
                >
                  Send
                </button>
              </div>
            </div>
          </div>
        </>
      ) : (
        /* Welcome Screen */
        <div className="flex flex-col items-center justify-center h-full text-center">
          {/* Profile Image */}
          <img
            src={currentUser?.profilePic}
            alt={`${currentUser?.userName}'s profile`}
            className="w-32 h-32 rounded-full mb-4 object-cover shadow-lg"
          />
          {/* Welcome Message */}
          <h1 className="text-2xl font-bold mb-2">Welcome, {currentUser?.userName}!</h1>
          <p className="text-sm text-base-content/70">Select a chat to start a conversation</p>
        </div>
      )}
    </div>
  );
}

export default ChatBox;
