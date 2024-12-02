import { useEffect, useState } from 'react';
import axios from 'axios';

function useGetOtherUsers(isLoggedIn) {
  const [otherUsers, setOtherUsers] = useState(null);

  useEffect(() => {
    if (isLoggedIn) {
      async function getUsers() {
        try {
          const Users = await axios.post(
            `http://localhost:5000/api/authRoutes/getOtherUsers`,
            {},
            { withCredentials: true }
          );

          setOtherUsers(Users?.data);
        } catch (error) {
          console.error(error);
        }
      }

      getUsers();
    }
  }, [isLoggedIn]); // Add isLoggedIn to the dependency array

  return otherUsers;
}

export default useGetOtherUsers;
