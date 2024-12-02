import React, { useState, useEffect } from "react";
import { Search } from "lucide-react";
import GetOtherUsers from "../customHooks/GetOtherUsers";

function UsersList() {
  const otherUsers = GetOtherUsers(); // Fetch users using custom hook
  const [searchValue, setSearchValue] = useState(""); // State for search input
  const [filteredUsers, setFilteredUsers] = useState([]); // State for filtered users
  const [selectedChat, setSelectedChat] = useState(null); // State for selected chat

  // Filter users based on search input
  useEffect(() => {
    if (otherUsers) {
      const filtered = otherUsers.filter((user) =>
        user.userName.toLowerCase().includes(searchValue.toLowerCase())
      );
      setFilteredUsers(filtered);
    }
  }, [searchValue, otherUsers]);

  if (!otherUsers) {
    return <p>Loading users...</p>;
  }

  return (
    <>
      {/* Search Bar */}
      <div className="p-4 border-b border-base-300">
        <div className="form-control">
          <div className="flex items-center gap-2">
            <input
              type="text"
              placeholder="Search users..."
              className="input input-bordered flex-grow"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
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
            key={user._id}
            onClick={() => setSelectedChat(user)}
            className={`flex items-center gap-4 p-4 hover:bg-base-200 cursor-pointer border-b border-base-200 ${
              selectedChat?._id === user._id ? "bg-base-200" : ""
            }`}
          >
            <div
              className={`avatar ${
                user.status === "online" ? "online" : "offline"
              }`}
            >
              <div className="w-12 rounded-full">
                <img src={user.profilePic} alt={user.userName} />
              </div>
            </div>
            <div className="flex-1">
              <h3 className="font-medium">{user.userName}</h3>
              <p className="text-sm text-base-content/70">
                {user.lastMessage || "No messages yet"}
              </p>
            </div>
            <div className="text-xs text-base-content/70">
              <p>{user.time || "Just now"}</p>
              {user.unread && user.unread > 0 && (
                <div className="badge badge-primary badge-sm">{user.unread}</div>
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default UsersList;
